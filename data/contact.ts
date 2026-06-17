import type { ContactLink } from "@/types/content";
import { siteConfig } from "@/data/site-config";

export const contactLinks: ContactLink[] = [
  {
    label: { zh: "邮箱", en: "Email" },
    href: `mailto:${siteConfig.email}`,
    icon: "mail"
  },
  {
    label: { zh: "GitHub", en: "GitHub" },
    href: siteConfig.githubUrl,
    icon: "github"
  },
  {
    label: { zh: "Instagram", en: "Instagram" },
    href: siteConfig.instagramUrl,
    icon: "instagram",
    enabled: Boolean(siteConfig.instagramUrl)
  }
];
