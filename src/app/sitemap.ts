import type { MetadataRoute } from "next";
import { SITE_URL, landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...landingPages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: page.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
