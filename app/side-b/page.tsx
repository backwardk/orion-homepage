import type { Metadata } from "next";
import { SideBPage } from "@/components/side-b-page";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Side B",
  description: "蒋荞宇的二次元、游戏与个人手记频道。",
  keywords: ["蒋荞宇", "Orion Jiang", "Side B", "游戏手记", "动画", "个人博客"],
  alternates: {
    canonical: "/side-b/"
  },
  openGraph: {
    title: "Side B | Orion Jiang",
    description: "二次元、游戏与个人手记。",
    url: `${siteConfig.siteUrl}/side-b/`,
    images: [`${siteConfig.siteUrl}/side-b/hero.webp`],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Side B | Orion Jiang",
    description: "Anime, games, and personal play notes.",
    images: [`${siteConfig.siteUrl}/side-b/hero.webp`]
  }
};

export default function SideBRoute() {
  return (
    <main className="side-b-shell min-h-screen overflow-hidden">
      <SiteHeader mode="side-b" />
      <SideBPage />
    </main>
  );
}
