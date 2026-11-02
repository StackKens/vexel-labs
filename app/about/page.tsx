import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { GlobalGrid } from '@/components/visuals/GlobalGrid'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'VexelLabs is a technology company building intelligent products and digital systems from Lagos, Nigeria, for a global market.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Company — VexelLabs',
    description:
      'A technology company built around useful things, with an African origin and global ambition.',
    url: '/about',
  },
}

const indexLinks = [
  { href: '#who-we-are', label: 'Who we are' },
  { href: '#mission', label: 'Mission and vision' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#engineering', label: 'Engineering approach' },
  { href: '#origin', label: 'Origin and ambition' },
]

const principles = [
  {
    number: '01',
    title: 'Begin with context',
    text: 'The right solution depends on the people, constraints and place around the problem.',
  },
  {
    number: '02',
    title: 'Make complexity legible',
    text: 'Good products give people confidence about what is happening and what to do next.',
  },
  {
    number: '03',
    title: 'Build for the next version',
    text: 'We make decisions that create a foundation, not a dead end.',
  },
  {
    number: '04',
    title: 'Prefer consequence to noise',
    text: 'We care less about appearing busy and more about what changed because of the work.',
  },
]

const process = [
  {
    number: '01',
    title: 'Understand',
    text: 'Clarify the problem, the people it affects and the constraints that are real.',
  },
  {
    number: '02',
    title: 'Shape',
    text: 'Choose what to make and, just as deliberately, what to leave out.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Engineer the product with care, documentation and visible decisions.',
  },
  {
    number: '04',
    title: 'Learn',
    text: 'Use the real world to decide what comes next.',
  },
]

export default function CompanyPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow rise">Company / VexelLabs</p>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>
              A technology company with somewhere to go.
            </h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              We build intelligent products and digital systems from Lagos, for a world that is
              still being written.
            </p>
            <div className={`${styles.heroActions} rise rise-delay-3`}>
              <SiteButton href="/products">Explore our work</SiteButton>
              <SiteButton href="/contact" variant="outline">
                Contact us
              </SiteButton>
            </div>
          </div>

          <aside className={styles.indexPanel} aria-label="On this page">
            <div className={styles.indexHead}>
              <span>Company / Index</span>
              <span>VXL / 002</span>
            </div>
            <nav className={styles.indexNav}>
              {indexLinks.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{link.label}</span>
                  <ArrowDownRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className={styles.indexFoot}>
              <span>Lagos, Nigeria</span>
              <span>Working globally</span>
            </div>
          </aside>
        </div>
      </section>

      <section className={`${styles.who} theme-light`} id="who-we-are">
        <div className="container">
          <div className={styles.sectionLabel}>
            <p className="eyebrow">01 / Who we are</p>
          </div>
          <div className={styles.whoGrid}>
            <h2 className="display">A company built around useful things.</h2>
            <div className={styles.whoCopy}>
              <p className={styles.whoLead}>
                VexelLabs is a product and engineering company. We work on software that has a clear
                job to do and a real place in the world.
              </p>
              <p>
                Our work spans intelligent products, digital infrastructure and applied research.
                We bring those disciplines together because the interesting problems rarely respect
                the boundaries between them.
              </p>
              <p>
                We are deliberately small, close to the work and accountable for the outcome. The
                ambition is large, but it is built one careful system at a time.
              </p>
            </div>
          </div>
          <div className={styles.disciplines}>
            <span>Product thinking</span>
            <span>Engineering discipline</span>
            <span>Applied research</span>
            <span>Long-term intent</span>
          </div>
        </div>
      </section>

      <section className={styles.mission} id="mission">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionBlock}>
              <div className={styles.missionHead}>
                <span>02</span>
                <p className="eyebrow">Mission</p>
              </div>
              <h2>Give people and organisations more room to move.</h2>
              <p>
                We build technology that removes friction, makes complexity legible and creates a
                stronger foundation for the work people already care about.
              </p>
            </div>
            <div className={styles.missionBlock}>
              <div className={styles.missionHead}>
                <span>03</span>
                <p className="eyebrow">Vision</p>
              </div>
              <h2>Prove that world-class technology can be built from Africa.</h2>
              <p>
                Not as an exception, and not as a slogan. As a body of work that competes on craft,
                judgement and consequence with the best in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.philosophy} theme-light`} id="philosophy">
        <div className="container">
          <div className={styles.philosophyHead}>
            <div>
              <p className="eyebrow">04 / Philosophy</p>
              <h2 className="display">A point of view, not a position.</h2>
            </div>
            <p className="lede">
              Technology is not the point. What it makes possible is. These are the ideas we return
              to when the answer is not obvious.
            </p>
          </div>

          <div className={styles.principleList}>
            {principles.map((principle) => (
              <div className={styles.principleRow} key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.engineering} id="engineering">
        <div className="container">
          <div className={styles.engineeringHead}>
            <div>
              <p className="eyebrow">05 / Engineering approach</p>
              <h2 className="display">How we build.</h2>
            </div>
            <p className="lede">
              Good process creates room for judgement. It gives the work direction without
              pretending the answer is known at the start.
            </p>
          </div>

          <div className={styles.processList}>
            {process.map((step) => (
              <div className={styles.processRow} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.engineeringNote}>
            <span aria-hidden="true" />
            <p>
              We document decisions, keep the system observable and leave the next engineer with
              more clarity than we found.
            </p>
            <Link className="text-link" href="/technology">
              Our technology practice <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.origin} id="origin">
        <div className={`container ${styles.originGrid}`}>
          <div className={styles.originCopy}>
            <p className="eyebrow">06 / Origin and ambition</p>
            <h2 className="display">Built in Africa. Open to everywhere.</h2>
            <p className="lede">
              We are close to a set of problems that deserve better tools, and connected to the
              people shaping technology far beyond our immediate context.
            </p>
            <p>
              That perspective informs the work: a sensitivity to access, language, infrastructure
              and real use, alongside an insistence that the result should stand anywhere.
            </p>
            <div className={styles.originFacts}>
              <div>
                <span>Local</span>
                <strong>Close to the problem</strong>
              </div>
              <div>
                <span>Global</span>
                <strong>Designed to travel</strong>
              </div>
              <div>
                <span>Long-term</span>
                <strong>Build for what follows</strong>
              </div>
            </div>
          </div>
          <div className={styles.originVisual}>
            <GlobalGrid />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">The road ahead</p>
            <h2 className="display">There is useful work to do.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              We are focused on building products and systems that give ambitious people and
              organisations more room to move.
            </p>
            <SiteButton href="/contact" variant="light">
              Start a conversation
            </SiteButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
