"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion";
import { quotes } from "@/data/quotes";
import { siteCopy } from "@/data/site";
import { randomItem } from "@/lib/random";
import type { Quote } from "@/types/content";
import { useLanguage } from "@/components/language-provider";

export function QuoteSection() {
  const [quote, setQuote] = useState<Quote>(quotes[0]);
  const { t } = useLanguage();

  useEffect(() => {
    setQuote(randomItem(quotes));
  }, []);

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32" aria-label={t(siteCopy.quote.label)}>
      <Reveal>
        <div className="mx-auto max-w-5xl border-y border-line py-16 sm:py-24">
          <p className="text-sm uppercase text-accent">{t(siteCopy.quote.label)}</p>
          <blockquote className="mt-8 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl sm:leading-tight">
            “{quote.text}”
          </blockquote>
          {quote.author ? <cite className="mt-8 block not-italic text-muted">{quote.author}</cite> : null}
        </div>
      </Reveal>
    </section>
  );
}
