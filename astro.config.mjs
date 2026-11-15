import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://skoruba.com",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [react(), mdx(), sitemap()],
  image: {
    // YouTube thumbnails are downloaded at build time and served from skoruba.com,
    // so the CSP can keep img-src 'self'.
    domains: ["i.ytimg.com"],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: false,
    },
  },
  devToolbar: {
    enabled: false,
  },
});
