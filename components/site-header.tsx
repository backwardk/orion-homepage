"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

const links = [
  { href: "/#about", sectionId: "about", label: siteCopy.nav.about },
  { href: "/#now", sectionId: "now", label: siteCopy.nav.now },
  { href: "/#garden", sectionId: "garden", label: siteCopy.nav.garden },
  { href: "/#contact", sectionId: "contact", label: siteCopy.nav.contact }
];

export function SiteHeader() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "now", "garden", "contact"]
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
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-line/50 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/#home" className="text-sm font-semibold text-foreground transition hover:text-accent">
          Orion Jiang
        </Link>
        <div className="flex items-center gap-3">
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 sm:flex">
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
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
