'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { SiteButton } from '@/components/site/SiteButton'
import styles from '@/components/site/editorial.module.css'

const inquiryTypes = [
  'Product engineering',
  'Software platform',
  'AI / intelligent system',
  'Cloud / infrastructure',
  'Research collaboration',
  'Other',
]

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
    const mailto = `mailto:stackkens@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setStatus({ state: 'ready', mailto })
  }

  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Contact</p>
        <h1 className={styles.title}>Start with the problem.</h1>
        <p className={styles.lede}>
          Have a product, system or problem in mind? Start with the context. We will help you find
          the right way forward.
        </p>
      </section>

      <section className={styles.section} id="inquiry">
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>Start here</p>
            <h2 className={`${styles.h2} ${styles.rowsSpaced}`}>Give us the first signal.</h2>
            <div className={styles.directEmail}>
              <span>Email</span>
              <a href="mailto:stackkens@gmail.com">
                Send an email <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.directEmail}>
              <span>WhatsApp</span>
              <a
                href="https://wa.me/256755038100"
                target="_blank"
                rel="noreferrer"
              >
                0755 038 100 <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.directEmail}>
              <span>Based in</span>
              <p>Kampala, Uganda / Working globally</p>
            </div>
          </div>

          {status.state === 'ready' ? (
            <div className={styles.success} role="status" aria-live="polite">
              <span className={styles.successIcon}>
                <Check size={22} aria-hidden="true" />
              </span>
              <p className={styles.kicker}>Email draft ready</p>
              <h3>Your message is prepared.</h3>
              <p>
                Open the draft in your email app, review it and send it to us. If your app did not
                open, <a href="mailto:stackkens@gmail.com">send an email</a> directly.
              </p>
              <div className={styles.successActions}>
                <SiteButton href={status.mailto} external>
                  Open email draft
                </SiteButton>
                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={() => setStatus({ state: 'idle' })}
                >
                  Edit the inquiry
                </button>
              </div>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <label className={styles.field} htmlFor="name">
                  Name *
                  <input className={styles.input} id="name" name="name" required autoComplete="name" />
                </label>
                <label className={styles.field} htmlFor="email">
                  Email *
                  <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className={styles.field} htmlFor="type">
                What are you looking to build? *
                <select className={styles.select} id="type" name="type" defaultValue="" required>
                  <option value="" disabled>
                    Select a direction
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className={styles.field} htmlFor="message">
                Tell us a little about it *
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What are you trying to make, improve or automate?"
                />
              </label>

              {status.state === 'error' && (
                <p className={styles.formError} role="alert">
                  {status.message}
                </p>
              )}

              <div className={styles.formActions}>
                <button className={styles.primaryButton} type="submit">
                  Prepare email draft <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  )
}
