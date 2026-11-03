import type { Metadata } from 'next'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import { AcsScreenshot } from '@/components/visuals/AcsScreenshot'
import { ACS_PLATFORM_URL } from '@/lib/links'
import styles from '@/components/site/editorial.module.css'

export const metadata: Metadata = {
  title: 'Academic Cloud System',
  description:
    'ACS is a cloud-based school management platform for primary schools: pupil records, attendance, fees and term reporting in one dependable system.',
  alternates: { canonical: '/products/acs' },
  openGraph: {
    title: 'Academic Cloud System | VexelLabs',
    description:
      'Enrolment, attendance, fees and reporting in one dependable system for primary schools.',
    url: '/products/acs',
  },
}

const modules = [
  {
    number: '01',
    name: 'Pupil records',
    text: 'Admission details, pupil profiles, guardians and class placement held in one record.',
  },
  {
    number: '02',
    name: 'Attendance',
    text: 'Daily registers, late marks and class-level summaries for every school day.',
  },
  {
    number: '03',
    name: 'Fees and receipts',
    text: 'Invoices, payments, receipts and outstanding balances that reconcile with the term.',
  },
  {
    number: '04',
    name: 'Classes and staff',
    text: 'Class lists, teacher assignment and the term structure the school already uses.',
  },
  {
    number: '05',
    name: 'Reporting',
    text: 'Enrolment, attendance, fees and term summaries ready for leadership and parents.',
  },
  {
    number: '06',
    name: 'Administration',
    text: 'School settings, access roles and the everyday controls an administrator needs.',
  },
]

const workflow = [
  {
    number: '01',
    title: 'Set up the school',
    text: 'Define the school, its classes, staff and the structure of the academic term.',
  },
  {
    number: '02',
    title: 'Enrol pupils',
    text: 'Create a record for each pupil and place them in the right class.',
  },
  {
    number: '03',
    title: 'Run the term',
    text: 'Take attendance, record fees and keep the daily operation in one place.',
  },
  {
    number: '04',
    title: 'Report',
    text: 'Turn the term’s records into clear summaries for the people who need them.',
  },
]

export default function AcsPage() {
  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>ACS / Education</p>
        <h1 className={styles.title}>Academic Cloud System</h1>
        <p className={styles.lede}>
          A cloud-based school management platform for primary schools. Enrolment, attendance, fees
          and reporting in one dependable system.
        </p>
        <div className={styles.actions}>
          <SiteButton href={ACS_PLATFORM_URL} external>
            Open ACS platform
          </SiteButton>
          <SiteButton href="/contact" variant="outline">
            Request a walkthrough
          </SiteButton>
        </div>
        <div className={styles.heroMedia}>
          <AcsScreenshot />
        </div>
      </section>

      <section className={styles.section} id="modules">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>What it handles</p>
            <h2 className={styles.h2}>The daily operation, in one place.</h2>
          </div>
          <p className={styles.sectionLede}>
            Six connected areas of school administration, each designed around a recurring task.
          </p>
        </div>

        <div className={styles.rows}>
          {modules.map((module) => (
            <article className={styles.row} key={module.number}>
              <span className={styles.rowIndex}>{module.number}</span>
              <div className={styles.rowBody}>
                <h3>{module.name}</h3>
                <p>{module.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.alt}>
        <div className={styles.altInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>How it works</p>
              <h2 className={styles.h2}>A term, from start to report.</h2>
            </div>
            <p className={styles.sectionLede}>
              ACS follows the shape of the academic term rather than asking a school to reorganise
              around software.
            </p>
          </div>

          <div className={styles.steps}>
            {workflow.map((step) => (
              <div className={styles.step} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>Bring the school’s operation into one place.</h2>
          <div className={styles.ctaActions}>
            <p>
              Tell us about your school, the term structure and the records that currently take the
              most effort. We will show you how ACS would fit.
            </p>
            <SiteButton href="/contact">Request a walkthrough</SiteButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
