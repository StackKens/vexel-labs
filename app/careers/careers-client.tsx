'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { careers, getAllJobs } from '@/lib/careers-data'

export default function CareersClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const jobs = getAllJobs()
  const departments = ['All', 'Engineering', 'AI / ML', 'Design', 'Product', 'Infrastructure', 'Business', 'Other']
  const filteredJobs = selectedDepartment === 'All' ? jobs : jobs.filter((job) => job.department === selectedDepartment)

  return (
    <main className="careers-shell">
      <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="/" aria-label="Vexel Labs home">
          <span className="brand-mark">
            <span />
            <span />
            <span />
          </span>
          <span>
            Vexel<span className="brand-muted"> Labs</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/work">Work</a>
          <a href="/insights">Insights</a>
          <a href="/lab">Lab</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/#contact">
          Start a project <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="/work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="/insights" onClick={() => setMenuOpen(false)}>
              Insights
            </a>
            <a href="/lab" onClick={() => setMenuOpen(false)}>
              Lab
            </a>
            <a href="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <a href="/#contact" onClick={() => setMenuOpen(false)}>
              Start a project <ArrowUpRight size={15} />
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="careers-hero section-pad">
        <div className="careers-hero-content">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> Careers
          </p>
          <h1>Build the future with Vexel.</h1>
          <p className="hero-description">
            Vexel is building software, AI systems, digital products, and technology infrastructure. We&apos;re looking for people who want to solve meaningful problems and grow alongside us.
          </p>
          <div className="hero-ctas">
            <a href="#roles" className="button button-primary">
              View Open Roles <ArrowDownRight size={16} />
            </a>
            <Link href="/about" className="button button-secondary">
              Meet Vexel <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="careers-signal" aria-label="Abstract Vexel system" role="img">
          <span className="signal-core">V</span>
          <span className="signal-orbit signal-orbit-a" />
          <span className="signal-orbit signal-orbit-b" />
          <span className="signal-ray ray-a" />
          <span className="signal-ray ray-b" />
          <span className="signal-ray ray-c" />
          <small>CAREERS / 001</small>
        </div>
      </section>

      {/* Why Vexel */}
      <section className="careers-why section-pad">
        <div className="section-kicker">/ 01 — WHY VEXEL</div>
        <h2>Work on what matters.</h2>
        <div className="principles-grid">
          {careers.principles.map((principle) => (
            <div key={principle.title} className="principle-card">
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We're Building */}
      <section className="careers-areas section-pad">
        <div className="section-kicker">/ 02 — WHAT WE'RE BUILDING</div>
        <h2>Areas of work.</h2>
        <div className="areas-grid">
          {careers.workAreas.map((area) => (
            <div key={area} className="area-item">
              <span className="area-bullet">→</span>
              <span className="area-name">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Culture & Values */}
      <section className="careers-culture section-pad">
        <div className="section-kicker">/ 03 — PEOPLE & CULTURE</div>
        <h2>How we work together.</h2>
        <div className="culture-grid">
          {careers.cultureValues.map((value) => (
            <div key={value.name} className="culture-card">
              <h3>{value.name}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Culture */}
      <section className="careers-engineering section-pad">
        <div className="section-kicker">/ 04 — ENGINEERING CULTURE</div>
        <h2>We care about how we build.</h2>
        <p className="section-intro">Quality, thoughtfulness, and continuous improvement matter. We believe good engineering compounds.</p>
        <div className="engineering-grid">
          {careers.engineeringPrinciples.map((principle) => (
            <div key={principle} className="engineering-item">
              <span className="check-mark">✓</span>
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AI & Research */}
      <section className="careers-ai section-pad">
        <div className="section-kicker">/ 05 — AI & RESEARCH</div>
        <h2>Exploring the frontier.</h2>
        <p className="section-intro">We invest in understanding and building AI systems. Work that involves learning, experimenting, training, evaluating, building, and deploying.</p>
        <div className="ai-flow">
          <div className="flow-step">Learn</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Experiment</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Train</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Evaluate</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Build</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Deploy</div>
        </div>
        <div className="ai-areas">
          {careers.aiResearchAreas.map((area) => (
            <span key={area} className="ai-tag">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="careers-positions section-pad" id="roles">
        <div className="section-kicker">/ 06 — OPEN POSITIONS</div>
        <h2>Join us.</h2>

        {/* Filters */}
        <div className="positions-filter">
          <label>Department</label>
          <div className="filter-buttons">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List */}
        {filteredJobs.length > 0 ? (
          <div className="jobs-list">
            {filteredJobs.map((job, index) => (
              <Link key={job.slug} href={`/careers/${job.slug}`} className="job-row">
                <span className="job-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="job-content">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-department">{job.department}</span>
                    <span className="job-separator">•</span>
                    <span className="job-location">{job.location}</span>
                    <span className="job-separator">•</span>
                    <span className="job-level">{job.experienceLevel}</span>
                  </div>
                </div>
                <span className="job-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No open positions in this department.</h3>
            <p>Check back soon for new opportunities.</p>
          </div>
        )}
      </section>

      {/* Don't See Your Role */}
      <section className="careers-reach section-pad">
        <div className="reach-content">
          <h2>Don&apos;t see your role?</h2>
          <p>We&apos;re interested in meeting people who can help us build things we haven&apos;t imagined yet.</p>
          <Link href="/contact" className="button button-primary">
            Introduce Yourself <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="careers-cta section-pad">
        <h2>Build something that matters.</h2>
        <p>Join the people building Vexel Labs.</p>
        <a href="#roles" className="button button-primary">
          View Open Roles <ArrowUpRight size={16} />
        </a>
      </section>

      {/* Signature */}
      <section className="signature section-pad">
        <div className="signature-word">VEXEL</div>
        <div className="signature-bottom">
          <span>Technology. Built with intent.</span>
          <span>© {new Date().getFullYear()} Vexel Labs</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer section-pad">
        <div className="footer-top">
          <a className="brand" href="/">
            <span className="brand-mark">
              <span />
              <span />
              <span />
            </span>
            <span>
              Vexel<span className="brand-muted"> Labs</span>
            </span>
          </a>
          <p>Digital products and systems for people moving forward.</p>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/services">Capabilities</a>
            <a href="/work">Work</a>
            <a href="/insights">Insights</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
          <a href="mailto:hello@vexellabs.com">
            hello@vexellabs.com <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  )
}
