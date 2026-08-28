import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_pRUOx65K.mjs';
import 'piccolore';
import { g as getSubstackPosts, s as selfSmile, $ as $$FormattedDate, a as $$SubstackSubscribe } from '../../chunks/SubstackSubscribe_q07AtzFc.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B8_BXSNd.mjs';
import { $ as $$ContactButton } from '../../chunks/ContactButton_vv3Lyaq2.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://saraantole.vercel.app");
const $$BlogHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogHero;
  const { heroImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="hero"> <div class="hero-bg-blurred"${addAttribute(`background-image: url(${heroImage});`, "style")}></div> <div class="hero-bg-clear"${addAttribute(`background-image: url(${heroImage});`, "style")}></div> <div class="hero-border"></div> <div class="hero-plus">+</div> <div class="hero-overlay"></div> </section> `;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/BlogHero.astro", void 0);

const $$Astro = createAstro("https://saraantole.vercel.app");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id } = Astro2.params;
  const posts = await getSubstackPosts();
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const heroImageUrl = post.heroImage || selfSmile.src;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": post.title, "pageDescription": post.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogHero", $$BlogHero, { "heroImage": heroImageUrl })} ${maybeRenderHead()}<article class="blog-post"> <div class="post-wrapper"> <div class="post-header"> <div class="post-meta"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.pubDate })} </div> <h1 class="post-title">${post.title}</h1> </div> <div class="post-content">${unescapeHTML(post.content)}</div> <div class="read-more-wrapper"> <p>
Enjoyed this? Read the full discussion and join the conversation on
<a${addAttribute(post.link, "href")} target="_blank" rel="noopener noreferrer">Substack</a>.
</p> </div> ${renderComponent($$result2, "SubstackSubscribe", $$SubstackSubscribe, {})} <div class="back-link"> <a href="/blog">← Back to Blog</a> </div> </div> </article> ${renderComponent($$result2, "ContactButton", $$ContactButton, {})} ` })} `;
}, "C:/Users/saraa/biz/personal-brand/website/src/pages/blog/[...id].astro", void 0);

const $$file = "C:/Users/saraa/biz/personal-brand/website/src/pages/blog/[...id].astro";
const $$url = "/blog/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
