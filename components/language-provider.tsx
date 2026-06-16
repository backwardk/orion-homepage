"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Language, LocalizedText } from "@/types/content";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: (copy: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === "zh" ? "en" : "zh")),
      t: (copy) => copy[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
