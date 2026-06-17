"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background px-5 pt-28 text-foreground sm:px-8 sm:pt-36">
      <SiteHeader />
      <section className="mx-auto flex min-h-[68vh] max-w-3xl flex-col justify-center border-y border-line py-16">
        <p className="text-sm uppercase text-accent">404</p>
        <h1 className="mt-6 font-chinese text-4xl font-semibold leading-tight sm:text-6xl">
          {t(siteCopy.notFound.title)}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted sm:text-xl sm:leading-9">{t(siteCopy.notFound.body)}</p>
        <Link
          href="/"
          className="mt-10 inline-flex w-fit items-center justify-center rounded-full border border-accent bg-accent px-5 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/30 dark:text-[#111111]"
        >
          {t(siteCopy.notFound.action)}
        </Link>
      </section>
    </main>
  );
}
