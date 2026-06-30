import type { LocalizedText, MediaEntry } from "@/types/content";

export const sideBCopy = {
  nav: {
    now: { zh: "当前频道", en: "Now" },
    favorites: { zh: "偏好收藏", en: "Favorites" },
    notes: { zh: "游戏手记", en: "Play Notes" }
  },
  hero: {
    eyebrow: { zh: "私人频道 · 信号已连接", en: "Private channel · Signal online" },
    title: "SIDE B",
    subtitle: "ANIME // GAMES // NOTES",
    description: {
      zh: "在主线之外，保存游玩、追番和喜欢过的画面。",
      en: "Off the main route, I keep the games, anime, and scenes that stay with me."
    },
    enter: { zh: "查看当前频道", en: "Open current channel" },
    notes: { zh: "阅读手记", en: "Read play notes" }
  },
  now: {
    index: "01",
    title: { zh: "当前频道", en: "Now Playing / Watching" },
    description: {
      zh: "不是榜单，只是此刻正在靠近的世界。",
      en: "Not a ranking, just the worlds currently close to me."
    },
    game: { zh: "游戏频道", en: "Game channel" },
    anime: { zh: "动画频道", en: "Anime channel" }
  },
  favorites: {
    index: "02",
    title: { zh: "偏好收藏", en: "Favorites" },
    description: {
      zh: "比起作品排名，我更想保留反复吸引我的类型与气质。",
      en: "Instead of ranking titles, I keep the moods and forms that draw me back."
    }
  },
  notes: {
    index: "03",
    title: { zh: "游戏手记", en: "Play Notes" },
    description: {
      zh: "不写攻略，也不急着打分。只记录玩过之后留下来的部分。",
      en: "No guides and no rush to score. Just what remains after playing."
    },
    read: { zh: "打开手记", en: "Open note" },
    back: { zh: "返回 Side B", en: "Back to Side B" }
  },
  footer: {
    status: { zh: "频道保持开放，内容缓慢更新。", en: "Channel open. Updates arrive slowly." },
    home: { zh: "返回主线", en: "Return Home" },
    copyright: { zh: "© 2026 蒋荞宇 · Side B", en: "© 2026 Qiaoyu Jiang · Side B" }
  }
} satisfies Record<string, unknown>;

export const mediaEntries: MediaEntry[] = [
  {
    id: "single-player-time",
    type: "game",
    title: { zh: "单机游戏时间", en: "Single-player Time" },
    status: { zh: "正在记录", en: "Recording" },
    progress: { zh: "随游玩进度更新", en: "Updated as I play" },
    note: {
      zh: "偏爱有完整世界、安静探索和清晰叙事节奏的作品。",
      en: "Drawn to complete worlds, quiet exploration, and deliberate storytelling."
    },
    image: "/side-b/games.webp"
  },
  {
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
  }
];

type SideBFavorite = {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  accent: "coral" | "teal" | "yellow";
};

export const sideBFavorites: SideBFavorite[] = [
  {
    id: "narrative",
    label: { zh: "叙事冒险", en: "Narrative adventures" },
    description: { zh: "角色、选择与慢慢展开的世界。", en: "Characters, choices, and worlds that unfold slowly." },
    accent: "coral"
  },
  {
    id: "exploration",
    label: { zh: "安静探索", en: "Quiet exploration" },
    description: { zh: "不被任务催促，也能走很久。", en: "Places worth crossing without being rushed." },
    accent: "teal"
  },
  {
    id: "daily-life",
    label: { zh: "日常系动画", en: "Everyday anime" },
    description: { zh: "把普通生活拍得足够认真。", en: "Ordinary life observed with care." },
    accent: "yellow"
  },
  {
    id: "science-fiction",
    label: { zh: "温和科幻", en: "Gentle science fiction" },
    description: { zh: "未来感之外，也保留人的温度。", en: "Futures that still leave room for people." },
    accent: "teal"
  },
  {
    id: "soundtrack",
    label: { zh: "原声音乐", en: "Soundtracks" },
    description: { zh: "离开画面后，还能继续陪伴。", en: "Music that remains after the screen goes dark." },
    accent: "coral"
  },
  {
    id: "line-and-color",
    label: { zh: "线条与局部色", en: "Lines and spot color" },
    description: { zh: "克制的画面，也可以有鲜明记忆。", en: "Restrained images can still leave a vivid memory." },
    accent: "yellow"
  }
];
