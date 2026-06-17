import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { articles } from "@/data/articles";
import type { Article, LocalizedText } from "@/types/content";

const articleDirectory = join(process.cwd(), "content", "articles");

export type ArticleWithContent = Article & {
  content: LocalizedText;
};

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleSlugs() {
  return articles.map((article) => article.slug);
}

export async function getArticleWithContent(slug: string): Promise<ArticleWithContent | undefined> {
  const article = getArticleBySlug(slug);

  if (!article) {
    return undefined;
  }

  const raw = await readFile(join(articleDirectory, `${slug}.md`), "utf8");

  return {
    ...article,
    content: parseLocalizedMarkdown(raw)
  };
}

function parseLocalizedMarkdown(raw: string): LocalizedText {
  const zh = extractLanguageBlock(raw, "zh");
  const en = extractLanguageBlock(raw, "en");

  return {
    zh: zh || raw.trim(),
    en: en || zh || raw.trim()
  };
}

function extractLanguageBlock(raw: string, language: "zh" | "en") {
  const nextLanguage = language === "zh" ? "en" : "zh";
  const pattern = new RegExp(`<!--\\s*${language}\\s*-->([\\s\\S]*?)(?=<!--\\s*${nextLanguage}\\s*-->|$)`, "i");
  return pattern.exec(raw)?.[1]?.trim() ?? "";
}
