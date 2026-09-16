"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useLanguage } from "@/components/language-provider";
import { animeCopy, animePreferences, animeScenes, animeTitles } from "@/data/anime";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function AnimePage() {
  const { language, t } = useLanguage();
  const [heroSceneIndex, setHeroSceneIndex] = useState(0);
  const heroScene = animeScenes[heroSceneIndex];

  function changeHeroScene(direction: number) {
    setHeroSceneIndex((current) => (current + direction + animeScenes.length) % animeScenes.length);
  }

  return (
    <>
      <section id="anime-home" className="border-b border-line px-4 pb-8 pt-24 sm:px-8 sm:pb-12 sm:pt-28" aria-labelledby="anime-title">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-12">
          <Reveal>
            <div className="min-w-0 py-4 lg:py-8">
              <h1 id="anime-title" className="text-5xl font-black leading-none sm:text-7xl">ANIME</h1>
              <p className="mt-5 font-mono text-sm font-bold text-accent sm:text-base">{animeCopy.hero.subtitle}</p>
              <p className="mt-7 max-w-md text-base leading-8 text-muted sm:text-lg">{t(animeCopy.hero.description)}</p>
              <nav className="anime-section-links" aria-label={language === "zh" ? "动画内容" : "Anime sections"}>
                <a href="#titles">{t(animeCopy.nav.titles)}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
                <a href="#notes">{t(animeCopy.nav.notes)}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
              </nav>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div id="now" className="anime-hero-stage scroll-mt-24">
              <div className="anime-hero-image relative aspect-[3/2] overflow-hidden border-2 border-accent bg-surface">
                <Image
                  key={heroScene.id}
                  src={assetPath(heroScene.image)}
                  alt={t(heroScene.alt)}
                  fill
                  priority
                  sizes="(min-width: 768px) 440px, 100vw"
                  className="anime-ink-image object-cover"
                  style={{ objectPosition: heroScene.objectPosition }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-background/95 px-4 py-3 sm:px-5" aria-live="polite" aria-atomic="true">
                  <span className="font-mono text-xs font-semibold text-foreground">{t(heroScene.label)}</span>
                  <span className="font-mono text-[10px] text-accent">0{heroSceneIndex + 1} / 0{animeScenes.length}</span>
                </div>
              </div>
              <div className="anime-scene-selector" aria-label={t(animeCopy.now.title)}>
                {animeScenes.map((scene, index) => (
                  <button key={scene.id} type="button" aria-pressed={heroSceneIndex === index} onClick={() => setHeroSceneIndex(index)}>
                    <span className="font-mono text-[10px]">0{index + 1}</span>{t(scene.label)}
                  </button>
                ))}
              </div>
              <div className="anime-hero-controls" aria-label={language === "zh" ? "切换主视觉场景" : "Change hero scene"}>
                <button type="button" onClick={() => changeHeroScene(-1)} className="anime-arrow-button" aria-label={language === "zh" ? "上一张场景" : "Previous scene"}>
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => changeHeroScene(1)} className="anime-arrow-button anime-arrow-button-primary" aria-label={language === "zh" ? "下一张场景" : "Next scene"}>
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="favorites" className="scroll-mt-20 border-b border-line px-4 py-10 sm:px-8 sm:py-14" aria-labelledby="anime-favorites-title">
        <div className="anime-editorial-section mx-auto max-w-6xl">
          <Reveal><AnimeHeading index={animeCopy.favorites.index} id="anime-favorites-title" title={t(animeCopy.favorites.title)} description={t(animeCopy.favorites.description)} /></Reveal>
          <div className="anime-mood-grid">
            {animePreferences.map((preference, index) => (
              <Reveal key={preference.id} delay={index * 0.04}>
                <article className="anime-mood-item">
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] text-accent">SCENE {String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 text-base font-black leading-snug sm:text-lg">{t(preference.label)}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">{t(preference.description)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="titles" className="scroll-mt-20 border-b border-line px-4 py-10 sm:px-8 sm:py-14" aria-labelledby="anime-titles-title">
        <div className="anime-editorial-section mx-auto max-w-6xl">
          <Reveal><AnimeHeading index={animeCopy.titles.index} id="anime-titles-title" title={t(animeCopy.titles.title)} description={t(animeCopy.titles.description)} /></Reveal>
          <div className="anime-title-grid">
            {animeTitles.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 0.04}>
                <article className="anime-title-card">
                  <div className="min-w-0 flex-1 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="anime-pending-label">{t(animeCopy.titles.pending)}</span>
                      <span className="font-mono text-xs text-muted">{entry.year} · {t(entry.theme)}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-black leading-tight">{t(entry.title)}</h3>
                    <p className="mt-1 text-xs text-muted">{entry.originalTitle}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">{t(entry.description)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="notes" className="scroll-mt-20 px-4 py-10 sm:px-8 sm:py-14" aria-labelledby="anime-notes-title">
        <div className="anime-editorial-section mx-auto max-w-6xl">
          <Reveal><AnimeHeading index={animeCopy.notes.index} id="anime-notes-title" title={t(animeCopy.notes.title)} description={t(animeCopy.notes.description)} /></Reveal>
          <Reveal delay={0.06}>
            <div className="anime-notes-empty">
              <BookOpen className="size-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold">{t(animeCopy.notes.empty)}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{t(animeCopy.notes.emptyBody)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line px-4 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <strong className="font-mono text-sm">ORION JIANG</strong>
            <p className="mt-2 text-xs text-muted">{t(animeCopy.footer.status)}</p>
          </div>
          <Link href="/side-b/" className="inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-sm font-semibold text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {t(animeCopy.footer.hub)}<ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </>
  );
}

function AnimeHeading({ index, id, title, description }: { index: string; id: string; title: string; description: string }) {
  return (
    <div className="anime-section-heading">
      <span className="font-mono text-sm font-bold leading-7 text-accent">{index}</span>
      <div className="min-w-0">
        <h2 id={id} className="text-xl font-bold leading-snug sm:text-2xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      </div>
    </div>
  );
}
