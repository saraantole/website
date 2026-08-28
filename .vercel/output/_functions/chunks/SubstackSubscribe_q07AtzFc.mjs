import { XMLParser } from 'fast-xml-parser';
import { S as SUBSTACK_RSS_FEED } from './config_0kUp0oe0.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, e as renderScript } from './astro/server_pRUOx65K.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */

function removeDivByClass(html, className) {
  const openPattern = new RegExp(
    `<div(?:\\s[^>]*)? class="[^"]*${className}[^"]*"[^>]*>`,
    "i"
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
function stripSubscriptionWidgets(html) {
  return removeDivByClass(
    removeDivByClass(
      removeDivByClass(html, "subscription-widget"),
      "captioned-button-wrap"
    ),
    "image-link-expand"
  ).trim();
}
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  // This ensures 'item' is ALWAYS an array, even if there's only 1 post
  isArray: (name) => name === "item"
});
async function getSubstackPosts() {
  try {
    const response = await fetch(`${SUBSTACK_RSS_FEED}?t=${Date.now()}`);
    const rss = await response.text();
    const parsed = parser.parse(rss);
    const itemsArray = parsed?.rss?.channel?.item || [];
    return itemsArray.map((item) => {
      const heroImage = item.enclosure?.["@_url"] || void 0;
      const slug = item.link?.split("/").pop()?.replace(/\?.*$/, "") || item.guid;
      const rawContent = item["content:encoded"] || item.description || "";
      return {
        id: slug,
        title: item.title || "Untitled",
        description: item.description?.replace(/<[^>]*>/g, "") || "",
        content: stripSubscriptionWidgets(rawContent),
        link: item.link || "",
        pubDate: item.pubDate ? new Date(item.pubDate) : /* @__PURE__ */ new Date(),
        heroImage,
        author: item["dc:creator"] || void 0
      };
    });
  } catch (error) {
    console.error("Error fetching Substack posts:", error);
    return [];
  }
}

const $$Astro = createAstro("https://saraantole.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/FormattedDate.astro", void 0);

const selfSmile = new Proxy({"src":"/_astro/self-smile.DzG0q9o9.jpg","width":1080,"height":607,"format":"jpg","orientation":2}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/saraa/biz/personal-brand/website/src/assets/self-smile.jpg";
							}
							
							return target[name];
						}
					});

const $$SubstackSubscribe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="subscribe-container" data-astro-cid-ddzlm3vz> <h3 data-astro-cid-ddzlm3vz>Subscribe to the newsletter</h3> <p data-astro-cid-ddzlm3vz>Get the latest thoughts directly in your inbox.</p> <form id="subscribe-form" action="https://saracalmtech.substack.com/api/v1/free" method="post" class="subscribe-form" data-astro-cid-ddzlm3vz> <input type="email" name="email" placeholder="Enter your email" required class="email-input" data-astro-cid-ddzlm3vz> <input type="hidden" name="first_url" value="" data-astro-cid-ddzlm3vz> <input type="hidden" name="first_referrer" value="" data-astro-cid-ddzlm3vz> <input type="hidden" name="current_url" value="" data-astro-cid-ddzlm3vz> <input type="hidden" name="current_referrer" value="" data-astro-cid-ddzlm3vz> <input type="hidden" name="referral_code" value="" data-astro-cid-ddzlm3vz> <input type="hidden" name="source" value="embed" data-astro-cid-ddzlm3vz> <button type="submit" class="subscribe-button" data-astro-cid-ddzlm3vz>Subscribe</button> </form> <p class="success-message" style="display: none;" data-astro-cid-ddzlm3vz>
Thanks for subscribing! Check your email to confirm.
</p> <p class="error-message" style="display: none;" data-astro-cid-ddzlm3vz>
Something went wrong. Please try again.
</p> </div> ${renderScript($$result, "C:/Users/saraa/biz/personal-brand/website/src/components/SubstackSubscribe.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/SubstackSubscribe.astro", void 0);

export { $$FormattedDate as $, $$SubstackSubscribe as a, getSubstackPosts as g, selfSmile as s };
