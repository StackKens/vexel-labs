'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Menu, MoveUpRight, Plus, X } from 'lucide-react'

const capabilities = [
  { number: '01', title: 'Software engineering', text: 'Reliable digital foundations for ambitious products and complex operations.' },
  { number: '02', title: 'Web & mobile products', text: 'Considered experiences that turn useful ideas into products people return to.' },
  { number: '03', title: 'Business systems', text: 'Connected tools and workflows that make growing organisations work better.' },
  { number: '04', title: 'AI & automation', text: 'Practical intelligence that removes friction and creates room for better work.' },
]

const steps = [
  ['01', 'Understand', 'The problem, the people, and the opportunity.'],
  ['02', 'Design', 'A clear product experience and technical direction.'],
  ['03', 'Engineer', 'The system underneath, built for the real world.'],
  ['04', 'Launch', 'A tested, resilient product in the hands of users.'],
  ['05', 'Evolve', 'The next useful version, shaped by what we learn.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCapability, setActiveCapability] = useState(0)

  return (
    <main className="site-shell">
      <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="#top" aria-label="Vexel Labs home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>Vexel<span className="brand-muted"> Labs</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
<a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="/services" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="/insights" onClick={() => setMenuOpen(false)}>Insights</a><a href="/lab" onClick={() => setMenuOpen(false)}>Lab</a><a href="/careers" onClick={() => setMenuOpen(false)}>Careers</a><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a><a href="/contact" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight size={15} /></a></nav>}
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Technology, built with intent</p>
          <h1>We build the<br /><em>systems</em> behind<br />better ideas.</h1>
          <p className="hero-description">Vexel Labs is a technology company building thoughtful digital products, intelligent systems, and the infrastructure that makes progress possible.</p>
          <div className="hero-actions"><a className="button button-primary" href="/contact">Start a project <ArrowUpRight size={16} /></a><a className="text-link" href="#work">Explore what we build <ArrowDownRight size={16} /></a></div>
        </div>
        <div className="hero-visual" aria-label="Abstract connected system visualization" role="img">
          <div className="visual-label visual-label-top">SYSTEM / 001 <span>LIVE</span></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="node node-core"><span>V</span></div><div className="node node-a" /><div className="node node-b" /><div className="node node-c" /><div className="node node-d" />
          <svg className="connection-lines" viewBox="0 0 600 520" fill="none" aria-hidden="true"><path d="M300 260L104 112M300 260L495 116M300 260L507 386M300 260L120 410M300 260L300 22" /><path d="M104 112L495 116M120 410L507 386" /></svg>
          <div className="visual-caption">Ideas into<br /><strong>infrastructure.</strong></div><div className="visual-coordinates">6° 31′ 12″ S<br />3° 22′ 12″ E</div><div className="visual-line" />
        </div>
      </section>

      <section className="statement section-pad" id="about"><div className="section-kicker">/ 01 — THE VEXEL POINT OF VIEW</div><div className="statement-grid"><h2>Technology should<br /><span>move things forward.</span></h2><div><p className="lead">We believe the best technology is quietly powerful. It makes a difficult thing feel possible, a complex thing feel clear, and a good idea feel real.</p><p>From first sketch to final system, we bring product thinking and engineering discipline to the work. No theatre. Just useful technology, made with care.</p></div></div></section>

      <section className="capabilities section-pad" id="capabilities"><div className="section-heading"><div className="section-kicker">/ 02 — WHAT WE DO</div><p>One team, from first principles<br />to finished product.</p></div><div className="capability-layout"><div className="capability-feature"><span className="large-number">{capabilities[activeCapability].number}</span><h3>{capabilities[activeCapability].title}</h3><p>{capabilities[activeCapability].text}</p><span className="feature-rule" /></div><div className="capability-list">{capabilities.map((item, index) => <button className={`capability-item ${index === activeCapability ? 'active' : ''}`} key={item.number} onMouseEnter={() => setActiveCapability(index)} onFocus={() => setActiveCapability(index)}><span>{item.number}</span><strong>{item.title}</strong><Plus size={18} /></button>)}</div></div></section>

      <section className="architecture section-pad"><div className="architecture-top"><div className="section-kicker">/ 03 — HOW WE BUILD</div><span>Architecture / Product / People</span></div><div className="architecture-stage"><div className="stage-label">A SYSTEM IS<br />MORE THAN ITS PARTS.</div><div className="stack stack-back">IDEA <span>01</span></div><div className="stack stack-mid">ARCHITECTURE <span>02</span></div><div className="stack stack-front">PRODUCT <span>03</span></div><div className="stage-connector"><span /><span /><span /></div><div className="stage-bottom">We connect the dots between what needs to happen<br />and what it takes to make it happen.</div></div></section>

      <section className="work section-pad" id="work"><div className="section-heading"><div className="section-kicker">/ 04 — SELECTED DIRECTIONS</div><p>We make digital things<br />feel inevitable.</p></div><div className="work-grid"><article className="work-card work-card-dark"><div className="work-art art-grid"><div className="art-window"><div className="window-top"><span /> <span /> <span /></div><div className="window-lines"><i /><i /><i /><i /></div></div></div><div className="work-meta"><div><span className="work-index">A / 01</span><h3>Digital products</h3></div><span className="work-arrow"><MoveUpRight size={17} /></span></div></article><article className="work-card work-card-light"><div className="work-art art-signal"><div className="signal-wave" /><div className="signal-wave second" /><span className="signal-label">SIGNAL / 02</span></div><div className="work-meta"><div><span className="work-index">B / 02</span><h3>Intelligent systems</h3></div><span className="work-arrow"><MoveUpRight size={17} /></span></div></article></div><p className="work-note">A growing body of work, built in close collaboration with people solving meaningful problems.</p></section>

      <section className="approach section-pad"><div className="section-kicker">/ 05 — THE APPROACH</div><div className="approach-intro"><h2>Clear thinking.<br /><span>Careful making.</span></h2><p>Good work is a sequence of useful decisions. We keep the process close, transparent, and grounded in what the product needs.</p></div><div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><div className="step-marker"><span /></div><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="origin section-pad"><div className="origin-copy"><div className="section-kicker">/ 06 — ORIGIN & OUTLOOK</div><h2>Built in Africa.<br /><span>Designed for the world.</span></h2><p>We are building from a place with a distinct perspective — close to the problems, open to the possibilities, and connected to everywhere the future is being shaped.</p></div><div className="origin-map" aria-label="Abstract network map showing global connections" role="img"><div className="map-ring ring-one" /><div className="map-ring ring-two" /><div className="map-ring ring-three" /><div className="map-line line-one" /><div className="map-line line-two" /><div className="map-line line-three" /><div className="map-dot map-dot-center" /><div className="map-dot map-dot-one" /><div className="map-dot map-dot-two" /><div className="map-dot map-dot-three" /><span className="map-label">LAGOS / 06.5° S</span></div></section>

      <section className="principles section-pad"><div className="section-kicker">/ 07 — WHY VEXEL</div><div className="principle-list"><div><span>01</span><h3>Engineering with purpose</h3><p>Technology is only valuable when it improves the thing it touches.</p></div><div><span>02</span><h3>Built for the real world</h3><p>We design for the constraints, context, and people that make a product real.</p></div><div><span>03</span><h3>Long-term thinking</h3><p>We make decisions that leave room for the next version.</p></div></div></section>

      <section className="contact section-pad" id="contact"><div className="contact-inner"><p className="eyebrow"><span className="eyebrow-dot" /> Now building</p><h2>Have an idea<br />worth <em>building?</em></h2><p className="contact-text">Tell us what you are working on. We will bring the right questions, the right people, and a clear place to start.</p><a className="button button-light" href="mailto:hello@vexellabs.com">Start a conversation <ArrowUpRight size={16} /></a></div></section>

      <section className="signature section-pad"><div className="signature-word">VEXEL</div><div className="signature-bottom"><span>Technology. Built with intent.</span><span>© {new Date().getFullYear()} Vexel Labs</span></div></section>

      <footer className="footer section-pad"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a><p>Digital products and systems<br />for people moving forward.</p></div><div className="footer-bottom"><div className="footer-links"><a href="/about">About</a><a href="/services">Capabilities</a><a href="#work">Work</a><a href="/insights">Insights</a><a href="/contact">Contact</a></div><a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} /></a></div></footer>
    </main>
  )
}
