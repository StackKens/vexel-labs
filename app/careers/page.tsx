import { Metadata } from 'next'
import CareersClient from './careers-client'

export const metadata: Metadata = {
  title: 'Careers — Vexel Labs',
  description: 'Join Vexel Labs. Build technology with ambitious people. Explore open positions in engineering, AI/ML, design, and more.',
  openGraph: {
    title: 'Careers — Vexel Labs',
    description: 'Join Vexel Labs. Build technology with ambitious people.',
    type: 'website',
  },
}

export default function CareersPage() {
  return <CareersClient />
}
