"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language, LocalizedText } from "@/types/content";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: (copy: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("orion-language");
      if (saved === "zh" || saved === "en") setLanguage(saved);
    } catch {
      // 禁用浏览器存储时仍可正常切换语言。
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => {
        const nextLanguage = language === "zh" ? "en" : "zh";
        setLanguage(nextLanguage);
        try {
          localStorage.setItem("orion-language", nextLanguage);
        } catch {
          // 存储不可用不影响本次浏览。
        }
      },
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
