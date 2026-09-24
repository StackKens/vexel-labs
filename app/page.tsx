import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: { absolute: 'Vexel Labs — Technology, built with intent' },
  description: 'Vexel Labs designs and engineers software, digital products, and intelligent systems for real-world problems.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vexel Labs — Technology, built with intent',
    description: 'Software, digital products, and intelligent systems built around real problems.',
    url: '/',
  },
}

export default function Page() {
  return <HomeClient />
}
