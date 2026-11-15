/**
 * Star counts fetched from the GitHub API at build time.
 * Set GITHUB_TOKEN (done automatically in GitHub Actions) to avoid the
 * 60 requests/hour unauthenticated limit. On any failure the caller's
 * fallback value is used, so a build never fails because of the API.
 */
const cache = new Map<string, Promise<number | undefined>>();

/** "https://github.com/owner/repo" -> "owner/repo" */
export function repoFromUrl(url: string): string | undefined {
  const m = url.match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+)/);
  return m?.[1];
}

export function fetchStars(repo: string): Promise<number | undefined> {
  let p = cache.get(repo);
  if (!p) {
    p = (async () => {
      const token = process.env.GITHUB_TOKEN;
      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "skoruba.com-build",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) {
          console.warn(`[github] ${repo}: HTTP ${res.status}, using fallback star count`);
          return undefined;
        }
        const data = (await res.json()) as { stargazers_count?: number };
        return typeof data.stargazers_count === "number" ? data.stargazers_count : undefined;
      } catch (e) {
        console.warn(`[github] ${repo}: ${(e as Error).message}, using fallback star count`);
        return undefined;
      }
    })();
    cache.set(repo, p);
  }
  return p;
}
