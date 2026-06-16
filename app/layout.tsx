import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const notoSansSc = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qiaoyujiang.github.io"),
  title: {
    default: "蒋荞宇 | Orion Jiang",
    template: "%s | Orion Jiang"
  },
  description: "蒋荞宇的个人主页。记录成长，探索世界，保持好奇。",
  keywords: ["蒋荞宇", "Orion Jiang", "Personal Homepage", "Digital Garden", "Next.js"],
  authors: [{ name: "Qiaoyu Jiang" }],
  creator: "Qiaoyu Jiang",
  openGraph: {
    title: "蒋荞宇 | Orion Jiang",
    description: "记录成长，探索世界，保持好奇。",
    url: "https://qiaoyujiang.github.io",
    siteName: "Orion Jiang",
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "蒋荞宇 | Orion Jiang",
    description: "记录成长，探索世界，保持好奇。"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansSc.variable}`}>
        <Providers>{children}</Providers>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
