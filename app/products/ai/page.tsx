import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import { AiScreenshot } from '@/components/visuals/AiScreenshot'
import styles from '@/components/site/editorial.module.css'

export const metadata: Metadata = {
  title: 'VexelLabs AI',
  description:
    'VexelLabs AI is an applied intelligence workspace for teams building with models: prompts, evaluation, grounded retrieval and production monitoring.',
  alternates: { canonical: '/products/ai' },
  openGraph: {
    title: 'VexelLabs AI — VexelLabs',
    description:
      'Evaluation, retrieval and deployment in one considered workflow for teams building with models.',
    url: '/products/ai',
  },
}

const modules = [
  {
    number: '01',
    name: 'Workspace',
    text: 'Organise prompts, datasets and deployments around the product they belong to.',
  },
  {
    number: '02',
    name: 'Playground',
    text: 'Test an approach against real material before it reaches a user.',
  },
  {
    number: '03',
    name: 'Evaluations',
    text: 'Define what good looks like, then compare changes against that standard.',
  },
  {
    number: '04',
    name: 'Datasets',
    text: 'Ground answers in the documents, records and context a team already trusts.',
  },
  {
    number: '05',
    name: 'Deployments',
    text: 'Watch latency, accuracy and cost once the system is in daily use.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Grounded',
    text: 'Answers should point back to the material they came from.',
  },
  {
    number: '02',
    title: 'Measured',
    text: 'A change is only an improvement if it can be compared against a standard.',
  },
  {
    number: '03',
    title: 'Observable',
    text: 'Cost, latency and failure should be visible in the same place as the work.',
  },
  {
    number: '04',
    title: 'Yours',
    text: 'The workspace should fit the team and its material, not the other way around.',
  },
]

export default function AiPage() {
  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>VexelLabs AI / Applied intelligence</p>
        <h1 className={styles.title}>VexelLabs AI</h1>
        <p className={styles.lede}>
          An applied intelligence platform for teams building with models. Evaluation, retrieval
          and deployment in one considered workflow.
        </p>
        <div className={styles.actions}>
          <SiteButton href="/contact">Request a demo</SiteButton>
          <SiteButton href="#modules" variant="outline">
            See the workflow
          </SiteButton>
        </div>
        <div className={styles.heroMedia}>
          <AiScreenshot />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <h2 className={styles.h2}>A demo is not a deployment.</h2>
          <div className={styles.copy}>
            <p>
              Models make the first version easy. The work that follows is what makes the system
              worth depending on.
            </p>
            <p>
              VexelLabs AI makes the work between prototype and production visible: what the system
              was asked, what it answered and whether the answer can be defended.
            </p>
            <Link className={styles.textLink} href="/research">
              Explore our research <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.alt} id="modules">
        <div className={styles.altInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>What it handles</p>
              <h2 className={styles.h2}>The work between an idea and a system.</h2>
            </div>
            <p className={styles.sectionLede}>
              Five connected areas, each built around a decision a team has to make.
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
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Product principles</p>
            <h2 className={styles.h2}>Intelligence that can be defended.</h2>
          </div>
          <p className={styles.sectionLede}>
            Four standards we apply to every feature, from the first prompt to the production
            dashboard.
          </p>
        </div>

        <div className={styles.rows}>
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
          <h2 className={styles.h2}>Start with a real problem.</h2>
          <div className={styles.ctaActions}>
            <p>
              Tell us what you are trying to make possible, what material the system should trust
              and how you will know it is working.
            </p>
            <SiteButton href="/contact">Request a demo</SiteButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
