import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_pRUOx65K.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B8_BXSNd.mjs';
import { g as getSubstackPosts, s as selfSmile, $ as $$FormattedDate, a as $$SubstackSubscribe } from '../chunks/SubstackSubscribe_q07AtzFc.mjs';
import { $ as $$ContactButton } from '../chunks/ContactButton_vv3Lyaq2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getSubstackPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Blog", "pageDescription": "Read my latest articles and insights", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="blog-section" data-astro-cid-5tznm7mj> <div class="blog-wrapper" data-astro-cid-5tznm7mj> <h1 class="blog-title" id="blog-title" data-astro-cid-5tznm7mj>Thoughts Lately</h1> <p class="blog-intro" data-astro-cid-5tznm7mj>
One a month, roughly. Mostly about using AI a lot and staying good at
        your work.
</p> ${posts.length === 0 ? renderTemplate`<p class="no-posts-message" data-astro-cid-5tznm7mj>No blog posts yet. Check back soon!</p>` : renderTemplate`<ul class="posts-grid" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}/`, "href")} class="post-card" data-astro-cid-5tznm7mj> <div class="post-image-wrapper" data-astro-cid-5tznm7mj> <div class="post-image-blurred"${addAttribute(`background-image: url(${post.heroImage || selfSmile.src});`, "style")} data-astro-cid-5tznm7mj></div> <div class="post-image-clear"${addAttribute(`background-image: url(${post.heroImage || selfSmile.src});`, "style")} data-astro-cid-5tznm7mj></div> <div class="post-border" data-astro-cid-5tznm7mj></div> <div class="post-plus" data-astro-cid-5tznm7mj>+</div> </div> <div class="post-content" data-astro-cid-5tznm7mj> <h3 class="post-title" data-astro-cid-5tznm7mj>${post.title}</h3> <p class="post-date" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </div> </a> </li>`)} </ul>`} </div> </section> ${renderComponent($$result2, "SubstackSubscribe", $$SubstackSubscribe, { "data-astro-cid-5tznm7mj": true })} ${renderComponent($$result2, "ContactButton", $$ContactButton, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "C:/Users/saraa/biz/personal-brand/website/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/saraa/biz/personal-brand/website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
