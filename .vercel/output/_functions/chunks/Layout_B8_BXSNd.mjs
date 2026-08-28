import { b as createAstro, c as createComponent, d as addAttribute, e as renderScript, a as renderTemplate, f as renderHead, r as renderComponent, u as unescapeHTML, m as maybeRenderHead, g as renderSlot } from './astro/server_pRUOx65K.mjs';
import 'piccolore';
import { b as SITE_DESCRIPTION, A as AUTHOR, a as SITE_TITLE, N as NAV_LINKS, c as SITE_SHORT_TITLE, d as SOCIAL_MEDIA } from './config_0kUp0oe0.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$7 = createAstro("https://saraantole.vercel.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/saraa/biz/personal-brand/website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/saraa/biz/personal-brand/website/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://saraantole.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image } = Astro2.props;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR,
    url: Astro2.site,
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://www.linkedin.com/in/sara-antole/",
      "https://github.com/saraantole",
      "https://www.instagram.com/sara.calmtech/"
    ]
  };
  return renderTemplate(_a || (_a = __template(['<head><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="theme-color" content="#F8F8F8"><link rel="icon" type="image/svg+xml" href="/favicon.png"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"', "", '><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Structured Data (JSON-LD) --><script type="application/ld+json">', '<\/script><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-G8QC30GZBQ"><\/script><script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag("js", new Date());\n    gtag("config", "G-G8QC30GZBQ");\n  <\/script>', "", "</head>"])), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead());
}, "C:/Users/saraa/biz/personal-brand/website/src/components/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://saraantole.vercel.app");
const $$DesktopNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DesktopNavbar;
  const currentPath = Astro2.url.pathname;
  const navLinks = NAV_LINKS;
  return renderTemplate`${maybeRenderHead()}<nav class="desktop-navbar" data-astro-cid-fsu4puwi> ${navLinks.menu.map(({ name, url }) => renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`nav-link ${currentPath === url ? "current" : ""}`, "class")} data-astro-cid-fsu4puwi> ${name} </a>`)} </nav> `;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/header/DesktopNavbar.astro", void 0);

const $$Astro$4 = createAstro("https://saraantole.vercel.app");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Logo;
  const { size = "18px", color = "primary" } = Astro2.props;
  const siteShortTitle = SITE_SHORT_TITLE;
  return renderTemplate`${maybeRenderHead()}<div class="logo"${addAttribute(`font-size: ${size};`, "style")}${addAttribute(color, "data-color")} data-astro-cid-s7zbvxmx> ${siteShortTitle} </div> `;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/header/Logo.astro", void 0);

const $$Astro$3 = createAstro("https://saraantole.vercel.app");
const $$MobileNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MobileNavbar;
  const currentPath = Astro2.url.pathname;
  const navLinks = NAV_LINKS;
  return renderTemplate`<!-- Burger Menu Button -->${maybeRenderHead()}<button class="burger-menu" aria-controls="sidebar" aria-label="Toggle menu" id="burger-button" data-astro-cid-fjpmf5vy> <div class="burger-line" data-astro-cid-fjpmf5vy></div> <div class="burger-line" data-astro-cid-fjpmf5vy></div> <div class="burger-line" data-astro-cid-fjpmf5vy></div> </button> <!-- Mobile Sidebar --> <div class="mobile-navigation" data-astro-cid-fjpmf5vy> <div class="sidebar-wrapper" id="sidebar-wrapper" data-astro-cid-fjpmf5vy> <div class="sidebar-container" id="sidebar" data-astro-cid-fjpmf5vy> <nav class="sidebar-nav" data-astro-cid-fjpmf5vy> ${navLinks.menu.map(({ name, url }) => renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`nav-link ${currentPath === url ? "current" : ""}`, "class")} data-astro-cid-fjpmf5vy> ${name} </a>`)} <a${addAttribute(navLinks.button.url, "href")} class="cta-btn" data-astro-cid-fjpmf5vy> ${navLinks.button.name} </a> </nav> </div> <div class="backdrop" id="sidebar-backdrop" data-astro-cid-fjpmf5vy></div> </div> </div>  ${renderScript($$result, "C:/Users/saraa/biz/personal-brand/website/src/components/header/MobileNavbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/header/MobileNavbar.astro", void 0);

const $$Astro$2 = createAstro("https://saraantole.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="header" data-astro-cid-pwmmw5ba> <div class="header-content" data-astro-cid-pwmmw5ba> <a href="/" aria-label="home" class="logo-link" data-astro-cid-pwmmw5ba> ${renderComponent($$result, "Logo", $$Logo, { "color": "primary", "size": "2rem", "data-astro-cid-pwmmw5ba": true })} </a> <div class="center-section" data-astro-cid-pwmmw5ba> ${renderComponent($$result, "DesktopNavbar", $$DesktopNavbar, { "data-astro-cid-pwmmw5ba": true })} </div> <nav class="navigation" data-astro-cid-pwmmw5ba> ${renderComponent($$result, "MobileNavbar", $$MobileNavbar, { "data-astro-cid-pwmmw5ba": true })} <div class="desktop-right" data-astro-cid-pwmmw5ba> <a${addAttribute(NAV_LINKS.button.url, "href")} class="cta-btn" data-astro-cid-pwmmw5ba> ${NAV_LINKS.button.name} </a> </div> </nav> </div> </header>  ${renderScript($$result, "C:/Users/saraa/biz/personal-brand/website/src/components/header/Header.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/saraa/biz/personal-brand/website/src/components/header/Header.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/header/Header.astro", void 0);

const $$Astro$1 = createAstro("https://saraantole.vercel.app");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { width = "auto", padding = "0" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="social-links"${addAttribute(`width: ${width}; padding: ${padding};`, "style")} data-astro-cid-yxtifmrq> ${SOCIAL_MEDIA.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Follow on ${social.name}`, "aria-label")} data-astro-cid-yxtifmrq> ${social.name === "Github" && renderTemplate`<svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24" data-astro-cid-yxtifmrq> <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-yxtifmrq></path> </svg>`} ${social.name === "Linkedin" && renderTemplate`<svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" data-astro-cid-yxtifmrq> <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-yxtifmrq></path> </svg>`} ${social.name === "Instagram" && renderTemplate`<svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" data-astro-cid-yxtifmrq> <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-yxtifmrq></path> </svg>`} </a>`)} </div> `;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="content-wrapper" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "width": "9rem", "padding": "0.5rem 1.25rem", "data-astro-cid-sz7xmlte": true })} <div class="footer-links" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>${AUTHOR}</p> <p data-astro-cid-sz7xmlte>| © ${today.getFullYear()}</p> <a href="/privacy" data-astro-cid-sz7xmlte> | Privacy</a> </div> </div> </footer> `;
}, "C:/Users/saraa/biz/personal-brand/website/src/components/Footer.astro", void 0);

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/saraa/biz/personal-brand/website/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://saraantole.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, pageDescription, pageImage } = Astro2.props;
  const title = pageTitle || SITE_TITLE;
  const description = pageDescription || SITE_DESCRIPTION;
  const image = pageImage || FallbackImage;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/Users/saraa/biz/personal-brand/website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/saraa/biz/personal-brand/website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
