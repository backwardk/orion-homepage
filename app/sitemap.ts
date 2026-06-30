import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainLastModified = articles.find((article) => article.channel === "main")?.publishedAt ?? "2026-06-18";
  const sideBLastModified = articles.find((article) => article.channel === "side-b")?.publishedAt ?? "2026-06-18";
  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.siteUrl}/garden/${article.slug}/`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    {
      url: `${siteConfig.siteUrl}/`,
      lastModified: mainLastModified,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteConfig.siteUrl}/side-b/`,
      lastModified: sideBLastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...articleEntries
  ];
}
