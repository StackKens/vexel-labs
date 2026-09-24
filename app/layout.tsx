import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vexellabs.com'),
  title: {
    default: 'Vexel Labs — Technology, built with intent',
    template: '%s — Vexel Labs',
  },
  description: 'Vexel Labs designs and engineers software, digital products, and intelligent systems for real-world problems.',
  generator: 'Vexel Labs',
  openGraph: {
    title: 'Vexel Labs — Technology, built with intent',
    description: 'Software, digital products, and intelligent systems built around real problems.',
    type: 'website',
    siteName: 'Vexel Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexel Labs — Technology, built with intent',
    description: 'Software, digital products, and intelligent systems built around real problems.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3f2ed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
