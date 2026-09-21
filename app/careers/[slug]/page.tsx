import { Metadata } from 'next'
import { getJobBySlug, getAllJobs } from '@/lib/careers-data'
import JobDetailClient from './job-detail-client'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) {
    return {
      title: 'Job not found — Vexel Labs',
    }
  }

  return {
    title: `${job.title} — Vexel Labs Careers`,
    description: job.description,
    openGraph: {
      title: `${job.title} — Vexel Labs Careers`,
      description: job.description,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  const jobs = getAllJobs()
  return jobs.map((job) => ({
    slug: job.slug,
  }))
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  return <JobDetailClient job={job} />
}
