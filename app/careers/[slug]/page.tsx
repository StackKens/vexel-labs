import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllJobs, getJobBySlug } from '@/lib/careers-data'
import JobDetailClient from './job-detail-client'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getAllJobs().map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) return { title: 'Role not found' }

  return {
    title: job.title,
    description: job.description,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      title: `${job.title} — Vexel Labs Careers`,
      description: job.description,
      url: `/careers/${job.slug}`,
    },
  }
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) notFound()

  return <JobDetailClient job={job} />
}
