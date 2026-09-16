"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Copy, Gamepad2, Github, Mail, MonitorPlay } from "lucide-react";
import { PersonalHeader } from "@/components/personal-header";
import { useLanguage } from "@/components/language-provider";
import { homeCopy, homeGameNames } from "@/data/home";
import { gameCartridges } from "@/data/game-cartridges";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site-config";
import { steamProfileUrl } from "@/data/games";
import { quotes } from "@/data/quotes";
import { getNextQuoteIndex } from "@/lib/quote-rotation";
import { formatDate } from "@/lib/format-date";
import styles from "@/components/personal-homepage.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const featuredNote = articles.find((article) => article.slug === "single-player-games");

export function PersonalHomepage() {
  const { language, t } = useLanguage();
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#home">{t(homeCopy.skip)}</a>
      <PersonalHeader />
      <main id="home" className={styles.container}>
        <section id="about" className={styles.introduction} aria-labelledby="intro-title">
          <p className={styles.eyebrow}>{t(homeCopy.intro.eyebrow)}</p>
          <h1 id="intro-title"><span>{t(homeCopy.intro.greeting)}</span> {t(homeCopy.intro.name)}<span className={styles.nameDot}>.</span></h1>
          <p className={styles.introBody}>{t(homeCopy.intro.body)}</p>
          <p className={styles.introNote}>{t(homeCopy.intro.note)}</p>
          <p className={styles.invitation}>{t(homeCopy.intro.invitation)}</p>
          <a href="#interests" className={styles.textLink}>{t(homeCopy.intro.scroll)}<ArrowDown size={16} aria-hidden="true" /></a>
          <span className={styles.signature} aria-hidden="true">Orion Jiang</span>
        </section>

        <section id="interests" className={styles.section} aria-labelledby="interests-title">
          <SectionHeading kicker={t(homeCopy.interests.kicker)} title={t(homeCopy.interests.title)} body={t(homeCopy.interests.body)} id="interests-title" />
          <div className={styles.shelfHeading}><Gamepad2 size={19} aria-hidden="true" /><h3>{t(homeCopy.interests.games)}</h3><span>06</span></div>
          <div className={styles.gameShelf}>
            {gameCartridges.map((game) => {
              const title = t(homeGameNames[game.id]);
              return (
                <details key={game.id} className={styles.gameNote}>
                  <summary aria-label={`${title} · ${t(homeCopy.interests.openMemory)}`}>
                    <Image src={`${basePath}${game.coverImage}`} alt="" width={80} height={120} sizes="80px" className={styles.cover} />
                    <span className={styles.gameCopy}>
                      <span className={styles.genre}>{t(game.genre)}</span>
                      <strong>{title}</strong>
                      <span className={styles.gameTraits}>{game.features.slice(0, 2).map(t).join(" · ")}</span>
                      <span className={styles.memoryLabel}>{t(homeCopy.interests.memory)}<ChevronDown size={15} aria-hidden="true" /></span>
                    </span>
                  </summary>
                  <div className={styles.memory}><p>{t(game.memory)}</p></div>
                </details>
              );
            })}
          </div>
          <div className={styles.animeAside}>
            <MonitorPlay size={22} aria-hidden="true" />
            <div><h3>{t(homeCopy.interests.anime)}</h3><p>{t(homeCopy.interests.animeBody)}</p></div>
          </div>
        </section>

        <section id="garden" className={styles.section} aria-labelledby="notes-title">
          <SectionHeading kicker={t(homeCopy.notes.kicker)} title={t(homeCopy.notes.title)} body={t(homeCopy.notes.body)} id="notes-title" />
          {featuredNote && (
            <Link href={`/garden/${featuredNote.slug}/`} className={styles.article}>
              <div className={styles.articleMeta}><time dateTime={featuredNote.publishedAt}>{formatDate(featuredNote.publishedAt, language)}</time><span>{t(featuredNote.category)}</span></div>
              <div className={styles.articleBody}><h3>{t(featuredNote.title)}</h3><p>{t(featuredNote.summary)}</p><span>{t(featuredNote.readingTime)}<span aria-hidden="true"> · </span>{t(homeCopy.notes.read)}</span></div>
              <ArrowUpRight size={22} aria-hidden="true" />
            </Link>
          )}
        </section>

        <Contact />
        <FavoriteLine />
      </main>
      <footer className={`${styles.container} ${styles.footer}`}>
        <span>© {new Date().getFullYear()} {siteConfig.englishName}</span>
        <span>{t(homeCopy.footer)}</span>
      </footer>
    </div>
  );
}

function SectionHeading({ kicker, title, body, id }: { kicker: string; title: string; body: string; id: string }) {
  return <header className={styles.sectionHeading}><p className={styles.eyebrow}>{kicker}</p><h2 id={id}>{title}</h2><p>{body}</p></header>;
}

function Contact() {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const timer = setTimeout(() => setCopyState("idle"), 4000);
    return () => clearTimeout(timer);
  }, [copyState]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <section id="contact" className={`${styles.section} ${styles.contact}`} aria-labelledby="contact-title">
      <SectionHeading kicker={t(homeCopy.contact.kicker)} title={t(homeCopy.contact.title)} body={t(homeCopy.contact.body)} id="contact-title" />
      <div className={styles.contactActions}>
        <a href={`mailto:${siteConfig.email}`} className={styles.emailButton}><Mail size={18} aria-hidden="true" />{t(homeCopy.contact.email)}<ArrowUpRight size={16} aria-hidden="true" /></a>
        <a href={steamProfileUrl} target="_blank" rel="noreferrer"><Gamepad2 size={18} aria-hidden="true" />{t(homeCopy.contact.steam)}<ArrowUpRight size={14} aria-hidden="true" /></a>
        <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" />{t(homeCopy.contact.github)}<ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <div className={styles.emailAddress}>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <button type="button" onClick={copyEmail} title={t(homeCopy.contact.copy)} aria-label={t(homeCopy.contact.copy)}>{copyState === "copied" ? <Check size={16} /> : <Copy size={16} />}</button>
      </div>
      <p role="status" className={styles.copyStatus}>{copyState === "copied" ? t(homeCopy.contact.copied) : copyState === "failed" ? t(homeCopy.contact.copyFailed) : ""}</p>
    </section>
  );
}

function FavoriteLine() {
  const { t } = useLanguage();
  const [quoteIndex, setQuoteIndex] = useState(0);
  useEffect(() => setQuoteIndex(getNextQuoteIndex(quotes.length)), []);
  return <aside className={styles.quote} aria-label={t(homeCopy.quote)}><p className={styles.eyebrow}>{t(homeCopy.quote)}</p><blockquote>{quotes[quoteIndex].text}</blockquote></aside>;
}
