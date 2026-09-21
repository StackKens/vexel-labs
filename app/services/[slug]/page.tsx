import type { Metadata } from 'next'
import ServiceDetailPage from './detail-client'

const titles: Record<string, string> = {
  'software-engineering': 'Software Engineering',
  'artificial-intelligence': 'Artificial Intelligence',
  'mobile-applications': 'Mobile Applications',
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const title = titles[slug] ?? 'Technology Services'
  return {
    title: `${title} — Vexel Labs`,
    description: `${title} capabilities from Vexel Labs. Technology built around real problems.`,
    openGraph: { title: `${title} — Vexel Labs`, description: `${title} capabilities from Vexel Labs.` },
  }
}

export function generateStaticParams() {
  return Object.keys(titles).map((slug) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ServiceDetailPage serviceKey={slug} />
}

export const dynamicParams = true
