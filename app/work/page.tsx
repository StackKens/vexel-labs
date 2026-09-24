import type { Metadata } from 'next'
import WorkClient from './work-client'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Explore the product directions, prototypes, and systems Vexel Labs is building.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work — Vexel Labs',
    description: 'Product directions, prototypes, and systems built around real problems.',
    url: '/work',
  },
}

export default function WorkPage() {
  return <WorkClient />
}
