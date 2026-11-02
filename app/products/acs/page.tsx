import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { AcsScreenshot } from '@/components/visuals/AcsScreenshot'
import styles from './acs.module.css'

export const metadata: Metadata = {
  title: 'Academic Cloud System',
  description:
    'ACS is a cloud-based school management platform for primary schools: pupil records, attendance, fees and term reporting in one dependable system.',
  alternates: { canonical: '/products/acs' },
  openGraph: {
    title: 'Academic Cloud System — VexelLabs',
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

const audience = [
  {
    label: 'Primary schools',
    text: 'A single system for the daily records that keep a school running.',
  },
  {
    label: 'School groups',
    text: 'A consistent way to see enrolment and operations across more than one school.',
  },
  {
    label: 'Administrators',
    text: 'Less time reconciling registers, spreadsheets and fee books.',
  },
]

export default function AcsPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className={`${styles.hero} theme-light`}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={`${styles.productMark} rise`}>
              <span>acs</span>
              <span>Product 01 / Education</span>
            </div>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>
              Academic Cloud System
            </h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              A cloud-based school management platform for primary schools. Enrolment, attendance,
              fees and reporting in one dependable system.
            </p>
            <div className={`${styles.heroActions} rise rise-delay-3`}>
              <SiteButton href="/contact">Request a walkthrough</SiteButton>
              <SiteButton href="#modules" variant="outline">
                See what it handles
              </SiteButton>
            </div>
          </div>

          <aside className={`${styles.heroAside} rise rise-delay-2`} aria-label="ACS at a glance">
            <div className={styles.asideHead}>
              <span>ACS / School operations</span>
              <span>01</span>
            </div>
            <div className={styles.asideRows}>
              <div>
                <span>Pupils</span>
                <strong>One record from admission onward</strong>
              </div>
              <div>
                <span>Attendance</span>
                <strong>Daily registers and term summaries</strong>
              </div>
              <div>
                <span>Fees</span>
                <strong>Receipts, payments and balances</strong>
              </div>
              <div>
                <span>Reports</span>
                <strong>Ready for leadership and parents</strong>
              </div>
            </div>
            <div className={styles.asideFoot}>
              <span>Built for primary schools</span>
              <Link href="/products">
                All products <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.preview}>
        <div className="container">
          <div className={styles.previewHead}>
            <span>Product surface</span>
            <span>A representative view of the ACS dashboard</span>
          </div>
          <div className={styles.previewFrame}>
            <AcsScreenshot />
          </div>
        </div>
      </section>

      <section className={`${styles.problem} theme-light`}>
        <div className="container">
          <div className={styles.sectionTop}>
            <p className="eyebrow">The problem</p>
            <Link className="text-link" href="/about">
              About VexelLabs <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.problemGrid}>
            <h2 className="display">The register is not the problem. The system around it is.</h2>
            <div className={styles.problemCopy}>
              <p>
                In many schools, the important record of the day is spread across a register, a
                spreadsheet, a receipt book and the memory of the person holding it together.
              </p>
              <p>
                ACS was built to bring that work into one place. Not to add another layer of
                administration, but to make the existing operation easier to see, easier to run and
                easier to report on.
              </p>
              <div className={styles.problemNote}>
                <span>Design position</span>
                <p>
                  Dependable before clever. A school system earns trust by being clear, consistent
                  and available when the day begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.modules} theme-light`} id="modules">
        <div className="container">
          <div className={styles.modulesHead}>
            <div>
              <p className="eyebrow">What it handles</p>
              <h2 className="display">The daily operation, in one place.</h2>
            </div>
            <p className="lede">
              Six connected areas of school administration, each designed around a recurring task.
            </p>
          </div>

          <div className={styles.moduleList}>
            {modules.map((module) => (
              <div className={styles.moduleRow} key={module.number}>
                <span>{module.number}</span>
                <h3>{module.name}</h3>
                <p>{module.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.workflow}>
        <div className="container">
          <div className={styles.workflowHead}>
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="display">A term, from start to report.</h2>
            </div>
            <p className="lede">
              ACS follows the shape of the academic term rather than asking a school to reorganise
              around software.
            </p>
          </div>

          <div className={styles.workflowGrid}>
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

      <section className={`${styles.audience} theme-light`}>
        <div className="container">
          <div className={styles.audienceHead}>
            <div>
              <p className="eyebrow">Who it is for</p>
              <h2 className="display">Built around the people who run the school.</h2>
            </div>
          </div>

          <div className={styles.audienceGrid}>
            {audience.map((item, index) => (
              <div key={item.label}>
                <span>0{index + 1}</span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">ACS / Get started</p>
            <h2 className="display">Bring the school’s operation into one place.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              Tell us about your school, the term structure and the records that currently take the
              most effort. We will show you how ACS would fit.
            </p>
            <SiteButton href="/contact" variant="light">
              Request a walkthrough
            </SiteButton>
            <Link className="text-link" href="/products/ai">
              See VexelLabs AI <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
