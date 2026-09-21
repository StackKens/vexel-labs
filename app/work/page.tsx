'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, MoveUpRight, X } from 'lucide-react'

const projects = [
  { id: '01', name: 'Product systems', category: 'Web', status: 'IN DEVELOPMENT', description: 'Digital products shaped around a clear problem, a real user, and the system underneath.', tags: ['React', 'Next.js', 'TypeScript'], tone: 'project-dark', visual: 'browser' },
  { id: '02', name: 'Operational tools', category: 'Business Systems', status: 'PROTOTYPE', description: 'Connected interfaces and workflows for teams doing complex work every day.', tags: ['Systems', 'Data', 'Automation'], tone: 'project-lime', visual: 'dashboard' },
  { id: '03', name: 'Mobile experiences', category: 'Mobile', status: 'EXPERIMENT', description: 'Focused mobile concepts built around usability, performance, and the moment of use.', tags: ['React Native', 'Mobile'], tone: 'project-paper', visual: 'mobile' },
  { id: '04', name: 'Intelligent interfaces', category: 'AI', status: 'EXPERIMENT', description: 'Practical explorations into interfaces that make data, language, and decisions more useful.', tags: ['AI', 'Python', 'Interfaces'], tone: 'project-olive', visual: 'signal' },
]

const filters = ['All', 'Web', 'Mobile', 'Business Systems', 'AI']

function ProjectVisual({ project }: { project: typeof projects[number] }) {
  if (project.visual === 'mobile') return <div className="work-visual mobile-visual"><div className="phone phone-one"><div className="phone-bar" /><div className="phone-title">TODAY</div><div className="phone-chart" /><div className="phone-row" /><div className="phone-row short" /></div><div className="phone phone-two"><div className="phone-bar" /><div className="phone-title">FOCUS</div><div className="phone-card" /><div className="phone-row" /><div className="phone-row short" /></div></div>
  if (project.visual === 'dashboard') return <div className="work-visual dashboard-visual"><div className="dash-window"><div className="dash-nav">VEXEL / SYSTEM</div><div className="dash-body"><div className="dash-sidebar" /><div className="dash-main"><div className="dash-kpi"><i /><i /><i /></div><div className="dash-graph" /><div className="dash-table"><i /><i /><i /><i /></div></div></div></div></div>
  if (project.visual === 'signal') return <div className="work-visual signal-visual"><div className="signal-orbit" /><div className="signal-orbit second" /><span className="signal-core">AI</span><span className="signal-code">DATA → MODEL → ACTION</span></div>
  return <div className="work-visual browser-visual"><div className="browser-window"><div className="browser-top"><span /><span /><span /><b>product.system / 001</b></div><div className="browser-content"><div className="browser-sidebar" /><div className="browser-panel"><span className="panel-label">A useful place to start.</span><strong>Build the next<br />clear thing.</strong><div className="panel-lines"><i /><i /><i /></div></div></div></div></div>
}

export default function WorkPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const visibleProjects = projects.filter((project) => filter === 'All' || project.category === filter)

  return (
    <main className="work-page">
      <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="/" aria-label="Vexel Labs home"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a></nav>
        <a className="nav-cta" href="/#contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/about" onClick={() => setMenuOpen(false)}>About</a><a href="/services" onClick={() => setMenuOpen(false)}>Services</a><a href="/work" onClick={() => setMenuOpen(false)}>Work</a><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
      </header>

      <section className="work-hero section-pad"><div><p className="eyebrow"><span className="eyebrow-dot" /> Our work</p><h1>Ideas we&apos;ve turned<br />into <em>technology.</em></h1><p className="hero-description">A growing body of products, systems, and experiments built to make useful things real. This is where the thinking becomes tangible.</p><div className="hero-actions"><a className="button button-primary" href="/#contact">Start a project <ArrowUpRight size={16} /></a><a className="text-link" href="#projects">Explore the work <ArrowDownRight size={16} /></a></div></div><div className="work-hero-art" aria-label="Abstract layers representing Vexel products" role="img"><div className="hero-art-label">WORK / 001</div><div className="layer layer-back">SYSTEM <span>01</span></div><div className="layer layer-mid">PRODUCT <span>02</span></div><div className="layer layer-front">IDEA <span>03</span></div><div className="hero-art-dot" /></div></section>

      <section className="work-intro section-pad"><div className="section-kicker">/ 01 — THE WORK</div><div className="work-intro-grid"><h2>We don&apos;t build technology<br /><span>to fill portfolios.</span></h2><p>We build it to be used. Each project starts with a problem worth understanding and ends with something people can work, live, or move forward with.</p></div></section>

      <section className="projects-section section-pad" id="projects"><div className="projects-top"><div><div className="section-kicker">/ 02 — SELECTED WORK</div><h2>Built for the real world.</h2></div><div className="project-filters" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div></div><div className="projects-list">{visibleProjects.map((project, index) => <article className={`project-row ${project.tone}`} key={project.id}><ProjectVisual project={project} /><div className="project-info"><div><span className="project-index">{project.id} / {project.category}</span><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-bottom"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-status"><i /> {project.status}</span></div></div><a className="project-link" href="/#contact" aria-label={`Discuss ${project.name}`}><MoveUpRight size={18} /></a></article>)}</div></section>

      <section className="lab-section section-pad"><div className="section-kicker">/ 03 — THE LAB</div><div className="lab-grid"><div><h2>Some things<br /><em>start as questions.</em></h2><p>Experiments are how we learn what technology could become. Small interfaces, intelligent systems, and new ways of making complexity feel clear.</p><a className="text-link" href="/#contact">Talk to us about an idea <ArrowUpRight size={15} /></a></div><div className="lab-visual"><div className="lab-grid-lines" /><div className="lab-node n1" /><div className="lab-node n2" /><div className="lab-node n3" /><div className="lab-node n4" /><div className="lab-center">V</div><span>EXPERIMENT / 004</span></div></div></section>

      <section className="work-cta section-pad"><div className="section-kicker">/ 04 — WHAT&apos;S NEXT</div><h2>Have something<br /><em>worth building?</em></h2><p>Let&apos;s turn your idea or problem into working technology.</p><div className="hero-actions"><a className="button button-primary" href="/#contact">Start a project <ArrowUpRight size={16} /></a><a className="text-link" href="/services">Explore our services <ArrowDownRight size={16} /></a></div></section>

      <footer className="footer section-pad"><div className="footer-top"><a className="brand" href="/"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a><p>Digital products and systems<br />for people moving forward.</p></div><div className="footer-bottom"><div className="footer-links"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a></div><a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} /></a></div></footer>
    </main>
  )
}

// Project visuals are CSS-built so the page stays lightweight and the content remains easy to replace with real captures.
