"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { sideBCopy } from "@/data/side-b";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function SideBPage() {
  const { language, t } = useLanguage();

  return (
    <section id="side-home" className="side-b-grid min-h-screen px-5 pb-16 pt-28 sm:px-8 sm:pt-36" aria-labelledby="side-b-title">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold text-side-coral">{t(sideBCopy.eyebrow)}</p>
          <h1 id="side-b-title" className="mt-6 text-5xl font-black leading-tight text-side-ink sm:text-7xl">{t(sideBCopy.title)}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-side-muted sm:text-xl">{t(sideBCopy.description)}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ChannelCard
            href="/games/"
            image={assetPath("/side-b/games.webp")}
            label={t(sideBCopy.games.label)}
            description={t(sideBCopy.games.description)}
            code="CHANNEL 01"
          />
          <ChannelCard
            href="/anime/"
            image={assetPath("/side-b/anime.webp")}
            label={t(sideBCopy.anime.label)}
            description={t(sideBCopy.anime.description)}
            code="CHANNEL 02"
          />
        </div>

        <div className="mt-12 border-t border-side-line/35 pt-6">
          <Link href="/" className="inline-flex items-center gap-2 border-b border-side-coral pb-1 text-sm font-semibold text-side-ink transition hover:text-side-coral">
            {t(sideBCopy.home)}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

type ChannelCardProps = {
  href: string;
  image: string;
  label: string;
  description: string;
  code: string;
};

function ChannelCard({ href, image, label, description, code }: ChannelCardProps) {
  return (
    <Link href={href} className="group overflow-hidden border border-side-line/45 bg-side-paper focus:outline-none focus:ring-2 focus:ring-side-coral/40">
      <div className="relative aspect-[3/2] overflow-hidden border-b border-side-line/30">
        <Image src={image} alt={label} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs text-side-muted">{code}</span>
          <ArrowUpRight className="size-5 text-side-coral transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h2 className="mt-8 text-3xl font-black text-side-ink">{label}</h2>
        <p className="mt-4 leading-8 text-side-muted">{description}</p>
      </div>
    </Link>
  );
}