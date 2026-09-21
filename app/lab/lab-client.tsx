'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Menu, X } from 'lucide-react'

const explorations = [
  { number: '01', title: 'Artificial Intelligence', text: 'Building intelligent systems that can understand, generate, predict, and assist.', tag: 'INTELLIGENCE', tone: 'lime' },
  { number: '02', title: 'Machine Learning', text: 'Exploring models, data, evaluation, and practical applications that learn over time.', tag: 'MODELS', tone: 'dark' },
  { number: '03', title: 'Automation', text: 'Designing connected workflows that remove repetitive work and make operations clearer.', tag: 'SYSTEMS', tone: 'light' },
  { number: '04', title: 'New Interfaces', text: 'Testing more natural ways for people to interact with software and information.', tag: 'INTERACTION', tone: 'dark' },
]

const experiments = [
  { number: '01', title: 'Intelligent Web Generation', description: 'Exploring how structured requirements can become useful, functional digital experiences.', category: 'EXPERIMENT', status: 'Research', technologies: ['AI systems', 'Web products'] },
  { number: '02', title: 'Operational Intelligence', description: 'Investigating how business data can support clearer decisions and better workflows.', category: 'RESEARCH', status: 'Exploring', technologies: ['Data systems', 'Automation'] },
  { number: '03', title: 'Human Interfaces', description: 'Prototyping interfaces that make complex technology feel direct and understandable.', category: 'PROTOTYPE', status: 'Building', technologies: ['Product design', 'AI'] },
]

const pipeline = [['01', 'Data', 'The signal'], ['02', 'Experiment', 'The question'], ['03', 'Model', 'The pattern'], ['04', 'Evaluate', 'The evidence'], ['05', 'Apply', 'The system'], ['06', 'Deploy', 'The product']]

export default function LabClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(0)
  const current = explorations[active]

  return (
    <main className="lab-page">
      <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="/" aria-label="Vexel Labs home"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a></nav>
        <a className="nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a><a href="/contact">Start a project <ArrowUpRight size={15} /></a></nav>}
      </header>

      <section className="lab-hero section-pad">
        <div><p className="eyebrow"><span className="eyebrow-dot" /> Vexel Lab / 001</p><h1>Exploring what<br />technology <em>can become.</em></h1><p className="hero-description">The Vexel Lab is where we investigate AI, intelligent systems, automation, and the ideas that may become useful products.</p><div className="hero-actions"><a className="button button-primary" href="#experiments">Explore the lab <ArrowDown size={16} /></a><a className="text-link" href="/contact">Work with Vexel <ArrowUpRight size={16} /></a></div></div>
        <div className="lab-hero-visual" role="img" aria-label="A computational system connecting data, intelligence, and products"><div className="lab-grid-lines" /><div className="lab-visual-code">SYSTEM / 001<br />STATUS: ACTIVE<br />X 34.221 / Y 08.019</div><div className="lab-orbit orbit-a" /><div className="lab-orbit orbit-b" /><div className="lab-core"><span>V</span><small>INTELLIGENCE</small></div><i className="lab-dot dot-a" /><i className="lab-dot dot-b" /><i className="lab-dot dot-c" /><div className="lab-visual-caption">DATA <span>→</span> MODEL <span>→</span> PRODUCT</div></div>
      </section>

      <section className="lab-intro section-pad"><p className="section-kicker">The lab</p><div className="lab-intro-grid"><h2>Build to <span>understand.</span><br />Explore to build better.</h2><div><p className="lead">We don&apos;t just use technology. We explore what can be built with it.</p><p>The Lab is a practical space for questions, prototypes, and technical experiments. Some become products. Some sharpen how we work. Every one starts with a real problem worth understanding.</p></div></div></section>

      <section className="lab-explorations section-pad"><div className="section-heading"><p className="section-kicker">What we&apos;re exploring</p><p>Ideas become clearer<br />when they are tested.</p></div><div className="exploration-layout"><div className="exploration-list" role="tablist" aria-label="Areas of exploration">{explorations.map((item, index) => <button key={item.number} className={`exploration-row ${active === index ? 'active' : ''}`} onClick={() => setActive(index)} role="tab" aria-selected={active === index}><span>{item.number}</span><strong>{item.title}</strong><ArrowUpRight size={17} /></button>)}</div><div className={`exploration-detail tone-${current.tone}`}><span className="detail-tag">{current.tag} / 0{active + 1}</span><div className="detail-visual"><div className="detail-lines" /><b>{active === 0 ? 'AI' : active === 1 ? 'ML' : active === 2 ? 'AUTO' : 'UI'}</b><span className="detail-pulse" /></div><h3>{current.title}</h3><p>{current.text}</p></div></div></section>

      <section className="lab-experiments section-pad" id="experiments"><div className="section-heading"><p className="section-kicker">Active experiments</p><p>Unfinished by design.<br />Honest about the stage.</p></div><div className="experiment-feature"><div className="experiment-feature-visual"><span>01 / SIGNAL</span><div className="signal-field"><i /><i /><i /><i /><i /></div><strong>STRUCTURE<br /><em>→</em> EXPERIENCE</strong></div><div className="experiment-feature-copy"><span className="section-kicker">Featured experiment</span><h2>Intelligent<br /><em>web generation.</em></h2><p>Exploring how AI can transform structured user requirements into functional digital experiences, without losing the thinking behind the work.</p><dl><div><dt>STAGE</dt><dd>Research</dd></div><div><dt>FOCUS</dt><dd>AI systems / Products</dd></div></dl></div></div><div className="experiment-list">{experiments.slice(1).map((item) => <article className="experiment-row" key={item.number}><span>{item.number}</span><div><small>{item.category}</small><h3>{item.title}</h3><p>{item.description}</p></div><div className="experiment-status">{item.status}<ArrowUpRight size={16} /></div></article>)}</div></section>

      <section className="lab-pipeline section-pad"><div className="section-heading"><p className="section-kicker">The AI development pipeline</p><p>Curiosity is useful.<br />Evidence is better.</p></div><div className="pipeline"><div className="pipeline-line" />{pipeline.map(([number, title, caption]) => <div className="pipeline-step" key={number}><span>{number}</span><i /><h3>{title}</h3><p>{caption}</p></div>)}</div></section>

      <section className="lab-building section-pad"><div><p className="section-kicker">Research → product</p><h2>Not every idea<br /><em>needs to ship.</em></h2></div><div className="building-flow">{['Question', 'Research', 'Experiment', 'Prototype', 'Product'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 4 && <ArrowUpRight size={15} />}</div>)}</div><p className="building-note">The Lab gives ideas room to become clear. When an experiment proves useful, we give it the engineering discipline to become real.</p></section>

      <section className="lab-context section-pad"><div className="context-copy"><p className="section-kicker">A perspective from Africa</p><h2>Local context.<br /><span>Global possibility.</span></h2><p>Technology built from Africa can solve local problems while being designed for a global future. We are interested in the practical details: access, language, infrastructure, and the people who use what we build.</p></div><div className="context-visual"><div className="context-ring ring-one" /><div className="context-ring ring-two" /><div className="context-ring ring-three" /><i /><i /><i /><span>BUILD / WHERE<br />THE PROBLEM IS</span></div></section>

      <section className="lab-philosophy section-pad"><p className="section-kicker">Lab philosophy</p><div className="philosophy-list">{['Build to understand.', 'Experiment before assuming.', 'Measure what matters.', 'Turn research into useful systems.'].map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3><Check size={18} /></div>)}</div></section>

      <section className="lab-cta section-pad"><p className="eyebrow"><span className="eyebrow-dot" /> Start with a question</p><h2>Have an idea<br /><em>worth exploring?</em></h2><p>Let&apos;s build the experiment.</p><div className="hero-actions"><a className="button button-primary" href="/contact">Start a project <ArrowUpRight size={16} /></a><a className="text-link" href="/contact">Contact Vexel <ArrowUpRight size={16} /></a></div></section>

      <section className="signature section-pad"><div className="signature-word">VEXEL</div><div className="signature-bottom"><span>Idea → Experiment → Product</span><span>Vexel Lab / 001</span></div></section><footer className="footer section-pad"><div className="footer-top"><a className="brand" href="/"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a><p>Technology, built<br />with intent.</p></div><div className="footer-bottom"><span>© 2025 Vexel Labs</span><div className="footer-links"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/contact">Contact</a></div></div></footer>
    </main>
  )
}
