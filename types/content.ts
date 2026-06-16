export type Language = "zh" | "en";

export type LocalizedText = Record<Language, string>;

export type Article = {
  title: LocalizedText;
  date: string;
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
  label: string;
  href: string;
  icon: "mail" | "github" | "instagram";
};
