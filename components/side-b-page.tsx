"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Radio } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useLanguage } from "@/components/language-provider";
import { articles } from "@/data/articles";
import { mediaEntries, sideBCopy, sideBFavorites } from "@/data/side-b";
import { formatDate } from "@/lib/format-date";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

const accentClasses = {
  coral: "bg-side-coral",
  teal: "bg-side-teal",
  yellow: "bg-side-yellow"
} as const;

export function SideBPage() {
  const { language, t } = useLanguage();
  const sideBArticles = articles.filter((article) => article.channel === "side-b");

  return (
    <>
      <section
        id="side-home"
        className="relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-side-line/25 pt-16"
        aria-labelledby="side-b-title"
      >
        <Image
          src={assetPath("/side-b/hero.webp")}
          alt={language === "zh" ? "少年在夜晚房间里玩掌机的钢笔插画" : "Ink illustration of a young gamer playing at night"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[67%_center] opacity-35 sm:opacity-65 lg:opacity-100"
        />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center px-5 py-14 sm:px-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border border-side-line/55 bg-side-paper/80 px-3 py-2 text-xs font-semibold uppercase text-side-muted backdrop-blur-sm">
              <span className="side-b-status-dot size-2 bg-side-teal" aria-hidden="true" />
              {t(sideBCopy.hero.eyebrow)}
            </div>
            <h1
              id="side-b-title"
              className="mt-8 text-6xl font-black leading-none text-side-ink sm:text-8xl lg:text-9xl"
            >
              {sideBCopy.hero.title}
            </h1>
            <p className="mt-5 font-mono text-sm font-semibold text-side-coral sm:text-base">
              {sideBCopy.hero.subtitle}
            </p>
            <p className="mt-7 max-w-lg text-lg leading-8 text-side-ink sm:text-xl sm:leading-9">
              {t(sideBCopy.hero.description)}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/side-b/#now"
                className="inline-flex items-center gap-2 border border-side-ink bg-side-ink px-4 py-3 text-sm font-semibold text-side-paper transition hover:-translate-y-0.5 hover:bg-side-coral focus:outline-none focus:ring-2 focus:ring-side-coral/40"
              >
                {t(sideBCopy.hero.enter)}
                <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/side-b/#notes"
                className="inline-flex items-center gap-2 border border-side-line/60 bg-side-paper/75 px-4 py-3 text-sm font-semibold text-side-ink backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-side-coral focus:outline-none focus:ring-2 focus:ring-side-coral/40"
              >
                {t(sideBCopy.hero.notes)}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="now"
        className="side-b-grid scroll-mt-16 px-5 py-24 sm:px-8 sm:py-32"
        aria-labelledby="side-now-title"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              index={sideBCopy.now.index}
              title={t(sideBCopy.now.title)}
              description={t(sideBCopy.now.description)}
              id="side-now-title"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {mediaEntries.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 0.08}>
                <article className="group overflow-hidden rounded-md border border-side-line/35 bg-side-paper shadow-sm transition hover:-translate-y-1 hover:border-side-coral/70">
                  <div className="relative aspect-[3/2] overflow-hidden border-b border-side-line/25">
                    <Image
                      src={assetPath(entry.image)}
                      alt={t(entry.title)}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.015]"
                    />
                    <span className="absolute left-4 top-4 border border-side-ink/70 bg-side-paper/90 px-2.5 py-1.5 font-mono text-[11px] font-semibold uppercase text-side-ink">
                      {entry.type === "game" ? t(sideBCopy.now.game) : t(sideBCopy.now.anime)}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase text-side-muted">
                      <span className="inline-flex items-center gap-2">
                        <span className="side-b-status-dot size-2 bg-side-teal" aria-hidden="true" />
                        {t(entry.status)}
                      </span>
                      <span>{t(entry.progress)}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-snug text-side-ink">{t(entry.title)}</h3>
                    <p className="mt-4 text-base leading-8 text-side-muted">{t(entry.note)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="favorites"
        className="scroll-mt-16 border-y border-side-line/25 bg-side-paper px-5 py-24 sm:px-8 sm:py-32"
        aria-labelledby="side-favorites-title"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              index={sideBCopy.favorites.index}
              title={t(sideBCopy.favorites.title)}
              description={t(sideBCopy.favorites.description)}
              id="side-favorites-title"
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-side-line/35 bg-side-line/35 sm:grid-cols-2 lg:grid-cols-3">
            {sideBFavorites.map((favorite, index) => (
              <Reveal key={favorite.id} delay={index * 0.04}>
                <article className="min-h-52 bg-side-bg p-6 transition hover:bg-side-paper sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-side-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`size-3 ${accentClasses[favorite.accent]}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-10 text-xl font-bold text-side-ink">{t(favorite.label)}</h3>
                  <p className="mt-4 text-sm leading-7 text-side-muted">{t(favorite.description)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="notes"
        className="scroll-mt-16 bg-side-ink px-5 py-24 text-side-paper sm:px-8 sm:py-32"
        aria-labelledby="side-notes-title"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionHeading
                  index={sideBCopy.notes.index}
                  title={t(sideBCopy.notes.title)}
                  description={t(sideBCopy.notes.description)}
                  id="side-notes-title"
                  inverted
                />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden border border-side-paper/30">
                <Image
                  src={assetPath("/side-b/notes.webp")}
                  alt={language === "zh" ? "桌面上的手柄、笔记本和耳机钢笔插画" : "Ink illustration of a game notes desk"}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="mt-12 border-t border-side-paper/25">
            {sideBArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <Link
                  href={`/garden/${article.slug}`}
                  className="group grid gap-5 border-b border-side-paper/25 py-8 focus:outline-none focus:ring-2 focus:ring-side-coral/60 sm:grid-cols-[7rem_1fr_auto] sm:items-center"
                >
                  <div className="font-mono text-xs uppercase text-side-yellow">
                    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, language)}</time>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-side-teal">{t(article.category)}</span>
                    <h3 className="mt-2 text-2xl font-bold leading-snug text-side-paper transition group-hover:text-side-coral">
                      {t(article.title)}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-side-muted">{t(article.summary)}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-side-coral">
                    {t(sideBCopy.notes.read)}
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="side-b-grid border-t border-side-line/30 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-side-ink">
              <Radio className="size-4 text-side-teal" aria-hidden="true" />
              {t(sideBCopy.footer.status)}
            </div>
            <p className="mt-2 text-xs text-side-muted">{t(sideBCopy.footer.copyright)}</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start border-b border-side-coral pb-1 text-sm font-semibold text-side-ink transition hover:text-side-coral focus:outline-none focus:ring-2 focus:ring-side-coral/40"
          >
            {t(sideBCopy.footer.home)}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </>
  );
}

type SectionHeadingProps = {
  index: string;
  title: string;
  description: string;
  id: string;
  inverted?: boolean;
};

function SectionHeading({ index, title, description, id, inverted = false }: SectionHeadingProps) {
  return (
    <div className="grid gap-5 border-t border-current/25 pt-6 md:grid-cols-[5rem_1fr]">
      <span className={`font-mono text-sm font-semibold ${inverted ? "text-side-yellow" : "text-side-coral"}`}>
        {index}
      </span>
      <div>
        <h2 id={id} className={`text-4xl font-black leading-tight sm:text-5xl ${inverted ? "text-side-paper" : "text-side-ink"}`}>
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-side-muted">{description}</p>
      </div>
    </div>
  );
}
