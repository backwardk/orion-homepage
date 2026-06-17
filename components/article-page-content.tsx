"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { siteCopy } from "@/data/site";
import { formatDate } from "@/lib/format-date";
import { renderMarkdown } from "@/lib/markdown";
import type { ArticleWithContent } from "@/lib/articles";
import { useLanguage } from "@/components/language-provider";

export function ArticlePageContent({ article }: { article: ArticleWithContent }) {
  const { language, t } = useLanguage();

  return (
    <article className="px-5 pb-28 pt-28 sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#garden"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <ArrowLeftIcon className="size-4" aria-hidden="true" />
          {t(siteCopy.garden.backHome)}
        </Link>

        <header className="mt-10 border-b border-line pb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="text-accent">{t(article.category)}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, language)}</time>
            <span aria-hidden="true">/</span>
            <span>{t(article.readingTime)}</span>
          </div>
          <h1 className="mt-6 font-chinese text-4xl font-semibold leading-tight sm:text-6xl">
            {t(article.title)}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl sm:leading-9">{t(article.summary)}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag.zh} className="rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-muted">
                {t(tag)}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-12">{renderMarkdown(article.content[language])}</div>
      </div>
    </article>
  );
}
