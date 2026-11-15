const cache = new Map<string, Promise<string>>();

/**
 * Best available thumbnail for a video. maxresdefault does not exist for every
 * upload, so fall back to hqdefault (always present). Runs at build time only.
 */
export function youtubeThumbnail(id: string): Promise<string> {
  let url = cache.get(id);
  if (!url) {
    url = (async () => {
      const maxres = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
      try {
        const res = await fetch(maxres, { method: "HEAD" });
        if (res.ok) return maxres;
      } catch {
        /* offline or blocked – fall through */
      }
      return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    })();
    cache.set(id, url);
  }
  return url;
}

export const youtubeWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
