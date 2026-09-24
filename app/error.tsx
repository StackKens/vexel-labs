'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import styles from './state.module.css'

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <SiteHeader tone="light" />
      <main className={styles.statePage} aria-labelledby="error-title">
        <p className="eyebrow">SYSTEM / SOMETHING WENT WRONG</p>
        <h1 id="error-title">This view needs another pass.</h1>
        <p>The page could not be prepared. Try again, or return to the homepage.</p>
        <div className={styles.stateActions}><SiteButton href="/" variant="quiet">Return home</SiteButton><button type="button" className={styles.stateButton} onClick={() => reset()}>Try again</button></div>
      </main>
      <SiteFooter />
    </>
  )
}
