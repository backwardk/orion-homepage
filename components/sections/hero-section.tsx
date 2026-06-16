"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRightIcon } from "@/components/ui/arrow-icons";
import { ButtonLink } from "@/components/ui/button-link";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function HeroSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-28 sm:px-8"
      aria-labelledby="hero-title"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-[-20%] top-0 h-[72vh] bg-[radial-gradient(circle_at_20%_25%,rgba(196,154,108,0.28),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(140,106,74,0.18),transparent_30%),linear-gradient(135deg,rgba(250,250,247,0.94),rgba(255,247,235,0.62),rgba(250,250,247,0.9))] dark:bg-[radial-gradient(circle_at_20%_25%,rgba(196,154,108,0.18),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(140,106,74,0.16),transparent_30%),linear-gradient(135deg,rgba(17,17,17,0.96),rgba(35,29,24,0.7),rgba(17,17,17,0.94))]"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.035, 1], x: [0, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <motion.h1
            id="hero-title"
            className="max-w-3xl font-chinese text-6xl font-semibold leading-[1.04] text-foreground sm:text-7xl lg:text-8xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteCopy.hero.name}
          </motion.h1>
          <motion.p
            className="mt-4 text-2xl font-medium text-accent sm:text-3xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteCopy.hero.englishName}
          </motion.p>
          <motion.p
            className="mt-8 max-w-xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {t(siteCopy.hero.tagline)}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <ButtonLink href="#about" variant="primary">
              {t(siteCopy.hero.actions.about)}
            </ButtonLink>
            <ButtonLink href="#garden">{t(siteCopy.hero.actions.garden)}</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              {t(siteCopy.hero.actions.contact)}
              <ArrowDownRightIcon className="ml-2 size-4" />
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          className="relative ml-auto hidden w-full max-w-sm lg:block"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="aspect-[4/5] rounded-[2rem] border border-line bg-surface/65 p-6 shadow-soft backdrop-blur dark:shadow-soft-dark">
            <div className="flex h-full flex-col justify-between">
              <div className="h-36 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(140,106,74,0.18),rgba(196,154,108,0.1)),radial-gradient(circle_at_68%_28%,rgba(196,154,108,0.34),transparent_28%)]" />
              <div className="space-y-4">
                <div className="h-px w-full bg-line" />
                <p className="text-4xl font-semibold leading-tight">{t(siteCopy.hero.noteTitle)}</p>
                <p className="text-sm leading-6 text-muted">
                  {t(siteCopy.hero.noteBody)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
