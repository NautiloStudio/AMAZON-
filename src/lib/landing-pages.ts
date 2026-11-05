// Every SEO landing page on the site. Add a page here once its route exists:
// it then shows up in the sitemap and in the "Keep reading" links of the other pages.
export const SITE_URL = "https://nautilostudio.com";

export type LandingPageLink = {
  slug: string;
  label: string;
  updated: string; // ISO date of the last content update
};

export const landingPages: LandingPageLink[] = [
  {
    slug: "amazon-seo",
    label: "Amazon SEO: how to rank higher",
    updated: "2026-11-05",
  },
];
