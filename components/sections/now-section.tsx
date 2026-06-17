"use client";

import { Reveal } from "@/components/motion";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function NowSection() {
  const { t } = useLanguage();

  return (
    <section id="now" className="px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="now-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-10 border-y border-line py-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div>
              <h2 id="now-title" className="font-chinese text-4xl font-semibold leading-tight sm:text-5xl">
                {t(siteCopy.now.title)}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{t(siteCopy.now.description)}</p>
            </div>
            <div className="grid gap-4">
              {siteCopy.now.items.map((item, index) => (
                <Reveal key={item.title.zh} delay={index * 0.05}>
                  <div className="group rounded-2xl border border-line bg-surface/62 p-5 transition hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-accent/30 text-xs text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold leading-snug">{t(item.title)}</h3>
                        <p className="mt-2 text-base leading-7 text-muted">{t(item.body)}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
