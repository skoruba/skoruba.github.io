/**
 * Comments and reactions via giscus (https://giscus.app), stored as GitHub Discussions.
 *
 * Setup (once):
 *  1. Repo Settings → General → Features → enable "Discussions".
 *  2. Install the giscus app for this repo: https://github.com/apps/giscus
 *  3. Create a Discussions category for comments (type "Announcement", so only
 *     giscus/maintainers can open new threads), e.g. "Blog comments".
 *  4. Fill in `categoryId` below – https://giscus.app shows it after you enter
 *     the repo and pick the category.
 *
 * While `categoryId` is empty, the comments section is not rendered.
 */
export const giscus = {
  repo: "skoruba/skoruba.github.io",
  repoId: "MDEwOlJlcG9zaXRvcnkyMTIwNjY0MTc=",
  category: "Announcements",
  categoryId: "DIC_kwDODKPgcc4DKgiA",
} as const;

export const giscusEnabled = Boolean(giscus.categoryId);
