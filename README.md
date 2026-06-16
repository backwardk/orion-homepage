# Orion Jiang Personal Homepage

一个现代、简洁、具有个人气质的响应式单页个人网站。

技术栈：

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- lucide-react

## Features

- 响应式个人主页
- 浅色 / 深色模式切换
- 中文 / 英文切换
- 克制的淡入、上移、Hover 动效
- 今日一句会在两条内容之间随刷新轮换
- 模拟文章数据，后续可接入 Markdown
- GitHub Pages 静态导出
- Vercel 可选部署

## Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  sections/
  ui/
  language-provider.tsx
  language-toggle.tsx
  motion.tsx
  providers.tsx
  site-header.tsx
  theme-toggle.tsx
data/
  articles.ts
  contact.ts
  interests.ts
  quotes.ts
  site.ts
lib/
  format-date.ts
  quote-rotation.ts
types/
  content.ts
public/
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static export is generated in `out/`.

## Customize

- Update contact links in `data/contact.ts`.
- Update mock articles in `data/articles.ts`.
- Update interests in `data/interests.ts`.
- Update site copy and bilingual text in `data/site.ts`.

## GitHub Pages Deployment

This project is configured with `output: "export"` in `next.config.ts`.

For a user or organization site such as `https://username.github.io`, no base path is needed.

For a repository site such as `https://username.github.io/repository-name`, set this repository secret or workflow environment variable:

```bash
NEXT_PUBLIC_BASE_PATH=/repository-name
```

Then deploy the generated `out/` folder with GitHub Pages.

The included workflow at `.github/workflows/deploy.yml` builds and uploads the static export.

## Vercel Deployment

Vercel can deploy this project directly:

1. Import the repository in Vercel.
2. Use the default Next.js settings.
3. Leave `NEXT_PUBLIC_BASE_PATH` empty unless you have a specific sub-path deployment.

## Notes

- The avatar is an abstract placeholder by design.
- The site does not depend on a server runtime, so it works well on free static hosting.
- Language state is local to the current session and defaults to Chinese.
