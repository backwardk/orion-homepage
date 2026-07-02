import type { LocalizedText, MediaEntry, SteamGameEntry } from "@/types/content";

export const gamesCopy = {
  nav: {
    archive: { zh: "游玩档案", en: "Archive" },
    favorites: { zh: "游戏偏好", en: "Favorites" },
    notes: { zh: "游戏手记", en: "Notes" }
  },
  hero: {
    eyebrow: { zh: "游戏频道 · 玩家档案", en: "Game channel · Player archive" },
    title: "GAMES",
    subtitle: "PLAY // ARCHIVE // NOTES",
    description: {
      zh: "记录玩过的世界、投入的时间，以及离开屏幕后仍然记得的部分。",
      en: "A record of worlds played, time invested, and what remains after the screen goes dark."
    },
    archive: { zh: "查看游玩档案", en: "Open archive" },
    notes: { zh: "阅读游戏手记", en: "Read game notes" }
  },
  coverMenu: {
    hint: { zh: "移入或点击封面查看详情", en: "Hover or select a cover for details" },
    features: { zh: "游戏特点", en: "Key traits" },
    playtime: { zh: "游玩时长", en: "Playtime" }
  },
  archive: {
    index: "01",
    title: { zh: "Steam 游玩档案", en: "Steam Playtime Archive" },
    description: {
      zh: "你的游戏时长排行会在这里形成一份长期更新的个人档案。",
      en: "Your playtime ranking will become a personal archive that grows over time."
    },
    labels: { owned: { zh: "已拥有", en: "Owned" }, played: { zh: "已游玩", en: "Played" }, total: { zh: "总时长", en: "Total hours" }, last: { zh: "最近游玩", en: "Last played" } },
    source: { zh: "查看 Steam 主页", en: "Open Steam profile" },
    note: { zh: "真实 Steam 数据，工具类软件已从排行中排除。", en: "Real Steam data with utility software excluded from the ranking." },
    pending: { zh: "数据等待接入", en: "Waiting for data" },
    pendingBody: {
      zh: "当前保留排行、总时长与个人感受的位置。",
      en: "Reserved for rankings, total hours, and personal notes."
    }
  },
  favorites: {
    index: "02",
    title: { zh: "游戏偏好", en: "Game Preferences" },
    description: {
      zh: "比起类型标签，我更在意一个世界是否值得停留。",
      en: "Genres matter less than whether a world feels worth staying in."
    }
  },
  notes: {
    index: "03",
    title: { zh: "游戏手记", en: "Play Notes" },
    description: {
      zh: "不写攻略，也不急着评分，只留下真实的游玩感受。",
      en: "No guides and no rushed scores, only honest notes from playing."
    },
    read: { zh: "打开手记", en: "Open note" },
    back: { zh: "返回 Games", en: "Back to Games" }
  },
  footer: {
    status: { zh: "玩家档案持续更新。", en: "Player archive in progress." },
    hub: { zh: "选择其他频道", en: "Choose another channel" },
    copyright: { zh: "© 2026 蒋荞宇 · Games", en: "© 2026 Qiaoyu Jiang · Games" }
  }
} satisfies Record<string, unknown>;

export const currentGame: MediaEntry = {
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
};

type GamePreference = {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
};

export const gamePreferences: GamePreference[] = [
  {
    id: "narrative",
    label: { zh: "叙事冒险", en: "Narrative adventures" },
    description: { zh: "角色、选择与慢慢展开的世界。", en: "Characters, choices, and worlds that unfold slowly." }
  },
  {
    id: "exploration",
    label: { zh: "安静探索", en: "Quiet exploration" },
    description: { zh: "不被任务催促，也能走很久。", en: "Places worth crossing without being rushed." }
  },
  {
    id: "science-fiction",
    label: { zh: "科幻空间", en: "Science-fiction spaces" },
    description: { zh: "陌生规则、建筑与探索感。", en: "Unknown rules, architecture, and discovery." }
  },
  {
    id: "soundtrack",
    label: { zh: "原声音乐", en: "Soundtracks" },
    description: { zh: "离开游戏后，还能继续陪伴。", en: "Music that remains after leaving the game." }
  }
];
export const steamProfileUrl = "https://steamcommunity.com/profiles/76561199180646180/games/";

export const steamStats = {
  owned: 167,
  played: 106,
  totalHours: 3915.6,
  top10Hours: 2741.3
} as const;

export const steamGames: SteamGameEntry[] = [
  {
    appId: 730,
    title: "Counter-Strike 2",
    playtimeHours: 1108.8,
    lastPlayed: "2026-06-30",
    coverImage: "/games/covers/counter-strike-2.jpg",
    features: [{ zh: "竞技对抗", en: "Competitive" }, { zh: "战术配合", en: "Tactical" }, { zh: "精准枪感", en: "Precision" }],
    detail: { zh: "规则直接，但每一局都由站位、经济和临场判断重新塑造。它适合短时间进入，也值得长期练习。", en: "Direct rules, reshaped every round by positioning, economy, and split-second decisions. Easy to enter, difficult to master." }
  },
  {
    appId: 1172470,
    title: "Apex Legends",
    playtimeHours: 672.8,
    lastPlayed: "2026-06-11",
    coverImage: "/games/covers/apex-legends.jpg",
    features: [{ zh: "高速移动", en: "Movement" }, { zh: "小队协作", en: "Squad play" }, { zh: "英雄能力", en: "Legends" }],
    detail: { zh: "流畅移动与英雄能力让交战更有层次，小队之间的沟通和临场配合往往比单次击杀更重要。", en: "Fluid movement and character abilities add layers to every fight, where communication and adaptation matter as much as aim." }
  },
  {
    appId: 3932890,
    title: "Escape from Tarkov",
    playtimeHours: 206.7,
    lastPlayed: "2026-06-12",
    coverImage: "/games/covers/escape-from-tarkov.jpg",
    features: [{ zh: "高风险撤离", en: "High risk" }, { zh: "物资管理", en: "Loot" }, { zh: "硬核拟真", en: "Simulation" }],
    detail: { zh: "进入、搜寻和撤离构成持续紧张的循环。装备会失去，因此每一个声音和路线选择都更有分量。", en: "Enter, search, and extract through a tense loop where gear can be lost, giving every sound and route real weight." }
  },
  {
    appId: 289070,
    title: "Sid Meier's Civilization VI",
    playtimeHours: 144.9,
    lastPlayed: "2025-06-03",
    coverImage: "/games/covers/civilization-vi.jpg",
    features: [{ zh: "回合策略", en: "Turn-based" }, { zh: "文明经营", en: "Empire building" }, { zh: "多线选择", en: "Many paths" }],
    detail: { zh: "从一座城市开始，把科技、文化、外交和战争串成漫长决策链，常常让人想再进行一个回合。", en: "Starting from one city, science, culture, diplomacy, and war become a long chain of choices that invites one more turn." }
  },
  { appId: 1238810, title: "《战地风云 5》", playtimeHours: 140.5, lastPlayed: "2023-11-30" },
  {
    appId: 1086940,
    title: "博德之门3",
    playtimeHours: 108.7,
    lastPlayed: "2025-11-28",
    coverImage: "/games/covers/baldurs-gate-3.jpg",
    features: [{ zh: "角色扮演", en: "Role-playing" }, { zh: "分支叙事", en: "Choices" }, { zh: "团队冒险", en: "Party" }],
    detail: { zh: "角色、选择和掷骰共同推动旅程。很多决定没有标准答案，却会留下足够鲜明的个人故事。", en: "Characters, choices, and dice rolls move the journey forward, turning uncertain decisions into distinctly personal stories." }
  },
  { appId: 1468810, title: "鬼谷八荒", playtimeHours: 105.8, lastPlayed: "2026-02-27" },
  { appId: 457140, title: "缺氧", playtimeHours: 98, lastPlayed: "2026-06-16" },
  { appId: 275850, title: "No Man's Sky 无人深空", playtimeHours: 80.9, lastPlayed: "2025-03-17" },
  { appId: 1245620, title: "艾尔登法环", playtimeHours: 74.3, lastPlayed: "2024-10-12" }
];