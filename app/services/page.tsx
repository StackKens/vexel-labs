import type { Metadata } from 'next'
import ServicesClient from './services-client'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Vexel Labs capabilities across software, products, systems, intelligence, automation, and infrastructure.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Vexel Labs',
    description: 'Technology capabilities built around real problems.',
    url: '/services',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
