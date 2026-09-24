import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import styles from './about.module.css'

const principles = [
  ['01', 'Begin with context', 'The right solution depends on the people, constraints, and place around the problem.'],
  ['02', 'Make the complex clear', 'Good products give people confidence about what to do next.'],
  ['03', 'Build for the next version', 'We make decisions that create a foundation rather than a dead end.'],
]

const process = [
  ['01', 'Understand', 'Clarify the problem and who it affects.'],
  ['02', 'Shape', 'Choose what to make, and what to leave out.'],
  ['03', 'Build', 'Engineer the product with care and transparency.'],
  ['04', 'Learn', 'Use the real world to decide what comes next.'],
]

export default function AboutClient() {
  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> About Vexel Labs</p>
          <h1>We are building a technology company with <em>somewhere to go.</em></h1>
          <p>Vexel Labs exists to make useful technology feel closer, clearer, and more possible. We design and engineer products and systems around real problems.</p>
          <Link className={styles.textLink} href="#story">Read our point of view <ArrowDownRight size={16} aria-hidden="true" /></Link>
        </div>

        <div className={styles.contextPanel} aria-label="Vexel Labs context">
          <div className={styles.panelTop}><span>VXL / 002</span><span>Point of view</span></div>
          <div className={styles.panelStatement}>Build with <em>context.</em></div>
          <div className={styles.panelList}>
            <div><span>Product</span><span>Direction</span></div>
            <div><span>Engineering</span><span>Discipline</span></div>
            <div><span>Africa</span><span>Perspective</span></div>
          </div>
          <div className={styles.panelBottom}>Useful technology / long-term thinking</div>
        </div>
      </section>

      <section className={styles.story} id="story">
        <p className={styles.sectionLabel}>/ 01 — Why we exist</p>
        <div className={styles.storyGrid}>
          <h2>Technology is not the point.<br /><em>What it makes possible is.</em></h2>
          <div className={styles.storyCopy}>
            <p className={styles.lead}>The products we use shape how we work, learn, move, and make decisions.</p>
            <p>We bring product thinking and engineering discipline together to build software that respects that responsibility. No theatre. No borrowed claims. Just careful work around a real need.</p>
          </div>
        </div>
        <div className={styles.storyNote}><span /> A company is a set of decisions repeated with care.</div>
      </section>

      <section className={styles.origin}>
        <div className={styles.originCopy}>
          <p className={styles.sectionLabel}>/ 02 — Where we build from</p>
          <h2>Built in Africa.<br /><em>Open to everywhere.</em></h2>
          <p>We are close to a set of problems that deserve better tools, and connected to the people shaping technology far beyond our immediate context. That perspective informs the work.</p>
          <Link className={styles.textLink} href="/contact">Talk about the context <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className={styles.originPanel}>
          <div className={styles.originPanelTop}><span>Operating context</span><span>Lagos / 06.5° S</span></div>
          <div className={styles.originRule} />
          <div className={styles.originRows}>
            <div><span>Local</span><strong>Close to the problem</strong></div>
            <div><span>Global</span><strong>Designed to travel</strong></div>
            <div><span>Long-term</span><strong>Build for what follows</strong></div>
          </div>
          <div className={styles.originPanelBottom}>Access / language / infrastructure / use</div>
        </div>
      </section>

      <section className={styles.principles}>
        <p className={styles.sectionLabel}>/ 03 — How we think</p>
        <div className={styles.principlesGrid}>
          <h2>Good work has a point of view.</h2>
          <div className={styles.principleList}>
            {principles.map(([number, title, text]) => (
              <div className={styles.principleRow} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <p className={styles.sectionLabel}>/ 04 — How we work</p>
        <div className={styles.processHeading}><h2>From question<br /><em>to useful system.</em></h2><p>Good process creates room for judgment. It gives the work a direction without pretending the answer is known at the start.</p></div>
        <div className={styles.processList}>
          {process.map(([number, title, text]) => (
            <div className={styles.processRow} key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.eyebrow}><span aria-hidden="true" /> The road ahead</p>
        <h2>There is useful work<br /><em>to do.</em></h2>
        <p>We are focused on building products and systems that give ambitious people and organisations more room to move.</p>
        <SiteButton href="/contact" variant="light">Start a conversation</SiteButton>
      </section>

      <SiteFooter />
    </main>
  )
}
