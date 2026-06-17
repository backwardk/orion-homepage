import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.siteUrl}/garden/${article.slug}/`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    {
      url: `${siteConfig.siteUrl}/`,
      lastModified: articles[0]?.publishedAt ?? "2026-06-18",
      changeFrequency: "monthly",
      priority: 1
    },
    ...articleEntries
  ];
}
