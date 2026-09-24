'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteButton } from '@/components/site/SiteButton'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { careers, getAllJobs } from '@/lib/careers-data'
import styles from './careers.module.css'

const departments = ['All', 'Engineering', 'AI / ML', 'Design', 'Product', 'Infrastructure', 'Business', 'Other']
const researchLoop = ['Question', 'Experiment', 'Evaluate', 'Build']

export default function CareersClient() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const jobs = getAllJobs()
  const filteredJobs = selectedDepartment === 'All' ? jobs : jobs.filter((job) => job.department === selectedDepartment)

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Careers at Vexel Labs</p>
          <h1>Do careful work on <em>useful technology.</em></h1>
          <p>Vexel builds software, AI systems, digital products, and the infrastructure around them. We are looking for people who value clear thinking, useful details, and work that holds up.</p>
          <div className={styles.heroActions}><SiteButton href="#positions">View open roles</SiteButton><Link className={styles.textLink} href="/about">Meet Vexel <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </div>
        <div className={styles.heroPanel}><div className={styles.panelTop}><span>Working principles</span><span>VXL / 006</span></div><div className={styles.panelRows}><div><span>01</span><strong>Clear thinking</strong></div><div><span>02</span><strong>Useful details</strong></div><div><span>03</span><strong>Work that holds up</strong></div></div><div className={styles.panelBottom}>Product / engineering / learning</div></div>
      </section>

      <section className={styles.why}>
        <p className={styles.sectionLabel}>/ 01 — Why Vexel</p>
        <div className={styles.whyGrid}><h2>Work on what<br /><em>matters.</em></h2><div className={styles.principleList}>{careers.principles.map((principle) => <div key={principle.title}><h3>{principle.title}</h3><p>{principle.description}</p></div>)}</div></div>
      </section>

      <section className={styles.areas}>
        <p className={styles.sectionLabel}>/ 02 — What we&apos;re building</p>
        <div className={styles.areasGrid}><h2>Areas of work.</h2><div className={styles.areaList}>{careers.workAreas.map((area, index) => <div key={area}><span>0{index + 1}</span><strong>{area}</strong><ArrowUpRight size={15} aria-hidden="true" /></div>)}</div></div>
      </section>

      <section className={styles.culture}>
        <div className={styles.cultureHeading}><p className={styles.sectionLabel}>/ 03 — People and culture</p><h2>How we work<br /><em>together.</em></h2><p>Good teams make it possible to do careful work without pretending the work is simple.</p></div>
        <div className={styles.cultureList}>{careers.cultureValues.map((value, index) => <div key={value.name}><span>0{index + 1}</span><strong>{value.name}</strong><p>{value.description}</p></div>)}</div>
      </section>

      <section className={styles.engineering}>
        <div><p className={styles.sectionLabel}>/ 04 — Engineering culture</p><h2>We care about<br /><em>how we build.</em></h2><p>Quality, thoughtfulness, and continuous improvement matter. Good engineering compounds.</p></div>
        <div className={styles.engineeringList}>{careers.engineeringPrinciples.map((principle, index) => <div key={principle}><span>{String(index + 1).padStart(2, '0')}</span><strong>{principle}</strong></div>)}</div>
      </section>

      <section className={styles.research}>
        <div className={styles.researchHeading}><p className={styles.sectionLabel}>/ 05 — AI and research</p><h2>Exploring the<br /><em>frontier.</em></h2><p>We invest in understanding and building AI systems. Work involves learning, experimenting, evaluating, building, and deploying.</p></div>
        <div className={styles.researchLoop}>{researchLoop.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < researchLoop.length - 1 && <ArrowUpRight size={15} aria-hidden="true" />}</div>)}</div>
        <div className={styles.researchTags}>{careers.aiResearchAreas.map((area) => <span key={area}>{area}</span>)}</div>
      </section>

      <section className={styles.positions} id="positions">
        <div className={styles.positionsHeading}><div><p className={styles.sectionLabel}>/ 06 — Open positions</p><h2>Join us.</h2></div><span>{jobs.length} open {jobs.length === 1 ? 'role' : 'roles'}</span></div>
        {jobs.length > 0 ? <><div className={styles.filters} role="group" aria-label="Filter roles by department">{departments.map((department) => <button key={department} type="button" className={selectedDepartment === department ? styles.filterActive : ''} onClick={() => setSelectedDepartment(department)} aria-pressed={selectedDepartment === department}>{department}</button>)}</div>{filteredJobs.length > 0 ? <div className={styles.jobList}>{filteredJobs.map((job, index) => <Link key={job.slug} href={`/careers/${job.slug}`} className={styles.jobRow}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{job.title}</h3><p>{job.department} / {job.location} / {job.experienceLevel}</p></div><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div> : <div className={styles.empty}><h3>No roles in this department.</h3><p>Try another department or introduce yourself.</p></div>}</> : <div className={styles.empty}><span className={styles.emptyLabel}>Current status</span><h3>No roles are open right now.</h3><p>We are always interested in meeting people who can help us build useful things. Introduce yourself and tell us what you would want to work on.</p><SiteButton href="/contact" variant="quiet">Introduce yourself</SiteButton></div>}
      </section>

      <section className={styles.cta}><p className={styles.eyebrow}><span aria-hidden="true" /> Work with us</p><h2>Build something<br /><em>that matters.</em></h2><p>Join the people building Vexel Labs.</p><SiteButton href="/contact" variant="light">Introduce yourself</SiteButton></section>
      <SiteFooter />
    </main>
  )
}
