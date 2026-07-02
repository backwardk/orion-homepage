export type Language = "zh" | "en";

export type LocalizedText = Record<Language, string>;

export type Article = {
  slug: string;
  channel: "main" | "games" | "anime";
  title: LocalizedText;
  publishedAt: string;
  category: LocalizedText;
  tags: LocalizedText[];
  summary: LocalizedText;
  readingTime: LocalizedText;
};

export type Interest = {
  label: LocalizedText;
  icon: "book" | "map" | "code" | "camera" | "pen" | "palette" | "music" | "game";
  href?: string;
};

export type LikeItem = {
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
};

export type MediaEntry = {
  id: string;
  type: "game" | "anime";
  title: LocalizedText;
  status: LocalizedText;
  progress: LocalizedText;
  note: LocalizedText;
  image: string;
  year?: string;
  score?: string;
};

export type SteamGameEntry = {
  appId: number;
  title: string;
  playtimeHours: number;
  lastPlayed?: string;
  coverImage?: string;
  features?: LocalizedText[];
  detail?: LocalizedText;
  note?: LocalizedText;
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
