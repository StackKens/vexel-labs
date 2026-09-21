'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, Plus, X } from 'lucide-react'

const principles = [
  ['01', 'Build with purpose', 'Technology should solve a meaningful problem.'],
  ['02', 'Think long term', 'Make decisions that leave room for the next version.'],
  ['03', 'Stay curious', 'Keep learning as the tools, people, and context change.'],
  ['04', 'Start here, think global', 'Build from Africa with standards that travel.'],
]

const process = [
  ['01', 'Understand', 'The problem, the people, and the opportunity.'],
  ['02', 'Think', 'The clearest path from intent to useful outcome.'],
  ['03', 'Design', 'An experience that makes the complex feel clear.'],
  ['04', 'Engineer', 'The resilient system underneath it all.'],
  ['05', 'Improve', 'The next useful version, shaped by what we learn.'],
]

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePrinciple, setActivePrinciple] = useState(0)

  return (
    <main className="about-shell">
      <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="/" aria-label="Vexel Labs home"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a></nav>
        <a className="nav-cta" href="/#contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/about" onClick={() => setMenuOpen(false)}>About</a><a href="/services" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="/#work" onClick={() => setMenuOpen(false)}>Work</a><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
      </header>

      <section className="about-hero section-pad"><div className="about-hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> About Vexel Labs</p><h1>Technology is more than what we build. <em>It&apos;s how we think.</em></h1><p>Vexel Labs is a technology company building thoughtful digital products, intelligent systems, and the infrastructure that makes ambitious ideas possible.</p><a className="text-link" href="#story">Read our point of view <ArrowDownRight size={16} /></a></div><div className="about-signal" aria-label="Abstract Vexel system signal" role="img"><span className="signal-core">V</span><span className="signal-orbit signal-orbit-a" /><span className="signal-orbit signal-orbit-b" /><span className="signal-ray ray-a" /><span className="signal-ray ray-b" /><span className="signal-ray ray-c" /><small>ABOUT / 001</small></div></section>

      <section className="about-story section-pad" id="story"><div className="section-kicker">/ 01 — OUR STORY</div><div className="about-story-grid"><h2>We are still early.<br /><span>That is the point.</span></h2><div className="about-copy"><p className="lead">Vexel exists to make useful technology feel closer, clearer, and more possible.</p><p>The details of our story are still being written. What is clear is the direction: start with real problems, ask better questions, and build systems that give people more room to move forward.</p><p>We are not interested in technology as theatre. We are interested in the quiet force of a well-made product.</p></div></div><div className="story-marker"><span>NOW</span><i /><p>Building the foundations<br />for what comes next.</p></div></section>

      <section className="about-mission"><div className="section-pad"><div className="section-kicker">/ 02 — OUR MISSION</div><h2>Build technology<br /><span>that makes ambitious ideas possible.</span></h2><p>We bring product thinking, design, and engineering together to turn meaningful problems into useful systems.</p></div></section>

      <section className="about-principles section-pad"><div className="section-kicker">/ 03 — OUR PRINCIPLES</div><div className="principles-layout"><div><p className="principles-intro">The way we work is part of what we make.</p><span className="principles-index">{principles[activePrinciple][0]} / 04</span></div><div className="principles-list">{principles.map(([number, title, text], index) => <button key={number} className={index === activePrinciple ? 'active' : ''} onMouseEnter={() => setActivePrinciple(index)} onFocus={() => setActivePrinciple(index)}><span>{number}</span><strong>{title}</strong><Plus size={17} /></button>)}</div></div><p className="principle-detail">{principles[activePrinciple][2]}</p></section>

      <section className="about-origin section-pad"><div className="origin-copy"><div className="section-kicker">/ 04 — AFRICAN ROOTS</div><h2>Built from Africa.<br /><span>Thinking beyond borders.</span></h2><p>We are building from a place with a distinct perspective — close to the problems, open to the possibilities, and connected to everywhere the future is being shaped.</p></div><div className="origin-grid" aria-label="Abstract network of African and global connections" role="img"><div className="origin-grid-lines" /><span className="origin-pulse pulse-center" /><span className="origin-pulse pulse-one" /><span className="origin-pulse pulse-two" /><span className="origin-pulse pulse-three" /><small>LAGOS / 06.5° S</small></div></section>

      <section className="about-technology section-pad"><div className="section-kicker">/ 05 — HOW WE THINK ABOUT TECHNOLOGY</div><div className="tech-heading"><h2>Problem <span>→</span> Product<br /><em>→ Impact</em></h2><p>Software, AI, data, and infrastructure are not the destination. They are tools for making the right change possible.</p></div><div className="tech-flow"><span>Problem</span><i /><span>Idea</span><i /><span>Design</span><i /><span>Engineering</span><i /><span>Impact</span></div></section>

      <section className="about-process section-pad"><div className="section-kicker">/ 06 — OUR APPROACH TO BUILDING</div><h2>Good work is a sequence<br /><span>of useful decisions.</span></h2><div className="about-steps">{process.map(([number, title, text]) => <div className="about-step" key={number}><span>{number}</span><i /><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="about-ecosystem section-pad"><div className="section-kicker">/ 07 — THE ECOSYSTEM</div><div className="ecosystem-heading"><h2>Many disciplines.<br /><span>One connected system.</span></h2><p>We work across the layers that turn an idea into something people can use.</p></div><div className="ecosystem-orbit"><div className="eco-core">VEXEL<br /><small>LABS</small></div>{['Product engineering', 'Artificial intelligence', 'Cloud & infrastructure', 'Data', 'Web & mobile'].map((item, index) => <div className={`eco-node eco-node-${index}`} key={item}>{item}</div>)}</div></section>

      <section className="about-future section-pad"><p className="eyebrow"><span className="eyebrow-dot" /> The road ahead</p><h2>We&apos;re building<br /><em>what comes next.</em></h2><p>Stronger products. Better systems. More ways for ambitious people and organisations to move forward. We are focused on the work in front of us, and the possibilities beyond it.</p></section>

      <section className="contact section-pad"><div className="contact-inner"><p className="eyebrow"><span className="eyebrow-dot" /> Now building</p><h2>Let&apos;s build<br />what&apos;s <em>next.</em></h2><p className="contact-text">Have a problem worth solving or an idea worth building? Let&apos;s talk.</p><a className="button button-light" href="mailto:hello@vexellabs.com">Start a conversation <ArrowUpRight size={16} /></a></div></section>
      <section className="signature section-pad"><div className="signature-word">VEXEL</div><div className="signature-bottom"><span>Technology. Built with intent.</span><span>© {new Date().getFullYear()} Vexel Labs</span></div></section>
      <footer className="footer section-pad"><div className="footer-top"><a className="brand" href="/"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a><p>Digital products and systems<br />for people moving forward.</p></div><div className="footer-bottom"><div className="footer-links"><a href="/about">About</a><a href="/services">Capabilities</a><a href="/#work">Work</a><a href="/#contact">Contact</a></div><a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} /></a></div></footer>
    </main>
  )
}
