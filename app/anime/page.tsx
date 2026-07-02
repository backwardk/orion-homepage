import type { Metadata } from "next";
import { AnimePage } from "@/components/anime-page";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Anime",
  description: "蒋荞宇的动画片单、动画偏好与个人手记。",
  keywords: ["蒋荞宇", "Orion Jiang", "动画", "追番", "二次元", "个人博客"],
  alternates: { canonical: "/anime/" },
  openGraph: {
    title: "Anime | Orion Jiang",
    description: "动画片单、喜欢的画面与个人手记。",
    url: `${siteConfig.siteUrl}/anime/`,
    images: [`${siteConfig.siteUrl}/side-b/anime.webp`],
    type: "website"
  }
};

export default function AnimeRoute() {
  return (
    <main className="anime-shell min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader mode="anime" />
      <AnimePage />
    </main>
  );
}