'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import styles from './contact.module.css'

const inquiryTypes = [
  'Product engineering',
  'Software platform',
  'AI / intelligent system',
  'Cloud / infrastructure',
  'Research collaboration',
  'Other',
]

const timelines = ['As soon as possible', 'Within 1 month', '1–3 months', '3–6 months', 'Flexible']

type FormStatus =
  | { state: 'idle' }
  | { state: 'ready'; mailto: string }
  | { state: 'error'; message: string }

export default function ContactClient() {
  const [status, setStatus] = useState<FormStatus>({ state: 'idle' })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const type = String(form.get('type') || '').trim()
    const message = String(form.get('message') || '').trim()

    if (!name || !email || !type || !message) {
      setStatus({
        state: 'error',
        message: 'Please complete the required fields so we have enough context to reply.',
      })
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ state: 'error', message: 'Please enter a valid email address.' })
      return
    }

    const subject = `Project inquiry — ${type}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project direction: ${type}`,
      '',
      message,
    ].join('\n')
    const mailto = `mailto:hello@vexellabs.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setStatus({ state: 'ready', mailto })
  }

  return (
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow rise">Contact / VexelLabs</p>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>Start with the problem.</h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              Have a product, system or problem in mind? Start with the context. We will help you
              find the right way forward.
            </p>
            <a className={`text-link ${styles.heroLink} rise rise-delay-3`} href="#inquiry">
              Tell us about it <ArrowDownRight size={14} aria-hidden="true" />
            </a>
          </div>

          <aside className={`${styles.briefPanel} rise rise-delay-2`} aria-label="What to include in an inquiry">
            <div className={styles.panelHead}>
              <span>Start with the context</span>
              <span>VXL / 007</span>
            </div>
            <div className={styles.briefRows}>
              <div>
                <span>01</span>
                <div>
                  <strong>The problem</strong>
                  <p>What is not working as it should?</p>
                </div>
              </div>
              <div>
                <span>02</span>
                <div>
                  <strong>The people</strong>
                  <p>Who needs the outcome, and who will use it?</p>
                </div>
              </div>
              <div>
                <span>03</span>
                <div>
                  <strong>The constraints</strong>
                  <p>What must the solution work within?</p>
                </div>
              </div>
            </div>
            <div className={styles.panelFoot}>Context / question / next step</div>
          </aside>
        </div>
      </section>

      <section className={`${styles.inquiry} theme-light`} id="inquiry">
        <div className={`container ${styles.inquiryGrid}`}>
          <div className={styles.inquiryIntro}>
            <p className="eyebrow">Start here</p>
            <h2 className="display">Give us the first signal.</h2>
            <p className="lede">
              You do not need to know exactly what technology you need. Tell us what you are trying
              to solve and we will think through the right direction with you.
            </p>
            <div className={styles.directEmail}>
              <span>Prefer email?</span>
              <a href="mailto:hello@vexellabs.com">
                hello@vexellabs.com <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.location}>
              <span>Based in</span>
              <p>Lagos, Nigeria / Working globally</p>
            </div>
          </div>

          <div className={styles.formWrap}>
            {status.state === 'ready' ? (
              <div className={styles.success} role="status" aria-live="polite">
                <span className={styles.successIcon}>
                  <Check size={22} aria-hidden="true" />
                </span>
                <p className="eyebrow">Email draft ready</p>
                <h3>Your message is prepared.</h3>
                <p>
                  Open the draft in your email app, review it and send it to us. If your app did not
                  open, email <a href="mailto:hello@vexellabs.com">hello@vexellabs.com</a> directly.
                </p>
                <a className={styles.primaryButton} href={status.mailto}>
                  Open email draft <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={() => setStatus({ state: 'idle' })}
                >
                  Edit the inquiry
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <fieldset>
                  <legend>About you</legend>
                  <div className={styles.formGrid}>
                    <label htmlFor="name">
                      Name *
                      <input id="name" name="name" required autoComplete="name" />
                    </label>
                    <label htmlFor="email">
                      Email *
                      <input id="email" name="email" type="email" required autoComplete="email" />
                    </label>
                    <label htmlFor="phone">
                      Phone / WhatsApp
                      <input id="phone" name="phone" type="tel" autoComplete="tel" />
                    </label>
                    <label htmlFor="company">
                      Company / organization
                      <input id="company" name="company" autoComplete="organization" />
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Your project</legend>
                  <label htmlFor="type">
                    What are you looking to build? *
                    <select id="type" name="type" defaultValue="" required>
                      <option value="" disabled>
                        Select a direction
                      </option>
                      {inquiryTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </label>
                  <label htmlFor="message">
                    Tell us a little about it *
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="What are you trying to make, improve or automate?"
                    />
                  </label>
                </fieldset>

                <fieldset>
                  <legend>
                    Project context <span>Optional</span>
                  </legend>
                  <div className={styles.formGrid}>
                    <label htmlFor="timeline">
                      Timeline
                      <select id="timeline" name="timeline" defaultValue="">
                        <option value="">Choose a timeline</option>
                        {timelines.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </label>
                    <label htmlFor="budget">
                      Budget range
                      <select id="budget" name="budget" defaultValue="">
                        <option value="">Not sure yet</option>
                        <option>Under $5k</option>
                        <option>$5k – $15k</option>
                        <option>$15k – $50k</option>
                        <option>$50k+</option>
                        <option>Prefer to discuss</option>
                      </select>
                    </label>
                  </div>
                </fieldset>

                {status.state === 'error' && (
                  <p className={styles.formError} role="alert">
                    {status.message}
                  </p>
                )}

                <button className={styles.primaryButton} type="submit">
                  Prepare email draft <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHead}>
            <div>
              <p className="eyebrow">What happens next</p>
              <h2 className="display">From first signal to next step.</h2>
            </div>
            <p className="lede">
              No long intake process. We start by understanding whether the problem is one we can
              help with.
            </p>
          </div>

          <div className={styles.processGrid}>
            {[
              ['01', 'You reach out', 'Tell us what you are trying to build.'],
              ['02', 'We review', 'We understand the problem and the context.'],
              ['03', 'We talk', 'We discuss scope, direction and possible approaches.'],
              ['04', 'We build', 'If it is a good fit, we move into planning and making.'],
            ].map(([number, title, text]) => (
              <div key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.cta} theme-light`}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">The first step</p>
            <h2 className="display">Have a problem worth solving?</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>Send us a note, or write to us directly.</p>
            <a className={styles.bigEmail} href="mailto:hello@vexellabs.com">
              hello@vexellabs.com
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
            <a className="text-link" href="#inquiry">
              Start a conversation <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
