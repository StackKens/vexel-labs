'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { services } from '@/lib/services-data'
import styles from './services.module.css'

const processSteps = [
  ['01', 'Discovery', 'Understand the problem, the people, and the opportunity.'],
  ['02', 'Planning', 'Define the solution and technical direction.'],
  ['03', 'Design', 'Create the product experience and user interface.'],
  ['04', 'Development', 'Engineer the system underneath.'],
  ['05', 'Testing', 'Validate the product thoroughly.'],
  ['06', 'Deployment', 'Launch it into the world.'],
  ['07', 'Support', 'Continue improving it over time.'],
]

const audiences = [
  ['Startups', 'Turn ideas into working products.'],
  ['Businesses', 'Build systems that improve operations.'],
  ['Organizations', 'Digitize processes and workflows.'],
  ['Institutions', 'Create technology for real-world impact.'],
  ['Individuals', 'Turn useful ideas into digital products.'],
]

export default function ServicesClient() {
  const [activeService, setActiveService] = useState(0)
  const active = services[activeService]

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> What we do</p>
          <h1>Technology built<br />around <em>real problems.</em></h1>
          <p>Vexel Labs designs and engineers software, digital products, AI systems, and the infrastructure that turns ambitious ideas into working solutions.</p>
          <div className={styles.heroActions}>
            <SiteButton href="/contact">Start a project</SiteButton>
            <Link className={styles.textLink} href="#explorer">Explore capabilities <ArrowDownRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className={styles.serviceIndex} aria-label="Vexel Labs service areas">
          <div className={styles.indexTop}><span>Capability index</span><span>VXL / 003</span></div>
          <div className={styles.indexList}>
            {services.map((service) => <div key={service.slug}><span>{service.number}</span><strong>{service.name}</strong></div>)}
          </div>
          <div className={styles.indexBottom}>Product / engineering / systems</div>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>/ 01 — Capabilities</p>
        <div className={styles.introGrid}>
          <h2>One team, complete capabilities</h2>
          <div><p>From idea to infrastructure, we bring the disciplines required to build technology that works.</p><p>Start with the problem. We will help make the rest legible.</p></div>
        </div>
      </section>

      <section className={styles.explorer} id="explorer">
        <p className={styles.sectionLabel}>/ 02 — Service explorer</p>
        <div className={styles.explorerHeading}><h2>What we build, and how we build it</h2><p>Select a capability to see the shape of the work.</p></div>
        <div className={styles.explorerLayout}>
          <div className={styles.serviceList} role="group" aria-label="Service capabilities">
            {services.map((service, index) => (
              <button key={service.slug} type="button" className={index === activeService ? styles.serviceActive : ''} onClick={() => setActiveService(index)} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} aria-pressed={index === activeService}>
                <span>{service.number}</span><strong>{service.name}</strong><span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div className={styles.serviceDetail} aria-live="polite">
            <div className={styles.detailTop}><span>{active.number}</span><span>{active.shortDescription}</span></div>
            <h3>{active.name}</h3>
            <p className={styles.detailDescription}>{active.details}</p>
            <div className={styles.detailBlock}><h4>What we build</h4><ul>{active.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></div>
            <div className={styles.detailBlock}><h4>Technology</h4><div className={styles.techTags}>{active.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
            <Link className={styles.textLink} href={`/services/${active.slug}`}>Read the capability <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <p className={styles.sectionLabel}>/ 03 — From problem to product</p>
        <div className={styles.approachHeading}><h2>How ideas become<br /><em>working technology.</em></h2><p>Our process is designed to make the important decisions visible before the work gets expensive to change.</p></div>
        <div className={styles.processGrid}>
          {processSteps.map(([number, title, text]) => <div className={styles.processStep} key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className={styles.audiences}>
        <p className={styles.sectionLabel}>/ 04 — Who we build for</p>
        <div className={styles.audienceGrid}><h2>We work with people<br />building something <em>meaningful.</em></h2><div className={styles.audienceList}>{audiences.map(([label, text], index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong><p>{text}</p></div>)}</div></div>
      </section>

      <section className={styles.cta}>
        <p className={styles.eyebrow}><span aria-hidden="true" /> The first step</p>
        <h2>Have a problem<br /><em>worth solving?</em></h2>
        <p>Tell us what you are trying to build, improve, or automate. We will bring clear thinking and the right questions.</p>
        <SiteButton href="/contact" variant="light">Start a project</SiteButton>
      </section>

      <SiteFooter />
    </main>
  )
}
