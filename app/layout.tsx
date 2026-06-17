import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/data/site-config";
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
  metadataBase: new URL(`${siteConfig.siteUrl}/`),
  title: {
    default: siteConfig.displayName,
    template: `%s | ${siteConfig.englishName}`
  },
  description: siteConfig.description.zh,
  keywords: ["蒋荞宇", "Orion Jiang", "Personal Homepage", "Digital Garden", "Next.js", "个人主页"],
  authors: [{ name: siteConfig.copyrightName, url: siteConfig.githubUrl }],
  creator: siteConfig.copyrightName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.displayName,
    description: siteConfig.description.zh,
    url: siteConfig.siteUrl,
    siteName: siteConfig.englishName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.displayName
      }
    ],
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.displayName,
    description: siteConfig.description.en,
    images: [siteConfig.ogImage]
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
