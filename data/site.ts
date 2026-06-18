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
      zh: "学习、创造，也记录那些让生活变清楚的瞬间。",
      en: "Learning, making, and noting the moments that make life clearer."
    },
    noteTitle: {
      zh: "学习型创作者的安静笔记。",
      en: "Quiet notes from a learning-minded maker."
    },
    noteBody: {
      zh: "关于技术实践、阅读、地点与日常观察的个人档案。",
      en: "A personal archive of technical practice, reading, places, and small observations."
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
        "我是一个持续学习的创作者，也在用技术练习把想法做成真实可用的东西。",
        "我关心工具、设计和文字如何让复杂问题变清楚，也喜欢阅读、旅行和观察城市里的日常细节。",
        "这个网站是我的数字花园，用来记录想法、整理经验，也保存那些值得回味的时刻。"
      ],
      en: [
        "I am a learning-minded creator, using technology to practice turning ideas into things that can actually be used.",
        "I care about how tools, design, and writing make complex problems clearer, and I enjoy reading, traveling, and noticing small city details.",
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
        title: { zh: "正在学习：把技术做成可用工具", en: "Learning: turning technology into useful tools" },
        body: {
          zh: "继续练习前端、产品思维和自动化，把零散想法做成能被反复使用的小系统。",
          en: "Practicing frontend work, product thinking, and automation by turning scattered ideas into reusable systems."
        }
      },
      {
        title: { zh: "最近在读：长期主义与日常观察", en: "Reading: long-term thinking and daily observation" },
        body: {
          zh: "偏向那些能帮助我重新理解学习、城市、设计和生活秩序的内容。",
          en: "Leaning toward writing that helps me rethink learning, cities, design, and personal order."
        }
      },
      {
        title: { zh: "正在保持：稳定输出和低噪音节奏", en: "Keeping: steady output and a low-noise rhythm" },
        body: {
          zh: "用短随笔、项目记录和定期整理，让注意力更多回到真正重要的事情上。",
          en: "Using short notes, project records, and regular cleanup to return attention to what matters."
        }
      },
      {
        title: { zh: "最近在玩：一些单机游戏", en: "Recently playing: a few single-player games" },
        body: {
          zh: "记录其中的叙事、氛围和让我停下来的细节，不急着评价，只先保存感受。",
          en: "Noting their storytelling, atmosphere, and quiet details without rushing to turn them into reviews."
        }
      }
    ]
  },
  likes: {
    title: { zh: "喜欢的事物", en: "Likes" },
    description: {
      zh: "一些会反复吸引我的偏好，也悄悄影响我如何学习、创造和生活。",
      en: "A few recurring preferences that quietly shape how I learn, make, and live."
    }
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
