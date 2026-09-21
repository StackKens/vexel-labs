'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'

const services = [
  {
    number: '01',
    name: 'Software Engineering',
    description: 'Custom software tailored to specific business requirements.',
    details: 'We engineer reliable digital foundations that scale with your growth.',
    capabilities: ['Custom web applications', 'Management systems', 'Internal business tools', 'APIs & backend systems', 'Database architecture', 'System integrations'],
    technologies: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    number: '02',
    name: 'Web & Digital Products',
    description: 'Modern digital products that people return to.',
    details: 'From web applications to SaaS platforms, we build experiences that solve real problems.',
    capabilities: ['Web applications', 'Dashboards & analytics', 'Customer portals', 'Digital marketplaces', 'SaaS products', 'Progressive web apps'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    number: '03',
    name: 'Mobile Applications',
    description: 'Mobile experiences focused on usability and performance.',
    details: 'We create native and cross-platform applications that work reliably in the real world.',
    capabilities: ['Native iOS apps', 'Android applications', 'Cross-platform solutions', 'Business apps', 'Marketplace apps', 'Productivity tools'],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
  },
  {
    number: '04',
    name: 'Business & Enterprise Systems',
    description: 'Systems that help organizations operate more effectively.',
    details: 'We build operational infrastructure that people use to run their businesses.',
    capabilities: ['Management systems', 'Fleet management', 'Inventory systems', 'Workflow automation', 'Administrative platforms', 'Operations dashboards'],
    technologies: ['Next.js', 'PostgreSQL', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    number: '05',
    name: 'Artificial Intelligence',
    description: 'Intelligent systems that automate and enhance.',
    details: 'We build AI-powered applications that create real value through automation and insight.',
    capabilities: ['AI-powered applications', 'Machine learning systems', 'Intelligent automation', 'Data-driven tools', 'AI assistants', 'Recommendation systems'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain'],
  },
  {
    number: '06',
    name: 'Automation & Workflows',
    description: 'Technology that removes friction from repetitive work.',
    details: 'We automate manual processes and connect systems to improve efficiency.',
    capabilities: ['Workflow automation', 'Process automation', 'Data processing', 'Document workflows', 'System integrations', 'Scheduled tasks'],
    technologies: ['Node.js', 'Zapier', 'Make.com', 'Python', 'AWS Lambda'],
  },
  {
    number: '07',
    name: 'Cloud & Infrastructure',
    description: 'Deployment, hosting, and infrastructure for scale.',
    details: 'We build systems that are reliable, secure, and ready to grow.',
    capabilities: ['Cloud deployment', 'API architecture', 'Database design', 'Scalability planning', 'Infrastructure automation', 'System monitoring'],
    technologies: ['Vercel', 'AWS', 'PostgreSQL', 'Redis', 'Docker'],
  },
]

const capabilities = [
  { label: 'Software Engineering', category: 'foundation' },
  { label: 'Web & Digital Products', category: 'digital' },
  { label: 'Mobile Applications', category: 'digital' },
  { label: 'Business & Enterprise Systems', category: 'enterprise' },
  { label: 'Artificial Intelligence', category: 'intelligence' },
  { label: 'Automation & Workflows', category: 'automation' },
  { label: 'Cloud & Infrastructure', category: 'infrastructure' },
]

const processSteps = [
  ['01', 'Discovery', 'We understand the problem, the people, and the opportunity.'],
  ['02', 'Planning', 'We define the solution and technical direction.'],
  ['03', 'Design', 'We create the product experience and user interface.'],
  ['04', 'Development', 'We engineer the system underneath.'],
  ['05', 'Testing', 'We validate the product thoroughly.'],
  ['06', 'Deployment', 'We launch it into the world.'],
  ['07', 'Support', 'We continue improving it over time.'],
]

const clientTypes = [
  { label: 'Startups', description: 'Turn ideas into working products.' },
  { label: 'Businesses', description: 'Build systems that improve operations.' },
  { label: 'Organizations', description: 'Digitize processes and workflows.' },
  { label: 'Institutions', description: 'Create technology for real-world impact.' },
  { label: 'Individuals', description: 'Turn useful ideas into digital products.' },
]

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)

  return (
    <main className="services-shell">
      <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="/" aria-label="Vexel Labs home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>Vexel<span className="brand-muted"> Labs</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/lab">Lab</a><a href="/careers">Careers</a><a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/about" onClick={() => setMenuOpen(false)}>About</a><a href="/services" onClick={() => setMenuOpen(false)}>Services</a><a href="/work" onClick={() => setMenuOpen(false)}>Work</a><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a><a href="/contact" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight size={15} /></a></nav>}
      </header>

      <section className="services-hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> What we do</p>
          <h1>Technology built<br />around <em>real problems.</em></h1>
          <p className="hero-description">Vexel Labs designs and engineers software, digital products, AI systems, and the technology infrastructure that turns ambitious ideas into working solutions.</p>
          <div className="hero-actions"><a className="button button-primary" href="#process">Start a project <ArrowUpRight size={16} /></a><a className="text-link" href="#explorer">Explore capabilities <ArrowDownRight size={16} /></a></div>
        </div>
        <div className="services-visual" aria-label="Abstract technology ecosystem visualization" role="img">
          <div className="visual-label">SYSTEMS / 001</div>
          <div className="ecosystem-nodes">
            <div className="node-ring ring-one" />
            <div className="node-ring ring-two" />
            <div className="eco-core">TECH</div>
            <div className="eco-item item-one"><span>Software</span></div>
            <div className="eco-item item-two"><span>Products</span></div>
            <div className="eco-item item-three"><span>AI</span></div>
            <div className="eco-item item-four"><span>Mobile</span></div>
            <div className="eco-item item-five"><span>Cloud</span></div>
          </div>
        </div>
      </section>

      <section className="capabilities-overview section-pad">
        <div className="section-kicker">/ 01 — Capabilities</div>
        <h2>One team, complete capabilities</h2>
        <p className="overview-intro">From idea to infrastructure, we bring every discipline required to build technology that works.</p>
        <div className="capabilities-grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="capability-badge">
              <span className="badge-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{cap.label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="service-explorer section-pad" id="explorer">
        <div className="section-kicker">/ 02 — Service Explorer</div>
        <h2>What we build, how we build it</h2>
        <div className="explorer-container">
          <div className="explorer-list">
            {services.map((service, index) => (
              <button
                key={service.number}
                className={`service-item ${index === activeService ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
              >
                <span className="service-number">{service.number}</span>
                <div className="service-label">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="explorer-detail">
            <div className="detail-content">
              <h3>{services[activeService].name}</h3>
              <p className="detail-description">{services[activeService].details}</p>
              
              <div className="detail-section">
                <h4>What we build</h4>
                <ul className="capability-list">
                  {services[activeService].capabilities.map((cap, i) => (
                    <li key={i}>{cap}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {services[activeService].technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="software-engineering section-pad">
        <div className="section-kicker">/ 03 — Software Engineering</div>
        <div className="engineering-content">
          <h2>Engineering custom<br />solutions from the ground up.</h2>
          <p>Every organization has different requirements, constraints, and goals. We engineer software tailored to your specific problem, not adapted from a template.</p>
          <div className="engineering-flow">
            <div className="flow-step">
              <span>Problem</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span>Architecture</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span>Code</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span>System</span>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-stack section-pad">
        <div className="section-kicker">/ 04 — Technology Ecosystem</div>
        <h2>The tools we work with</h2>
        <div className="stack-grid">
          <div className="stack-category">
            <h4>Frontend</h4>
            <div className="tech-list">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          <div className="stack-category">
            <h4>Backend</h4>
            <div className="tech-list">
              <span>Node.js</span>
              <span>Python</span>
              <span>TypeScript</span>
              <span>Express</span>
            </div>
          </div>
          <div className="stack-category">
            <h4>Data & AI</h4>
            <div className="tech-list">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Python</span>
              <span>TensorFlow</span>
            </div>
          </div>
          <div className="stack-category">
            <h4>Infrastructure</h4>
            <div className="tech-list">
              <span>Vercel</span>
              <span>AWS</span>
              <span>Docker</span>
              <span>Redis</span>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-flow section-pad">
        <div className="section-kicker">/ 05 — From Problem to Product</div>
        <h2>How we transform ideas<br />into technology.</h2>
        <div className="flow-grid">
          <div className="flow-node">
            <span className="node-label">01</span>
            <h3>Problem</h3>
            <p>Understand the real problem.</p>
          </div>
          <div className="flow-node">
            <span className="node-label">02</span>
            <h3>Strategy</h3>
            <p>Determine what should be built.</p>
          </div>
          <div className="flow-node">
            <span className="node-label">03</span>
            <h3>Experience</h3>
            <p>Design the user experience.</p>
          </div>
          <div className="flow-node">
            <span className="node-label">04</span>
            <h3>Engineering</h3>
            <p>Build the technology.</p>
          </div>
          <div className="flow-node">
            <span className="node-label">05</span>
            <h3>Launch</h3>
            <p>Deploy the solution.</p>
          </div>
          <div className="flow-node">
            <span className="node-label">06</span>
            <h3>Evolution</h3>
            <p>Improve over time.</p>
          </div>
        </div>
      </section>

      <section className="custom-solutions section-pad">
        <div className="solutions-inner">
          <h2>Your problem isn&apos;t<br />a template.</h2>
          <p>Every organization has different users, processes, constraints, and goals. We don&apos;t force every client into the same mold. We build technology around the actual problem.</p>
        </div>
      </section>

      <section className="client-types section-pad">
        <div className="section-kicker">/ 06 — Who we build for</div>
        <h2>We work with anyone<br />building something meaningful.</h2>
        <div className="types-grid">
          {clientTypes.map((type, index) => (
            <div key={index} className="type-card">
              <span className="type-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{type.label}</h3>
              <p>{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-process section-pad" id="process">
        <div className="section-kicker">/ 07 — Service Process</div>
        <h2>What happens after<br />you reach out.</h2>
        <div className="process-timeline">
          {processSteps.map(([number, title, text]) => (
            <div key={number} className="process-step">
              <div className="step-head">
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-cta section-pad">
        <div className="cta-inner">
          <h2>Have a problem<br />worth solving?</h2>
          <p>Tell us what you&apos;re trying to build, improve, or automate. We&apos;ll bring clear thinking and the right questions.</p>
          <a className="button button-primary" href="mailto:hello@vexellabs.com">Start a project <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="signature section-pad">
        <div className="signature-word">VEXEL</div>
        <div className="signature-bottom">
          <span>Technology. Built with intent.</span>
          <span>© {new Date().getFullYear()} Vexel Labs</span>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-top">
          <a className="brand" href="/">
            <span className="brand-mark"><span /><span /><span /></span>
            <span>Vexel<span className="brand-muted"> Labs</span></span>
          </a>
          <p>Digital products and systems<br />for people moving forward.</p>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/#work">Work</a>
            <a href="/#contact">Contact</a>
          </div>
          <a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </main>
  )
}
