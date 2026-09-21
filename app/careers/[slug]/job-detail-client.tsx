'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { JobPosting } from '@/lib/careers-data'

interface Props {
  job: JobPosting
}

export default function JobDetailClient({ job }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="job-detail-shell">
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

      {/* Job Header */}
      <section className="job-header section-pad">
        <div className="job-header-meta">
          <span className="job-category">{job.department}</span>
          <span className="separator">•</span>
          <span className="job-posted">{new Date(job.postedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <h1>{job.title}</h1>
        <div className="job-header-details">
          <div className="detail-item">
            <span className="detail-label">Location</span>
            <span className="detail-value">{job.location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Employment Type</span>
            <span className="detail-value">{job.employmentType}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Experience Level</span>
            <span className="detail-value">{job.experienceLevel}</span>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="job-content section-pad">
        <div className="job-main">
          {/* About the Role */}
          <div className="job-section">
            <h2>About The Role</h2>
            <p>{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="job-section">
            <h2>Responsibilities</h2>
            <ul className="job-list">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="job-section">
            <h2>What We're Looking For</h2>
            <div className="requirements-grid">
              <div className="requirement-block">
                <h3>Required</h3>
                <ul className="job-list">
                  {job.requirements.required.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="requirement-block">
                <h3>Nice to Have</h3>
                <ul className="job-list">
                  {job.requirements.niceToHave.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technologies */}
          {job.technologies && job.technologies.length > 0 && (
            <div className="job-section">
              <h2>Technologies</h2>
              <div className="tech-list">
                {job.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div className="job-section">
              <h2>Benefits</h2>
              <ul className="job-list">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="job-sidebar">
          <div className="sidebar-card">
            <h3>Ready to apply?</h3>
            <p>Send us your resume, portfolio, and a note about why this role excites you.</p>
            <a href="/contact" className="button button-primary button-full">
              Apply Now <ArrowUpRight size={16} />
            </a>
            <p className="sidebar-note">Or reach out at hello@vexellabs.com</p>
          </div>

          <div className="sidebar-card">
            <h3>Learn more</h3>
            <Link href="/about" className="sidebar-link">
              About Vexel
            </Link>
            <Link href="/work" className="sidebar-link">
              See our work
            </Link>
            <Link href="/careers" className="sidebar-link">
              Back to careers
            </Link>
          </div>
        </aside>
      </section>

      {/* Back to Careers */}
      <section className="job-footer section-pad">
        <Link href="/careers" className="button button-secondary">
          ← Back to Open Roles
        </Link>
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
