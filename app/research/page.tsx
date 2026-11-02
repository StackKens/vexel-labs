import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'VexelLabs research explores artificial intelligence, machine learning, applied computing and emerging technology through practical, evidence-led inquiry.',
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Research — VexelLabs',
    description:
      'Questions before answers. Research in AI, machine learning and applied computing at VexelLabs.',
    url: '/research',
  },
}

const areas = [
  {
    number: '01',
    name: 'Artificial intelligence',
    description:
      'How systems reason, retrieve, generate and assist in real work without overstating what they know.',
    focus: 'Reasoning · generation · retrieval',
  },
  {
    number: '02',
    name: 'Machine learning',
    description:
      'Models, data and evaluation for problems where learning earns its place over a simpler rule.',
    focus: 'Models · data · evaluation',
  },
  {
    number: '03',
    name: 'Applied research',
    description:
      'Taking a question from the lab into a working system without losing the rigour that made it useful.',
    focus: 'Fieldwork · prototypes · evidence',
  },
  {
    number: '04',
    name: 'Emerging technologies',
    description:
      'New interfaces, automation and computational approaches that deserve close, sceptical attention.',
    focus: 'Interaction · automation · systems',
  },
  {
    number: '05',
    name: 'Intelligent systems',
    description:
      'Products where models, data and human judgement meet, and where the boundary between them is a design decision.',
    focus: 'Products · workflows · trust',
  },
]

const methods = [
  {
    number: '01',
    title: 'Question',
    text: 'Start with a real constraint or a gap in current practice. Write the question down plainly.',
  },
  {
    number: '02',
    title: 'Method',
    text: 'Choose an approach that can produce evidence, not just an interesting demo.',
  },
  {
    number: '03',
    title: 'Evidence',
    text: 'Measure behaviour, failure modes and cost. Keep the results that contradict us.',
  },
  {
    number: '04',
    title: 'System',
    text: 'Only when the evidence holds do we move the work into a product.',
  },
]

export default function ResearchPage() {
  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Research</p>
        <h1 className={styles.title}>Questions before answers.</h1>
        <p className={styles.lede}>
          We research artificial intelligence, machine learning and applied computing, then turn
          what we learn into systems people can use.
        </p>
        <div className={styles.actions}>
          <SiteButton href="#areas">Read our interests</SiteButton>
          <SiteButton href="/contact" variant="outline">
            Collaborate with us
          </SiteButton>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <h2 className={styles.h2}>Research is how we decide what to build next.</h2>
          <div className={styles.copy}>
            <p>
              We do not treat research as a separate world from engineering. The questions worth
              asking are usually the ones standing between a product and its next useful version.
            </p>
            <p>
              Our work is practical and evidence-led. We build to understand, keep the question
              visible and document what the evidence actually supports.
            </p>
            <Link className={styles.textLink} href="/insights">
              Read our working notes <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.alt} id="areas">
        <div className={styles.altInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Research interests</p>
              <h2 className={styles.h2}>The questions we keep returning to.</h2>
            </div>
            <p className={styles.sectionLede}>
              Five areas of inquiry, each tied to a practical problem and a working system.
            </p>
          </div>

          <div className={styles.rows}>
            {areas.map((area) => (
              <article className={styles.row} key={area.number}>
                <span className={styles.rowIndex}>{area.number}</span>
                <div className={styles.rowBody}>
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>
                  <span className={styles.rowMeta}>{area.focus}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Method</p>
            <h2 className={styles.h2}>From question to evidence.</h2>
          </div>
          <p className={styles.sectionLede}>
            A research practice is only as good as the discipline around it.
          </p>
        </div>

        <div className={styles.steps}>
          {methods.map((method) => (
            <div className={styles.step} key={method.number}>
              <span>{method.number}</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <h2 className={styles.h2}>We publish when the work is ready.</h2>
          <div className={styles.copy}>
            <p>
              VexelLabs does not yet maintain a public paper archive. We share research through
              working notes, experiments and product decisions when there is evidence worth adding
              to the record.
            </p>
            <p>
              If you are working on a question that overlaps with ours, we would rather compare
              notes than trade claims.
            </p>
            <Link className={styles.textLink} href="/contact">
              Propose a collaboration <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>Bring us a hard question.</h2>
          <div className={styles.ctaActions}>
            <p>
              We work with researchers, institutions and product teams on problems that need both
              intellectual rigour and engineering follow-through.
            </p>
            <SiteButton href="/contact">Start a conversation</SiteButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
