import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug, getRelatedArticles, toArticleSummary } from '@/lib/insights-data'
import ArticleClient from './article-client'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) return { title: 'Article not found' }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate,
      url: `/insights/${article.slug}`,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const related = getRelatedArticles(slug, 3).map(toArticleSummary)

  return <ArticleClient article={article} related={related} />
}
