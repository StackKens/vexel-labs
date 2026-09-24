import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Practical thinking about software products, artificial intelligence, engineering, and the systems being built at Vexel Labs.',
}

export default function InsightsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
