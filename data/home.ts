import type { LocalizedText } from "@/types/content";

export const homeCopy = {
  nav: {
    interests: { zh: "喜欢的东西", en: "Interests" },
    notes: { zh: "最近的记录", en: "Notes" },
    contact: { zh: "认识一下", en: "Say hello" }
  },
  intro: {
    eyebrow: { zh: "一个人的生活与喜欢", en: "A little of my life" },
    greeting: { zh: "你好，我是", en: "Hi, I'm" },
    name: { zh: "蒋荞宇", en: "Orion Jiang" },
    body: {
      zh: "喜欢游戏和动画。自由探索的世界、细腻的故事，以及慢慢弄懂一个复杂系统的过程，都能让我投入其中。",
      en: "I enjoy games and anime. Worlds I can freely explore, stories told with care, and the slow satisfaction of understanding a complex system all draw me in."
    },
    note: {
      zh: "我会在这里留下游玩感想、喜欢的片段，以及一些日常记录。",
      en: "This is where I keep thoughts from playing, moments I love, and a few notes from everyday life."
    },
    invitation: {
      zh: "也希望认识聊得来的玩伴。不只聊玩了什么，也聊途中发现了什么、哪段故事让人难忘。",
      en: "I'd also like to meet people I can connect with. Not just to talk about what we played, but what we discovered along the way and which stories stayed with us."
    },
    scroll: { zh: "从我的喜欢开始", en: "Start with what I love" }
  },
  interests: {
    kicker: { zh: "01 / 喜欢", en: "01 / INTERESTS" },
    title: { zh: "让我投入其中的东西", en: "Things that draw me in" },
    body: {
      zh: "有时是一个可以自由探索的世界，有时是一段细腻的故事。喜欢的理由，往往比一个分数更值得留下。",
      en: "Sometimes it's a world to explore; sometimes a story told with care. The reasons I love something often say more than a score."
    },
    games: { zh: "游戏里的几段旅程", en: "A few journeys in games" },
    anime: { zh: "也喜欢动画", en: "Anime, too" },
    animeBody: {
      zh: "除了游戏，动画也是我喜欢的事物之一。期待在这里，慢慢聊起那些喜欢的片段。",
      en: "Anime is another interest of mine. I look forward to sharing the moments I love here, little by little."
    },
    memory: { zh: "个人感想", en: "Personal memory" },
    openMemory: { zh: "展开个人感想", en: "Open personal memory" }
  },
  notes: {
    kicker: { zh: "02 / 记录", en: "02 / NOTES" },
    title: { zh: "把喜欢的片段留下来", en: "Keeping a few moments" },
    body: { zh: "不必写成评测，也可以只记下一次游玩的感受。", en: "It doesn't have to be a review. Sometimes a feeling from a game is enough." },
    read: { zh: "阅读全文", en: "Read the note" }
  },
  contact: {
    kicker: { zh: "03 / 相遇", en: "03 / CONNECTION" },
    title: { zh: "也许，我们能聊到一起。", en: "Maybe we'll get along." },
    body: {
      zh: "如果你也喜欢游戏和动画，欢迎来打个招呼。可以从最近玩的一款游戏、一段喜欢的故事，或一个有趣的发现聊起。",
      en: "If you enjoy games and anime too, feel free to say hello. We could start with something you've played, a story you love, or an interesting discovery."
    },
    email: { zh: "给我写信", en: "Write to me" },
    copy: { zh: "复制邮箱", en: "Copy email" },
    copied: { zh: "邮箱已复制", en: "Email copied" },
    copyFailed: { zh: "未能自动复制，请长按邮箱地址复制。", en: "Could not copy automatically. Select the email address to copy it." },
    steam: { zh: "我的 Steam", en: "My Steam" },
    github: { zh: "我的 GitHub", en: "My GitHub" }
  },
  quote: { zh: "留一句喜欢的话", en: "A line I keep" },
  footer: { zh: "生活、游戏，以及一些值得记住的事。", en: "Life, games, and a few things worth remembering." },
  home: { zh: "返回首页", en: "Back home" },
  skip: { zh: "跳到正文", en: "Skip to content" }
} satisfies Record<string, unknown>;

export const homeGameNames: Record<string, LocalizedText> = {
  "baldurs-gate-3": { zh: "博德之门 3", en: "Baldur's Gate 3" },
  "elden-ring": { zh: "艾尔登法环", en: "Elden Ring" },
  "oxygen-not-included": { zh: "缺氧", en: "Oxygen Not Included" },
  "legend-of-mortal": { zh: "活侠传", en: "Legend of Mortal" },
  "wuchang-fallen-feathers": { zh: "明末：渊虚之羽", en: "WUCHANG: Fallen Feathers" },
  "civilization-vi": { zh: "文明 6", en: "Civilization VI" }
};
