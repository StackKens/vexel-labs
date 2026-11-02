import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { careers, getAllJobs } from '@/lib/careers-data'
import styles from './careers.module.css'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Work at VexelLabs on products, intelligent systems and the infrastructure around them. See open roles and introduce yourself.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers — VexelLabs',
    description: 'Do careful work on useful technology.',
    url: '/careers',
  },
}

const principles = careers.principles.slice(0, 3)

export default function CareersPage() {
  const jobs = getAllJobs()

  return (
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow rise">Careers / VexelLabs</p>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>
              Do careful work on useful technology.
            </h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              We build software, AI systems, digital products and the infrastructure around them.
              We are looking for people who value clear thinking, useful details and work that
              holds up.
            </p>
            <div className={`${styles.heroActions} rise rise-delay-3`}>
              <SiteButton href="#openings">See open roles</SiteButton>
              <SiteButton href="/about" variant="outline">
                Meet VexelLabs
              </SiteButton>
            </div>
          </div>

          <aside className={`${styles.heroPanel} rise rise-delay-2`} aria-label="Working principles">
            <div className={styles.panelHead}>
              <span>Working principles</span>
              <span>VXL / 006</span>
            </div>
            <div className={styles.panelRows}>
              {principles.map((principle, index) => (
                <div key={principle.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{principle.title}</strong>
                </div>
              ))}
            </div>
            <div className={styles.panelFoot}>
              <span>Product / engineering / learning</span>
            </div>
          </aside>
        </div>
      </section>

      <section className={`${styles.why} theme-light`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <p className="eyebrow">Why VexelLabs</p>
              <h2 className="display">Work on what matters.</h2>
              <p className="lede">
                Good teams make it possible to do careful work without pretending the work is
                simple.
              </p>
            </div>

            <div className={styles.principleList}>
              {careers.principles.map((principle, index) => (
                <div key={principle.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.areas}>
        <div className="container">
          <div className={styles.areasHead}>
            <div>
              <p className="eyebrow">Areas of work</p>
              <h2 className="display">The range of the practice.</h2>
            </div>
            <p className="lede">
              The problems rarely stay inside one discipline. People here move between the layers
              of a system.
            </p>
          </div>

          <div className={styles.areaList}>
            {careers.workAreas.map((area, index) => (
              <div className={styles.areaRow} key={area}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{area}</strong>
                <ArrowUpRight size={15} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.culture} theme-light`}>
        <div className="container">
          <div className={styles.cultureHead}>
            <div>
              <p className="eyebrow">People and culture</p>
              <h2 className="display">How we work together.</h2>
            </div>
            <p className="lede">
              These are the habits we expect from each other, not values on a wall.
            </p>
          </div>

          <div className={styles.cultureGrid}>
            {careers.cultureValues.map((value, index) => (
              <div key={value.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.engineering}>
        <div className="container">
          <div className={styles.engineeringGrid}>
            <div className={styles.engineeringIntro}>
              <p className="eyebrow">Engineering culture</p>
              <h2 className="display">We care about how we build.</h2>
              <p className="lede">
                Quality, thoughtfulness and continuous improvement matter. Good engineering
                compounds.
              </p>
              <Link className="text-link" href="/technology">
                How we build <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.engineeringList}>
              {careers.engineeringPrinciples.map((principle, index) => (
                <div key={principle}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{principle}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.openings} theme-light`} id="openings">
        <div className="container">
          <div className={styles.openingsHead}>
            <div>
              <p className="eyebrow">Open positions</p>
              <h2 className="display">Join us.</h2>
            </div>
            <span className={styles.openCount}>
              {jobs.length} open {jobs.length === 1 ? 'role' : 'roles'}
            </span>
          </div>

          {jobs.length > 0 ? (
            <div className={styles.jobList}>
              {jobs.map((job, index) => (
                <Link className={styles.jobRow} href={`/careers/${job.slug}`} key={job.slug}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{job.title}</h3>
                    <p>
                      {job.department} / {job.location} / {job.experienceLevel}
                    </p>
                  </div>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <div>
                <span>Current status</span>
                <h3>No roles are open right now.</h3>
              </div>
              <div className={styles.emptyCopy}>
                <p>
                  We are always interested in meeting people who can help us build useful things.
                  Introduce yourself and tell us what you would want to work on.
                </p>
                <div>
                  <SiteButton href="/contact">Introduce yourself</SiteButton>
                  <a className="text-link" href="mailto:hello@vexellabs.com">
                    hello@vexellabs.com <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className={styles.hiringAreas}>
            <span>Where we hire</span>
            <div>
              {['Engineering', 'AI / ML', 'Design', 'Product', 'Infrastructure'].map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Work with us</p>
            <h2 className="display">Build something that matters.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              Tell us what you have built, what you want to learn and the kind of problem you want
              to spend your time on.
            </p>
            <SiteButton href="/contact" variant="light">
              Introduce yourself
            </SiteButton>
            <Link className="text-link" href="/careers">
              Back to careers <ArrowDownRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
