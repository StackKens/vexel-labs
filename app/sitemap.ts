import type { MetadataRoute } from 'next'
import { articles } from '@/lib/insights-data'
import { services } from '@/lib/services-data'
import { getAllJobs } from '@/lib/careers-data'

const baseUrl = 'https://vexellabs.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/work', '/insights', '/lab', '/careers', '/contact']
  const staticEntries = staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : 0.7 }))
  const serviceEntries = services.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 }))
  const articleEntries = articles.map((article) => ({ url: `${baseUrl}/insights/${article.slug}`, lastModified: new Date(article.publishedDate), changeFrequency: 'yearly' as const, priority: 0.5 }))
  const jobEntries = getAllJobs().map((job) => ({ url: `${baseUrl}/careers/${job.slug}`, lastModified: new Date(job.postedDate), changeFrequency: 'weekly' as const, priority: 0.5 }))

  return [...staticEntries, ...serviceEntries, ...articleEntries, ...jobEntries]
}
