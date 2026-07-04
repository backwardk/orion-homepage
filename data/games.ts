import type { LocalizedText, SteamGameEntry } from "@/types/content";

export const gamesCopy = {
  nav: {
    archive: { zh: "Steam 摘要", en: "Steam Summary" },
    favorites: { zh: "单机偏好", en: "Solo Favorites" },
    notes: { zh: "单机手记", en: "Solo Notes" }
  },
  hero: {
    status: { zh: "档案在线", en: "Archive online" },
    mode: { zh: "单机模式", en: "Solo mode" },
    profile: { zh: "玩家 7656", en: "Player 7656" },
    description: {
      zh: "比起输赢，我更喜欢独自进入一个完整世界，沿着自己的节奏探索、选择，并记住那些只属于这段旅程的瞬间。",
      en: "More than winning or losing, I enjoy entering complete worlds alone, exploring and choosing at my own pace, and keeping the moments unique to each journey."
    },
    values: [
      { zh: "完整世界", en: "Complete worlds" },
      { zh: "自由探索", en: "Free exploration" },
      { zh: "个人选择", en: "Personal choices" }
    ]
  },
  coverMenu: {
    hint: { zh: "移入或点击单机封面查看详情", en: "Hover or select a solo game for details" },
    features: { zh: "游戏特点", en: "Key traits" },
    playtime: { zh: "游玩时长", en: "Playtime" }
  },
  notes: {
    index: "01",
    title: { zh: "单机游戏手记", en: "Single-player Notes" },
    description: {
      zh: "不做攻略或评分，只记录一个世界曾经带来的情绪、选择和记忆。",
      en: "No guides or scores, only the moods, choices, and memories left by a world."
    },
    read: { zh: "打开手记", en: "Open note" },
    back: { zh: "返回 Games", en: "Back to Games" }
  },
  favorites: {
    index: "02",
    title: { zh: "我喜欢的单机体验", en: "What I Seek in Solo Games" },
    description: {
      zh: "类型会变化，但这些体验一直吸引我继续进入新的世界。",
      en: "Genres change, but these qualities keep drawing me into new worlds."
    }
  },
  archive: {
    index: "03",
    title: { zh: "Steam 数据摘要", en: "Steam Data Summary" },
    note: {
      zh: "时长只是游玩痕迹，不代表作品排名。这里保留简要数据，完整排行默认折叠。",
      en: "Hours are traces, not a ranking of quality. Only a compact summary stays visible; the full list is folded by default."
    },
    labels: {
      owned: { zh: "已拥有", en: "Owned" },
      played: { zh: "已游玩", en: "Played" },
      total: { zh: "总时长", en: "Total hours" },
      last: { zh: "最近游玩", en: "Last played" }
    },
    fullRanking: { zh: "展开完整前十时长", en: "Show full top ten" },
    source: { zh: "查看 Steam 主页", en: "Open Steam profile" }
  },
  footer: {
    status: { zh: "单机书架与手记缓慢更新。", en: "The solo shelf and notes update slowly." },
    hub: { zh: "选择其他频道", en: "Choose another channel" },
    copyright: { zh: "© 2026 蒋荞宇 · Games", en: "© 2026 Qiaoyu Jiang · Games" }
  }
} satisfies Record<string, unknown>;

type GamePreference = {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
};

export const gamePreferences: GamePreference[] = [
  {
    id: "world",
    label: { zh: "可以停留的世界", en: "Worlds worth staying in" },
    description: { zh: "地图不只是任务容器，也有自己的气候、声音和生活痕迹。", en: "Maps with their own weather, sound, and signs of life, not just containers for tasks." }
  },
  {
    id: "choice",
    label: { zh: "真正属于我的选择", en: "Choices that feel personal" },
    description: { zh: "答案不必完美，但决定之后的故事应该属于这一次旅程。", en: "The answer need not be perfect, but its consequences should belong to this journey." }
  },
  {
    id: "exploration",
    label: { zh: "不被催促的探索", en: "Unhurried exploration" },
    description: { zh: "可以离开主线，在一个角落里慢慢理解世界。", en: "Room to leave the main path and understand a world through its quieter corners." }
  },
  {
    id: "afterglow",
    label: { zh: "结束之后的余韵", en: "What remains afterward" },
    description: { zh: "音乐、角色或一段风景，在关闭游戏之后仍然会想起。", en: "Music, characters, or scenery that return to mind after the game is closed." }
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
  { appId: 730, title: "Counter-Strike 2", playtimeHours: 1108.8, lastPlayed: "2026-06-30", coverImage: "/games/covers/counter-strike-2.jpg" },
  { appId: 1172470, title: "Apex Legends", playtimeHours: 672.8, lastPlayed: "2026-06-11", coverImage: "/games/covers/apex-legends.jpg" },
  { appId: 3932890, title: "Escape from Tarkov", playtimeHours: 206.7, lastPlayed: "2026-06-12", coverImage: "/games/covers/escape-from-tarkov.jpg" },
  {
    appId: 289070,
    title: "Sid Meier's Civilization VI",
    playtimeHours: 144.9,
    lastPlayed: "2025-06-03",
    coverImage: "/games/covers/civilization-vi.jpg",
    features: [{ zh: "回合策略", en: "Turn-based" }, { zh: "文明经营", en: "Empire building" }, { zh: "多线发展", en: "Many paths" }],
    detail: { zh: "从一座城市开始，把科技、文化、外交和战争串成漫长决策链，常常让人想再进行一个回合。", en: "Starting from one city, science, culture, diplomacy, and war become a long chain of choices that invites one more turn." }
  },
  { appId: 1238810, title: "《战地风云 5》", playtimeHours: 140.5, lastPlayed: "2023-11-30" },
  {
    appId: 1086940,
    title: "博德之门 3",
    playtimeHours: 108.7,
    lastPlayed: "2025-11-28",
    coverImage: "/games/covers/baldurs-gate-3.jpg",
    features: [{ zh: "角色扮演", en: "Role-playing" }, { zh: "分支叙事", en: "Choices" }, { zh: "团队冒险", en: "Party" }],
    detail: { zh: "角色、选择和掷骰共同推动旅程。很多决定没有标准答案，却会留下足够鲜明的个人故事。", en: "Characters, choices, and dice rolls move the journey forward, turning uncertain decisions into distinctly personal stories." }
  },
  {
    appId: 1468810,
    title: "鬼谷八荒",
    playtimeHours: 105.8,
    lastPlayed: "2026-02-27",
    coverImage: "/games/covers/tale-of-immortal.jpg",
    features: [{ zh: "修仙世界", en: "Cultivation" }, { zh: "开放成长", en: "Open growth" }, { zh: "随机际遇", en: "Encounters" }],
    detail: { zh: "从普通修行者开始，在关系、机缘和选择中形成自己的成长路线。过程有偶然性，也保留了漫长养成的满足感。", en: "Beginning as an ordinary cultivator, relationships, encounters, and choices shape a personal path through a long and unpredictable journey." }
  },
  {
    appId: 457140,
    title: "缺氧",
    playtimeHours: 98,
    lastPlayed: "2026-06-16",
    coverImage: "/games/covers/oxygen-not-included.jpg",
    features: [{ zh: "殖民经营", en: "Colony sim" }, { zh: "系统联动", en: "Systems" }, { zh: "持续优化", en: "Optimization" }],
    detail: { zh: "氧气、温度、资源和复制人状态彼此影响。每次危机都像一道需要重新理解系统的题目。", en: "Oxygen, heat, resources, and duplicant needs interact, turning every crisis into a problem of understanding the whole system." }
  },
  {
    appId: 275850,
    title: "No Man's Sky 无人深空",
    playtimeHours: 80.9,
    lastPlayed: "2025-03-17",
    coverImage: "/games/covers/no-mans-sky.jpg",
    features: [{ zh: "宇宙探索", en: "Space exploration" }, { zh: "自由旅行", en: "Open travel" }, { zh: "基地建造", en: "Base building" }],
    detail: { zh: "在陌生星球之间旅行、收集和建造。比起明确终点，更吸引我的是下一次跃迁后会看到什么。", en: "Travel, gathering, and building across unfamiliar planets, driven less by a finish line than by what might appear after the next jump." }
  },
  {
    appId: 1245620,
    title: "艾尔登法环",
    playtimeHours: 74.3,
    lastPlayed: "2024-10-12",
    coverImage: "/games/covers/elden-ring.jpg",
    features: [{ zh: "开放世界", en: "Open world" }, { zh: "环境叙事", en: "Worldbuilding" }, { zh: "艰难探索", en: "Challenge" }],
    detail: { zh: "辽阔世界很少直接解释自己，遗迹、敌人和道路共同讲述故事。困难让每次抵达都更有重量。", en: "A vast world that rarely explains itself directly, where ruins, enemies, and roads tell the story and difficulty gives each arrival weight." }
  }
];

const singlePlayerOrder = [1086940, 1245620, 457140, 275850, 1468810, 289070] as const;

export const singlePlayerGames = singlePlayerOrder
  .map((appId) => steamGames.find((game) => game.appId === appId))
  .filter((game): game is SteamGameEntry => Boolean(game));