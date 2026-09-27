import { useEffect, useState } from "react";

/** Fetches the current GitHub follower count; null until loaded or on failure. */
export const useGitHubFollowers = (user: string): number | null => {
  const [followers, setFollowers] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (!response.ok) throw new Error(`GitHub API ${response.status}`);

        const profile: { followers: number } = await response.json();
        if (!cancelled) setFollowers(profile.followers);
      } catch {
        /* The button stays usable without the count. */
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  return followers;
};
