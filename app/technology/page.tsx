import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { ArchitectureDiagram } from '@/components/visuals/ArchitectureDiagram'
import styles from './technology.module.css'

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'VexelLabs engineering practice across software, artificial intelligence, intelligent systems, cloud platforms, digital infrastructure and product engineering.',
  alternates: { canonical: '/technology' },
  openGraph: {
    title: 'Technology — VexelLabs',
    description:
      'Engineering the whole system: software, intelligence, data and infrastructure.',
    url: '/technology',
  },
}

const domains = [
  {
    number: '01',
    name: 'Software engineering',
    description:
      'Product-grade applications, APIs and databases built for clarity, change and daily use.',
    signals: ['Applications', 'APIs', 'Data models'],
  },
  {
    number: '02',
    name: 'Artificial intelligence',
    description:
      'Models, retrieval and evaluation that make intelligence useful without overstating it.',
    signals: ['Models', 'Retrieval', 'Evaluation'],
  },
  {
    number: '03',
    name: 'Intelligent systems',
    description:
      'Automation and decision support where the boundary between human and machine is deliberate.',
    signals: ['Automation', 'Agents', 'Workflow'],
  },
  {
    number: '04',
    name: 'Cloud platforms',
    description:
      'Deployment, scaling and monitoring that keep a product dependable as usage changes.',
    signals: ['Deployment', 'Scaling', 'Observability'],
  },
  {
    number: '05',
    name: 'Digital infrastructure',
    description:
      'Data foundations, integrations and security decisions that the rest of the system can trust.',
    signals: ['Data', 'Integration', 'Security'],
  },
  {
    number: '06',
    name: 'Product engineering',
    description:
      'From first direction to a working release, with design and engineering in the same room.',
    signals: ['Direction', 'Interface', 'Delivery'],
  },
]

const stages = [
  {
    number: '01',
    title: 'Understand',
    text: 'Map the constraint, the people and the system that already exists.',
  },
  {
    number: '02',
    title: 'Architect',
    text: 'Choose the shape of the system before choosing the tools.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Engineer in small, reviewable increments with visible decisions.',
  },
  {
    number: '04',
    title: 'Harden',
    text: 'Test the failure modes, the edges and the cost of being wrong.',
  },
  {
    number: '05',
    title: 'Operate',
    text: 'Observe the system in use and improve what the evidence reveals.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Legible before clever',
    text: 'The next engineer should be able to understand what we made and why.',
  },
  {
    number: '02',
    title: 'Boring where it helps',
    text: 'We use familiar technology when it lowers risk and lets the product be the interesting part.',
  },
  {
    number: '03',
    title: 'Observable by default',
    text: 'A system that cannot explain its behaviour cannot be trusted in production.',
  },
  {
    number: '04',
    title: 'Decisions leave a trail',
    text: 'Architecture, trade-offs and constraints are documented as part of the work.',
  },
]

export default function TechnologyPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow rise">Technology / Engineering practice</p>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>
              Technology, engineered end to end.
            </h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              We design and build the whole system — interface, intelligence, data and
              infrastructure — so the product can be trusted in daily use.
            </p>
            <div className={`${styles.heroActions} rise rise-delay-3`}>
              <SiteButton href="#domains">Explore our practice</SiteButton>
              <SiteButton href="/contact" variant="outline">
                Talk to an engineer
              </SiteButton>
            </div>
          </div>
          <div className={`${styles.heroVisual} rise rise-delay-2`}>
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      <section className={`${styles.domains} theme-light`} id="domains">
        <div className="container">
          <div className={styles.domainsHead}>
            <div>
              <p className="eyebrow">Engineering domains</p>
              <h2 className="display">One team, the whole system.</h2>
            </div>
            <p className="lede">
              The interesting problems rarely stay inside one discipline. We bring the disciplines
              together around a single technical direction.
            </p>
          </div>

          <div className={styles.domainList}>
            {domains.map((domain) => (
              <article className={styles.domainRow} key={domain.number}>
                <span className={styles.domainNumber}>{domain.number}</span>
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>
                <div className={styles.domainSignals}>
                  {domain.signals.map((signal) => (
                    <span key={signal}>{signal}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.architecture}>
        <div className="container">
          <div className={styles.architectureHead}>
            <div>
              <p className="eyebrow">Architecture</p>
              <h2 className="display">How a system is put together.</h2>
            </div>
            <p className="lede">
              A system is a set of decisions with consequences. We make those decisions visible,
              then carry them through to operation.
            </p>
          </div>

          <div className={styles.stageList}>
            {stages.map((stage) => (
              <div className={styles.stage} key={stage.number}>
                <span>{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.architectureNote}>
            <div aria-hidden="true">
              <span>Signal</span>
              <i />
              <span>Structure</span>
              <i />
              <span>System</span>
            </div>
            <p>
              The stack is not fixed. We choose technology after we understand the constraint, and
              we design the seams so the product can change without starting again.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.principles} theme-light`}>
        <div className="container">
          <div className={styles.principlesGrid}>
            <div className={styles.principlesIntro}>
              <p className="eyebrow">Engineering principles</p>
              <h2 className="display">Craft is a set of habits.</h2>
              <p className="lede">
                These are the standards we apply whether the work is a new product or a system
                that has been running for years.
              </p>
              <Link className="text-link" href="/about">
                How we work <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.principleList}>
              {principles.map((principle) => (
                <div className={styles.principleRow} key={principle.number}>
                  <span>{principle.number}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Build with us</p>
            <h2 className="display">A technical problem worth taking seriously.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              Tell us what the system has to do, who depends on it and what makes it difficult. We
              will bring the right questions.
            </p>
            <SiteButton href="/contact" variant="light">
              Start a conversation
            </SiteButton>
            <Link className="text-link" href="/research">
              See our research <ArrowDownRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
