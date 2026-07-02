"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useLanguage } from "@/components/language-provider";
import { animeCopy, animePreferences } from "@/data/anime";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function AnimePage() {
  const { language, t } = useLanguage();

  const panels = [
    { image: "/side-b/hero.webp", zh: "夜晚与屏幕之间", en: "Between night and screen", className: "anime-frame-tall" },
    { image: "/side-b/anime.webp", zh: "旅行感", en: "A sense of journey", className: "" },
    { image: "/side-b/notes.webp", zh: "动画手记", en: "Anime notes", className: "" }
  ];

  return (
    <>
      <section id="anime-home" className="px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36" aria-labelledby="anime-title">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="font-mono text-xs font-semibold text-accent">MANGA NOTES // PERSONAL CHANNEL</p>
              <h1 id="anime-title" className="mt-6 text-6xl font-black leading-none sm:text-8xl lg:text-[5.2rem]">ANIME</h1>
              <p className="mt-7 max-w-lg text-base leading-8 text-muted sm:text-lg">{t(animeCopy.hero.description)}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="anime-hero-panel relative border-2 border-foreground bg-surface p-2.5">
              <span className="absolute -left-3.5 -top-3.5 z-10 bg-accent px-3 py-2 font-mono text-[11px] text-white">01</span>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={assetPath("/side-b/anime.webp")} alt={language === "zh" ? "夏日站台钢笔插画" : "Ink illustration at a summer platform"} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center grayscale" />
              </div>
              <span className="absolute bottom-6 right-8 h-3 w-20 bg-accent" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="now" className="scroll-mt-16 border-t-2 border-foreground px-5 py-20 sm:px-8 sm:py-24" aria-labelledby="anime-now-title">
        <div className="mx-auto max-w-6xl">
          <Reveal><AnimeHeading index="01" id="anime-now-title" title={t(animeCopy.now.title)} description={t(animeCopy.now.description)} /></Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <MangaPanel {...panels[0]} language={language} />
            </Reveal>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {panels.slice(1).map((panel, index) => <Reveal key={panel.image} delay={(index + 1) * 0.05}><MangaPanel {...panel} language={language} /></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section id="favorites" className="scroll-mt-16 border-t-2 border-foreground px-5 py-20 sm:px-8 sm:py-24" aria-labelledby="anime-favorites-title">
        <div className="mx-auto max-w-6xl">
          <Reveal><AnimeHeading index="02" id="anime-favorites-title" title={t(animeCopy.favorites.title)} description={t(animeCopy.favorites.description)} /></Reveal>
          <div className="anime-like-grid mt-10 grid grid-cols-2 border-2 border-foreground lg:grid-cols-4">
            {animePreferences.map((preference, index) => (
              <Reveal key={preference.id} delay={index * 0.04}>
                <article className="anime-like min-h-52 p-5 sm:p-6">
                  <span className="font-mono text-[11px] text-accent">SCENE {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-10 text-lg font-black sm:text-xl">{t(preference.label)}</h3>
                  <p className="mt-4 text-xs leading-6 text-muted sm:text-sm sm:leading-7">{t(preference.description)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="scroll-mt-16 border-t-2 border-foreground px-5 py-20 sm:px-8 sm:py-24" aria-labelledby="anime-notes-title">
        <div className="mx-auto max-w-6xl">
          <Reveal><AnimeHeading index="03" id="anime-notes-title" title={t(animeCopy.notes.title)} description={t(animeCopy.notes.description)} /></Reveal>
          <Reveal delay={0.06}>
            <div className="mt-10 grid border-2 border-foreground bg-surface lg:grid-cols-[0.85fr_1.15fr]">
              <div className="flex min-h-64 flex-col justify-between p-7 sm:p-10">
                <span className="font-mono text-xs text-accent">COMING NEXT</span>
                <p className="max-w-sm text-2xl font-black leading-snug sm:text-3xl">{t(animeCopy.notes.empty)}</p>
              </div>
              <div className="relative min-h-72 border-t-2 border-foreground lg:border-l-2 lg:border-t-0">
                <Image src={assetPath("/side-b/notes.webp")} alt={language === "zh" ? "桌面手记钢笔插画" : "Ink illustration of notes on a desk"} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover grayscale" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t-2 border-foreground px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm"><Sparkles className="size-4 text-accent" /><span>{t(animeCopy.footer.status)}</span></div>
          <Link href="/side-b/" className="inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-sm font-semibold text-accent">{t(animeCopy.footer.hub)}<ArrowUpRight className="size-4" /></Link>
        </div>
      </footer>
    </>
  );
}

function MangaPanel({ image, zh, en, className, language }: { image: string; zh: string; en: string; className: string; language: "zh" | "en" }) {
  return <article className={`relative min-h-44 overflow-hidden border-2 border-foreground bg-surface ${className}`}><Image src={assetPath(image)} alt={language === "zh" ? zh : en} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover grayscale" /><span className="absolute bottom-3 left-3 border border-foreground bg-background px-3 py-2 text-xs font-bold sm:text-sm">{language === "zh" ? zh : en}</span></article>;
}

function AnimeHeading({ index, id, title, description }: { index: string; id: string; title: string; description: string }) {
  return <div className="flex gap-5 sm:gap-8"><span className="pt-1 font-mono text-xs font-semibold text-accent">{index}</span><div><h2 id={id} className="text-3xl font-black sm:text-5xl">{title}</h2><p className="mt-4 max-w-2xl leading-8 text-muted">{description}</p></div></div>;
}