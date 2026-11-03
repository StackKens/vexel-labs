import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'VexelLabs engineering practice across software, artificial intelligence, intelligent systems, cloud platforms, digital infrastructure and product engineering.',
  alternates: { canonical: '/technology' },
  openGraph: {
    title: 'Technology | VexelLabs',
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
    signals: 'Applications · APIs · Data models',
  },
  {
    number: '02',
    name: 'Artificial intelligence',
    description:
      'Models, retrieval and evaluation that make intelligence useful without overstating it.',
    signals: 'Models · Retrieval · Evaluation',
  },
  {
    number: '03',
    name: 'Intelligent systems',
    description:
      'Automation and decision support where the boundary between human and machine is deliberate.',
    signals: 'Automation · Agents · Workflow',
  },
  {
    number: '04',
    name: 'Cloud platforms',
    description:
      'Deployment, scaling and monitoring that keep a product dependable as usage changes.',
    signals: 'Deployment · Scaling · Observability',
  },
  {
    number: '05',
    name: 'Digital infrastructure',
    description:
      'Data foundations, integrations and security decisions that the rest of the system can trust.',
    signals: 'Data · Integration · Security',
  },
  {
    number: '06',
    name: 'Product engineering',
    description:
      'From first direction to a working release, with design and engineering in the same room.',
    signals: 'Direction · Interface · Delivery',
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
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Technology</p>
        <h1 className={styles.title}>Technology, engineered end to end.</h1>
        <p className={styles.lede}>
          We design and build the whole system — interface, intelligence, data and infrastructure —
          so the product can be trusted in daily use.
        </p>
        <div className={styles.actions}>
          <SiteButton href="#domains">Explore our practice</SiteButton>
          <SiteButton href="/contact" variant="outline">
            Talk to an engineer
          </SiteButton>
        </div>
      </section>

      <section className={styles.section} id="domains">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Engineering domains</p>
            <h2 className={styles.h2}>One team, the whole system.</h2>
          </div>
          <p className={styles.sectionLede}>
            The interesting problems rarely stay inside one discipline. We bring the disciplines
            together around a single technical direction.
          </p>
        </div>

        <div className={styles.rows}>
          {domains.map((domain) => (
            <article className={styles.row} key={domain.number}>
              <span className={styles.rowIndex}>{domain.number}</span>
              <div className={styles.rowBody}>
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>
                <span className={styles.rowMeta}>{domain.signals}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.alt}>
        <div className={styles.altInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Architecture</p>
              <h2 className={styles.h2}>How a system is put together.</h2>
            </div>
            <p className={styles.sectionLede}>
              A system is a set of decisions with consequences. We make those decisions visible,
              then carry them through to operation.
            </p>
          </div>

          <div className={styles.steps}>
            {stages.map((stage) => (
              <div className={styles.step} key={stage.number}>
                <span>{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <h2 className={styles.h2}>Craft is a set of habits.</h2>
          <div className={styles.copy}>
            <p>
              The stack is not fixed. We choose technology after we understand the constraint, and
              we design the seams so the product can change without starting again.
            </p>
            <Link className={styles.textLink} href="/about">
              How we work <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={`${styles.rows} ${styles.rowsSpaced}`}>
          {principles.map((principle) => (
            <article className={styles.row} key={principle.number}>
              <span className={styles.rowIndex}>{principle.number}</span>
              <div className={styles.rowBody}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>A technical problem worth taking seriously.</h2>
          <div className={styles.ctaActions}>
            <p>
              Tell us what the system has to do, who depends on it and what makes it difficult. We
              will bring the right questions.
            </p>
            <SiteButton href="/contact">Start a conversation</SiteButton>
            <Link className={styles.textLink} href="/research">
              See our research <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
