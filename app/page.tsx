import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { articles } from '@/lib/insights-data'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: { absolute: 'VexelLabs | Engineering technology for what comes next' },
  description:
    'VexelLabs designs and engineers intelligent products, digital systems and research-led technology from Africa for the world.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'VexelLabs | Engineering technology for what comes next',
    description: 'Intelligent products and digital systems, built with a clear purpose.',
    url: '/',
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

const capabilities = [
  {
    title: 'Product strategy',
    text: 'We turn ambiguous opportunities into clear-direction products with the right constraints, target user, and technical shape.',
    meta: 'Discovery · direction · decision-making',
  },
  {
    title: 'Applied intelligence',
    text: 'We design AI and intelligent systems that are useful in real work, not just impressive in demos or lab environments.',
    meta: 'AI · workflows · evaluation',
  },
  {
    title: 'Digital systems',
    text: 'From interface to infrastructure, we build the tech layer that lets a product operate reliably, scale thoughtfully, and improve over time.',
    meta: 'Cloud · data · operations',
  },
]

const proofPoints = [
  'Context-first product thinking',
  'Built for real use',
  'System-aware delivery',
  'Global ambition, local grounding',
]

export default function HomePage() {
  const journal = articles.slice(0, 2)

  return (
    <main id="top" className={styles.home}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>VexelLabs</p>
          <h1 className={styles.heroTitle}>Engineering technology for what comes next.</h1>
          <p className={styles.heroLede}>
            We build intelligent products and digital systems with a clear purpose — grounded in
            context, designed for real use, and built to outlast the hype cycle.
          </p>
          <div className={styles.heroActions}>
            <SiteButton href="/products">Explore our work</SiteButton>
            <SiteButton href="/contact" variant="outline">
              Contact our team
            </SiteButton>
          </div>
          <div className={styles.heroMeta} aria-label="Core capabilities">
            <span className={styles.heroChip}>Product strategy</span>
            <span className={styles.heroChip}>Applied AI</span>
            <span className={styles.heroChip}>Digital systems</span>
            <span className={styles.heroChip}>Global delivery</span>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <Image
            src="/images/hero.jpg"
            alt="Layered glass planes and structural grids forming an abstract architectural system"
            width={1150}
            height={498}
            priority
            sizes="(max-width: 1150px) 100vw, 1150px"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.capabilityIntro}>
          <p className={styles.kicker}>What we build</p>
          <h2 className={styles.h2}>Technology shaped by the real work, not by trend alone.</h2>
        </div>
        <div className={styles.featureGrid}>
          {capabilities.map((item) => (
            <article key={item.title} className={`${styles.featureCard} ${styles.reveal}`}>
              <span className={styles.featureEyebrow}>{item.title}</span>
              <p className={styles.featureText}>{item.text}</p>
              <span className={styles.featureMeta}>{item.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.proofStrip} aria-label="Company principles">
        <div className={styles.proofInner}>
          {proofPoints.map((point) => (
            <span key={point} className={styles.proofItem}>
              {point}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <h2 className={styles.h2}>
            Grounded in context.
            <br />
            Unrestricted in ambition.
          </h2>
          <div className={styles.copy}>
            <p>
              Founded in Kampala. Building intelligent products and digital systems for a wider world.
            </p>
            <Link className={styles.textLink} href="/about">
              About VexelLabs <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.technology}>
        <div className={styles.introGrid}>
          <h2 className={styles.h2}>
            The system behind
            <br />
            the experience.
          </h2>
          <div className={styles.copy}>
            <p>
              Software engineering, cloud platforms and intelligent assistance, connected through
              the products we build.
            </p>
            <Link className={styles.textLink} href="/technology">
              Explore our technology <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <h2 className={styles.h2}>Purpose-built products</h2>
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
              <h3 className={styles.productLine}>{product.line}</h3>
              <Link className={styles.textLink} href={product.href}>
                {product.cta} <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.research}>
        <div className={styles.researchGrid}>
          <div className={styles.researchMedia}>
            <Image
              src="/images/research.jpg"
              alt="Translucent glass forms arranged as a study in structure and light"
              width={822}
              height={498}
              loading="lazy"
              sizes="(max-width: 828px) 100vw, 828px"
              className={styles.researchImage}
            />
          </div>
          <div className={styles.copy}>
            <p className={styles.kicker}>Research &amp; innovation</p>
            <h2 className={styles.h2}>Questions worth pursuing.</h2>
            <p>
              Our interests span applied AI, machine learning and useful emerging technologies.
            </p>
            <Link className={styles.textLink} href="/research">
              Explore our research interests <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.journal}>
        <h2 className={styles.h2}>From the journal</h2>
        <div className={styles.journalGrid}>
          {journal.map((article) => (
            <article key={article.slug} className={styles.journalItem}>
              <span className={styles.micro}>{article.category}</span>
              <h3>
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>
              <p>{article.excerpt}</p>
              <Link className={styles.textLink} href={`/insights/${article.slug}`}>
                Read the note <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>Let&apos;s build what matters.</h2>
          <SiteButton href="/contact">Contact our team</SiteButton>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
