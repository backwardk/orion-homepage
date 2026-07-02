import type { Interest } from "@/types/content";

export const interests: Interest[] = [
  { label: { zh: "阅读", en: "Reading" }, icon: "book" },
  { label: { zh: "旅行", en: "Travel" }, icon: "map" },
  { label: { zh: "技术", en: "Technology" }, icon: "code" },
  { label: { zh: "摄影", en: "Photography" }, icon: "camera" },
  { label: { zh: "写作", en: "Writing" }, icon: "pen" },
  { label: { zh: "设计", en: "Design" }, icon: "palette" },
  { label: { zh: "音乐", en: "Music" }, icon: "music" },
  { label: { zh: "游戏", en: "Games" }, icon: "game", href: "/games" }
];
