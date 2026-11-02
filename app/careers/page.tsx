import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import { careers, getAllJobs } from '@/lib/careers-data'
import styles from '@/components/site/editorial.module.css'

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

export default function CareersPage() {
  const jobs = getAllJobs()

  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Careers</p>
        <h1 className={styles.title}>Do careful work on useful technology.</h1>
        <p className={styles.lede}>
          We build software, AI systems, digital products and the infrastructure around them. We are
          looking for people who value clear thinking, useful details and work that holds up.
        </p>
        <div className={styles.actions}>
          <SiteButton href="#openings">See open roles</SiteButton>
          <SiteButton href="/about" variant="outline">
            Meet VexelLabs
          </SiteButton>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <h2 className={styles.h2}>Work on what matters.</h2>
          <div className={styles.copy}>
            <p>
              Good teams make it possible to do careful work without pretending the work is simple.
            </p>
            <Link className={styles.textLink} href="/technology">
              How we build <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={`${styles.rows} ${styles.rowsSpaced}`}>
          {careers.principles.map((principle) => (
            <article className={styles.row} key={principle.title}>
              <span className={styles.rowIndex}>—</span>
              <div className={styles.rowBody}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.alt} id="openings">
        <div className={styles.altInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Open positions</p>
              <h2 className={styles.h2}>Join us.</h2>
            </div>
            <p className={styles.sectionLede}>
              {jobs.length} open {jobs.length === 1 ? 'role' : 'roles'}
            </p>
          </div>

          {jobs.length > 0 ? (
            <div className={styles.articleList}>
              {jobs.map((job) => (
                <article className={styles.articleItem} key={job.slug}>
                  <div>
                    <div className={styles.articleMeta}>
                      <span>{job.department}</span>
                      <span>{job.location}</span>
                      <span>{job.experienceLevel}</span>
                    </div>
                    <h3>
                      <Link href={`/careers/${job.slug}`}>{job.title}</Link>
                    </h3>
                    <p>{job.description}</p>
                    <Link className={styles.textLink} href={`/careers/${job.slug}`}>
                      View the role <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.card}>
              <p className={styles.kicker}>Current status</p>
              <h3 className={styles.subhead}>No roles are open right now.</h3>
              <p>
                We are always interested in meeting people who can help us build useful things.
                Introduce yourself and tell us what you would want to work on.
              </p>
              <div className={styles.formActions}>
                <SiteButton href="/contact">Introduce yourself</SiteButton>
                <a className={styles.textLink} href="mailto:stackkens@gmail.com">
                  Send an email <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>Build something that matters.</h2>
          <div className={styles.ctaActions}>
            <p>
              Tell us what you have built, what you want to learn and the kind of problem you want
              to spend your time on.
            </p>
            <SiteButton href="/contact">Introduce yourself</SiteButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
