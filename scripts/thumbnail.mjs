#!/usr/bin/env node
/**
 * Saves the YouTube thumbnail of a post.
 *
 *   npm run dev                                       (in another terminal)
 *   npm run thumbnail -- <slug> [--dark] [--1x] [--png]
 *
 * Renders at 2× (2560×1440) so text stays crisp – YouTube accepts it and scales
 * it down itself. Saved as high-quality JPEG to stay under YouTube's 2 MB limit.
 * Output: thumbnails/<slug>[-dark].jpg (or .png with --png)
 * Uses the locally installed Google Chrome (override with CHROME_PATH).
 */
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import puppeteer from "puppeteer-core";

const args = process.argv.slice(2);
const dark = args.includes("--dark");
const scale = args.includes("--1x") ? 1 : 2;
const wantPng = args.includes("--png");
let slug = args.find((a) => !a.startsWith("--"));

const postsDir = resolve("src/content/blog");
const slugs = readdirSync(postsDir)
  .filter((f) => /\.mdx?$/.test(f))
  .map((f) => f.replace(/\.mdx?$/, ""));

if (!slug) {
  if (slugs.length === 1) slug = slugs[0];
  else {
    console.error(`Usage: npm run thumbnail -- <slug> [--dark] [--1x] [--png]\n\nPosts:\n  ${slugs.join("\n  ")}`);
    process.exit(1);
  }
}
if (!slugs.includes(slug)) {
  console.error(`No post "${slug}" in src/content/blog.\n\nPosts:\n  ${slugs.join("\n  ")}`);
  process.exit(1);
}

const base = process.env.DEV_URL ?? "http://localhost:4321";
const url = `${base}/thumbnail/${slug}/${dark ? "?theme=dark" : ""}`;

let res;
try {
  res = await fetch(url);
} catch {
  console.error(`Cannot reach ${base}. Start the dev server first: npm run dev`);
  process.exit(1);
}
if (!res.ok) {
  console.error(
    `${url} returned HTTP ${res.status}. Open it in a browser – the template or frontmatter error is shown there.`
  );
  process.exit(1);
}

const chrome =
  process.env.CHROME_PATH ??
  [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find(existsSync);
if (!chrome) {
  console.error("Chrome not found. Set CHROME_PATH to a Chrome/Chromium binary.");
  process.exit(1);
}

mkdirSync("thumbnails", { recursive: true });
const out = resolve("thumbnails", `${slug}${dark ? "-dark" : ""}.${wantPng ? "png" : "jpg"}`);

const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: scale });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });
  // Fonts loaded + text fitted (set by the page), and every image decoded.
  await page
    .waitForFunction(() => document.documentElement.dataset.ready === "1", { timeout: 15_000 })
    .catch(() => {
      throw new Error(
        `The thumbnail page did not finish rendering. Open ${url} in a browser – ` +
          "an error in the template or frontmatter is shown there and in the dev server terminal."
      );
    });
  await page.evaluate(() => Promise.all([...document.images].map((img) => img.decode().catch(() => {}))));
  const broken = await page.evaluate(() =>
    [...document.images].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src)
  );
  if (broken.length) throw new Error(`Images failed to load:\n  ${broken.join("\n  ")}`);

  const thumb = await page.$("#thumb");
  await thumb.screenshot({
    path: out,
    type: wantPng ? "png" : "jpeg",
    ...(wantPng ? {} : { quality: 92 }),
  });
} finally {
  await browser.close();
}

const kb = Math.round(statSync(out).size / 1024);
console.log(`Saved ${out} (${1280 * scale}×${720 * scale}, ${kb} KB)${kb > 2048 ? "\n⚠ YouTube limit is 2 MB" : ""}`);
