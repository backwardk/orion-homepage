"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ExternalLink, Gamepad2 } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useLanguage } from "@/components/language-provider";
import { articles } from "@/data/articles";
import { gamePreferences, gamesCopy, singlePlayerGames, steamGames, steamProfileUrl, steamStats } from "@/data/games";
import type { SteamGameEntry } from "@/types/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function GamesPage() {
  const { language, t } = useLanguage();
  const gameArticles = articles.filter((article) => article.channel === "games");
  const shelfGames = singlePlayerGames.slice(0, 5);
  const [activeGameId, setActiveGameId] = useState(shelfGames[0]?.appId ?? 0);
  const activeGame = shelfGames.find((game) => game.appId === activeGameId) ?? shelfGames[0];
  const maxHours = Math.max(...steamGames.map((game) => game.playtimeHours), 1);

  return (
    <>
      <section id="games-home" className="border-b border-line px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36" aria-labelledby="games-title">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div>
              <p className="font-mono text-xs font-semibold text-accent">SINGLE-PLAYER LIBRARY // PERSONAL NOTES</p>
              <h1 id="games-title" className="mt-6 text-6xl font-black leading-none sm:text-8xl lg:text-[5.4rem]">GAMES</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">{t(gamesCopy.hero.description)}</p>
              <ul className="mt-9 grid gap-px border border-line bg-line sm:grid-cols-3">
                {gamesCopy.hero.values.map((value, index) => (
                  <li key={value.zh} className="bg-background px-4 py-4">
                    <span className="font-mono text-[10px] text-accent">0{index + 1}</span>
                    <strong className="mt-2 block text-sm font-semibold">{t(value)}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="game-library-menu">
              <div className="game-cover-shelf" aria-label={language === "zh" ? "单机游戏封面" : "Single-player game covers"}>
                {shelfGames.map((game, index) => {
                  const selected = activeGame?.appId === game.appId;
                  return (
                    <button
                      key={game.appId}
                      type="button"
                      aria-expanded={selected}
                      aria-controls="game-cover-detail"
                      onMouseEnter={() => setActiveGameId(game.appId)}
                      onFocus={() => setActiveGameId(game.appId)}
                      onClick={() => setActiveGameId(game.appId)}
                      className={`game-cover-item group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${selected ? "is-active" : ""}`}
                      style={{ translate: index === 0 ? "0 -18px" : index === 2 ? "0 -8px" : undefined }}
                    >
                      <span className="relative block aspect-[2/3] overflow-hidden border border-line bg-surface">
                        <Image src={assetPath(game.coverImage!)} alt="" fill sizes="(min-width: 1024px) 140px, 20vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                        <span className="game-cover-selection" aria-hidden="true" />
                      </span>
                      <span className="mt-2 block truncate text-[11px] text-muted">{game.title}</span>
                    </button>
                  );
                })}
              </div>

              {activeGame ? (
                <article key={activeGame.appId} id="game-cover-detail" className="game-cover-detail" aria-live="polite">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase text-accent">{t(gamesCopy.coverMenu.hint)}</p>
                      <h2 className="mt-2 text-xl font-black sm:text-2xl">{activeGame.title}</h2>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="block text-[10px] uppercase text-muted">{t(gamesCopy.coverMenu.playtime)}</span>
                      <strong className="mt-1 block font-mono text-sm text-game-gold">{activeGame.playtimeHours.toLocaleString()} h</strong>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/90">{activeGame.detail ? t(activeGame.detail) : ""}</p>
                  <div className="mt-4 flex flex-wrap gap-2" aria-label={t(gamesCopy.coverMenu.features)}>
                    {activeGame.features?.map((feature) => <span key={feature.zh} className="border border-line bg-background/55 px-2.5 py-1 font-mono text-[10px] text-muted">{t(feature)}</span>)}
                  </div>
                </article>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="notes" className="scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="game-notes-title">
        <div className="mx-auto max-w-6xl">
          <Reveal><ChannelHeading index={gamesCopy.notes.index} id="game-notes-title" title={t(gamesCopy.notes.title)} description={t(gamesCopy.notes.description)} /></Reveal>
          {gameArticles.map((article) => (
            <Reveal key={article.slug} delay={0.06}>
              <Link href={`/garden/${article.slug}`} className="group mt-10 grid border border-line bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-72 overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
                  <Image src={assetPath("/side-b/notes.webp")} alt={language === "zh" ? "手柄与笔记本的钢笔插画" : "Ink illustration of a controller and notebook"} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <span className="font-mono text-xs text-accent">PLAY NOTES // 001</span>
                  <h2 className="mt-6 text-3xl font-black leading-tight transition group-hover:text-accent sm:text-4xl">{t(article.title)}</h2>
                  <p className="mt-5 leading-8 text-muted">{t(article.summary)}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">{t(gamesCopy.notes.read)}<ArrowUpRight className="size-4" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="favorites" className="scroll-mt-16 border-y border-line bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="game-favorites-title">
        <div className="mx-auto max-w-6xl">
          <Reveal><ChannelHeading index={gamesCopy.favorites.index} id="game-favorites-title" title={t(gamesCopy.favorites.title)} description={t(gamesCopy.favorites.description)} /></Reveal>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {gamePreferences.map((preference, index) => (
              <Reveal key={preference.id} delay={index * 0.04}>
                <article className="min-h-52 bg-background p-6">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-10 text-xl font-bold">{t(preference.label)}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{t(preference.description)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="game-grid scroll-mt-16 px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="game-archive-title">
        <div className="mx-auto max-w-6xl">
          <Reveal><ChannelHeading index={gamesCopy.archive.index} id="game-archive-title" title={t(gamesCopy.archive.title)} description={t(gamesCopy.archive.note)} compact /></Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
              <div className="grid grid-cols-3 gap-px self-start border border-line bg-line lg:grid-cols-1">
                <GameStat value={steamStats.owned.toLocaleString()} label={t(gamesCopy.archive.labels.owned)} />
                <GameStat value={steamStats.played.toLocaleString()} label={t(gamesCopy.archive.labels.played)} />
                <GameStat value={`${steamStats.totalHours.toLocaleString()}h`} label={t(gamesCopy.archive.labels.total)} />
              </div>
              <div>
                <div className="overflow-hidden border border-line bg-surface">
                  <SteamRows games={steamGames.slice(0, 3)} maxHours={maxHours} startIndex={0} />
                  <details className="group border-t border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-muted transition hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent">
                      {t(gamesCopy.archive.fullRanking)}
                      <ChevronDown className="size-4 transition group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="border-t border-line"><SteamRows games={steamGames.slice(3)} maxHours={maxHours} startIndex={3} /></div>
                  </details>
                </div>
                <a href={steamProfileUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-accent focus:outline-none focus:ring-2 focus:ring-accent/50">
                  {t(gamesCopy.archive.source)}<ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="game-grid border-t border-line px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm"><Gamepad2 className="size-4 text-accent" /><span>{t(gamesCopy.footer.status)}</span></div>
          <Link href="/side-b/" className="inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-sm font-semibold text-accent">{t(gamesCopy.footer.hub)}<ArrowUpRight className="size-4" /></Link>
        </div>
      </footer>
    </>
  );
}

function SteamRows({ games, maxHours, startIndex }: { games: SteamGameEntry[]; maxHours: number; startIndex: number }) {
  return games.map((game, index) => (
    <div key={game.appId} className="grid grid-cols-[2rem_minmax(0,1fr)_4.8rem] items-center gap-3 border-b border-line px-3 py-3 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,1fr)_6rem] sm:px-4">
      <span className="font-mono text-[10px] text-accent">{String(startIndex + index + 1).padStart(2, "0")}</span>
      <div className="min-w-0">
        <h3 className="truncate text-xs font-semibold sm:text-sm">{game.title}</h3>
        <div className="mt-2 h-0.5 bg-line"><div className="h-full bg-accent" style={{ width: `${Math.max((game.playtimeHours / maxHours) * 100, 2)}%` }} /></div>
      </div>
      <span className="text-right font-mono text-[10px] text-game-gold sm:text-xs">{game.playtimeHours.toLocaleString()} h</span>
    </div>
  ));
}

function GameStat({ value, label }: { value: string; label: string }) {
  return <div className="bg-background px-2 py-4 text-center lg:px-4"><strong className="block text-lg text-game-gold sm:text-xl">{value}</strong><span className="mt-1 block text-[9px] uppercase text-muted sm:text-[10px]">{label}</span></div>;
}

function ChannelHeading({ index, id, title, description, compact = false }: { index: string; id: string; title: string; description: string; compact?: boolean }) {
  return <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-[5rem_1fr]"><span className="font-mono text-xs font-semibold text-accent">{index}</span><div><h2 id={id} className={`${compact ? "text-3xl sm:text-4xl" : "text-3xl sm:text-5xl"} font-black leading-tight`}>{title}</h2><p className="mt-4 max-w-2xl leading-8 text-muted">{description}</p></div></div>;
}