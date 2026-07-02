import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainLastModified = articles.find((article) => article.channel === "main")?.publishedAt ?? "2026-06-18";
  const gamesLastModified = articles.find((article) => article.channel === "games")?.publishedAt ?? "2026-06-18";
  const animeLastModified = articles.find((article) => article.channel === "anime")?.publishedAt ?? "2026-07-01";
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
      changeFrequency: "monthly" as const,
      priority: 1
    },
    {
      url: `${siteConfig.siteUrl}/games/`,
      lastModified: gamesLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9
    },
    {
      url: `${siteConfig.siteUrl}/anime/`,
      lastModified: animeLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9
    },
    {
      url: `${siteConfig.siteUrl}/side-b/`,
      lastModified: gamesLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6
    },
    ...articleEntries
  ];
}