import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, postUrl } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: "Jan Škoruba – Blog",
    description:
      "Articles and videos on Duende IdentityServer, the Skoruba Admin UI, OpenID Connect and OAuth security.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
      categories: post.data.tags,
    })),
    customData: "<language>en-us</language>",
  });
}
