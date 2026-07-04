import type { LocalizedText } from "@/types/content";

export const animeCopy = {
  nav: {
    now: { zh: "当前画面", en: "Current Scene" },
    titles: { zh: "候选片单", en: "Title Shelf" },
    notes: { zh: "动画手记", en: "Anime Notes" }
  },
  hero: {
    subtitle: "SCENES // MOODS // NOTES",
    description: {
      zh: "收藏那些会在记忆里停留的画面，也记录故事带来的移动、安静与余韵。",
      en: "A quiet archive of images that stay with me, and the movement, stillness, and afterglow stories leave behind."
    }
  },
  now: {
    index: "01",
    title: { zh: "当前画面", en: "Current Scene" },
    description: {
      zh: "具体片单之后再补，先从我反复喜欢的场景和观看感受开始。",
      en: "Specific titles will come later. For now, this begins with scenes and viewing moods I return to."
    }
  },
  favorites: {
    index: "02",
    title: { zh: "偏爱的动画气质", en: "Favorite Moods" },
    description: {
      zh: "不是作品排行榜，而是构成我个人动画审美的四种线索。",
      en: "Not a ranking of titles, but four threads that shape my personal anime taste."
    }
  },
  titles: {
    index: "03",
    title: { zh: "真实作品候选", en: "Real Titles, To Confirm" },
    description: {
      zh: "先用真实作品建立展示效果，但不代表我的观看记录或最终喜好；确认后再改成个人片单。",
      en: "Real titles establish the visual structure, but do not yet represent my viewing history or final favorites."
    },
    pending: { zh: "待确认", en: "To confirm" }
  },
  notes: {
    index: "04",
    title: { zh: "动画手记", en: "Anime Notes" },
    description: {
      zh: "一篇手记可以从画面、音乐、角色或一次观看后的心情开始。",
      en: "A note may begin with an image, a piece of music, a character, or the mood after watching."
    },
    empty: { zh: "喜欢的动画之后再补充", en: "Personal titles coming later" },
    emptyBody: {
      zh: "等片单确定后，这里会出现真实作品、观看时间和个人短评。",
      en: "Once the list is ready, real titles, viewing dates, and personal notes will appear here."
    },
    back: { zh: "返回 Anime", en: "Back to Anime" }
  },
  footer: {
    status: { zh: "画面、片单与手记缓慢更新。", en: "Scenes, lists, and notes update slowly." },
    hub: { zh: "返回媒体手账", en: "Back to Media Hub" },
    copyright: { zh: "© 2026 蒋荞宇 · Anime", en: "© 2026 Qiaoyu Jiang · Anime" }
  }
} satisfies Record<string, unknown>;

export type AnimeScene = {
  id: string;
  image: string;
  label: LocalizedText;
  alt: LocalizedText;
  objectPosition: string;
};

export const animeScenes: AnimeScene[] = [
  {
    id: "platform",
    image: "/side-b/anime.webp",
    label: { zh: "夏日站台", en: "Summer platform" },
    alt: { zh: "少年站在夏日列车站台的钢笔插画", en: "Ink illustration of a young man at a summer train platform" },
    objectPosition: "55% center"
  },
  {
    id: "night-room",
    image: "/side-b/hero.webp",
    label: { zh: "夜晚与屏幕之间", en: "Between night and screen" },
    alt: { zh: "少年在夜晚房间看屏幕的钢笔插画", en: "Ink illustration of a young man watching a screen at night" },
    objectPosition: "68% center"
  },
  {
    id: "desk-notes",
    image: "/side-b/notes.webp",
    label: { zh: "桌面手记", en: "Desk notes" },
    alt: { zh: "笔记本与饮料放在桌面的钢笔插画", en: "Ink illustration of a notebook and drink on a desk" },
    objectPosition: "center"
  }
];

type AnimePreference = {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  image: string;
  objectPosition: string;
};

export type AnimeTitle = {
  id: string;
  title: LocalizedText;
  originalTitle: string;
  year: string;
  theme: LocalizedText;
  description: LocalizedText;
  image: string;
  objectPosition: string;
};

export const animePreferences: AnimePreference[] = [
  {
    id: "daily-life",
    label: { zh: "日常系", en: "Everyday Stories" },
    description: { zh: "把普通生活拍得足够认真，让细小情绪也拥有重量。", en: "Ordinary life observed closely enough for small emotions to carry weight." },
    image: "/side-b/notes.webp",
    objectPosition: "20% center"
  },
  {
    id: "gentle-scifi",
    label: { zh: "温和科幻", en: "Gentle Science Fiction" },
    description: { zh: "未来感之外，仍然保留人与人之间的温度。", en: "Futures that still leave room for warmth between people." },
    image: "/side-b/games.webp",
    objectPosition: "62% center"
  },
  {
    id: "journeys",
    label: { zh: "旅行感", en: "Journeys" },
    description: { zh: "列车、街道与不断移动的风景，让故事拥有远方。", en: "Trains, streets, and changing landscapes that give stories a horizon." },
    image: "/side-b/anime.webp",
    objectPosition: "60% center"
  },
  {
    id: "art-direction",
    label: { zh: "线条与色彩", en: "Lines & Color" },
    description: { zh: "克制的构图和局部色，也能留下鲜明记忆。", en: "Restrained composition and spot color can still leave vivid memories." },
    image: "/side-b/hero.webp",
    objectPosition: "30% center"
  }
];
export const animeTitles: AnimeTitle[] = [
  {
    id: "frieren",
    title: { zh: "葬送的芙莉莲", en: "Frieren: Beyond Journey's End" },
    originalTitle: "葬送のフリーレン",
    year: "2023",
    theme: { zh: "旅途之后", en: "After the journey" },
    description: { zh: "以漫长时间尺度重新理解旅途、记忆与人与人之间的距离。", en: "A journey viewed through long stretches of time, memory, and distance between people." },
    image: "/side-b/anime.webp",
    objectPosition: "58% center"
  },
  {
    id: "violet-evergarden",
    title: { zh: "紫罗兰永恒花园", en: "Violet Evergarden" },
    originalTitle: "ヴァイオレット・エヴァーガーデン",
    year: "2018",
    theme: { zh: "书信与情感", en: "Letters and emotion" },
    description: { zh: "从书信与语言出发，描写理解感情的漫长过程。", en: "Letters and language frame a gradual process of understanding emotion." },
    image: "/side-b/notes.webp",
    objectPosition: "22% center"
  },
  {
    id: "natsume",
    title: { zh: "夏目友人帐", en: "Natsume's Book of Friends" },
    originalTitle: "夏目友人帳",
    year: "2008",
    theme: { zh: "温柔与陪伴", en: "Gentleness and company" },
    description: { zh: "在人与妖怪的相遇中，保留克制、温柔和淡淡的离别感。", en: "Encounters between people and spirits hold restraint, warmth, and quiet farewells." },
    image: "/side-b/hero.webp",
    objectPosition: "28% center"
  },
  {
    id: "bocchi",
    title: { zh: "孤独摇滚！", en: "BOCCHI THE ROCK!" },
    originalTitle: "ぼっち・ざ・ろっく！",
    year: "2022",
    theme: { zh: "音乐与成长", en: "Music and growth" },
    description: { zh: "以鲜明的视觉表达连接社交焦虑、音乐和缓慢成长。", en: "Expressive visual language connects social anxiety, music, and gradual growth." },
    image: "/side-b/games.webp",
    objectPosition: "64% center"
  }
];