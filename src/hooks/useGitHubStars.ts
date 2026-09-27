import { useEffect, useState } from "react";

type StarMap = Record<string, number>;

/** Fetches current GitHub star counts, with static project data as fallback. */
export const useGitHubStars = (owner: string, repos: string[]): StarMap => {
  const [stars, setStars] = useState<StarMap>({});
  const repoKey = repos.join(",");

  useEffect(() => {
    let cancelled = false;
    const wanted = new Set(repos);

    const load = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${owner}/repos?per_page=100&type=owner`
        );
        if (!response.ok) throw new Error(`GitHub API ${response.status}`);

        const repositories: { name: string; stargazers_count: number }[] =
          await response.json();
        const nextStars: StarMap = {};
        for (const repository of repositories) {
          if (wanted.has(repository.name)) {
            nextStars[repository.name] = repository.stargazers_count;
          }
        }
        if (!cancelled) setStars(nextStars);
      } catch {
        /* Static values in projects.json remain visible. */
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [owner, repoKey]);

  return stars;
};
