"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Archive,
  ArrowUpRight,
  BookOpen,
  Box,
  ExternalLink,
  Gamepad2,
  Library,
  LockKeyhole,
  PackageOpen,
  RefreshCw,
  Sparkles,
  Ticket
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { gameCartridges, gameShopCopy } from "@/data/game-cartridges";
import { gamePreferences, steamGames, steamProfileUrl, steamStats } from "@/data/games";
import { pickCartridge } from "@/lib/game-shop";
import type { GameCartridge } from "@/types/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type ShopTab = "counter" | "collection" | "archive" | "notes";
type DrawOutcome = "new" | "duplicate" | "exchange" | null;

const tabIcons = {
  counter: Box,
  collection: Library,
  archive: Archive,
  notes: BookOpen
} as const;

function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function GamesPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ShopTab>("counter");
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [fragments, setFragments] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const [consecutiveDuplicates, setConsecutiveDuplicates] = useState(0);
  const [latestId, setLatestId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [drawOutcome, setDrawOutcome] = useState<DrawOutcome>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const collectedSet = useMemo(() => new Set(collectedIds), [collectedIds]);
  const missingCartridges = gameCartridges.filter((cartridge) => !collectedSet.has(cartridge.id));
  const latestCartridge = gameCartridges.find((cartridge) => cartridge.id === latestId) ?? null;
  const selectedCartridge = gameCartridges.find((cartridge) => cartridge.id === selectedId) ?? latestCartridge;
  const complete = collectedIds.length === gameCartridges.length;
  const guaranteeMissing = consecutiveDuplicates >= 3 && !complete;

  function drawCartridge() {
    if (isDrawing || complete) return;

    const cartridge = pickCartridge(gameCartridges, collectedIds, guaranteeMissing);
    const duplicate = collectedSet.has(cartridge.id);
    setIsDrawing(true);
    setDrawOutcome(null);

    timerRef.current = setTimeout(() => {
      setDrawCount((count) => count + 1);
      setLatestId(cartridge.id);
      setSelectedId(cartridge.id);

      if (duplicate) {
        setFragments((count) => count + 1);
        setConsecutiveDuplicates((count) => count + 1);
        setDrawOutcome("duplicate");
      } else {
        setCollectedIds((ids) => [...ids, cartridge.id]);
        setConsecutiveDuplicates(0);
        setDrawOutcome("new");
      }

      setIsDrawing(false);
    }, 620);
  }

  function exchangeCartridge(cartridge: GameCartridge) {
    if (fragments < 3 || collectedSet.has(cartridge.id) || isDrawing) return;

    setFragments((count) => count - 3);
    setCollectedIds((ids) => [...ids, cartridge.id]);
    setConsecutiveDuplicates(0);
    setLatestId(cartridge.id);
    setSelectedId(cartridge.id);
    setDrawOutcome("exchange");
    setActiveTab("collection");
  }

  function selectCartridge(cartridgeId: string) {
    setSelectedId(cartridgeId);
    requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  }

  function resetSession() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveTab("counter");
    setCollectedIds([]);
    setFragments(0);
    setDrawCount(0);
    setConsecutiveDuplicates(0);
    setLatestId(null);
    setSelectedId(null);
    setDrawOutcome(null);
    setIsDrawing(false);
  }

  const outcomeText = drawOutcome === "new"
    ? t(gameShopCopy.counter.newFound)
    : drawOutcome === "duplicate"
      ? t(gameShopCopy.counter.duplicate)
      : drawOutcome === "exchange"
        ? t(gameShopCopy.counter.exchanged)
        : t(gameShopCopy.counter.firstHint);

  return (
    <div className="game-shop min-h-screen px-4 pb-10 pt-24 sm:px-7 sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <header className="game-shop-sign">
          <div>
            <p className="game-shop-kicker">PLAYER ARCHIVE // STORE 01</p>
            <h1 className="game-shop-title">{t(gameShopCopy.title)}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">{t(gameShopCopy.subtitle)}</p>
          </div>
          <button type="button" onClick={resetSession} className="game-shop-reset" aria-label={t(gameShopCopy.actions.reset)}>
            <RefreshCw className="size-4" aria-hidden="true" />
            <span>{t(gameShopCopy.actions.reset)}</span>
          </button>
        </header>

        <div className="game-shop-status" aria-label={language === "zh" ? "本局收藏状态" : "Current collection status"}>
          <ShopStat label={t(gameShopCopy.stats.collection)} value={`${collectedIds.length}/${gameCartridges.length}`} icon={<Gamepad2 className="size-4" />} />
          <ShopStat label={t(gameShopCopy.stats.fragments)} value={String(fragments)} icon={<Ticket className="size-4" />} />
          <ShopStat label={t(gameShopCopy.stats.draws)} value={String(drawCount)} icon={<PackageOpen className="size-4" />} />
          <div className="game-progress-track" aria-hidden="true">
            {gameCartridges.map((cartridge) => <span key={cartridge.id} className={collectedSet.has(cartridge.id) ? "is-filled" : ""} />)}
          </div>
        </div>

        <nav className="game-shop-tabs" aria-label={language === "zh" ? "收藏店菜单" : "Collection shop menu"}>
          {(Object.keys(tabIcons) as ShopTab[]).map((tab) => {
            const Icon = tabIcons[tab];
            const current = activeTab === tab;
            const locked = tab === "notes" && !complete;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-current={current ? "page" : undefined}
                className={`game-shop-tab ${current ? "is-current" : ""}`}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{t(gameShopCopy.tabs[tab])}</span>
                {locked ? <LockKeyhole className="size-3" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </nav>

        <main className="game-shop-window">
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "counter" ? (
              <motion.section key="counter" id="counter" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }} className="game-counter" aria-labelledby="counter-title">
                <div className="game-counter-copy">
                  <p className="game-shop-kicker">{t(gameShopCopy.counter.eyebrow)}</p>
                  <h2 id="counter-title" className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{t(gameShopCopy.counter.title)}</h2>
                  <p className="mt-5 max-w-xl leading-8 text-muted">{t(gameShopCopy.counter.description)}</p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {gameCartridges.map((cartridge) => (
                      <span key={cartridge.id} className={`game-counter-slot ${collectedSet.has(cartridge.id) ? "is-collected" : ""}`}>
                        {collectedSet.has(cartridge.id) ? cartridge.title : "???"}
                      </span>
                    ))}
                  </div>

                  {guaranteeMissing ? (
                    <p className="game-pity-banner"><Sparkles className="size-4" aria-hidden="true" />{t(gameShopCopy.counter.pity)}</p>
                  ) : null}

                  {fragments >= 3 && missingCartridges.length > 0 ? (
                    <div className="game-exchange-panel">
                      <h3>{t(gameShopCopy.collection.exchangeTitle)}</h3>
                      <p>{t(gameShopCopy.collection.exchangeHint)}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {missingCartridges.map((cartridge) => (
                          <button key={cartridge.id} type="button" onClick={() => exchangeCartridge(cartridge)}>{cartridge.title}</button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="game-draw-counter">
                  <div className="game-draw-display" aria-live="polite" aria-busy={isDrawing}>
                    <AnimatePresence mode="wait">
                      {isDrawing ? (
                        <motion.div key="drawing" className="game-sealed-box" initial={{ scale: 0.9, rotate: -2 }} animate={{ scale: [0.9, 1.03, 0.98], rotate: [-2, 2, 0] }} exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 0.58 }}>
                          <Box className="size-16" aria-hidden="true" />
                          <span>{t(gameShopCopy.counter.drawing)}</span>
                        </motion.div>
                      ) : latestCartridge ? (
                        <motion.div key={latestCartridge.id + drawOutcome} className={`game-result-cartridge accent-${latestCartridge.accent}`} initial={{ opacity: 0, rotateY: 90, scale: 0.86 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }} transition={{ duration: 0.42 }}>
                          <div className="relative aspect-[2/3] overflow-hidden">
                            <Image src={assetPath(latestCartridge.coverImage)} alt={`${latestCartridge.title} cover`} fill sizes="(min-width: 768px) 300px, 72vw" className="object-cover" priority />
                          </div>
                          <div className="game-cartridge-label">
                            <strong>{latestCartridge.title}</strong>
                            <span>{t(latestCartridge.genre)}</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key="empty" className="game-sealed-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <Box className="size-16" aria-hidden="true" />
                          <span>CARTRIDGE BOX // 01</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <p className={`game-outcome ${drawOutcome ? "has-result" : ""}`}>{outcomeText}</p>
                  {complete ? (
                    <button type="button" className="game-draw-button is-complete" onClick={() => setActiveTab("notes")}>
                      <Sparkles className="size-5" aria-hidden="true" />{t(gameShopCopy.counter.complete)}
                    </button>
                  ) : (
                    <button type="button" className="game-draw-button" onClick={drawCartridge} disabled={isDrawing}>
                      <PackageOpen className="size-5" aria-hidden="true" />{isDrawing ? t(gameShopCopy.counter.drawing) : t(gameShopCopy.counter.draw)}
                    </button>
                  )}
                  <p className="mt-3 text-center text-xs leading-5 text-muted">{t(gameShopCopy.counter.session)}</p>
                </div>
              </motion.section>
            ) : null}

            {activeTab === "collection" ? (
              <motion.section key="collection" id="collection" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }} aria-labelledby="collection-title">
                <SectionIntro eyebrow={t(gameShopCopy.collection.eyebrow)} title={t(gameShopCopy.collection.title)} description={t(gameShopCopy.collection.description)} id="collection-title" />
                <div className="game-collection-grid">
                  {gameCartridges.map((cartridge, index) => {
                    const unlocked = collectedSet.has(cartridge.id);
                    return <CartridgeShelfItem key={cartridge.id} cartridge={cartridge} index={index} unlocked={unlocked} selected={selectedCartridge?.id === cartridge.id} lockedLabel={t(gameShopCopy.collection.locked)} genre={t(cartridge.genre)} memory={t(cartridge.memory)} memoryLabel={t(gameShopCopy.collection.memory)} onSelect={() => unlocked && selectCartridge(cartridge.id)} />;
                  })}
                </div>
                {selectedCartridge && collectedSet.has(selectedCartridge.id) ? (
                  <div ref={detailRef}>
                    <CartridgeDetail cartridge={selectedCartridge} memoryLabel={t(gameShopCopy.collection.memory)} playtimeLabel={t(gameShopCopy.collection.playtime)} t={t} />
                  </div>
                ) : null}
              </motion.section>
            ) : null}

            {activeTab === "archive" ? (
              <motion.section key="archive" id="archive" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }} aria-labelledby="archive-title">
                <SectionIntro eyebrow={t(gameShopCopy.archive.eyebrow)} title={t(gameShopCopy.archive.title)} description={t(gameShopCopy.archive.description)} id="archive-title" />
                <div className="game-archive-layout">
                  <div className="game-archive-stats">
                    <ArchiveStat value={steamStats.owned.toLocaleString()} label={language === "zh" ? "已拥有" : "Owned"} />
                    <ArchiveStat value={steamStats.played.toLocaleString()} label={language === "zh" ? "已游玩" : "Played"} />
                    <ArchiveStat value={`${steamStats.totalHours.toLocaleString()}h`} label={language === "zh" ? "总时长" : "Total Hours"} />
                  </div>
                  <div className="game-preference-list">
                    {gamePreferences.map((preference, index) => (
                      <article key={preference.id}>
                        <span>0{index + 1}</span>
                        <div><h3>{t(preference.label)}</h3><p>{t(preference.description)}</p></div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="game-archive-footer">
                  <div>
                    <span>TOP TRACE</span>
                    <strong>{steamGames[0].title}</strong>
                    <small>{steamGames[0].playtimeHours.toLocaleString()} h</small>
                  </div>
                  <a href={steamProfileUrl} target="_blank" rel="noreferrer">{language === "zh" ? "查看 Steam 档案" : "Open Steam Profile"}<ExternalLink className="size-4" /></a>
                </div>
              </motion.section>
            ) : null}

            {activeTab === "notes" ? (
              <motion.section key="notes" id="notes" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }} className="game-notes-room" aria-labelledby="notes-title">
                <div className="game-notes-illustration">
                  <Image src={assetPath("/side-b/notes.webp")} alt="" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
                  <span className="game-notes-stamp">{complete ? "ARCHIVE COMPLETE" : "LOCKED ARCHIVE"}</span>
                </div>
                <div className="game-notes-copy">
                  <p className="game-shop-kicker">{t(gameShopCopy.notes.eyebrow)}</p>
                  <h2 id="notes-title" className="mt-5 text-3xl font-black leading-tight sm:text-5xl">{t(gameShopCopy.notes.title)}</h2>
                  <p className="mt-6 leading-8 text-muted">{complete ? t(gameShopCopy.notes.unlocked) : t(gameShopCopy.notes.locked)}</p>
                  {complete ? (
                    <Link href="/garden/single-player-games/" className="game-note-link">{t(gameShopCopy.notes.read)}<ArrowUpRight className="size-4" /></Link>
                  ) : (
                    <button type="button" onClick={() => setActiveTab("counter")} className="game-note-link"><LockKeyhole className="size-4" />{t(gameShopCopy.actions.back)}</button>
                  )}
                </div>
              </motion.section>
            ) : null}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function ShopStat({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return <div className="game-shop-stat"><span>{icon}{label}</span><strong>{value}</strong></div>;
}

function SectionIntro({ eyebrow, title, description, id }: { eyebrow: string; title: string; description: string; id: string }) {
  return <header className="game-section-intro"><p className="game-shop-kicker">{eyebrow}</p><h2 id={id}>{title}</h2><p>{description}</p></header>;
}

function CartridgeShelfItem({ cartridge, index, unlocked, selected, lockedLabel, genre, memory, memoryLabel, onSelect }: { cartridge: GameCartridge; index: number; unlocked: boolean; selected: boolean; lockedLabel: string; genre: string; memory: string; memoryLabel: string; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} disabled={!unlocked} aria-pressed={unlocked ? selected : undefined} className={`game-shelf-cartridge accent-${cartridge.accent} ${unlocked ? "is-unlocked" : "is-locked"} ${selected ? "is-selected" : ""}`}>
      <span className="game-cartridge-flip">
        <span className="game-cartridge-face game-cartridge-front">
          <span className="game-shelf-index">SLOT {String(index + 1).padStart(2, "0")}</span>
          <span className="game-shelf-cover">
            {unlocked ? <Image src={assetPath(cartridge.coverImage)} alt="" fill sizes="(min-width: 1280px) 180px, (min-width: 640px) 28vw, 44vw" className="object-cover" /> : <span className="game-locked-cover"><LockKeyhole className="size-8" /><small>{lockedLabel}</small></span>}
          </span>
          <span className="game-shelf-label"><strong>{unlocked ? cartridge.title : "UNKNOWN"}</strong><small>{unlocked ? genre : "---"}</small></span>
        </span>
        {unlocked ? (
          <span className="game-cartridge-face game-cartridge-back">
            <span className="game-card-memory-label">{memoryLabel}</span>
            <strong>{cartridge.title}</strong>
            <span className="game-card-memory-text">{memory}</span>
            <small>{genre} // {cartridge.playtimeHours.toLocaleString()} h</small>
          </span>
        ) : null}
      </span>
    </button>
  );
}
function CartridgeDetail({ cartridge, memoryLabel, playtimeLabel, t }: { cartridge: GameCartridge; memoryLabel: string; playtimeLabel: string; t: (text: { zh: string; en: string }) => string }) {
  return (
    <article className={`game-cartridge-detail accent-${cartridge.accent}`}>
      <div className="relative min-h-64 overflow-hidden sm:min-h-80">
        <Image src={assetPath(cartridge.coverImage)} alt={`${cartridge.title} cover`} fill sizes="(min-width: 768px) 36vw, 100vw" className="object-cover" />
      </div>
      <div className="game-cartridge-memory">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div><span>{t(cartridge.genre)}</span><h3>{cartridge.title}</h3></div>
          <div className="text-right"><small>{playtimeLabel}</small><strong>{cartridge.playtimeHours.toLocaleString()} h</strong></div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">{cartridge.features.map((feature) => <span key={feature.zh} className="game-feature-chip">{t(feature)}</span>)}</div>
        <h4>{memoryLabel}</h4>
        <p>{t(cartridge.memory)}</p>
      </div>
    </article>
  );
}

function ArchiveStat({ value, label }: { value: string; label: string }) {
  return <div><strong>{value}</strong><span>{label}</span></div>;
}