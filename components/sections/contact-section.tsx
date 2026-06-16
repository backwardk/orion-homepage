"use client";

import { ContactIcon } from "@/components/icon-map";
import { Reveal } from "@/components/motion";
import { contactLinks } from "@/data/contact";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="px-5 pb-10 pt-24 sm:px-8" aria-labelledby="contact-title">
      <Reveal>
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-line bg-surface/70 p-8 shadow-soft backdrop-blur sm:p-12 dark:shadow-soft-dark">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <h2 id="contact-title" className="font-chinese text-4xl font-semibold leading-tight sm:text-5xl">
                {t(siteCopy.contact.title)}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{t(siteCopy.contact.description)}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-full border border-line bg-background/60 px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <ContactIcon icon={link.icon} className="size-4" />
                  {t(link.label)}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>{t(siteCopy.contact.copyright)}</span>
            <span>{t(siteCopy.contact.built)}</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
