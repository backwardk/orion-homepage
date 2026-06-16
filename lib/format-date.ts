import type { Language } from "@/types/content";

const formatters: Record<Language, Intl.DateTimeFormat> = {
  zh: new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }),
  en: new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
};

export function formatDate(date: string, language: Language) {
  return formatters[language].format(new Date(date));
}
