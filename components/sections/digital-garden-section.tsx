"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowUpRightIcon } from "@/components/ui/arrow-icons";
import { articles } from "@/data/articles";
import { siteCopy } from "@/data/site";
import { formatDate } from "@/lib/format-date";
import { useLanguage } from "@/components/language-provider";

export function DigitalGardenSection() {
  const { language, t } = useLanguage();
  const mainArticles = articles.filter((article) => article.channel === "main");

  return (
    <section id="garden" className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="garden-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-5 border-y border-line py-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 id="garden-title" className="font-chinese text-4xl font-semibold leading-tight sm:text-5xl">
                {t(siteCopy.garden.title)}
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">{t(siteCopy.garden.description)}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {mainArticles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.06}>
              <Link
                href={`/garden/${article.slug}`}
                className="group block rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                <article className="flex min-h-80 flex-col justify-between rounded-2xl border border-line bg-surface/72 p-6 shadow-sm backdrop-blur transition group-hover:-translate-y-1 group-hover:border-accent/35 group-hover:shadow-soft dark:group-hover:shadow-soft-dark">
                <div>
                  <div className="flex items-center justify-between gap-4 text-sm text-muted">
                    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, language)}</time>
                    <span>{t(article.readingTime)}</span>
                  </div>
                  <span className="mt-7 inline-block text-sm text-accent">{t(article.category)}</span>
                  <h3 className="mt-8 text-2xl font-semibold leading-snug">{t(article.title)}</h3>
                  <p className="mt-5 text-base leading-8 text-muted">{t(article.summary)}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag.zh} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-line pt-5 text-sm text-accent">
                  <span>{t(siteCopy.garden.markdownReady)}</span>
                  <ArrowUpRightIcon className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
