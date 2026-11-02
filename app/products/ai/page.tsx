import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { AiScreenshot } from '@/components/visuals/AiScreenshot'
import styles from './ai.module.css'

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

const gaps = [
  {
    number: '01',
    title: 'Prototype to production',
    text: 'A good demonstration shows what a model can do. A product has to show what it does when it is wrong.',
  },
  {
    number: '02',
    title: 'Output to evidence',
    text: 'An answer without a source is difficult to trust. Grounding makes the claim inspectable.',
  },
  {
    number: '03',
    title: 'Model to system',
    text: 'The model is one component. Retrieval, evaluation, interfaces and monitoring carry the rest.',
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
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={`${styles.productMark} rise`}>
              <span>VX</span>
              <span>Product 02 / Applied intelligence</span>
            </div>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>VexelLabs AI</h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              An applied intelligence platform for teams building with models. Evaluation,
              retrieval and deployment in one considered workflow.
            </p>
            <div className={`${styles.heroActions} rise rise-delay-3`}>
              <SiteButton href="/contact">Request a demo</SiteButton>
              <SiteButton href="#modules" variant="outline">
                See the workflow
              </SiteButton>
            </div>
          </div>

          <aside className={`${styles.heroAside} rise rise-delay-2`} aria-label="VexelLabs AI at a glance">
            <div className={styles.asideHead}>
              <span>Workspace / Applied intelligence</span>
              <span>02</span>
            </div>
            <div className={styles.asideRows}>
              <div>
                <span>Prompts</span>
                <strong>Test and compare approaches</strong>
              </div>
              <div>
                <span>Evaluations</span>
                <strong>Define what good means</strong>
              </div>
              <div>
                <span>Retrieval</span>
                <strong>Ground answers in your material</strong>
              </div>
              <div>
                <span>Monitoring</span>
                <strong>See behaviour in production</strong>
              </div>
            </div>
            <div className={styles.asideFoot}>
              <span>Built by VexelLabs</span>
              <Link href="/products">
                All products <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className={`${styles.preview} theme-light`}>
        <div className="container">
          <div className={styles.previewHead}>
            <span>Product surface</span>
            <span>A representative view of the AI workspace</span>
          </div>
          <div className={styles.previewFrame}>
            <AiScreenshot />
          </div>
        </div>
      </section>

      <section className={styles.problem}>
        <div className="container">
          <div className={styles.problemHead}>
            <div>
              <p className="eyebrow">The gap</p>
              <h2 className="display">A demo is not a deployment.</h2>
            </div>
            <p className="lede">
              Models make the first version easy. The work that follows is what makes the system
              worth depending on.
            </p>
          </div>

          <div className={styles.gapList}>
            {gaps.map((gap) => (
              <div className={styles.gapRow} key={gap.number}>
                <span>{gap.number}</span>
                <h3>{gap.title}</h3>
                <p>{gap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.modules} theme-light`} id="modules">
        <div className="container">
          <div className={styles.modulesHead}>
            <div>
              <p className="eyebrow">What it handles</p>
              <h2 className="display">The work between an idea and a system.</h2>
            </div>
            <p className="lede">
              Five connected areas, each built around a decision a team has to make.
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

      <section className={styles.principles}>
        <div className="container">
          <div className={styles.principlesHead}>
            <div>
              <p className="eyebrow">Product principles</p>
              <h2 className="display">Intelligence that can be defended.</h2>
            </div>
            <p className="lede">
              Four standards we apply to every feature, from the first prompt to the production
              dashboard.
            </p>
          </div>

          <div className={styles.principleGrid}>
            {principles.map((principle) => (
              <div className={styles.principle} key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.research} theme-light`}>
        <div className="container">
          <div className={styles.researchGrid}>
            <div>
              <p className="eyebrow">Research inside the product</p>
              <h2 className="display">Built on questions, not assumptions.</h2>
            </div>
            <div className={styles.researchCopy}>
              <p>
                VexelLabs AI comes out of our applied research practice. The questions we ask in
                the lab — how to evaluate a probabilistic system, when to keep a human in the
                loop, how to ground a claim — are the same questions the product is designed to
                answer.
              </p>
              <Link className="text-link" href="/research">
                Explore our research <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">VexelLabs AI / Get started</p>
            <h2 className="display">Start with a real problem.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              Tell us what you are trying to make possible, what material the system should trust
              and how you will know it is working.
            </p>
            <SiteButton href="/contact" variant="light">
              Request a demo
            </SiteButton>
            <Link className="text-link" href="/products/acs">
              See Academic Cloud System <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
