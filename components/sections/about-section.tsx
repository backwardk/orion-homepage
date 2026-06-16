"use client";

import { Reveal } from "@/components/motion";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft dark:shadow-soft-dark">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(196,154,108,0.28),transparent_30%),linear-gradient(180deg,rgba(255,255,252,0.86),rgba(250,250,247,0.96))] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(196,154,108,0.18),transparent_30%),linear-gradient(180deg,rgba(35,32,29,0.94),rgba(25,25,25,1))]" />
            <div className="absolute left-1/2 top-[18%] h-28 w-28 -translate-x-1/2 rounded-full border border-accent/20 bg-accent/15" />
            <div className="absolute bottom-[16%] left-1/2 h-52 w-48 -translate-x-1/2 rounded-t-[5rem] border border-accent/20 bg-accent/10" />
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between border-t border-line pt-5 text-xs text-muted">
              <span>{t(siteCopy.about.portrait)}</span>
              <span>Orion Jiang</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <h2 id="about-title" className="font-chinese text-4xl font-semibold leading-tight sm:text-5xl">
              {t(siteCopy.about.title)}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-muted sm:text-xl sm:leading-10">
              {siteCopy.about.body[language].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
