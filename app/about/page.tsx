import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'VexelLabs is a technology company building intelligent products and digital systems from Kampala, Uganda, for a global market.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Company | VexelLabs',
    description:
      'A technology company built around useful things, with an African origin and global ambition.',
    url: '/about',
  },
}

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

export default function CompanyPage() {
  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Company</p>
        <h1 className={styles.title}>A technology company with somewhere to go.</h1>
        <p className={styles.lede}>
          We build intelligent products and digital systems from Kampala, for a world that is still
          being written.
        </p>
        <div className={styles.actions}>
          <SiteButton href="/products">Explore our work</SiteButton>
          <SiteButton href="/contact" variant="outline">
            Contact us
          </SiteButton>
        </div>
      </section>

      <section className={styles.section} id="who-we-are">
        <div className={styles.split}>
          <h2 className={styles.h2}>A company built around useful things.</h2>
          <div className={styles.copy}>
            <p>
              VexelLabs is a product and engineering company. We work on software that has a clear
              job to do and a real place in the world.
            </p>
            <p>
              Our work spans intelligent products, digital infrastructure and applied research. We
              bring those disciplines together because the interesting problems rarely respect the
              boundaries between them.
            </p>
            <p>
              We are deliberately small, close to the work and accountable for the outcome. The
              ambition is large, but it is built one careful system at a time.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.alt} id="mission">
        <div className={styles.altInner}>
          <div className={styles.grid2}>
            <div className={styles.card}>
              <p className={styles.kicker}>Mission</p>
              <h2 className={styles.subhead}>Give people and organisations more room to move.</h2>
              <p>
                We build technology that removes friction, makes complexity legible and creates a
                stronger foundation for the work people already care about.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.kicker}>Vision</p>
              <h2 className={styles.subhead}>
                Prove that world-class technology can be built from Africa.
              </h2>
              <p>
                Not as an exception, and not as a slogan. As a body of work that competes on craft,
                judgement and consequence with the best in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="philosophy">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Philosophy</p>
            <h2 className={styles.h2}>A point of view, not a position.</h2>
          </div>
          <p className={styles.sectionLede}>
            Technology is not the point. What it makes possible is. These are the ideas we return
            to when the answer is not obvious.
          </p>
        </div>

        <div className={styles.rows}>
          {principles.map((principle) => (
            <article className={styles.row} key={principle.number}>
              <span className={styles.rowIndex}>{principle.number}</span>
              <div className={styles.rowBody}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.alt} id="origin">
        <div className={styles.altInner}>
          <div className={styles.split}>
            <div>
              <p className={styles.kicker}>Origin and ambition</p>
              <h2 className={styles.h2}>Built in Africa. Open to everywhere.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                We are close to a set of problems that deserve better tools, and connected to the
                people shaping technology far beyond our immediate context.
              </p>
              <p>
                That perspective informs the work: a sensitivity to access, language,
                infrastructure and real use, alongside an insistence that the result should stand
                anywhere.
              </p>
              <Link className={styles.textLink} href="/technology">
                Our technology practice <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>There is useful work to do.</h2>
          <div className={styles.ctaActions}>
            <p>
              We are focused on building products and systems that give ambitious people and
              organisations more room to move.
            </p>
            <SiteButton href="/contact">Start a conversation</SiteButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
