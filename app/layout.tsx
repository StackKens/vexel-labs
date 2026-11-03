import { Analytics } from '@vercel/analytics/next'
import { Geist, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vexellabs.com'),
  title: {
    default: 'VexelLabs — Engineering technology for what comes next',
    template: '%s — VexelLabs',
  },
  description:
    'VexelLabs designs and engineers intelligent products, digital systems and research-led technology from Africa for the world.',
  generator: 'VexelLabs',
  openGraph: {
    title: 'VexelLabs — Engineering technology for what comes next',
    description:
      'Intelligent products and digital systems, built with a clear purpose.',
    type: 'website',
    siteName: 'VexelLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VexelLabs | Engineering technology for what comes next',
    description:
      'Intelligent products and digital systems, built with a clear purpose.',
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
  colorScheme: 'dark',
  themeColor: '#080D16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable}`}>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
