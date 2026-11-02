import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { ArchitectureDiagram } from '@/components/visuals/ArchitectureDiagram'
import { AcsScreenshot } from '@/components/visuals/AcsScreenshot'
import { AiScreenshot } from '@/components/visuals/AiScreenshot'
import { ArticleCover } from '@/components/visuals/ArticleCover'
import { articles, getFeaturedArticle } from '@/lib/insights-data'
import { formatDate } from '@/lib/format-date'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: { absolute: 'VexelLabs — Engineering technology for what comes next' },
  description:
    'VexelLabs designs and engineers intelligent products, digital systems and research-led technology from Africa for the world.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'VexelLabs — Engineering technology for what comes next',
    description: 'Intelligent products and digital systems, built with a clear purpose.',
    url: '/',
  },
}

const technologyAreas = [
  {
    number: '01',
    title: 'Software engineering',
    description: 'Product-grade applications, APIs and the systems that hold them together.',
  },
  {
    number: '02',
    title: 'Applied intelligence',
    description: 'Models, evaluation and interfaces that make intelligence genuinely useful.',
  },
  {
    number: '03',
    title: 'Digital infrastructure',
    description: 'Cloud platforms, data foundations and deployment built to be depended on.',
  },
  {
    number: '04',
    title: 'Product engineering',
    description: 'From first direction to a working system in daily use.',
  },
]

export default function HomePage() {
  const featured = getFeaturedArticle()
  const latest = articles.filter((article) => article.slug !== featured?.slug).slice(0, 3)

  return (
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <p className="eyebrow rise">VexelLabs / Technology company</p>
            <span className={`${styles.heroIndex} rise`}>VXL / 001</span>
          </div>

          <h1 className={`${styles.heroTitle} rise rise-delay-1`}>
            Engineering technology for what comes next.
          </h1>

          <div className={styles.heroLower}>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              We build intelligent products and digital systems with a clear purpose.
            </p>
            <div className={`${styles.heroActions} rise rise-delay-3`}>
              <SiteButton href="/products">Explore our work</SiteButton>
              <SiteButton href="/contact" variant="outline">
                Contact our team
              </SiteButton>
            </div>
          </div>
        </div>

        <figure className={`${styles.heroMedia} rise rise-delay-2`}>
          <Image
            src="/images/hero.jpg"
            alt="Layered glass planes and structural grids forming an abstract architectural system"
            width={1150}
            height={498}
            priority
            sizes="(max-width: 1150px) 100vw, 1150px"
            className={styles.heroImage}
          />
          <figcaption className={styles.heroMediaFoot}>
            <span>Systems, platforms and applied intelligence</span>
            <span>Lagos / Working globally</span>
          </figcaption>
        </figure>

        <div className={styles.heroFoot}>
          <div className={styles.heroFootInner}>
            <span>Product engineering</span>
            <span>Applied intelligence</span>
            <span>Digital infrastructure</span>
            <span className={styles.heroLocation}>Research-led practice</span>
          </div>
        </div>
      </section>

      <section className={`${styles.intro} theme-light`}>
        <div className="container">
          <div className={styles.sectionTop}>
            <p className="eyebrow">Who we are</p>
            <Link className="text-link" href="/about">
              About VexelLabs <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.introGrid}>
            <h2 className="display">Grounded in context. Unrestricted in ambition.</h2>
            <div className={styles.introCopy}>
              <p>
                VexelLabs is a technology company building products and systems from Lagos for a
                global market. We work where product thinking, engineering discipline and applied
                research meet.
              </p>
              <p>
                We stay close to the problem, question the obvious answer, and design for the world
                beyond our immediate context.
              </p>
            </div>
          </div>

          <div className={styles.contextBand}>
            <p className={styles.contextQuote}>
              “We build close to the problem, and design for the world beyond it.”
            </p>
            <dl className={styles.contextFacts}>
              <div>
                <dt>Origin</dt>
                <dd>Lagos, Nigeria</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>Products, systems, research</dd>
              </div>
              <div>
                <dt>Ambition</dt>
                <dd>Global by design</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.technology}>
        <div className="container">
          <div className={styles.technologyHead}>
            <div>
              <p className="eyebrow">Technology and engineering</p>
              <h2 className="display">Systems built with intent.</h2>
            </div>
            <div className={styles.technologyAside}>
              <p>
                We design the whole system, not just the surface. Every layer is chosen for the
                problem it has to carry.
              </p>
              <Link className="text-link" href="/technology">
                Explore technology <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.technologyGrid}>
            <ArchitectureDiagram />
            <div className={styles.capabilityList}>
              {technologyAreas.map((area) => (
                <div className={styles.capabilityRow} key={area.number}>
                  <span>{area.number}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.products} theme-light`}>
        <div className="container">
          <div className={styles.sectionTop}>
            <p className="eyebrow">Products</p>
            <Link className="text-link" href="/products">
              All products <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.productsHead}>
            <h2 className="display">Software with a clear job to do.</h2>
            <p className="lede">
              Two products, each built around a specific problem and given the room to become its
              own thing.
            </p>
          </div>

          <article className={styles.productShowcase} id="acs">
            <div className={styles.productInfo}>
              <div className={styles.productMark}>
                <span className={styles.productLogoAcs}>acs</span>
                <span>Product 01 / Education</span>
              </div>
              <h3>Academic Cloud System</h3>
              <p>
                A cloud-based school management platform for primary schools. Enrolment,
                attendance, fees and reporting in one dependable system.
              </p>
              <ul className={styles.productPoints}>
                <li>Pupil records and enrolment</li>
                <li>Attendance and term reporting</li>
                <li>Fees, receipts and ledgers</li>
              </ul>
              <Link className={styles.productLink} href="/products/acs">
                Explore ACS <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.productVisual}>
              <AcsScreenshot />
            </div>
          </article>

          <article className={`${styles.productShowcase} ${styles.productReverse}`} id="ai">
            <div className={styles.productInfo}>
              <div className={styles.productMark}>
                <span className={styles.productLogoAi}>VX</span>
                <span>Product 02 / Intelligence</span>
              </div>
              <h3>VexelLabs AI</h3>
              <p>
                An applied intelligence platform for teams building with models. Evaluation,
                retrieval and deployment in one considered workflow.
              </p>
              <ul className={styles.productPoints}>
                <li>Prompt and evaluation workflows</li>
                <li>Grounded retrieval with citations</li>
                <li>Production monitoring and insight</li>
              </ul>
              <Link className={styles.productLink} href="/products/ai">
                Explore VexelLabs AI <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.productVisual}>
              <AiScreenshot />
            </div>
          </article>
        </div>
      </section>

      <section className={styles.research}>
        <div className={`container ${styles.researchGrid}`}>
          <div className={styles.researchCopy}>
            <p className="eyebrow">Research and innovation</p>
            <h2 className="display">Research with a reason to exist.</h2>
            <p className="lede">
              We study the systems we build and the systems that come next. Our interests span
              artificial intelligence, machine learning and applied computing, always tied to a
              real problem.
            </p>
            <Link className="text-link" href="/research">
              Explore research <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <figure className={styles.researchFigure}>
            <Image
              src="/images/research.jpg"
              alt="Translucent glass forms arranged as a study in structure and light"
              width={822}
              height={498}
              loading="lazy"
              sizes="(max-width: 828px) 100vw, 828px"
              className={styles.researchImage}
            />
            <figcaption className={styles.researchCaption}>
              <span>Research / Applied systems</span>
              <span>Study 01</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.insights} theme-light`}>
        <div className="container">
          <div className={styles.sectionTop}>
            <p className="eyebrow">Latest insights</p>
            <Link className="text-link" href="/insights">
              Visit insights <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.insightsGrid}>
            {featured && (
              <Link className={styles.featuredInsight} href={`/insights/${featured.slug}`}>
                <ArticleCover category={featured.category} seed={featured.slug} />
                <div className={styles.insightMeta}>
                  <span>{featured.category}</span>
                  <span>{formatDate(featured.publishedDate, { month: 'short', year: 'numeric' })}</span>
                </div>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <span className={styles.insightRead}>
                  Read the note <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </Link>
            )}

            <div className={styles.insightList}>
              {latest.map((article) => (
                <Link className={styles.insightRow} href={`/insights/${article.slug}`} key={article.slug}>
                  <div className={styles.insightThumb}>
                    <ArticleCover category={article.category} seed={article.slug} />
                  </div>
                  <div>
                    <span className={styles.insightMetaText}>
                      {article.category} / {article.readingTime} min read
                    </span>
                    <h3>{article.title}</h3>
                    <span className={styles.insightDate}>{formatDate(article.publishedDate)}</span>
                  </div>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="display">Let&apos;s build what matters.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>Tell us what you are trying to make possible.</p>
            <SiteButton href="/contact" variant="light">
              Contact our team
            </SiteButton>
            <a className={styles.ctaEmail} href="mailto:hello@vexellabs.com">
              hello@vexellabs.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
