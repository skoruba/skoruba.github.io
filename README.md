# skoruba.com

Personal site and blog of Jan Škoruba, Identity Engineer: intro, open source projects, articles, contact.

Built with [Astro](https://astro.build), React components rendered at build time, TypeScript and Tailwind CSS. Every page is static HTML; the only JavaScript is a small script for the theme toggle, card highlight and video player. The site does not use analytics. A restrictive CSP is supplied as HTML metadata (see `src/layouts/BaseLayout.astro`); use response-header policies when deploying behind a CDN or proxy.

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321 – drafts are visible here
```

## Writing a post

1. Create `src/content/blog/<url-slug>.md`. Use `.mdx` only if you need components such as `<YouTube />` inside the text – Prettier skips `.mdx` files (see `.prettierignore`) because it breaks MDX syntax. The file name becomes the URL: `/blog/<url-slug>/`.
2. Start with frontmatter:

   ```yaml
   ---
   title: "Post title"
   description: "One or two sentences for cards, search results and link previews."
   date: 2026-11-10
   youtube: "VIDEO_ID"     # optional – 11-character ID from watch?v=…, shown under the title
   tags: [Duende IdentityServer, Security]
   cover: ./images/cover.png  # optional – link preview image, otherwise the YouTube thumbnail
   draft: true             # visible only in `npm run dev`
   ---
   ```

3. Write Markdown below it. Code blocks are highlighted (` ```csharp `, ` ```json `…). Images can sit next to the post and be referenced relatively. In `.mdx` you can place more videos in the text with `<YouTube id="VIDEO_ID" title="…" />`.
4. Set `draft: false` and push to `master`. The post appears on `/blog/`, in *Latest articles* on the home page, in `/rss.xml` and in the sitemap.

The frontmatter is validated at build time (`src/content.config.ts`), so a typo fails the build instead of breaking the page.

Videos use a click-to-play embed: the thumbnail is downloaded at build time and served from skoruba.com, and the `youtube-nocookie.com` player is loaded only after the visitor presses play.

## YouTube thumbnail

With `npm run dev` running, open `http://localhost:4321/thumbnail/<slug>/` (add `?theme=dark` for the dark variant). The title is split at the first `:` into headline and subtitle; override with `thumbnail: { headline, subtitle }` in the frontmatter.

```bash
npm run thumbnail -- <slug> [--dark]   # saves thumbnails/<slug>.jpg (2560×1440, crisp on YouTube)
```

The thumbnail page exists only in dev and is never deployed.

## Build and deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch.

Manual alternative:

```bash
npm run build     # type check + output in dist/
npm run preview   # serve the production build locally
npm run deploy    # publishes dist/ to GitHub Pages with CNAME skoruba.com
```

## License

MIT © Jan Škoruba
