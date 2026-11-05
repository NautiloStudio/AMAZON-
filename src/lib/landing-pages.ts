// Every service guide on the site, in menu order. Add a page here once its route exists:
// it then shows up in the top menu, the sitemap and the "Keep reading" links.
export const SITE_URL = "https://nautilostudio.com";

export type LandingPageLink = {
  slug: string;
  label: string; // used in "Keep reading" links
  menu: string; // short name used in the top menu
  updated: string; // ISO date of the last content update
};

export const landingPages: LandingPageLink[] = [
  {
    slug: "amazon-seo",
    label: "Amazon SEO: how to rank higher",
    menu: "SEO",
    updated: "2026-11-05",
  },
  {
    slug: "listing-optimization",
    label: "Listing optimisation: turn visits into sales",
    menu: "Listing optimisation",
    updated: "2026-11-05",
  },
  {
    slug: "data-analysis",
    label: "Data analysis: the numbers that matter",
    menu: "Data analysis",
    updated: "2026-11-05",
  },
  {
    slug: "ai-automation",
    label: "AI automation for Amazon sellers",
    menu: "AI automation",
    updated: "2026-11-05",
  },
];
