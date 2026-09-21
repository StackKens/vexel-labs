import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { getArticleBySlug, getRelatedArticles } from '@/lib/insights-data'
import ArticleClient from './article-client'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article not found',
    }
  }

  return {
    title: `${article.title} — Vexel Labs Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const related = getRelatedArticles(slug, 3)
  const publishDate = new Date(article.publishedDate)

  return (
    <ArticleClient 
      article={article} 
      related={related}
      publishDate={publishDate}
    />
  )
}
