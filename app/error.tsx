'use client'

import { useEffect } from 'react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import styles from './state.module.css'

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <SiteHeader />
      <main className={styles.statePage} id="top" aria-labelledby="error-title">
        <div className={`container ${styles.stateInner}`}>
          <span className={styles.stateCode} aria-hidden="true">
            !
          </span>
          <p className="eyebrow">System / Something went wrong</p>
          <h1 id="error-title">This view needs another pass.</h1>
          <p className={styles.stateCopy}>
            The page could not be prepared. Try again, or return to the homepage.
          </p>
          <div className={styles.stateActions}>
            <button type="button" className={styles.stateButton} onClick={() => reset()}>
              Try again
            </button>
            <SiteButton href="/" variant="outline">
              Return home
            </SiteButton>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
