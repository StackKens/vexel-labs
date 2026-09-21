import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights — Vexel Labs',
  description: 'Practical thinking about software products, artificial intelligence, engineering, and the systems being built at Vexel Labs.',
  openGraph: {
    title: 'Insights — Vexel Labs',
    description: 'Ideas, engineering, and technology from Vexel Labs.',
    type: 'website',
  },
}

export default function InsightsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
    
