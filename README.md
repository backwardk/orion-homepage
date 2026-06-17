# Orion Jiang Personal Homepage

一个现代、简洁、具有个人气质的响应式个人主页，也是后续长期维护的数字花园入口。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- lucide-react
- GitHub Pages 静态部署

## 功能

- 响应式首页，适配手机、平板、桌面
- 浅色 / 深色模式切换
- 中文 / 英文切换
- Hero、关于、最近在做什么、兴趣、数字花园、今日一句、联系区
- 今日一句在两条内容之间随刷新轮换
- 本地 Markdown 文章详情页
- sitemap、robots、Open Graph 图片、404 页面
- GitHub Pages 静态导出，Vercel 可选部署

## 项目结构

```txt
app/
  garden/[slug]/page.tsx
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  sections/
  ui/
  article-page-content.tsx
  language-provider.tsx
  language-toggle.tsx
  motion.tsx
  not-found-content.tsx
  personal-mark.tsx
  providers.tsx
  site-header.tsx
  theme-toggle.tsx
content/
  articles/
data/
  articles.ts
  contact.ts
  interests.ts
  quotes.ts
  site.ts
  site-config.ts
lib/
  articles.ts
  format-date.ts
  markdown.tsx
  quote-rotation.ts
types/
  content.ts
public/
  og-image.svg
```

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 构建

```bash
npm run build
```

静态导出结果会生成在 `out/`。

GitHub Pages 仓库站点路径构建：

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/orion-homepage'
npm.cmd run build
```

## 修改个人信息

优先修改 `data/site-config.ts`：

- `name`
- `englishName`
- `email`
- `githubUrl`
- `instagramUrl`
- `siteUrl`
- `description`

如果 `instagramUrl` 为空，联系区会自动隐藏 Instagram，避免显示占位链接。

页面文案集中在 `data/site.ts`，包含中文和英文两套内容。

## 新增文章

1. 在 `content/articles/` 新增 Markdown 文件，例如：

   ```txt
   content/articles/my-new-note.md
   ```

2. 使用当前双语结构：

   ```md
   <!-- zh -->

   ## 中文标题

   中文正文。

   <!-- en -->

   ## English Title

   English content.
   ```

3. 在 `data/articles.ts` 增加对应元数据：

   ```ts
   {
     slug: "my-new-note",
     title: { zh: "中文标题", en: "English Title" },
     publishedAt: "2026-06-18",
     category: { zh: "分类", en: "Category" },
     tags: [{ zh: "标签", en: "Tag" }],
     summary: { zh: "中文摘要", en: "English summary" },
     readingTime: { zh: "3 分钟阅读", en: "3 min read" }
   }
   ```

4. 访问 `/garden/my-new-note/` 检查文章页。

## GitHub Pages 部署

项目已经在 `next.config.ts` 中配置：

- `output: "export"`
- `images.unoptimized: true`
- `NEXT_PUBLIC_BASE_PATH` 支持仓库站点路径

仓库站点地址：

```txt
https://backwardk.github.io/orion-homepage/
```

GitHub Pages 设置：

1. 打开仓库 `Settings -> Pages`
2. `Build and deployment`
3. `Source` 选择 `GitHub Actions`
4. 推送到 `main` 后等待 `Deploy to GitHub Pages` workflow 完成

## GitHub Pages 404 排查

如果出现 `There isn't a GitHub Pages site here`：

- 确认仓库是 Public，或当前账号支持私有库 Pages
- 确认 `Settings -> Pages -> Source` 是 `GitHub Actions`
- 确认 Actions 中 `Deploy to GitHub Pages` 成功
- 确认最近提交已经 push 到 GitHub
- 确认构建时 `NEXT_PUBLIC_BASE_PATH=/orion-homepage`
- 等待 GitHub Pages 首次发布完成后再刷新

## Vercel 部署

Vercel 可以直接导入仓库：

1. Import Git Repository
2. 使用默认 Next.js 设置
3. `NEXT_PUBLIC_BASE_PATH` 留空
4. Deploy

## 维护原则

- 个人信息优先放在 `data/site-config.ts`
- 双语页面文案放在 `data/site.ts`
- 文章元数据放在 `data/articles.ts`
- 文章正文放在 `content/articles/`
- 保持视觉克制、留白充足、链接真实可用
