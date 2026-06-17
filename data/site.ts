import type { Language } from "@/types/content";

export const siteCopy = {
  nav: {
    about: { zh: "关于", en: "About" },
    now: { zh: "近况", en: "Now" },
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
    noteTitle: {
      zh: "给好奇生活的安静笔记。",
      en: "Quiet notes for a curious life."
    },
    noteBody: {
      zh: "关于学习、阅读、地点与日常观察的个人档案。",
      en: "A personal archive of learning, reading, places, and small observations."
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
        "我是一个持续学习的人，关心技术如何变成真实可用的工具，也关心设计、文字和生活秩序如何让人更安静地前进。",
        "我喜欢阅读、旅行和观察城市里的日常细节。很多想法并不会立刻变成结论，所以我把它们放在这里，慢慢修剪、补充、回看。",
        "这个网站是我的数字花园，用来记录想法、整理经验，也保存那些值得回味的时刻。"
      ],
      en: [
        "I keep learning, with a steady interest in how technology becomes useful tools and how design, writing, and daily order help people move with more calm.",
        "I enjoy reading, traveling, and noticing the small details inside cities. Not every thought becomes a conclusion immediately, so I keep them here to refine, add to, and revisit.",
        "This website is my digital garden, a place to collect thoughts, organize experience, and keep moments worth returning to."
      ]
    },
    portrait: { zh: "个人标识", en: "Personal mark" }
  },
  now: {
    title: { zh: "最近在做什么", en: "Now" },
    description: {
      zh: "一些正在发生的小事，让主页保持呼吸感。",
      en: "A few current notes that keep this homepage alive."
    },
    items: [
      {
        title: { zh: "整理个人知识库", en: "Organizing a personal knowledge base" },
        body: {
          zh: "把零散笔记归档成可回看的主题，减少信息堆积。",
          en: "Turning scattered notes into themes that are easier to revisit."
        }
      },
      {
        title: { zh: "练习更稳定的输出", en: "Practicing steadier writing" },
        body: {
          zh: "用短篇随笔记录学习、阅读和城市观察。",
          en: "Writing short notes on learning, reading, and city observations."
        }
      },
      {
        title: { zh: "保持低噪音的生活节奏", en: "Keeping a low-noise rhythm" },
        body: {
          zh: "让工具、计划和空间都服务于更清晰的注意力。",
          en: "Letting tools, plans, and space serve clearer attention."
        }
      }
    ]
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
      zh: "这里保留近期随笔的入口，内容来自本地 Markdown，之后可以继续扩展成更完整的文章系统。",
      en: "A small entrance to recent essays, powered by local Markdown and ready to grow into a fuller writing system."
    },
    markdownReady: { zh: "阅读全文", en: "Read essay" },
    backHome: { zh: "返回首页", en: "Back home" },
    notFound: {
      title: { zh: "文章还在路上", en: "This essay is not here yet" },
      body: {
        zh: "可能是链接发生了变化，或者这篇记录还没有公开。",
        en: "The link may have changed, or this note has not been published yet."
      }
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
    built: { zh: "使用 Next.js 构建", en: "Built with Next.js" },
    copyright: { zh: "© 2026 蒋荞宇", en: "© 2026 Qiaoyu Jiang" }
  },
  notFound: {
    title: { zh: "这一页还没有被种下", en: "This page has not been planted yet" },
    body: {
      zh: "可能是地址写错了，也可能是内容还在整理。回到首页继续看看吧。",
      en: "The address may be wrong, or the content may still be in progress. Return home and keep exploring."
    },
    action: { zh: "回到首页", en: "Back home" }
  }
} satisfies Record<string, unknown>;

export const languageLabel: Record<Language, string> = {
  zh: "中",
  en: "EN"
};
