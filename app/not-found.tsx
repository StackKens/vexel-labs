import Link from 'next/link'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import styles from './state.module.css'

export const metadata = {
  title: 'Page not found',
  description: 'The requested VexelLabs page could not be found.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.statePage} id="top" aria-labelledby="not-found-title">
        <div className={`container ${styles.stateInner}`}>
          <span className={styles.stateCode} aria-hidden="true">
            404
          </span>
          <p className="eyebrow">404 / Route not found</p>
          <h1 id="not-found-title">This page is not part of the system.</h1>
          <p className={styles.stateCopy}>
            The address may have changed, or the page may not exist yet. Start from a known place.
          </p>
          <div className={styles.stateActions}>
            <SiteButton href="/">Return home</SiteButton>
            <SiteButton href="/contact" variant="outline">
              Contact VexelLabs
            </SiteButton>
          </div>
          <div className={styles.stateLinks}>
            <Link href="/research">Research</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/products">Products</Link>
            <Link href="/insights">Insights</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
