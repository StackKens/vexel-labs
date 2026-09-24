import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { formatDate } from '@/lib/format-date'
import type { JobPosting } from '@/lib/careers-data'
import styles from './job-detail.module.css'

export default function JobDetailClient({ job }: { job: JobPosting }) {
  const applyHref = job.applicationUrl ?? '/contact'

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}><span aria-hidden="true" /> {job.department}</p><h1>{job.title}</h1><p className={styles.heroMeta}>{job.location} / {job.employmentType} / {job.experienceLevel}</p><p className={styles.heroDescription}>{job.description}</p><div className={styles.heroActions}><SiteButton href={applyHref}>Apply for this role</SiteButton><Link className={styles.textLink} href="/careers">Back to roles <ArrowDownRight size={16} aria-hidden="true" /></Link></div></div>
        <div className={styles.rolePanel}><div><span>Role detail</span><span>Posted {formatDate(job.postedDate)}</span></div><strong>{job.title}</strong><small>{job.department} / {job.location}</small></div>
      </section>

      <section className={styles.roleBody}>
        <div className={styles.mainColumn}><section><p className={styles.sectionLabel}>/ 01 — About the role</p><h2>Make the work<br /><em>clearer.</em></h2><p>{job.description}</p></section><section><p className={styles.sectionLabel}>/ 02 — Responsibilities</p><ul>{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section><section><p className={styles.sectionLabel}>/ 03 — What we&apos;re looking for</p><div className={styles.requirements}><div><h3>Required</h3><ul>{job.requirements.required.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Nice to have</h3><ul>{job.requirements.niceToHave.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>{job.technologies && <section><p className={styles.sectionLabel}>/ 04 — Technologies</p><div className={styles.tags}>{job.technologies.map((item) => <span key={item}>{item}</span>)}</div></section>}</div>
        <aside className={styles.sidebar}><div className={styles.applyCard}><span>Ready to apply?</span><h2>Bring your context.</h2><p>Send us your resume, portfolio, and a note about why this role interests you.</p><SiteButton href={applyHref}>Apply now</SiteButton><small>Or email hello@vexellabs.com</small></div><div className={styles.sideLinks}><Link href="/about">About Vexel <ArrowUpRight size={15} aria-hidden="true" /></Link><Link href="/work">See our work <ArrowUpRight size={15} aria-hidden="true" /></Link><Link href="/careers">All roles <ArrowUpRight size={15} aria-hidden="true" /></Link></div></aside>
      </section>

      <section className={styles.cta}><p className={styles.eyebrow}><span aria-hidden="true" /> The next step</p><h2>Do careful work<br /><em>with us.</em></h2><SiteButton href={applyHref} variant="light">Apply for this role</SiteButton></section>
      <SiteFooter />
    </main>
  )
}
