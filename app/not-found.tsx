import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'

export const metadata = {
  title: 'Page not found',
  description: 'The requested VexelLabs page could not be found.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <PageShell>
      <section className={styles.hero} aria-labelledby="not-found-title">
        <p className={styles.kicker}>404 / Page not found</p>
        <h1 className={styles.title} id="not-found-title">
          This page is not part of the system.
        </h1>
        <p className={styles.lede}>
          The address may have changed, or the page may not exist yet. Start from a known place.
        </p>
        <div className={styles.actions}>
          <SiteButton href="/">Return home</SiteButton>
          <SiteButton href="/contact" variant="outline">
            Contact VexelLabs
          </SiteButton>
        </div>
      </section>
    </PageShell>
  )
}
