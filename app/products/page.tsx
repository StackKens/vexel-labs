import type { Metadata } from 'next'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'VexelLabs products: Academic Cloud System, a school management platform, and VexelLabs AI, an applied intelligence workspace in development.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products — VexelLabs',
    description: 'Software with a clear job to do.',
    url: '/products',
  },
}

const products = [
  {
    name: 'ACS',
    sub: 'Academic Cloud System',
    line: 'A clearer school day.',
    cta: 'Explore ACS',
    href: '/products/acs',
    tone: 'light',
    status: '',
  },
  {
    name: 'VexelLabs AI',
    sub: 'Applied intelligence',
    line: 'A space for better questions.',
    cta: 'Explore VexelLabs AI',
    href: '/products/ai',
    tone: 'dark',
    status: 'Coming soon',
  },
]

const shared = [
  {
    number: '01',
    title: 'A real job to do',
    text: 'Each product begins with a problem that people already live with, not a technology looking for a use.',
  },
  {
    number: '02',
    title: 'A system, not a feature',
    text: 'We build the whole working product: the interface, the data, the intelligence and the operations behind it.',
  },
  {
    number: '03',
    title: 'Room to become',
    text: 'The first release is a foundation. Products are designed to be improved in use, not frozen at launch.',
  },
]

export default function ProductsPage() {
  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Products</p>
        <h1 className={styles.title}>Software with a clear job to do.</h1>
        <p className={styles.lede}>
          Two products, each built around a specific problem and given the room to become its own
          thing.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article key={product.name} className={styles.productCard}>
              <Link
                className={`${styles.productTile} ${
                  product.tone === 'dark' ? styles.productDark : styles.productLight
                }`}
                href={product.href}
              >
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productSub}>{product.sub}</span>
                {product.status ? (
                  <span className={styles.productStatus}>{product.status}</span>
                ) : null}
              </Link>
              <h2 className={styles.productLine}>{product.line}</h2>
              <Link className={styles.textLink} href={product.href}>
                {product.cta} <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.alt}>
        <div className={styles.altInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Product principles</p>
              <h2 className={styles.h2}>What every VexelLabs product shares.</h2>
            </div>
            <p className={styles.sectionLede}>
              Different problems, the same standard of care for the system that carries them.
            </p>
          </div>

          <div className={styles.rows}>
            {shared.map((item) => (
              <article className={styles.row} key={item.number}>
                <span className={styles.rowIndex}>{item.number}</span>
                <div className={styles.rowBody}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>A product of your own.</h2>
          <div className={styles.ctaActions}>
            <p>
              If you are building something that needs to work in the real world, we would like to
              hear about it.
            </p>
            <SiteButton href="/contact">Contact our team</SiteButton>
            <Link className={styles.textLink} href="/technology">
              How we build <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
