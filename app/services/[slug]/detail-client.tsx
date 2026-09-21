'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const serviceData: Record<string, {
  title: string
  shortTitle: string
  description: string
  intro: string
  problems: string[]
  builds: string[]
  technologies: string[]
  audience: { label: string; text: string }[]
  faqs: { q: string; a: string }[]
  flow: string[]
}> = {
  'software-engineering': {
    title: 'Software Engineering', shortTitle: 'Software',
    description: 'Custom systems engineered around the way your organization actually works.',
    intro: 'Technology should solve a problem, not create another one. We design and engineer the dependable software foundations behind useful digital products and operations.',
    problems: ['Disconnected tools', 'Manual workflows', 'Hard-to-reach data', 'Systems that cannot grow'],
    builds: ['Custom web applications', 'Internal business tools', 'APIs and backend systems', 'Databases and integrations', 'Management platforms'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'],
    audience: [{ label: 'Startups', text: 'Build the first dependable version of a product.' }, { label: 'Businesses', text: 'Replace friction with systems that fit the operation.' }, { label: 'Organizations', text: 'Turn a complex process into clear software.' }],
    faqs: [{ q: 'Can you work with an existing system?', a: 'Yes. We can extend, integrate, or rethink existing software based on the problem at hand.' }, { q: 'Do I need to know the technology?', a: 'No. Start with the problem. We will help determine the right technical approach.' }, { q: 'Can you support the system after launch?', a: 'We can continue improving the product as your needs evolve.' }],
    flow: ['Requirements', 'Architecture', 'Engineering', 'Product'],
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence', shortTitle: 'AI',
    description: 'Practical intelligence systems that turn information into better decisions and useful action.',
    intro: 'AI is most valuable when it is connected to a real workflow. We build focused AI-powered applications, assistants, and data-driven tools that make complex work more useful.',
    problems: ['Manual analysis', 'Information overload', 'Repetitive decisions', 'Data that is not being used'],
    builds: ['AI-powered applications', 'Intelligent assistants', 'Data-driven tools', 'Recommendation systems', 'Intelligent automation'],
    technologies: ['Python', 'Machine Learning', 'Data', 'APIs', 'Natural Language Systems'],
    audience: [{ label: 'Businesses', text: 'Make information easier to understand and act on.' }, { label: 'Organizations', text: 'Automate the work that slows teams down.' }, { label: 'Product teams', text: 'Put useful intelligence inside an existing product.' }],
    faqs: [{ q: 'Do you build custom AI features?', a: 'Yes. The right approach depends on your data, workflow, and intended outcome.' }, { q: 'Do I need a large dataset?', a: 'Not always. We start by understanding what information exists and what the system needs to do.' }, { q: 'Can AI work with our existing tools?', a: 'Often, yes. Integrations are considered as part of the product architecture.' }],
    flow: ['Data', 'Model', 'Intelligence', 'Application'],
  },
  'mobile-applications': {
    title: 'Mobile Applications', shortTitle: 'Mobile',
    description: 'Mobile experiences designed for usability, performance, and real-world functionality.',
    intro: 'The best mobile products feel simple because the complexity has been carefully engineered underneath. We create focused applications people can rely on wherever they are.',
    problems: ['Poor mobile access', 'Fragmented user journeys', 'Slow manual tasks', 'Disconnected field work'],
    builds: ['Business applications', 'Education apps', 'Marketplace apps', 'Productivity tools', 'Custom mobile systems'],
    technologies: ['React Native', 'TypeScript', 'APIs', 'Databases', 'Mobile UX'],
    audience: [{ label: 'Startups', text: 'Turn a useful idea into a product people can carry.' }, { label: 'Businesses', text: 'Give teams and customers a better mobile experience.' }, { label: 'Institutions', text: 'Create accessible tools for real-world users.' }],
    faqs: [{ q: 'Can you build for both iOS and Android?', a: 'We choose the approach that best fits the product, audience, and constraints.' }, { q: 'Can a mobile app connect to our existing system?', a: 'Yes. Mobile products are often designed as part of a wider system.' }, { q: 'Do you help with the product experience?', a: 'Yes. We shape the experience before engineering the interface.' }],
    flow: ['Experience', 'Interface', 'Application', 'Deployment'],
  },
}

const fallback = serviceData['software-engineering']

function SystemVisual({ flow }: { flow: string[] }) {
  return <div className="detail-system" aria-label={`${flow.join(' to ')} system visualization`} role="img">
    <span className="system-caption">SYSTEM / {flow[0].toUpperCase()}</span>
    <div className="system-grid" />
    <div className="system-flow">{flow.map((item, index) => <div className="system-node-wrap" key={item}><div className={`system-node ${index === flow.length - 1 ? 'final' : ''}`}><span>{String(index + 1).padStart(2, '0')}</span>{item}</div>{index < flow.length - 1 && <i className="system-connector" />}</div>)}</div>
    <span className="system-footer">VEXEL / ENGINEERING CAPABILITY</span>
  </div>
}

export default function ServiceDetailPage({ serviceKey }: { serviceKey: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const service = serviceData[serviceKey] ?? fallback

  return <main className="detail-page">
    <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
      <a className="brand" href="/" aria-label="Vexel Labs home"><span className="brand-mark"><span /><span /><span /></span><span>Vexel<span className="brand-muted"> Labs</span></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a></nav>
      <a className="nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/contact">Contact</a></nav>}
    </header>

    <section className="detail-hero section-pad"><div><p className="eyebrow"><span className="eyebrow-dot" /> Vexel Labs / Services</p><h1>{service.title}</h1><p className="detail-lede">{service.description}</p><div className="hero-actions"><a className="button button-primary" href="/contact">Start a project <ArrowUpRight size={16} /></a><a className="text-link" href="/work">View our work <ArrowDownRight size={16} /></a></div></div><SystemVisual flow={service.flow} /></section>

    <section className="detail-intro section-pad"><div className="section-kicker">/ 01 — Why it matters</div><div className="detail-intro-grid"><h2>Built around <em>the actual problem.</em></h2><p>{service.intro}</p></div></section>

    <section className="detail-problems section-pad"><div className="section-kicker">/ 02 — Problems we solve</div><div className="detail-section-head"><h2>Make the difficult<br /><em>workable.</em></h2><p>Good technology creates clarity where there was friction. These are the kinds of problems this capability can help address.</p></div><div className="problem-list">{service.problems.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={17} /></div>)}</div></section>

    <section className="detail-builds section-pad"><div className="section-kicker">/ 03 — What we can build</div><div className="builds-layout"><h2>From capability<br />to <em>useful product.</em></h2><div className="build-list">{service.builds.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="detail-feature section-pad"><div className="detail-feature-copy"><div className="section-kicker">/ 04 — The Vexel approach</div><h2>Technology that makes <em>work feel clearer.</em></h2><p>We combine product thinking with engineering discipline. The result is a system that is understandable, usable, and made for the people who depend on it.</p></div><SystemVisual flow={service.flow} /></section>

    <section className="detail-stack section-pad"><div className="section-kicker">/ 05 — Technology</div><div className="stack-intro"><h2>The right tools<br /><em>for the job.</em></h2><p>Technology is a means to an outcome. We select the tools that support the product, its users, and the way it needs to grow.</p></div><div className="detail-tech-list">{service.technologies.map((tech, i) => <div key={tech}><span>0{i + 1}</span><strong>{tech}</strong><small>{i % 2 === 0 ? 'Foundation' : 'Capability'}</small></div>)}</div></section>

    <section className="detail-approach section-pad"><div className="section-kicker">/ 06 — How we work</div><h2>Understand. Build.<br /><em>Improve.</em></h2><div className="detail-steps">{['Understand', 'Architect', 'Design', 'Build', 'Test', 'Launch', 'Improve'].map((step, i) => <div key={step}><span>0{i + 1}</span><strong>{step}</strong></div>)}</div></section>

    <section className="detail-audience section-pad"><div className="section-kicker">/ 07 — Who this is for</div><h2>Useful technology<br /><em>for real people.</em></h2><div className="audience-list">{service.audience.map((item, i) => <div key={item.label}><span>0{i + 1}</span><strong>{item.label}</strong><p>{item.text}</p></div>)}</div></section>

    <section className="detail-faq section-pad"><div className="section-kicker">/ 08 — Common questions</div><div className="faq-layout"><h2>Start with a<br /><em>conversation.</em></h2><div className="faq-list">{service.faqs.map((faq, i) => <div className="faq-item" key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{faq.a}</p>}</div>)}</div></div></section>

    <section className="detail-cta section-pad"><p className="eyebrow"><span className="eyebrow-dot" /> Ready when you are</p><h2>Let's build the<br /><em>right solution.</em></h2><p>Tell us what you're trying to solve, and let's explore what technology can do.</p><a className="button button-primary" href="/contact">Start a project <ArrowUpRight size={16} /></a></section>
    <footer className="footer section-pad"><div className="footer-top"><p>Vexel Labs<br />Technology for what&apos;s next.</p><a className="button button-light" href="/contact">Get in touch <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 Vexel Labs</span><div className="footer-links"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a></div><a href="#top">Back to top ↑</a></div></footer>
  </main>
}

export function generateStaticParams() { return Object.keys(serviceData).map((slug) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = serviceData[slug] ?? fallback; return { title: `${service.title} — Vexel Labs`, description: service.description, openGraph: { title: `${service.title} — Vexel Labs`, description: service.description } } }

export const dynamicParams = true
