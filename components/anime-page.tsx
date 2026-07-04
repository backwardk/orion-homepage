"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useLanguage } from "@/components/language-provider";
import { animeCopy, animePreferences, animeScenes, animeTitles } from "@/data/anime";
import type { AnimeScene } from "@/data/anime";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function AnimePage() {
  const { language, t } = useLanguage();
  const [heroSceneIndex, setHeroSceneIndex] = useState(0);
  const [activeSceneId, setActiveSceneId] = useState(animeScenes[0].id);
  const heroScene = animeScenes[heroSceneIndex];

  function changeHeroScene(direction: number) {
    setHeroSceneIndex((current) => (current + direction + animeScenes.length) % animeScenes.length);
  }

  return (
    <>
      <section id="anime-home" className="border-b border-foreground px-4 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-28" aria-labelledby="anime-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-12">
          <Reveal>
            <div className="min-w-0 py-4 lg:py-8">
              <h1 id="anime-title" className="text-6xl font-black leading-[0.88] sm:text-8xl lg:text-[7rem]">ANIME</h1>
              <p className="mt-5 font-mono text-sm font-bold text-accent sm:text-base">{animeCopy.hero.subtitle}</p>
              <p className="mt-7 max-w-md text-base leading-8 text-muted sm:text-lg">{t(animeCopy.hero.description)}</p>
              <span className="mt-7 block h-1 w-12 bg-accent" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="anime-hero-stage">
              <div className="relative aspect-[16/9] min-h-60 overflow-hidden border-2 border-accent bg-surface sm:min-h-80">
                <Image
                  key={heroScene.id}
                  src={assetPath(heroScene.image)}
                  alt={t(heroScene.alt)}
                  fill
                  priority
                  sizes="(min-width: 1024px) 68vw, 100vw"
                  className="anime-ink-image object-cover"
                  style={{ objectPosition: heroScene.objectPosition }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-background/88 px-4 py-3 backdrop-blur-sm sm:px-5">
                  <span className="font-mono text-xs font-semibold text-foreground">{t(heroScene.label)}</span>
                  <span className="font-mono text-[10px] text-accent">0{heroSceneIndex + 1} / 0{animeScenes.length}</span>
                </div>
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

      <section id="now" className="scroll-mt-16 border-b border-foreground px-4 py-14 sm:px-8 sm:py-20" aria-labelledby="anime-now-title">
        <div className="anime-editorial-section mx-auto max-w-7xl">
          <Reveal><AnimeHeading index={animeCopy.now.index} id="anime-now-title" title={t(animeCopy.now.title)} description={t(animeCopy.now.description)} /></Reveal>
          <div className="anime-scene-grid">
            {animeScenes.map((scene, index) => (
              <Reveal key={scene.id} delay={index * 0.05}>
                <ScenePanel
                  scene={scene}
                  selected={activeSceneId === scene.id}
                  large={index === 0}
                  label={t(scene.label)}
                  alt={t(scene.alt)}
                  onSelect={() => setActiveSceneId(scene.id)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="favorites" className="scroll-mt-16 border-b border-foreground px-4 py-14 sm:px-8 sm:py-20" aria-labelledby="anime-favorites-title">
        <div className="anime-editorial-section mx-auto max-w-7xl">
          <Reveal><AnimeHeading index={animeCopy.favorites.index} id="anime-favorites-title" title={t(animeCopy.favorites.title)} description={t(animeCopy.favorites.description)} /></Reveal>
          <div className="anime-mood-grid">
            {animePreferences.map((preference, index) => (
              <Reveal key={preference.id} delay={index * 0.04}>
                <article className="anime-mood-item group">
                  <div className="relative aspect-square w-20 shrink-0 overflow-hidden border border-foreground sm:w-24">
                    <Image src={assetPath(preference.image)} alt="" fill sizes="96px" className="anime-ink-image object-cover transition duration-300 group-hover:scale-[1.03]" style={{ objectPosition: preference.objectPosition }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] text-accent">SCENE {String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 text-base font-black leading-snug sm:text-lg">{t(preference.label)}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">{t(preference.description)}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="titles" className="scroll-mt-16 border-b border-foreground px-4 py-14 sm:px-8 sm:py-20" aria-labelledby="anime-titles-title">
        <div className="anime-editorial-section mx-auto max-w-7xl">
          <Reveal><AnimeHeading index={animeCopy.titles.index} id="anime-titles-title" title={t(animeCopy.titles.title)} description={t(animeCopy.titles.description)} /></Reveal>
          <div className="anime-title-grid">
            {animeTitles.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 0.04}>
                <article className="anime-title-card group">
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-foreground">
                    <Image
                      src={assetPath(entry.image)}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 100vw"
                      className="anime-ink-image object-cover transition duration-300 group-hover:scale-[1.02]"
                      style={{ objectPosition: entry.objectPosition }}
                    />
                    <span className="absolute left-3 top-3 bg-accent px-2 py-1 font-mono text-[10px] font-bold text-white">{t(animeCopy.titles.pending)}</span>
                    <span className="absolute bottom-3 right-3 border border-foreground bg-background px-2 py-1 font-mono text-[10px]">{entry.year}</span>
                  </div>
                  <div className="p-5">
                    <span className="font-mono text-[10px] text-accent">TITLE {String(index + 1).padStart(2, "0")} // {t(entry.theme)}</span>
                    <h3 className="mt-3 text-xl font-black leading-tight">{t(entry.title)}</h3>
                    <p className="mt-1 text-xs text-muted">{entry.originalTitle}</p>
                    <p className="mt-4 text-sm leading-7 text-muted">{t(entry.description)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="notes" className="scroll-mt-16 px-4 py-14 sm:px-8 sm:py-20" aria-labelledby="anime-notes-title">
        <div className="anime-editorial-section mx-auto max-w-7xl">
          <Reveal><AnimeHeading index={animeCopy.notes.index} id="anime-notes-title" title={t(animeCopy.notes.title)} description={t(animeCopy.notes.description)} /></Reveal>
          <Reveal delay={0.06}>
            <div className="anime-notes-layout">
              <div className="relative min-h-64 overflow-hidden border-2 border-foreground sm:min-h-80">
                <Image src={assetPath("/side-b/notes.webp")} alt={language === "zh" ? "动画手记桌面的钢笔插画" : "Ink illustration of an anime notes desk"} fill sizes="(min-width: 1280px) 38vw, (min-width: 768px) 55vw, 100vw" className="anime-ink-image object-cover" />
              </div>
              <div className="flex min-h-56 flex-col justify-between border-x-2 border-b-2 border-foreground p-6 sm:p-8 md:border-l-0 md:border-t-2 xl:border-r-0">
                <span className="font-mono text-xs text-accent">PERSONAL ARCHIVE // 001</span>
                <div className="mt-10">
                  <h3 className="text-2xl font-black leading-tight sm:text-3xl">{t(animeCopy.notes.empty)}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{t(animeCopy.notes.emptyBody)}</p>
                </div>
              </div>
              <div className="flex min-h-44 flex-col items-center justify-center border-x-2 border-b-2 border-foreground p-6 text-center md:col-span-2 xl:col-span-1 xl:border-l-2 xl:border-t-2">
                <span className="font-mono text-5xl font-black text-accent/30">03</span>
                <p className="mt-4 text-sm font-semibold text-muted">{t(animeCopy.notes.empty)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t-2 border-foreground px-4 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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

function ScenePanel({ scene, selected, large, label, alt, onSelect }: { scene: AnimeScene; selected: boolean; large: boolean; label: string; alt: string; onSelect: () => void }) {
  return (
    <button type="button" aria-pressed={selected} onClick={onSelect} className={`anime-scene-panel group ${large ? "anime-scene-panel-large" : ""} ${selected ? "is-active" : ""}`}>
      <Image src={assetPath(scene.image)} alt={alt} fill sizes={large ? "(min-width: 1024px) 48vw, 100vw" : "(min-width: 1024px) 24vw, 50vw"} className="anime-ink-image object-cover transition duration-300 group-hover:scale-[1.015]" style={{ objectPosition: scene.objectPosition }} />
      <span className="absolute bottom-3 left-3 border border-foreground bg-background/92 px-3 py-2 text-left text-xs font-bold backdrop-blur-sm sm:text-sm">{label}</span>
    </button>
  );
}

function AnimeHeading({ index, id, title, description }: { index: string; id: string; title: string; description: string }) {
  return (
    <div className="anime-section-heading">
      <span className="font-mono text-5xl font-black leading-none text-accent sm:text-6xl">{index}</span>
      <div className="min-w-0">
        <h2 id={id} className="text-2xl font-black leading-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      </div>
    </div>
  );
}