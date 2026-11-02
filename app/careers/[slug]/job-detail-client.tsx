import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import { formatDate } from '@/lib/format-date'
import type { JobPosting } from '@/lib/careers-data'
import styles from '@/components/site/editorial.module.css'

export default function JobDetailClient({ job }: { job: JobPosting }) {
  const applyHref = job.applicationUrl ?? '/contact'

  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Careers / {job.department}</p>
        <h1 className={styles.title}>{job.title}</h1>
        <p className={styles.lede}>{job.description}</p>
        <div className={styles.actions}>
          <SiteButton href={applyHref}>Apply for this role</SiteButton>
          <SiteButton href="/careers" variant="outline">
            All roles
          </SiteButton>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.detailGrid}>
          <article>
            <p className={styles.kicker}>The role</p>
            <h2 className={`${styles.h2} ${styles.rowsSpaced}`}>What the work is.</h2>
            <p className={styles.featuredExcerpt}>{job.description}</p>

            <h2 className={`${styles.subhead} ${styles.rowsSpaced}`}>Responsibilities</h2>
            <ul className={styles.bulletList}>
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className={`${styles.grid2} ${styles.rowsSpaced}`}>
              <div>
                <h2 className={styles.subhead}>Required</h2>
                <ul className={styles.bulletList}>
                  {job.requirements.required.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={styles.subhead}>Nice to have</h2>
                <ul className={styles.bulletList}>
                  {job.requirements.niceToHave.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {job.technologies && job.technologies.length > 0 && (
              <>
                <h2 className={`${styles.subhead} ${styles.rowsSpaced}`}>Technologies</h2>
                <div className={styles.tags}>
                  {job.technologies.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </>
            )}
          </article>

          <aside className={styles.card}>
            <p className={styles.kicker}>
              {job.location} / {job.employmentType}
            </p>
            <h2 className={`${styles.subhead}`}>Ready to apply?</h2>
            <div className={styles.detailList}>
              <div>
                <dt>Team</dt>
                <dd>{job.department}</dd>
              </div>
              <div>
                <dt>Level</dt>
                <dd>{job.experienceLevel}</dd>
              </div>
              <div>
                <dt>Posted</dt>
                <dd>{formatDate(job.postedDate)}</dd>
              </div>
            </div>
            <p>
              Send us your resume, portfolio and a note about why this role interests you.
            </p>
            <div className={styles.formActions}>
              <SiteButton href={applyHref}>Apply now</SiteButton>
              <a className={styles.textLink} href="mailto:hello@vexellabs.com">
                hello@vexellabs.com <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>Do careful work with us.</h2>
          <div className={styles.ctaActions}>
            <p>
              Tell us what you have built and the kind of problem you want to spend your time on.
            </p>
            <SiteButton href={applyHref}>Apply for this role</SiteButton>
            <Link className={styles.textLink} href="/careers">
              Back to careers <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
