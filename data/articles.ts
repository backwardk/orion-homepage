import type { Article } from "@/types/content";

export const articles: Article[] = [
  {
    slug: "long-term-learning",
    title: {
      zh: "如何保持长期学习的动力",
      en: "How to Keep Learning Over Time"
    },
    publishedAt: "2026-02-12",
    category: {
      zh: "学习",
      en: "Learning"
    },
    tags: [
      { zh: "长期主义", en: "Long-termism" },
      { zh: "反馈", en: "Feedback" },
      { zh: "节奏", en: "Rhythm" }
    ],
    summary: {
      zh: "关于节奏、反馈和微小积累的一些记录。",
      en: "Notes on rhythm, feedback, and the quiet force of small accumulation."
    },
    readingTime: {
      zh: "6 分钟阅读",
      en: "6 min read"
    }
  },
  {
    slug: "tokyo-walk",
    title: {
      zh: "东京散步记录",
      en: "Walking Notes from Tokyo"
    },
    publishedAt: "2026-01-24",
    category: {
      zh: "旅行",
      en: "Travel"
    },
    tags: [
      { zh: "东京", en: "Tokyo" },
      { zh: "散步", en: "Walking" },
      { zh: "城市观察", en: "City notes" }
    ],
    summary: {
      zh: "街角、书店、咖啡馆，以及一些慢下来的瞬间。",
      en: "Street corners, bookstores, cafes, and a few moments that asked me to slow down."
    },
    readingTime: {
      zh: "4 分钟阅读",
      en: "4 min read"
    }
  },
  {
    slug: "minimalism-thinking",
    title: {
      zh: "关于极简主义的一些思考",
      en: "A Few Thoughts on Minimalism"
    },
    publishedAt: "2025-12-18",
    category: {
      zh: "设计",
      en: "Design"
    },
    tags: [
      { zh: "极简主义", en: "Minimalism" },
      { zh: "清晰", en: "Clarity" },
      { zh: "生活方式", en: "Lifestyle" }
    ],
    summary: {
      zh: "少不是目的，清晰才是。",
      en: "Less is not the goal. Clarity is."
    },
    readingTime: {
      zh: "5 分钟阅读",
      en: "5 min read"
    }
  }
];
