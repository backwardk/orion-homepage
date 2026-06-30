"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { sideBCopy } from "@/data/side-b";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

const mainLinks = [
  { href: "/#about", sectionId: "about", label: siteCopy.nav.about },
  { href: "/#now", sectionId: "now", label: siteCopy.nav.now },
  { href: "/#garden", sectionId: "garden", label: siteCopy.nav.garden },
  { href: "/#contact", sectionId: "contact", label: siteCopy.nav.contact }
];

const sideBLinks = [
  { href: "/side-b/#now", sectionId: "now", label: sideBCopy.nav.now },
  { href: "/side-b/#favorites", sectionId: "favorites", label: sideBCopy.nav.favorites },
  { href: "/side-b/#notes", sectionId: "notes", label: sideBCopy.nav.notes }
];

type SiteHeaderProps = {
  mode?: "main" | "side-b";
};

export function SiteHeader({ mode }: SiteHeaderProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isSideB = mode ? mode === "side-b" : pathname.includes("/side-b");
  const links = isSideB ? sideBLinks : mainLinks;
  const [activeId, setActiveId] = useState(isSideB ? "side-home" : "home");

  useEffect(() => {
    const sectionIds = isSideB
      ? ["side-home", "now", "favorites", "notes"]
      : ["home", "about", "now", "garden", "contact"];

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
  }, [isSideB]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b backdrop-blur-xl ${
        isSideB
          ? "border-side-line/70 bg-side-bg/90 text-side-ink"
          : "border-line/50 bg-background/78 text-foreground"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#home"
          className={`text-sm font-semibold transition ${
            isSideB ? "hover:text-side-coral" : "hover:text-accent"
          }`}
        >
          <span className="hidden sm:inline">Orion Jiang</span>
          <span className="sm:hidden">OJ</span>
        </Link>
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <nav
            aria-label="Site mode"
            className={`grid w-[116px] grid-cols-2 border p-0.5 text-center ${
              isSideB ? "border-side-line bg-side-paper/60" : "border-line bg-surface/60"
            }`}
          >
            <Link
              href="/"
              aria-current={!isSideB ? "page" : undefined}
              className={`px-2 py-1.5 text-[11px] font-semibold uppercase transition ${
                !isSideB
                  ? "bg-foreground text-background"
                  : "text-side-muted hover:bg-side-teal/15 hover:text-side-ink"
              }`}
            >
              Home
            </Link>
            <Link
              href="/side-b/"
              aria-current={isSideB ? "page" : undefined}
              className={`px-2 py-1.5 text-[11px] font-semibold uppercase transition ${
                isSideB
                  ? "bg-side-ink text-side-paper"
                  : "text-muted hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              Side B
            </Link>
          </nav>
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isSideB ? "hover:text-side-ink" : "hover:text-foreground"
                } ${
                  activeId === link.sectionId
                    ? isSideB
                      ? "text-side-coral"
                      : "text-accent"
                    : isSideB
                      ? "text-side-muted"
                      : "text-muted"
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
