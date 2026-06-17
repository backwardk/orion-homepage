"use client";

import { Reveal } from "@/components/motion";
import { likes } from "@/data/likes";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function LikesSection() {
  const { t } = useLanguage();

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="likes-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-8 border-y border-line py-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div>
              <h2 id="likes-title" className="font-chinese text-4xl font-semibold leading-tight sm:text-5xl">
                {t(siteCopy.likes.title)}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{t(siteCopy.likes.description)}</p>
            </div>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {likes.map((item, index) => (
                <Reveal key={item.title.zh} delay={index * 0.035}>
                  <div className="group border-b border-line pb-5 transition hover:border-accent/40">
                    <p className="text-sm text-accent">{t(item.category)}</p>
                    <h3 className="mt-3 text-lg font-semibold leading-snug">{t(item.title)}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{t(item.description)}</p>
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
