import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Every .md / .mdx file in src/content/blog becomes a post.
  // The file name is the URL: my-post.mdx -> /blog/my-post/
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences. Used on cards, in search results and link previews. */
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      /** YouTube video ID (the part after watch?v=). Shown under the title. */
      youtube: z
        .string()
        .regex(/^[A-Za-z0-9_-]{11}$/, "Use the 11-character video ID, not the full URL")
        .optional(),
      tags: z.array(z.string()).default([]),
      /** Optional image for link previews. Falls back to the YouTube thumbnail. */
      cover: image().optional(),
      /**
       * Optional text for the YouTube thumbnail (/thumbnail/<slug>/ in dev).
       * By default the title is split at the first ":" into headline + subtitle.
       */
      thumbnail: z
        .object({
          headline: z.string().optional(),
          subtitle: z.string().optional(),
          /** Product next to the logo, e.g. "Skoruba Admin UI" → SKORUBA | Admin UI. */
          badge: z.string().optional(),
          /** id_token-style lint card under the subtitle. */
          card: z.enum(["summary", "config"]).optional(),
        })
        .optional(),
      /** Drafts are visible in `npm run dev` only and are never built for production. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
