import type { Metadata } from 'next'
import { articles, getFeaturedArticle, toArticleSummary } from '@/lib/insights-data'
import InsightsClient from './insights-client'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Practical thinking about software products, artificial intelligence, engineering, and the systems being built at Vexel Labs.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights — Vexel Labs',
    description: 'Ideas, engineering, and technology from Vexel Labs.',
    url: '/insights',
  },
}

export default function InsightsPage() {
  const summaries = articles.map(toArticleSummary)
  const availableCategories = ['All', ...new Set(articles.map((article) => article.category))]
  const featured = getFeaturedArticle()

  return <InsightsClient articles={summaries} categories={availableCategories} featured={featured ? toArticleSummary(featured) : undefined} />
}
