import { XMLParser } from "fast-xml-parser";
import { SUBSTACK_RSS_FEED } from "../config";

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

      return {
        id: slug,
        title: item.title || "Untitled",
        description: item.description?.replace(/<[^>]*>/g, "") || "",
        content: item["content:encoded"] || item.description || "",
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

