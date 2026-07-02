import type { Metadata } from "next";
import { SideBPage } from "@/components/side-b-page";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Side B",
  description: "选择蒋荞宇的 Games 或 Anime 个人频道。",
  alternates: { canonical: "/side-b/" },
  openGraph: {
    title: "Side B | Orion Jiang",
    description: "Games and Anime personal channels.",
    url: `${siteConfig.siteUrl}/side-b/`,
    images: [`${siteConfig.siteUrl}/side-b/hero.webp`],
    type: "website"
  }
};

export default function SideBRoute() {
  return (
    <main className="side-b-shell min-h-screen overflow-hidden">
      <SiteHeader mode="hub" />
      <SideBPage />
    </main>
  );
}