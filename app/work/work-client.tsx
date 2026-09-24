'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import styles from './work.module.css'

type Project = {
  id: string
  name: string
  category: string
  status: string
  description: string
  focus: string
  tags: string[]
  visual: 'system' | 'operations' | 'mobile' | 'intelligence'
}

const projects: Project[] = [
  {
    id: '01',
    name: 'Product systems',
    category: 'Web',
    status: 'In development',
    description: 'Digital products shaped around a clear problem, a real user, and the system underneath.',
    focus: 'Product direction / engineering',
    tags: ['React', 'Next.js', 'TypeScript'],
    visual: 'system',
  },
  {
    id: '02',
    name: 'Operational tools',
    category: 'Business Systems',
    status: 'Prototype',
    description: 'Connected interfaces and workflows for teams doing complex work every day.',
    focus: 'Workflow / data',
    tags: ['Systems', 'Data', 'Automation'],
    visual: 'operations',
  },
  {
    id: '03',
    name: 'Mobile experiences',
    category: 'Mobile',
    status: 'Experiment',
    description: 'Focused mobile concepts built around usability, performance, and the moment of use.',
    focus: 'Mobile UX / application',
    tags: ['React Native', 'Mobile'],
    visual: 'mobile',
  },
  {
    id: '04',
    name: 'Intelligent interfaces',
    category: 'AI',
    status: 'Experiment',
    description: 'Practical explorations into interfaces that make data, language, and decisions more useful.',
    focus: 'AI systems / interfaces',
    tags: ['AI', 'Python', 'Interfaces'],
    visual: 'intelligence',
  },
]

const filters = ['All', 'Web', 'Mobile', 'Business Systems', 'AI']

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'mobile') {
    return <div className={`${styles.visual} ${styles.mobileVisual}`}><div className={styles.visualLabel}>Mobile / field study</div><div className={styles.phone}><span className={styles.phoneBar} /><strong>Focus</strong><span className={styles.phoneBlock} /><span className={styles.phoneLine} /><span className={styles.phoneLineShort} /></div><div className={styles.mobileNote}>A focused view for the moment of use.</div></div>
  }

  if (project.visual === 'operations') {
    return <div className={`${styles.visual} ${styles.operationsVisual}`}><div className={styles.visualLabel}>Workflow / operating layer</div><div className={styles.flowSketch}><span>Request</span><i>→</i><span>Review</span><i>→</i><span>Action</span></div><div className={styles.operationsNote}>Less movement between tools. More clarity in the work.</div></div>
  }

  if (project.visual === 'intelligence') {
    return <div className={`${styles.visual} ${styles.intelligenceVisual}`}><div className={styles.visualLabel}>Intelligence / useful action</div><div className={styles.intelligenceDiagram}><span>Signal</span><i>→</i><span>Decision</span><i>→</i><span>Action</span></div><div className={styles.operationsNote}>A model is only one part of the product.</div></div>
  }

  return <div className={`${styles.visual} ${styles.systemVisual}`}><div className={styles.visualLabel}>Product system / 001</div><div className={styles.systemSketch}><span className={styles.systemSketchTop}>Direction</span><strong>Build the next<br />clear thing.</strong><span className={styles.systemSketchBottom}>Interface / system / support</span></div></div>
}

export default function WorkClient() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Work / current directions</p>
          <h1>Ideas we&apos;re turning<br />into <em>useful systems.</em></h1>
          <p>We build in public where the work is ready to share. This page holds the directions, prototypes, and systems we are exploring.</p>
          <div className={styles.heroActions}><SiteButton href="/contact">Start a project</SiteButton><Link className={styles.textLink} href="#projects">Explore the work <ArrowDownRight size={16} aria-hidden="true" /></Link></div>
        </div>
        <div className={styles.indexPanel} aria-label="Current Vexel Labs work directions">
          <div className={styles.indexTop}><span>Work index</span><span>VXL / 004</span></div>
          <div className={styles.indexRows}>{projects.map((project) => <div key={project.id}><span>{project.id}</span><strong>{project.name}</strong><small>{project.status}</small></div>)}</div>
          <div className={styles.indexBottom}>Direction / prototype / experiment</div>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>/ 01 — The work</p>
        <div className={styles.introGrid}><h2>We don&apos;t build technology<br /><em>to fill portfolios.</em></h2><div><p>We build it to be used. Each project starts with a problem worth understanding and ends with something people can work with, live with, or move forward with.</p><p className={styles.note}>The entries below are working directions and experiments, not client case studies.</p></div></div>
      </section>

      <section className={styles.projects} id="projects">
        <div className={styles.projectsTop}><div><p className={styles.sectionLabel}>/ 02 — Current work</p><h2>Built for the real world.</h2></div><div className={styles.filters} role="group" aria-label="Filter work directions">{filters.map((item) => <button key={item} type="button" className={filter === item ? styles.filterActive : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div></div>
        <div className={styles.projectList}>{visibleProjects.map((project) => <article className={styles.projectRow} key={project.id}><ProjectVisual project={project} /><div className={styles.projectInfo}><div><div className={styles.projectMeta}><span>{project.id} / {project.category}</span><span className={styles.projectStatus}>{project.status}</span></div><h3>{project.name}</h3><p>{project.description}</p><span className={styles.projectFocus}>{project.focus}</span></div><div className={styles.projectBottom}><div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link className={styles.projectLink} href="/contact" aria-label={`Discuss ${project.name}`}><ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></article>)}</div>
      </section>

      <section className={styles.practice}>
        <div><p className={styles.sectionLabel}>/ 03 — The practice</p><h2>Some things<br /><em>start as questions.</em></h2><p>Experiments are how we learn what technology could become. Small interfaces, intelligent systems, and new ways of making complexity feel clear.</p><Link className={styles.textLink} href="/contact">Talk to us about an idea <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div className={styles.practicePanel}><span>Question → evidence → system</span><strong>Make the useful<br />thing visible.</strong><small>Vexel Labs / ongoing practice</small></div>
      </section>

      <section className={styles.cta}><p className={styles.eyebrow}><span aria-hidden="true" /> What&apos;s next</p><h2>Have something<br /><em>worth building?</em></h2><p>Let&apos;s turn your idea or problem into working technology.</p><SiteButton href="/contact" variant="light">Start a project</SiteButton></section>
      <SiteFooter />
    </main>
  )
}
