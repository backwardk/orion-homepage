import type { Metadata } from "next";
import { GamesPage } from "@/components/games-page";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Games",
  description: "蒋荞宇的卡带收藏小游戏、个人游戏回忆与单机手记。",
  keywords: ["蒋荞宇", "Orion Jiang", "Steam", "游戏时长", "游戏手记", "单机游戏"],
  alternates: { canonical: "/games/" },
  openGraph: {
    title: "Games | Orion Jiang",
    description: "卡带收藏小游戏、个人游戏回忆与单机手记。",
    url: `${siteConfig.siteUrl}/games/`,
    images: [`${siteConfig.siteUrl}/side-b/games.webp`],
    type: "website"
  }
};

export default function GamesRoute() {
  return (
    <main className="games-shell min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader mode="games" />
      <GamesPage />
    </main>
  );
}