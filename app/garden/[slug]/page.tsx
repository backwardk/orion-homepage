import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageContent } from "@/components/article-page-content";
import { SiteHeader } from "@/components/site-header";
import { getArticleSlugs, getArticleWithContent } from "@/lib/articles";
import { siteConfig } from "@/data/site-config";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleWithContent(slug);

  if (!article) {
    return {
      title: "Article Not Found"
    };
  }

  return {
    title: `${article.title.zh} | ${siteConfig.englishName}`,
    description: article.summary.zh,
    alternates: {
      canonical: `/garden/${article.slug}/`
    },
    openGraph: {
      title: article.title.zh,
      description: article.summary.zh,
      url: `${siteConfig.siteUrl}/garden/${article.slug}/`,
      images: [siteConfig.ogImage],
      type: "article",
      publishedTime: article.publishedAt
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleWithContent(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ArticlePageContent article={article} />
    </main>
  );
}
