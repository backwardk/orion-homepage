"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

const links = [
  { href: "#about", label: siteCopy.nav.about },
  { href: "#garden", label: siteCopy.nav.garden },
  { href: "#contact", label: siteCopy.nav.contact }
];

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-line/50 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-sm font-semibold text-foreground transition hover:text-accent">
          Orion Jiang
        </a>
        <div className="flex items-center gap-3">
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 sm:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted transition hover:text-foreground">
                {t(link.label)}
              </a>
            ))}
          </nav>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
