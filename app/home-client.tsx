'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import styles from './home.module.css'

const capabilities = [
  {
    number: '01',
    title: 'Software engineering',
    description: 'Custom applications, APIs, databases, and the dependable systems behind them.',
    context: 'Product foundations',
  },
  {
    number: '02',
    title: 'Digital products',
    description: 'Web and mobile products shaped around a clear user need and the work it needs to support.',
    context: 'Product direction',
  },
  {
    number: '03',
    title: 'Operational systems',
    description: 'Tools that help organisations manage information, coordinate work, and make decisions with less friction.',
    context: 'Operating context',
  },
  {
    number: '04',
    title: 'Applied intelligence',
    description: 'AI and automation used where they make a measurable difference to a real workflow.',
    context: 'Useful leverage',
  },
]

const principles = [
  ['01', 'Start with the problem', 'We define what needs to change before deciding what to build.'],
  ['02', 'Make the system legible', 'Clear product decisions and sound engineering make better work possible.'],
  ['03', 'Leave room to grow', 'The first release should create a useful foundation, not a dead end.'],
]

const workingModel = [
  ['01', 'Understand', 'Clarify the problem and who it affects.'],
  ['02', 'Shape', 'Choose what to make, and what to leave out.'],
  ['03', 'Build', 'Engineer the product with care and transparency.'],
  ['04', 'Learn', 'Use the real world to decide what comes next.'],
]

export default function HomeClient() {
  const [activeCapability, setActiveCapability] = useState(0)
  const active = capabilities[activeCapability]

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Technology company / Lagos</p>
          <h1>We build the technology behind <em>better work.</em></h1>
          <p className={styles.heroBody}>Vexel Labs designs and engineers digital products, operational systems, and applied intelligence for people solving meaningful problems.</p>
          <div className={styles.heroActions}>
            <SiteButton href="/contact">Start a project</SiteButton>
            <Link className={styles.textLink} href="#capabilities">See what we build <ArrowDownRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>

        <div className={styles.workingModel} aria-label="Vexel Labs working model">
          <div className={styles.modelHeader}>
            <span>From question to useful system</span>
            <span>VXL / 001</span>
          </div>
          <div className={styles.modelList}>
            {workingModel.map(([number, title, description]) => (
              <div className={styles.modelRow} key={number}>
                <span className={styles.modelNumber}>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.modelFooter}>Problem / direction / product / feedback</div>
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.sectionLabel}>/ 01 — A clear point of view</p>
        <div className={styles.statementGrid}>
          <h2>Useful technology starts with a <em>clearer problem.</em></h2>
          <div className={styles.statementCopy}>
            <p>We work from the problem outward. That means fewer assumptions, better decisions, and software that fits the people and processes it is meant to serve.</p>
            <p>From a first product direction to the system that supports it, we keep the work close, practical, and accountable.</p>
          </div>
        </div>
      </section>

      <section className={styles.capabilities} id="capabilities">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>/ 02 — What we build</p>
          <p>Capabilities for products and the organisations around them.</p>
        </div>

        <div className={styles.capabilityLayout}>
          <div className={styles.capabilityDetail} aria-live="polite">
            <span className={styles.detailNumber}>{active.number}</span>
            <p className={styles.detailContext}>{active.context}</p>
            <h2>{active.title}</h2>
            <p>{active.description}</p>
            <Link className={styles.textLink} href="/services">Explore our services <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>

          <div className={styles.capabilityList} role="group" aria-label="Vexel Labs capabilities">
            {capabilities.map((capability, index) => (
              <button
                key={capability.number}
                type="button"
                className={index === activeCapability ? styles.capabilityActive : ''}
                onClick={() => setActiveCapability(index)}
                onMouseEnter={() => setActiveCapability(index)}
                onFocus={() => setActiveCapability(index)}
                aria-pressed={index === activeCapability}
              >
                <span>{capability.number}</span>
                <strong>{capability.title}</strong>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.practice}>
        <div className={styles.practiceIntro}>
          <p className={styles.sectionLabel}>/ 03 — How we work</p>
          <h2>A practice, not a pitch.</h2>
          <p>We bring product thinking and engineering discipline together, then keep asking what the work needs next.</p>
        </div>
        <div className={styles.principleList}>
          {principles.map(([number, title, description]) => (
            <div className={styles.principleRow} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.explore}>
        <p className={styles.sectionLabel}>/ 04 — Continue exploring</p>
        <div className={styles.exploreGrid}>
          <h2>See the thinking behind the work.</h2>
          <div className={styles.exploreLinks}>
            <Link href="/work"><span>01</span><strong>Selected work</strong><ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link href="/insights"><span>02</span><strong>Insights and notes</strong><ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link href="/lab"><span>03</span><strong>The Vexel Lab</strong><ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.eyebrow}><span aria-hidden="true" /> Now building</p>
        <h2>Have a useful problem in front of you?</h2>
        <p>Tell us what you are trying to build, improve, or make possible.</p>
        <SiteButton href="/contact" variant="light">Start a conversation</SiteButton>
      </section>

      <SiteFooter />
    </main>
  )
}
