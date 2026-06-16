"use client";

import { motion } from "framer-motion";
import { InterestIcon } from "@/components/icon-map";
import { Reveal } from "@/components/motion";
import { interests } from "@/data/interests";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function InterestsSection() {
  const { t } = useLanguage();

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="interests-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <h2 id="interests-title" className="font-chinese text-4xl font-semibold leading-tight sm:text-5xl">
              {t(siteCopy.interests.title)}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">{t(siteCopy.interests.description)}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest, index) => (
            <Reveal key={interest.icon} delay={index * 0.035}>
              <motion.div
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.25 }}
                className="group flex min-h-36 flex-col justify-between rounded-2xl border border-line bg-surface/72 p-5 shadow-sm backdrop-blur transition hover:border-accent/35 hover:shadow-soft dark:hover:shadow-soft-dark"
              >
                <InterestIcon icon={interest.icon} className="size-6 text-accent" />
                <span className="mt-8 text-lg font-medium">{t(interest.label)}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
