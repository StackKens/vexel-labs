import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { ResearchOrbit } from '@/components/visuals/ResearchOrbit'
import styles from './research.module.css'

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
    status: 'Ongoing',
  },
  {
    number: '02',
    name: 'Machine learning',
    description:
      'Models, data and evaluation for problems where learning earns its place over a simpler rule.',
    focus: 'Models · data · evaluation',
    status: 'Ongoing',
  },
  {
    number: '03',
    name: 'Applied research',
    description:
      'Taking a question from the lab into a working system without losing the rigour that made it useful.',
    focus: 'Fieldwork · prototypes · evidence',
    status: 'Applied',
  },
  {
    number: '04',
    name: 'Emerging technologies',
    description:
      'New interfaces, automation and computational approaches that deserve close, sceptical attention.',
    focus: 'Interaction · automation · systems',
    status: 'Exploratory',
  },
  {
    number: '05',
    name: 'Intelligent systems',
    description:
      'Products where models, data and human judgement meet, and where the boundary between them is a design decision.',
    focus: 'Products · workflows · trust',
    status: 'Applied',
  },
]

const questions = [
  'How can a system explain a decision without pretending to certainty?',
  'What does useful evaluation look like when the output is probabilistic?',
  'Which parts of a workflow should remain human, even when they could be automated?',
  'How do we design intelligence for constrained devices, bandwidth and infrastructure?',
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
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow rise">Research / VexelLabs</p>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>
              Questions before answers.
            </h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              We research artificial intelligence, machine learning and applied computing, then
              turn what we learn into systems people can use.
            </p>
            <div className={`${styles.heroActions} rise rise-delay-3`}>
              <SiteButton href="#areas">
                Read our interests
              </SiteButton>
              <SiteButton href="/contact" variant="outline">
                Collaborate with us
              </SiteButton>
            </div>
          </div>
          <div className={`${styles.heroVisual} rise rise-delay-2`}>
            <ResearchOrbit />
          </div>
        </div>
      </section>

      <section className={`${styles.overview} theme-light`}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div>
              <p className="eyebrow">Research overview</p>
              <h2 className="display">Research is how we decide what to build next.</h2>
            </div>
            <div className={styles.overviewCopy}>
              <p className={styles.overviewLead}>
                We do not treat research as a separate world from engineering. The questions worth
                asking are usually the ones standing between a product and its next useful version.
              </p>
              <p>
                Our work is practical and evidence-led. We build to understand, keep the question
                visible and document what the evidence actually supports. Some inquiries become
                products. Others sharpen how we work. Every one is expected to earn its place.
              </p>
            </div>
          </div>

          <div className={styles.overviewPrinciples}>
            <div>
              <span>01</span>
              <strong>Build to understand</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Keep the question visible</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Share what holds up</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.areas} id="areas">
        <div className="container">
          <div className={styles.areasHead}>
            <div>
              <p className="eyebrow">Research interests</p>
              <h2 className="display">The questions we keep returning to.</h2>
            </div>
            <p className="lede">
              Five areas of inquiry, each tied to a practical problem and a working system.
            </p>
          </div>

          <div className={styles.areaList}>
            {areas.map((area) => (
              <article className={styles.areaRow} key={area.number}>
                <span className={styles.areaNumber}>{area.number}</span>
                <div className={styles.areaTitle}>
                  <h3>{area.name}</h3>
                  <span>{area.focus}</span>
                </div>
                <p>{area.description}</p>
                <span className={styles.areaStatus}>{area.status}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.questions} theme-light`}>
        <div className="container">
          <div className={styles.questionsGrid}>
            <div>
              <p className="eyebrow">Working questions</p>
              <h2 className="display">Open by design.</h2>
              <p className="lede">
                These are active questions, not findings. We publish conclusions only when the
                evidence is strong enough to be useful to someone else.
              </p>
            </div>
            <ol className={styles.questionList}>
              {questions.map((question, index) => (
                <li key={question}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{question}</p>
                  <span className={styles.questionState}>Open</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.methods}>
        <div className="container">
          <div className={styles.methodsHead}>
            <div>
              <p className="eyebrow">Method</p>
              <h2 className="display">From question to evidence.</h2>
            </div>
            <p className="lede">
              A research practice is only as good as the discipline around it.
            </p>
          </div>
          <div className={styles.methodGrid}>
            {methods.map((method) => (
              <div className={styles.method} key={method.number}>
                <span>{method.number}</span>
                <h3>{method.title}</h3>
                <p>{method.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.publications} theme-light`}>
        <div className="container">
          <div className={styles.publicationsGrid}>
            <div>
              <p className="eyebrow">Publications and experiments</p>
              <h2 className="display">We publish when the work is ready.</h2>
            </div>
            <div className={styles.publicationsCopy}>
              <p>
                VexelLabs does not yet maintain a public paper archive. We share research through
                working notes, experiments and product decisions when there is evidence worth
                adding to the record.
              </p>
              <p>
                If you are working on a question that overlaps with ours, we would rather compare
                notes than trade claims.
              </p>
              <div className={styles.publicationsActions}>
                <Link className="text-link" href="/insights">
                  Read our working notes <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
                <Link className="text-link" href="/contact">
                  Propose a collaboration <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Collaborate</p>
            <h2 className="display">Bring us a hard question.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              We work with researchers, institutions and product teams on problems that need both
              intellectual rigour and engineering follow-through.
            </p>
            <SiteButton href="/contact" variant="light">
              Start a conversation
            </SiteButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
