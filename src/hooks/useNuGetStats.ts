import { useState, useEffect } from "react";

interface NuGetStats {
  totalDownloads: number;
  loading: boolean;
  error: string | null;
}

export const useNuGetStats = (username: string): NuGetStats => {
  const [totalDownloads, setTotalDownloads] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNuGetStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // NuGet API endpoint for searching packages by owner
        const response = await fetch(
          `https://azuresearch-usnc.nuget.org/query?q=owner:${username}&take=1000`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch NuGet stats");
        }

        const data = await response.json();

        // Sum up all downloads from all packages
        const total = data.data.reduce(
          (sum: number, pkg: any) => sum + (pkg.totalDownloads || 0),
          0
        );

        setTotalDownloads(total);
      } catch (err) {
        console.error("Error fetching NuGet stats:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        // Fallback to default value
        setTotalDownloads(7000000);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchNuGetStats();
    }
  }, [username]);

  return { totalDownloads, loading, error };
};
