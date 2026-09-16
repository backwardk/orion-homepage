"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { homeCopy } from "@/data/home";
import styles from "@/components/personal-homepage.module.css";

export function PersonalHeader() {
  const { t } = useLanguage();
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.wordmark} aria-label={t(homeCopy.home)}>
          <span className={styles.monogram} aria-hidden="true">OJ</span>
          <span>Orion Jiang<span className={styles.wordmarkNote}>PERSONAL NOTES</span></span>
        </Link>
        <nav className={styles.navigation} aria-label={t(homeCopy.home)}>
          <Link href="/#interests">{t(homeCopy.nav.interests)}</Link>
          <Link href="/#garden">{t(homeCopy.nav.notes)}</Link>
          <Link href="/#contact">{t(homeCopy.nav.contact)}</Link>
        </nav>
        <div className={styles.settings}><LanguageToggle /><ThemeToggle /></div>
      </div>
    </header>
  );
}
