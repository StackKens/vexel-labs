'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Menu, X } from 'lucide-react'

const inquiryTypes = ['Website / Web Application', 'Mobile Application', 'Business System', 'AI / Machine Learning', 'Automation', 'Digital Product', 'Other']
const timelines = ['As soon as possible', 'Within 1 month', '1–3 months', '3–6 months', 'Flexible']

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    if (!name || !email || !message) {
      setError(!message ? "Tell us a little about what you're trying to build." : 'Please complete the required fields.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <main className="contact-page site-shell">
      <header className={`site-nav contact-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="/" aria-label="Vexel Labs home"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/careers">Careers</a><a href="/contact">Contact</a></nav>
        <a className="nav-cta" href="#inquiry">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/about" onClick={() => setMenuOpen(false)}>About</a><a href="/services" onClick={() => setMenuOpen(false)}>Services</a><a href="/work" onClick={() => setMenuOpen(false)}>Work</a><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
      </header>

      <section className="contact-hero section-pad">
        <div><p className="eyebrow"><span className="eyebrow-dot" /> Get in touch</p><h1>Let&apos;s build<br />something that <em>matters.</em></h1><p className="hero-description">Have a product, system, or problem in mind? Start with the context. We&apos;ll help you find the right way forward.</p><a className="text-link contact-hero-link" href="#inquiry">Tell us about it <ArrowDownRight size={16} /></a></div>
        <div className="connection-visual" aria-label="A signal connecting an idea to a product" role="img"><span className="connection-label">CONNECTION / 001</span><div className="signal-track"><i /><i /><i /></div><div className="signal-core">V</div><span className="connection-start">YOUR IDEA</span><span className="connection-end">VEXEL LABS</span></div>
      </section>

      <section className="inquiry section-pad" id="inquiry">
        <div className="inquiry-intro"><div className="section-kicker">/ 01 — START HERE</div><h2>Give us the<br /><span>first signal.</span></h2><p>You don&apos;t need to know exactly what technology you need. Tell us the problem you&apos;re trying to solve and we&apos;ll think through the solution with you.</p></div>
        <div className="inquiry-form-wrap">
          {sent ? <div className="form-success"><span className="success-mark"><Check size={24} /></span><p className="section-kicker">MESSAGE RECEIVED</p><h3>We&apos;ve got it.</h3><p>Your inquiry is ready for a conversation. We&apos;ll be in touch soon.</p><div className="success-actions"><a className="button button-primary" href="/">Back to home <ArrowUpRight size={16} /></a><a className="text-link" href="/work">Explore our work <ArrowDownRight size={16} /></a></div></div> : <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <fieldset><legend>ABOUT YOU</legend><div className="form-grid"><label>Name <input name="name" required autoComplete="name" /></label><label>Email <input name="email" type="email" required autoComplete="email" /></label><label>Phone / WhatsApp <input name="phone" type="tel" autoComplete="tel" /></label><label>Company / Organization <input name="company" autoComplete="organization" /></label></div></fieldset>
            <fieldset><legend>YOUR PROJECT</legend><label>What are you looking to build? <select name="type" defaultValue=""><option value="" disabled>Select a direction</option>{inquiryTypes.map(type => <option key={type}>{type}</option>)}</select></label><label>Tell us a little about it <textarea name="message" required rows={6} placeholder="What are you trying to make, improve, or automate?" /></label></fieldset>
            <fieldset><legend>PROJECT CONTEXT <span>OPTIONAL</span></legend><div className="form-grid"><label>Budget range <select name="budget" defaultValue=""><option value="">Not sure yet</option><option>Under UGX 1M</option><option>UGX 1M – 5M</option><option>UGX 5M – 10M</option><option>UGX 10M+</option><option>Prefer to discuss</option></select></label><label>Timeline <select name="timeline" defaultValue=""><option value="">Choose a timeline</option>{timelines.map(item => <option key={item}>{item}</option>)}</select></label></div></fieldset>
            {error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary submit-button" type="submit">Send project inquiry <ArrowUpRight size={16} /></button>
          </form>}
        </div>
      </section>

      <section className="contact-details section-pad"><div className="section-kicker">/ 02 — DIRECT CHANNELS</div><div className="details-grid"><div><span className="detail-label">EMAIL</span><a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} /></a></div><div><span className="detail-label">CONVERSATION</span><p>Prefer a direct conversation? Email is the best place to start.</p></div><div className="detail-signal"><span>OPEN TO</span><strong>Good problems<br />and useful ideas.</strong></div></div></section>

      <section className="contact-process section-pad"><div className="section-kicker">/ 03 — WHAT HAPPENS NEXT</div><div className="process-list">{[['01','You reach out','Tell us what you’re trying to build.'],['02','We review','We understand the problem and the context.'],['03','We talk','We discuss scope, direction, and possible approaches.'],['04','We build','If it’s a good fit, we move into planning and making.']].map(([number,title,text]) => <div className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="contact-cta section-pad"><div className="section-kicker">/ 04 — THE FIRST STEP</div><h2>Have a problem<br /><em>worth solving?</em></h2><a className="button button-light" href="#inquiry">Start a project <ArrowUpRight size={16} /></a></section>
      <footer className="footer section-pad"><div className="footer-top"><a className="brand" href="/"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a><p>Digital products and systems<br />for people moving forward.</p></div><div className="footer-bottom"><div className="footer-links"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/careers">Careers</a><a href="/contact">Contact</a></div><a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} /></a></div></footer>
    </main>
  )
}
