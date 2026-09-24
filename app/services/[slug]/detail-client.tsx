'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import type { Service } from '@/lib/services-data'
import styles from './service-detail.module.css'

type ServiceDetailClientProps = { service: Service }

function SystemVisual({ flow }: { flow: string[] }) {
  return (
    <div className={styles.systemVisual} aria-label={`${flow.join(' to ')} system visualization`} role="img">
      <div className={styles.systemTop}><span>System / {flow[0]}</span><span>VXL / DETAIL</span></div>
      <div className={styles.systemFlow}>
        {flow.map((item, index) => (
          <div className={styles.systemRow} key={item}>
            <span className={styles.systemNumber}>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
            {index < flow.length - 1 && <span className={styles.systemLine} aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className={styles.systemBottom}>Vexel / engineering capability</div>
    </div>
  )
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Vexel Labs / Services</p>
          <h1>{service.name}</h1>
          <p>{service.details}</p>
          <div className={styles.heroActions}>
            <SiteButton href="/contact">Start a project</SiteButton>
            <Link className={styles.textLink} href="/work">View our work <ArrowDownRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
        <SystemVisual flow={service.flow} />
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>/ 01 — Why it matters</p>
        <div className={styles.introGrid}><h2>Built around<br /><em>the actual problem.</em></h2><div><p>{service.details}</p><p>We start with the context, then shape the smallest useful system around it.</p></div></div>
      </section>

      <section className={styles.problems}>
        <p className={styles.sectionLabel}>/ 02 — Problems we solve</p>
        <div className={styles.problemHeading}><h2>Make the difficult<br /><em>workable.</em></h2><p>Good technology creates clarity where there was friction. These are the kinds of problems this capability can help address.</p></div>
        <div className={styles.problemList}>{service.problems.map((problem, index) => <div key={problem}><span>0{index + 1}</span><strong>{problem}</strong><ArrowUpRight size={17} aria-hidden="true" /></div>)}</div>
      </section>

      <section className={styles.builds}>
        <p className={styles.sectionLabel}>/ 03 — What we can build</p>
        <div className={styles.buildsGrid}><h2>From capability<br />to <em>useful product.</em></h2><div className={styles.buildList}>{service.builds.map((build, index) => <div key={build}><span>0{index + 1}</span><strong>{build}</strong></div>)}</div></div>
      </section>

      <section className={styles.approach}>
        <div><p className={styles.sectionLabel}>/ 04 — The Vexel approach</p><h2>Technology that makes <em>work feel clearer.</em></h2><p>We combine product thinking with engineering discipline. The result is a system that is understandable, usable, and made for the people who depend on it.</p></div>
        <SystemVisual flow={service.flow} />
      </section>

      <section className={styles.stack}>
        <p className={styles.sectionLabel}>/ 05 — Technology</p>
        <div className={styles.stackHeading}><h2>The right tools<br /><em>for the job.</em></h2><p>Technology is a means to an outcome. We select the tools that support the product, its users, and the way it needs to grow.</p></div>
        <div className={styles.stackList}>{service.technologies.map((technology, index) => <div key={technology}><span>0{index + 1}</span><strong>{technology}</strong><small>{index % 2 === 0 ? 'Foundation' : 'Capability'}</small></div>)}</div>
      </section>

      <section className={styles.process}>
        <p className={styles.sectionLabel}>/ 06 — How we work</p>
        <h2>Understand. Build.<br /><em>Improve.</em></h2>
        <div className={styles.processList}>{['Understand', 'Architect', 'Design', 'Build', 'Test', 'Launch', 'Improve'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
      </section>

      <section className={styles.audience}>
        <p className={styles.sectionLabel}>/ 07 — Who this is for</p>
        <div className={styles.audienceGrid}><h2>Useful technology<br /><em>for real people.</em></h2><div className={styles.audienceList}>{service.audience.map((item, index) => <div key={item.label}><span>0{index + 1}</span><strong>{item.label}</strong><p>{item.text}</p></div>)}</div></div>
      </section>

      <section className={styles.faq}>
        <p className={styles.sectionLabel}>/ 08 — Common questions</p>
        <div className={styles.faqGrid}><h2>Start with a<br /><em>conversation.</em></h2><div className={styles.faqList}>{service.faqs.map((faq, index) => { const isOpen = openFaq === index; return <div className={styles.faqItem} key={faq.q}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{faq.q}</span><ChevronDown size={18} aria-hidden="true" /></button>{isOpen && <p id={`faq-answer-${index}`}>{faq.a}</p>}</div> })}</div></div>
      </section>

      <section className={styles.cta}>
        <p className={styles.eyebrow}><span aria-hidden="true" /> Ready when you are</p>
        <h2>Let&apos;s build the<br /><em>right solution.</em></h2>
        <p>Tell us what you are trying to solve, and let&apos;s explore what technology can do.</p>
        <SiteButton href="/contact" variant="light">Start a project</SiteButton>
      </section>

      <SiteFooter />
    </main>
  )
}
