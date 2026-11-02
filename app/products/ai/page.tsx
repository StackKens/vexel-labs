import type { Metadata } from 'next'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'

export const metadata: Metadata = {
  title: 'VexelLabs AI — Coming soon',
  description:
    'VexelLabs AI is in development. An applied intelligence workspace for teams building with models.',
  alternates: { canonical: '/products/ai' },
  openGraph: {
    title: 'VexelLabs AI — Coming soon',
    description: 'An applied intelligence workspace for teams building with models.',
    url: '/products/ai',
  },
}

export default function AiPage() {
  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>VexelLabs AI / Coming soon</p>
        <h1 className={styles.title}>VexelLabs AI is coming soon.</h1>
        <p className={styles.lede}>
          An applied intelligence workspace for teams building with models. We are still building
          it, and we will share more when it is ready.
        </p>
        <div className={styles.actions}>
          <SiteButton href="/contact">Talk to us about AI</SiteButton>
          <SiteButton href="/products" variant="outline">
            Back to products
          </SiteButton>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <h2 className={styles.h2}>In development.</h2>
          <div className={styles.copy}>
            <p>
              VexelLabs AI is being built around the work between a working prototype and a system
              a team can depend on: grounded answers, measured changes and visible operations.
            </p>
            <p>
              The interface is not open yet. If you are working on a problem that needs that kind
              of care, we would like to hear about it.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
