import { XMLParser } from "fast-xml-parser";
import { SUBSTACK_RSS_FEED } from "../config";

/**
 * Removes all div elements matching a class name, correctly handling nested divs
 * by tracking open/close depth rather than relying on regex alone.
 */
function removeDivByClass(html: string, className: string): string {
  const openPattern = new RegExp(
    `<div(?:\\s[^>]*)? class="[^"]*${className}[^"]*"[^>]*>`,
    "i",
  );
  let result = html;
  let match = openPattern.exec(result);

  while (match) {
    const start = match.index;
    let depth = 1;
    let i = start + match[0].length;

    while (i < result.length && depth > 0) {
      if (result[i] === "<") {
        const slice = result.slice(i, i + 6).toLowerCase();
        if (slice.startsWith("<div>") || slice.startsWith("<div ")) {
          depth++;
          i++;
        } else if (slice.startsWith("</div>")) {
          depth--;
          i += 6;
        } else {
          i++;
        }
      } else {
        i++;
      }
    }

    result = result.slice(0, start) + result.slice(i);
    match = openPattern.exec(result);
  }

  return result;
}

/**
 * Strips Substack's embedded subscription widgets from post HTML content.
 * These widgets appear in the RSS feed as inline HTML and render unstyled.
 */
function stripSubscriptionWidgets(html: string): string {
  return removeDivByClass(
    removeDivByClass(
      removeDivByClass(html, "subscription-widget"),
      "captioned-button-wrap",
    ),
    "image-link-expand",
  ).trim();
}

export interface SubstackPost {
  id: string;
  title: string;
  description: string;
  content: string;
  link: string;
  pubDate: Date;
  heroImage?: string;
  author?: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  // This ensures 'item' is ALWAYS an array, even if there's only 1 post
  isArray: (name) => name === "item",
});

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const response = await fetch(`${SUBSTACK_RSS_FEED}?t=${Date.now()}`);
    const rss = await response.text();
    const parsed = parser.parse(rss);

    const itemsArray = parsed?.rss?.channel?.item || [];

    return itemsArray.map((item: any) => {
      const heroImage = item.enclosure?.["@_url"] || undefined;

      const slug =
        item.link?.split("/").pop()?.replace(/\?.*$/, "") || item.guid;

      const rawContent = item["content:encoded"] || item.description || "";

      return {
        id: slug,
        title: item.title || "Untitled",
        description: item.description?.replace(/<[^>]*>/g, "") || "",
        content: stripSubscriptionWidgets(rawContent),
        link: item.link || "",
        pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
        heroImage,
        author: item["dc:creator"] || undefined,
      };
    });
  } catch (error) {
    console.error("Error fetching Substack posts:", error);
    return [];
  }
}

