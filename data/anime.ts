import type { LocalizedText, MediaEntry } from "@/types/content";

export const animeCopy = {
  nav: {
    now: { zh: "最近在看", en: "Watching" },
    favorites: { zh: "动画偏好", en: "Favorites" },
    notes: { zh: "动画手记", en: "Notes" }
  },
  hero: {
    eyebrow: { zh: "动画频道 · 片单与画面", en: "Anime channel · Lists and scenes" },
    title: "ANIME",
    subtitle: "WATCH // KEEP // REMEMBER",
    description: {
      zh: "收藏喜欢的画面、角色和故事，也记录追番时留下的心情。",
      en: "A place for favorite scenes, characters, stories, and the moods they leave behind."
    },
    watching: { zh: "查看最近在看", en: "Now watching" },
    favorites: { zh: "浏览动画偏好", en: "Browse favorites" }
  },
  now: {
    index: "01",
    title: { zh: "最近在看", en: "Now Watching" },
    description: {
      zh: "片单还在整理，先从真正喜欢的画面开始。",
      en: "The list is still growing, starting with scenes that genuinely stay with me."
    }
  },
  favorites: {
    index: "02",
    title: { zh: "动画偏好", en: "Anime Preferences" },
    description: {
      zh: "不是排行榜，而是反复吸引我的故事气质。",
      en: "Not a ranking, but the qualities that keep drawing me back."
    }
  },
  notes: {
    index: "03",
    title: { zh: "动画手记", en: "Anime Notes" },
    description: {
      zh: "动画短评会从一段画面、一首音乐或一个角色开始。",
      en: "Anime notes may begin with a scene, a piece of music, or a character."
    },
    empty: { zh: "第一篇动画手记还在路上。", en: "The first anime note is still on its way." },
    back: { zh: "返回 Anime", en: "Back to Anime" }
  },
  footer: {
    status: { zh: "片单与手记缓慢更新。", en: "Lists and notes update slowly." },
    hub: { zh: "选择其他频道", en: "Choose another channel" },
    copyright: { zh: "© 2026 蒋荞宇 · Anime", en: "© 2026 Qiaoyu Jiang · Anime" }
  }
} satisfies Record<string, unknown>;

export const currentAnime: MediaEntry = {
  id: "anime-catch-up",
  type: "anime",
  title: { zh: "动画片单整理中", en: "Anime List in Progress" },
  status: { zh: "等待补充", en: "To be updated" },
  progress: { zh: "从喜欢的画面开始", en: "Starting from memorable scenes" },
  note: {
    zh: "会从日常、科幻和带有旅行感的故事里慢慢补充。",
    en: "A growing list of everyday, science-fiction, and journey-shaped stories."
  },
  image: "/side-b/anime.webp"
};

type AnimePreference = {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
};

export const animePreferences: AnimePreference[] = [
  {
    id: "daily-life",
    label: { zh: "日常系", en: "Everyday stories" },
    description: { zh: "把普通生活拍得足够认真。", en: "Ordinary life observed with care." }
  },
  {
    id: "gentle-scifi",
    label: { zh: "温和科幻", en: "Gentle science fiction" },
    description: { zh: "未来感之外，也保留人的温度。", en: "Futures that still leave room for people." }
  },
  {
    id: "journeys",
    label: { zh: "旅行感", en: "Journeys" },
    description: { zh: "列车、街道与不断变化的风景。", en: "Trains, streets, and changing landscapes." }
  },
  {
    id: "art-direction",
    label: { zh: "线条与色彩", en: "Lines and color" },
    description: { zh: "克制的画面，也能留下鲜明记忆。", en: "Restrained images can still leave vivid memories." }
  }
];