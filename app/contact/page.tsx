import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with VexelLabs about a product, system or problem worth solving.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — VexelLabs',
    description: 'Tell VexelLabs what you are trying to build, improve or make possible.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
