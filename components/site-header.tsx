"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { animeCopy } from "@/data/anime";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

const mainLinks = [
  { href: "/#about", sectionId: "about", label: siteCopy.nav.about },
  { href: "/#now", sectionId: "now", label: siteCopy.nav.now },
  { href: "/#garden", sectionId: "garden", label: siteCopy.nav.garden },
  { href: "/#contact", sectionId: "contact", label: siteCopy.nav.contact }
];

const gamesLinks: typeof mainLinks = [];


const animeLinks = [
  { href: "/anime/#now", sectionId: "now", label: animeCopy.nav.now },
  { href: "/anime/#titles", sectionId: "titles", label: animeCopy.nav.titles },
  { href: "/anime/#notes", sectionId: "notes", label: animeCopy.nav.notes }
];

export type SiteMode = "main" | "games" | "anime" | "hub";

type SiteHeaderProps = {
  mode?: SiteMode;
};

const tabs = [
  { mode: "main" as const, href: "/", label: "Home" },
  { mode: "games" as const, href: "/games/", label: "Games" },
  { mode: "anime" as const, href: "/anime/", label: "Anime" }
];

export function SiteHeader({ mode }: SiteHeaderProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const currentMode = mode ?? getModeFromPath(pathname);
  const links = currentMode === "games" ? gamesLinks : currentMode === "anime" ? animeLinks : currentMode === "main" ? mainLinks : [];
  const sectionIds = currentMode === "games"
    ? ["counter"]
    : currentMode === "anime"
      ? ["anime-home", "now", "favorites", "titles", "notes"]
      : currentMode === "main"
        ? ["home", "about", "now", "garden", "contact"]
        : ["side-home"];
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    setActiveId(sectionIds[0]);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-24% 0px -58% 0px", threshold: [0.12, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [currentMode]);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-line/60 bg-background/90 text-foreground backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <Link href="/#home" className="text-sm font-semibold transition hover:text-accent">
          <span className="hidden sm:inline">Orion Jiang</span>
          <span className="sm:hidden">OJ</span>
        </Link>
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <nav aria-label="Site channels" className="grid w-[174px] grid-cols-3 border border-line bg-surface/60 p-0.5 text-center">
            {tabs.map((tab) => {
              const selected = currentMode === tab.mode;
              return (
                <Link
                  key={tab.mode}
                  href={tab.href}
                  aria-current={selected ? "page" : undefined}
                  className={`px-1 py-1.5 text-[10px] font-semibold uppercase transition sm:text-[11px] ${
                    selected ? "bg-foreground text-background" : "text-muted hover:bg-accent/10 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
          {links.length > 0 && (
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition hover:text-foreground ${
                    activeId === link.sectionId ? "text-accent" : "text-muted"
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          )}
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function getModeFromPath(pathname: string): SiteMode {
  if (pathname.includes("/games")) return "games";
  if (pathname.includes("/anime")) return "anime";
  if (pathname.includes("/side-b")) return "hub";
  return "main";
}