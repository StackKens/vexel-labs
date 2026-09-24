import type { Metadata } from 'next'
import CareersClient from './careers-client'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Vexel Labs. Build technology with ambitious people. Explore open positions in engineering, AI/ML, design, and more.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers — Vexel Labs',
    description: 'Join Vexel Labs. Build technology with ambitious people.',
    url: '/careers',
  },
}

export default function CareersPage() {
  return <CareersClient />
}
