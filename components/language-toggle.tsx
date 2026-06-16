"use client";

import { Languages } from "lucide-react";
import { languageLabel, siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();
  const nextLanguage = language === "zh" ? "en" : "zh";

  return (
    <button
      type="button"
      aria-label={t(siteCopy.controls.language)}
      onClick={toggleLanguage}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface/70 px-3 text-sm font-medium text-foreground shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
    >
      <Languages className="size-4" strokeWidth={1.7} />
      <span>{languageLabel[nextLanguage]}</span>
    </button>
  );
}
