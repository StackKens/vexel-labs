'use client'

import { useEffect } from 'react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <PageShell>
      <section className={styles.hero} aria-labelledby="error-title">
        <p className={styles.kicker}>Something went wrong</p>
        <h1 className={styles.title} id="error-title">
          This view needs another pass.
        </h1>
        <p className={styles.lede}>
          The page could not be prepared. Try again, or return to the homepage.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryButton} type="button" onClick={() => reset()}>
            Try again
          </button>
          <SiteButton href="/" variant="outline">
            Return home
          </SiteButton>
        </div>
      </section>
    </PageShell>
  )
}
