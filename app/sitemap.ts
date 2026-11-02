import type { MetadataRoute } from 'next'
export const dynamic = 'force-static'
import { articles } from '@/lib/insights-data'
import { getAllJobs } from '@/lib/careers-data'

const baseUrl = 'https://vexellabs.com'

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/research', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/technology', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/products', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/products/acs', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/products/ai', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/insights', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/careers', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const articleEntries = articles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  const jobEntries = getAllJobs().map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(job.postedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticEntries, ...articleEntries, ...jobEntries]
}
