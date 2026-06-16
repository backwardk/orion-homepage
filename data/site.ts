import type { Language } from "@/types/content";

export const siteCopy = {
  nav: {
    about: { zh: "关于", en: "About" },
    garden: { zh: "随笔", en: "Garden" },
    contact: { zh: "联系", en: "Contact" }
  },
  controls: {
    theme: { zh: "切换深浅色模式", en: "Toggle color theme" },
    language: { zh: "切换语言", en: "Switch language" }
  },
  hero: {
    name: "蒋荞宇",
    englishName: "Orion Jiang",
    tagline: {
      zh: "记录成长，探索世界，保持好奇。",
      en: "Document growth, explore the world, and stay curious."
    },
    actions: {
      about: { zh: "了解我", en: "About me" },
      garden: { zh: "阅读随笔", en: "Read essays" },
      contact: { zh: "联系我", en: "Contact" }
    }
  },
  about: {
    title: { zh: "关于我", en: "About Me" },
    body: {
      zh: [
        "我是一个持续学习的人，对技术、设计、阅读与生活观察充满兴趣。",
        "这个网站是我的数字花园，用来记录想法、整理经验，也保存那些值得回味的时刻。"
      ],
      en: [
        "I am someone who keeps learning, with a lasting interest in technology, design, reading, and the small observations of everyday life.",
        "This website is my digital garden, a place to collect thoughts, organize experience, and keep moments worth returning to."
      ]
    },
    portrait: { zh: "头像占位", en: "Portrait placeholder" }
  },
  interests: {
    title: { zh: "兴趣", en: "Interests" },
    description: {
      zh: "一些长期陪伴我的关键词。",
      en: "A few keywords that stay with me over time."
    }
  },
  garden: {
    title: { zh: "数字花园", en: "Digital Garden" },
    description: {
      zh: "最近的记录先用模拟数据呈现，未来可以接入 Markdown。",
      en: "Recent notes are mocked for now and ready for a future Markdown workflow."
    }
  },
  quote: {
    label: { zh: "今日一句", en: "A Line For Today" }
  },
  contact: {
    title: { zh: "保持联系", en: "Stay In Touch" },
    description: {
      zh: "如果你也喜欢技术、设计、阅读或城市漫步，欢迎从这里找到我。",
      en: "If you also care about technology, design, reading, or wandering through cities, you can find me here."
    },
    built: { zh: "Built with Next.js", en: "Built with Next.js" }
  }
} satisfies Record<string, unknown>;

export const languageLabel: Record<Language, string> = {
  zh: "中",
  en: "EN"
};
