"use client";

import { Reveal } from "@/components/motion";
import { ArrowUpRightIcon } from "@/components/ui/arrow-icons";
import { articles } from "@/data/articles";
import { siteCopy } from "@/data/site";
import { formatDate } from "@/lib/format-date";
import { useLanguage } from "@/components/language-provider";

export function DigitalGardenSection() {
  const { language, t } = useLanguage();

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
          {articles.map((article, index) => (
            <Reveal key={article.date} delay={index * 0.06}>
              <article className="group flex min-h-80 flex-col justify-between rounded-2xl border border-line bg-surface/72 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-soft dark:hover:shadow-soft-dark">
                <div>
                  <div className="flex items-center justify-between gap-4 text-sm text-muted">
                    <time dateTime={article.date}>{formatDate(article.date, language)}</time>
                    <span>{t(article.readingTime)}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold leading-snug">{t(article.title)}</h3>
                  <p className="mt-5 text-base leading-8 text-muted">{t(article.summary)}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-line pt-5 text-sm text-accent">
                  <span>Markdown ready</span>
                  <ArrowUpRightIcon className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
