import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, services } from '@/lib/services-data'
import ServiceDetailClient from './detail-client'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return { title: 'Service not found' }

  return {
    title: service.name,
    description: service.details,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} — Vexel Labs`,
      description: service.details,
      url: `/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return <ServiceDetailClient service={service} />
}
