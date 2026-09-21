import type { Metadata } from 'next'
import LabClient from './lab-client'

export const metadata: Metadata = {
  title: 'Vexel Lab — Exploring what technology can become',
  description: 'Vexel Labs explores artificial intelligence, intelligent systems, automation, and emerging technology through practical experiments.',
  alternates: { canonical: '/lab' },
  openGraph: {
    title: 'Vexel Lab — Exploring what technology can become',
    description: 'Experiments in AI, automation, intelligent systems, and new digital products from Vexel Labs.',
    type: 'website',
    url: '/lab',
  },
}

export default function LabPage() {
  return <LabClient />
}
