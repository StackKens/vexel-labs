import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { formatDate } from '@/lib/format-date'
import type { JobPosting } from '@/lib/careers-data'
import styles from './job-detail.module.css'

export default function JobDetailClient({ job }: { job: JobPosting }) {
  const applyHref = job.applicationUrl ?? '/contact'

  return (
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Careers / {job.department}</p>
            <h1>{job.title}</h1>
            <p className={styles.heroMeta}>
              {job.location} / {job.employmentType} / {job.experienceLevel}
            </p>
            <p className={styles.heroLede}>{job.description}</p>
            <div className={styles.heroActions}>
              <SiteButton href={applyHref}>Apply for this role</SiteButton>
              <SiteButton href="/careers" variant="outline">
                All roles
              </SiteButton>
            </div>
          </div>

          <aside className={styles.rolePanel}>
            <div className={styles.panelHead}>
              <span>Role detail</span>
              <span>Posted {formatDate(job.postedDate)}</span>
            </div>
            <strong>{job.title}</strong>
            <dl>
              <div>
                <dt>Team</dt>
                <dd>{job.department}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{job.location}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{job.employmentType}</dd>
              </div>
              <div>
                <dt>Level</dt>
                <dd>{job.experienceLevel}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className={`${styles.body} theme-light`}>
        <div className={`container ${styles.bodyGrid}`}>
          <article className={styles.mainColumn}>
            <section>
              <p className="eyebrow">The role</p>
              <h2 className="display-sm">What the work is.</h2>
              <p>{job.description}</p>
            </section>

            <section>
              <p className="eyebrow">Responsibilities</p>
              <ul className={styles.bulletList}>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <p className="eyebrow">What we are looking for</p>
              <div className={styles.requirements}>
                <div>
                  <h3>Required</h3>
                  <ul className={styles.bulletList}>
                    {job.requirements.required.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Nice to have</h3>
                  <ul className={styles.bulletList}>
                    {job.requirements.niceToHave.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {job.technologies && job.technologies.length > 0 && (
              <section>
                <p className="eyebrow">Technologies</p>
                <div className={styles.tags}>
                  {job.technologies.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.applyCard}>
              <span>Ready to apply?</span>
              <h2>Bring your context.</h2>
              <p>Send us your resume, portfolio and a note about why this role interests you.</p>
              <SiteButton href={applyHref}>Apply now</SiteButton>
              <small>
                Or email{' '}
                <a href="mailto:hello@vexellabs.com">hello@vexellabs.com</a>
              </small>
            </div>

            <div className={styles.sideLinks}>
              <Link href="/about">
                About VexelLabs <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link href="/products">
                See our products <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link href="/careers">
                All roles <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">The next step</p>
            <h2 className="display">Do careful work with us.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              Tell us what you have built and the kind of problem you want to spend your time on.
            </p>
            <SiteButton href={applyHref} variant="light">
              Apply for this role
            </SiteButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
