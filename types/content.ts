export type Language = "zh" | "en";

export type LocalizedText = Record<Language, string>;

export type Article = {
  slug: string;
  title: LocalizedText;
  publishedAt: string;
  category: LocalizedText;
  tags: LocalizedText[];
  summary: LocalizedText;
  readingTime: LocalizedText;
};

export type Interest = {
  label: LocalizedText;
  icon: "book" | "map" | "code" | "camera" | "pen" | "palette" | "music";
};

export type Quote = {
  text: string;
  author?: string;
};

export type ContactLink = {
  label: LocalizedText;
  href: string;
  icon: "mail" | "github" | "instagram";
  enabled?: boolean;
};
