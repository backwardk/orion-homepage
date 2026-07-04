import type { GameCartridge } from "@/types/content";

export const gameShopCopy = {
  title: { zh: "荞宇的卡带收藏店", en: "Orion's Cartridge Shop" },
  subtitle: { zh: "六段旅程，一间只在本次访问中营业的收藏店。", en: "Six journeys in a collection shop open for this visit only." },
  tabs: {
    counter: { zh: "开盒柜台", en: "Draw Counter" },
    collection: { zh: "卡带图鉴", en: "Collection" },
    archive: { zh: "游戏档案", en: "Archive" },
    notes: { zh: "游戏手记", en: "Play Notes" }
  },
  counter: {
    eyebrow: { zh: "今日随机入库", en: "Today's Random Stock" },
    title: { zh: "打开一盒游戏回忆", en: "Open a Box of Game Memories" },
    description: {
      zh: "每次开盒都会获得一张卡带。重复卡带将转化为记忆碎片，集齐六款后开放店内手记。",
      en: "Each box contains one cartridge. Duplicates become memory fragments, and collecting all six unlocks the shop note."
    },
    draw: { zh: "打开卡带盒", en: "Open a Box" },
    drawing: { zh: "正在拆封", en: "Opening" },
    complete: { zh: "收藏已经完成", en: "Collection Complete" },
    firstHint: { zh: "第一张卡带正在等待被发现。", en: "Your first cartridge is waiting to be found." },
    newFound: { zh: "新卡带已收入图鉴", en: "New cartridge added" },
    duplicate: { zh: "重复卡带转化为 1 枚记忆碎片", en: "Duplicate converted into 1 memory fragment" },
    exchanged: { zh: "记忆碎片已兑换为新卡带", en: "Memory fragments exchanged for a new cartridge" },
    pity: { zh: "下一盒必定获得未收集卡带", en: "The next box guarantees a missing cartridge" },
    session: { zh: "刷新页面后，本局收藏会重新开始。", en: "Refreshing the page starts a new collection session." }
  },
  stats: {
    collection: { zh: "已收藏", en: "Collected" },
    fragments: { zh: "记忆碎片", en: "Fragments" },
    draws: { zh: "开盒次数", en: "Boxes Opened" }
  },
  collection: {
    eyebrow: { zh: "个人游戏书架", en: "Personal Game Shelf" },
    title: { zh: "卡带图鉴", en: "Cartridge Collection" },
    description: { zh: "点击已获得的卡带，查看它留下的特点与个人回忆。", en: "Select an unlocked cartridge to revisit its traits and personal memory." },
    locked: { zh: "尚未获得", en: "Not Collected" },
    memory: { zh: "个人回忆", en: "Personal Memory" },
    playtime: { zh: "游玩时长", en: "Playtime" },
    exchangeTitle: { zh: "使用 3 枚碎片兑换", en: "Exchange 3 Fragments" },
    exchangeHint: { zh: "选择一张尚未获得的卡带。", en: "Choose one missing cartridge." }
  },
  archive: {
    eyebrow: { zh: "店内终端", en: "Shop Terminal" },
    title: { zh: "游戏档案", en: "Game Archive" },
    description: { zh: "时长只是旅程留下的痕迹，不是作品之间的排名。", en: "Playtime is a trace of each journey, not a ranking between games." }
  },
  notes: {
    eyebrow: { zh: "完成收藏后开放", en: "Unlocked After Completion" },
    title: { zh: "为什么我依然喜欢单机游戏", en: "Why I Still Love Single-Player Games" },
    locked: { zh: "集齐六张卡带后，这篇手记会在柜台后出现。", en: "Collect all six cartridges to reveal this note behind the counter." },
    unlocked: { zh: "六段旅程已经归档，手记现已开放。", en: "All six journeys are archived. The note is now open." },
    read: { zh: "阅读游戏手记", en: "Read Play Note" }
  },
  actions: {
    reset: { zh: "重新开始", en: "Restart" },
    back: { zh: "返回开盒", en: "Back to Counter" }
  }
} as const;

export const gameCartridges: GameCartridge[] = [
  {
    id: "baldurs-gate-3",
    appId: 1086940,
    title: "博德之门 3",
    coverImage: "/games/covers/baldurs-gate-3.jpg",
    genre: { zh: "角色扮演", en: "Role-playing" },
    playtimeHours: 108.7,
    features: [{ zh: "高度自由", en: "Open-ended" }, { zh: "分支叙事", en: "Branching story" }, { zh: "创意解法", en: "Creative solutions" }],
    memory: {
      zh: "于我而言，它最可贵之处在于近乎无边界的自由。玩家的构想往往能够在游戏中获得回应，由此形成丰富而独特的创造空间。我也因此期待，未来能有一部武侠题材作品抵达相近的高度。",
      en: "What I value most is its nearly boundless freedom. The game often responds to the player's ideas, creating a rich and distinctive space for invention. It also makes me hope that one day a wuxia game might reach a similar height."
    },
    accent: "coral"
  },
  {
    id: "elden-ring",
    appId: 1245620,
    title: "艾尔登法环",
    coverImage: "/games/covers/elden-ring.jpg",
    genre: { zh: "动作角色扮演", en: "Action RPG" },
    playtimeHours: 74.3,
    features: [{ zh: "自由探索", en: "Exploration" }, { zh: "环境叙事", en: "Worldbuilding" }, { zh: "难度挑战", en: "Challenge" }],
    memory: {
      zh: "它将探索未知的乐趣与高难度挑战带来的成就感结合在一起。旅程虽然艰难，但也正因如此，每一次发现与突破都显得更加珍贵。这种体验十分符合我的个人喜好。",
      en: "It brings together the pleasure of exploring the unknown and the satisfaction of overcoming demanding challenges. The journey is difficult, yet that difficulty gives every discovery and breakthrough greater weight. It is an experience closely aligned with my own taste."
    },
    accent: "yellow"
  },
  {
    id: "oxygen-not-included",
    appId: 457140,
    title: "缺氧",
    coverImage: "/games/covers/oxygen-not-included.jpg",
    genre: { zh: "基地经营", en: "Colony Simulation" },
    playtimeHours: 98,
    features: [{ zh: "系统联动", en: "Interlocking systems" }, { zh: "基地建设", en: "Base building" }, { zh: "持续优化", en: "Optimization" }],
    memory: {
      zh: "它是我接触基地建设与系统经营类游戏的入门之作，也是一部颇具代表性的作品。从最初的无从下手，到逐渐理解各项系统之间的联系，这一过程构成了它独特的乐趣。",
      en: "It was my introduction to base building and systems-driven management, and remains a representative work of the genre. Moving from initial confusion to understanding how its systems connect is a central part of its distinctive appeal."
    },
    accent: "teal"
  },
  {
    id: "legend-of-mortal",
    appId: 1859910,
    title: "活侠传",
    coverImage: "/games/covers/legend-of-mortal.jpg",
    genre: { zh: "武侠角色扮演", en: "Wuxia RPG" },
    playtimeHours: 46,
    features: [{ zh: "细腻情感", en: "Subtle emotion" }, { zh: "武侠气韵", en: "Wuxia spirit" }, { zh: "命运选择", en: "Fateful choices" }],
    memory: {
      zh: "它拥有细腻的情感刻画，也保留了浓郁而纯粹的武侠气质。若要用一句话概括它带给我的感受，便是：“正邪存乎在我，名声留问诸君。”",
      en: "Its emotional portrayal is delicate, while its wuxia spirit remains rich and sincere. If one line could capture what it leaves with me, it would be: ‘Right and wrong reside within me; reputation is left for others to judge.’"
    },
    accent: "coral"
  },
  {
    id: "wuchang-fallen-feathers",
    appId: 2277560,
    title: "明末：渊虚之羽",
    coverImage: "/games/covers/wuchang-fallen-feathers.jpg",
    genre: { zh: "类魂动作角色扮演", en: "Soulslike Action RPG" },
    playtimeHours: 28.7,
    features: [{ zh: "明末幻想", en: "Late-Ming fantasy" }, { zh: "动作探索", en: "Action exploration" }, { zh: "场外回响", en: "Public discourse" }],
    memory: {
      zh: "我对这部作品最深的感触，更多来自游戏之外：人言可畏。舆论不仅影响人们如何认识一部作品，有时也会左右它最终以何种方式被记住。",
      en: "My strongest impression of this work comes largely from beyond the game itself: public opinion can be formidable. It shapes how a work is understood and can even influence the way it is ultimately remembered."
    },
    accent: "teal"
  },
  {
    id: "civilization-vi",
    appId: 289070,
    title: "文明 6",
    coverImage: "/games/covers/civilization-vi.jpg",
    genre: { zh: "回合制策略", en: "Turn-based Strategy" },
    playtimeHours: 144.9,
    features: [{ zh: "文明经营", en: "Empire building" }, { zh: "长期规划", en: "Long planning" }, { zh: "多线发展", en: "Many paths" }],
    memory: {
      zh: "文明系列于我而言，是策略游戏领域的“白月光”。真正引领我进入这一类型的是《文明 5》，而《文明 6》则延续了那份不断思考、规划，并让人忍不住再进行一个回合的乐趣。",
      en: "The Civilization series holds a singular place in my memory of strategy games. Civilization V first led me into the genre, while Civilization VI continues the pleasure of thinking, planning, and inevitably playing just one more turn."
    },
    accent: "yellow"
  }
];