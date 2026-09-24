import Link from 'next/link'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import styles from './state.module.css'

export const metadata = {
  title: 'Page not found',
  description: 'The requested Vexel Labs page could not be found.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <SiteHeader tone="light" />
      <main className={styles.statePage} aria-labelledby="not-found-title">
        <p className="eyebrow">404 / ROUTE NOT FOUND</p>
        <h1 id="not-found-title">This page is not part of the system.</h1>
        <p>The address may have changed, or the page may not exist yet.</p>
        <div className={styles.stateActions}><Link className={styles.stateLink} href="/">Return home</Link><Link className={styles.stateLink} href="/contact">Contact Vexel</Link></div>
      </main>
      <SiteFooter />
    </>
  )
}
