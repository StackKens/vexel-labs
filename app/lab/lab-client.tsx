'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import styles from './lab.module.css'

const explorations = [
  { number: '01', title: 'Artificial Intelligence', text: 'Building intelligent systems that can understand, generate, predict, and assist.', tag: 'Intelligence', question: 'What becomes possible when a system understands the work?' },
  { number: '02', title: 'Machine Learning', text: 'Exploring models, data, evaluation, and practical applications that learn over time.', tag: 'Models', question: 'How do we know when a model is useful?' },
  { number: '03', title: 'Automation', text: 'Designing connected workflows that remove repetitive work and make operations clearer.', tag: 'Systems', question: 'Which parts of a process should not remain manual?' },
  { number: '04', title: 'New Interfaces', text: 'Testing more natural ways for people to interact with software and information.', tag: 'Interaction', question: 'How can an interface make complexity easier to act on?' },
]

const experiments = [
  { number: '01', title: 'Intelligent Web Generation', description: 'Exploring how structured requirements can become useful, functional digital experiences.', category: 'Experiment', status: 'Research', technologies: ['AI systems', 'Web products'] },
  { number: '02', title: 'Operational Intelligence', description: 'Investigating how business data can support clearer decisions and better workflows.', category: 'Research', status: 'Exploring', technologies: ['Data systems', 'Automation'] },
  { number: '03', title: 'Human Interfaces', description: 'Prototyping interfaces that make complex technology feel direct and understandable.', category: 'Prototype', status: 'Building', technologies: ['Product design', 'AI'] },
]

const pipeline = [
  ['01', 'Data', 'The signal'],
  ['02', 'Experiment', 'The question'],
  ['03', 'Model', 'The pattern'],
  ['04', 'Evaluate', 'The evidence'],
  ['05', 'Apply', 'The system'],
  ['06', 'Deploy', 'The product'],
]

const philosophy = [
  'Build to understand.',
  'Experiment before assuming.',
  'Measure what matters.',
  'Turn research into useful systems.',
]

export default function LabClient() {
  const [active, setActive] = useState(0)
  const current = explorations[active]

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Vexel Lab / research log</p>
          <h1>Questions before<br /><em>answers.</em></h1>
          <p>The Vexel Lab is where we investigate AI, intelligent systems, automation, and the ideas that may become useful products.</p>
          <div className={styles.heroActions}><SiteButton href="#experiments">Explore the lab</SiteButton><Link className={styles.textLink} href="/contact">Work with Vexel <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </div>
        <div className={styles.indexPanel} aria-label="Vexel Lab research areas">
          <div className={styles.indexTop}><span>Research index</span><span>VXL / 005</span></div>
          <div className={styles.indexRows}>{explorations.map((item) => <div key={item.number}><span>{item.number}</span><strong>{item.title}</strong><small>{item.tag}</small></div>)}</div>
          <div className={styles.indexBottom}>Question / method / evidence</div>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>/ 01 — The lab</p>
        <div className={styles.introGrid}><h2>Experiments before<br /><em>claims.</em></h2><div><p className={styles.lead}>We don&apos;t just use technology. We explore what can be built with it.</p><p>The Lab is a practical space for questions, prototypes, and technical experiments. Some become products. Some sharpen how we work. Every one starts with a real problem worth understanding.</p></div></div>
      </section>

      <section className={styles.explorations}>
        <div className={styles.sectionHeading}><div><p className={styles.sectionLabel}>/ 02 — What we&apos;re exploring</p><h2>Ideas become clearer<br /><em>when they are tested.</em></h2></div><p>Select an area to see the question behind it.</p></div>
        <div className={styles.explorationLayout}>
          <div className={styles.explorationList} role="tablist" aria-label="Areas of exploration">{explorations.map((item, index) => <button key={item.number} id={`exploration-tab-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls={`exploration-panel-${index}`} tabIndex={active === index ? 0 : -1} className={active === index ? styles.explorationActive : ''} onClick={() => setActive(index)}><span>{item.number}</span><strong>{item.title}</strong><ArrowUpRight size={16} aria-hidden="true" /></button>)}</div>
          <div id={`exploration-panel-${active}`} className={styles.explorationDetail} role="tabpanel" tabIndex={0} aria-labelledby={`exploration-tab-${active}`}><div className={styles.detailTop}><span>{current.tag}</span><span>Question 0{active + 1}</span></div><h3>{current.question}</h3><p>{current.text}</p><div className={styles.detailRule}><span>Working question</span><span>Keep learning</span></div></div>
        </div>
      </section>

      <section className={styles.experiments} id="experiments">
        <div className={styles.sectionHeading}><div><p className={styles.sectionLabel}>/ 03 — Active experiments</p><h2>Unfinished by design.<br /><em>Honest about the stage.</em></h2></div><p>Work that stays close to evidence.</p></div>
        <div className={styles.featuredExperiment}><div className={styles.experimentVisual}><span>Experiment / 01</span><div className={styles.experimentSignal}><i /><i /><i /><i /></div><strong>Structure<br /><em>→</em> experience</strong></div><div className={styles.experimentCopy}><span>Featured experiment</span><h3>Intelligent<br /><em>web generation.</em></h3><p>Exploring how AI can transform structured user requirements into functional digital experiences, without losing the thinking behind the work.</p><dl><div><dt>Stage</dt><dd>Research</dd></div><div><dt>Focus</dt><dd>AI systems / products</dd></div></dl></div></div>
        <div className={styles.experimentList}>{experiments.slice(1).map((item) => <article key={item.number}><span>{item.number}</span><div><small>{item.category}</small><h3>{item.title}</h3><p>{item.description}</p></div><div className={styles.experimentStatus}>{item.status}<ArrowUpRight size={16} aria-hidden="true" /></div></article>)}</div>
      </section>

      <section className={styles.pipeline}><div className={styles.sectionHeading}><div><p className={styles.sectionLabel}>/ 04 — The development loop</p><h2>Curiosity is useful.<br /><em>Evidence is better.</em></h2></div><p>Keep the question visible.</p></div><div className={styles.pipelineList}>{pipeline.map(([number, title, caption]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{caption}</p></div>)}</div></section>

      <section className={styles.building}><div><p className={styles.sectionLabel}>/ 05 — Research to product</p><h2>Not every idea<br /><em>needs to ship.</em></h2></div><div className={styles.buildingFlow}>{['Question', 'Research', 'Experiment', 'Prototype', 'Product'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 4 && <ArrowUpRight size={15} aria-hidden="true" />}</div>)}</div><p className={styles.buildingNote}>The Lab gives ideas room to become clear. When an experiment proves useful, we give it the engineering discipline to become real.</p></section>

      <section className={styles.context}><div><p className={styles.sectionLabel}>/ 06 — A perspective from Africa</p><h2>Local context.<br /><em>Global possibility.</em></h2><p>Technology built from Africa can solve local problems while being designed for a global future. We are interested in the practical details: access, language, infrastructure, and the people who use what we build.</p></div><div className={styles.contextPanel}><div><span>Context</span><span>Access / language / infrastructure</span></div><strong>Build where<br />the problem is.</strong><small>Vexel Labs / perspective</small></div></section>

      <section className={styles.philosophy}><p className={styles.sectionLabel}>/ 07 — Lab philosophy</p><div>{philosophy.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3><Check size={18} aria-hidden="true" /></div>)}</div></section>

      <section className={styles.cta}><p className={styles.eyebrow}><span aria-hidden="true" /> Start with a question</p><h2>Have an idea<br /><em>worth exploring?</em></h2><p>Let&apos;s build the experiment.</p><SiteButton href="/contact" variant="light">Start a project</SiteButton></section>
      <SiteFooter />
    </main>
  )
}
