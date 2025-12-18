//-- SITE SETTINGS -----
export const SITE_TITLE = "Sara Antole";
export const SITE_SHORT_TITLE = "SA"; // Used as logo text in header, footer, and splash screen
export const SITE_DESCRIPTION = "Sara Antole, Fullstack Blockchain Developer";
export const SITE_URL = "https://saraantole.netlify.app"; // TODO: Update this URL to your site's URL
export const SITE_LANGUAGE = "en_US";
export const SITE_ICON = "favicon.png";
export const AUTHOR = "Sara Antole";

// -- THEME SETTINGS -----
export const COLORS = {
  lightTheme: {
    primary: "#000000",
    tertiary: "#ECECEC",
    text: "#1F1F1F",
    subtext: "#555555",
    background: "#F8F8F8",
    card: "#FFFFFF",
    scrollBar: "rgba(0, 0, 0, 0.5)",
    boxShadow: "rgba(0, 0, 0, 0.16)",
    boxShadowHover: "rgba(0, 0, 0, 0.32)",
  },
  darkTheme: {
    primary: "#FAFAFA",
    tertiary: "#252525",
    text: "rgba(255, 255, 255, 0.87)",
    subtext: "#CCCC",
    background: "#121212",
    card: "#1C1C1C",
    scrollBar: "rgba(255, 255, 255, 0.5)",
    boxShadow: "rgba(0, 0, 0, 0.16)",
    boxShadowHover: "rgba(0, 0, 0, 0.32)",
  },
};

//-- SOCIAL MEDIA SETTINGS -----
export const SOCIAL_MEDIA = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sara-antole/",
  },
  {
    name: "Github",
    url: "https://github.com/saraantole",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/0xsaraa/", // TODO: Update this URL to your Instagram profile
  },
];

//-- NAVIGATION SETTINGS -----
export const NAV_LINKS = {
  menu: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ],
  button: {
    name: "Contact",
    url: "/contact",
  },
};
