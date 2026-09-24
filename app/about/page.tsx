import type { Metadata } from 'next'
import AboutClient from './about-client'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how Vexel Labs approaches product, engineering, and technology from Africa.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Vexel Labs',
    description: 'How Vexel Labs approaches product, engineering, and technology from Africa.',
    url: '/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
