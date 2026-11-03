import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import styles from './site-footer.module.css'

const columns = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Work',
    links: [
      { href: '/research', label: 'Research' },
      { href: '/technology', label: 'Technology' },
      { href: '/products', label: 'Products' },
      { href: '/insights', label: 'Insights' },
    ],
  },
  {
    title: 'Products',
    links: [
      { href: '/products/acs', label: 'ACS' },
      { href: '/products/ai', label: 'VexelLabs AI' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <Link className={styles.brand} href="/" aria-label="VexelLabs home">
            <svg className={styles.mark} viewBox="0 0 22 22" aria-hidden="true">
               <path d="M6 7h3.2l-5 14H1L6 7Z" fill="currentColor" />
               <path d="M12 1h3.2l-7 20H5L12 1Z" fill="currentColor" opacity="0.55" />
               <path d="M15 7h3.2l-5 14H10L15 7Z" fill="currentColor" opacity="0.28" />
            </svg>
            <span className={styles.wordmark}>
              Vexel<span>Labs</span>
            </span>
          </Link>
          <p className={styles.statement}>
            Engineering technology
            <br />
            for what comes next.
          </p>
          <a className={styles.email} href="mailto:stackkens@gmail.com">
            Send an email
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.columns}>
          {columns.map((column) => (
            <div className={styles.column} key={column.title}>
              <h2>{column.title}</h2>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <div className={styles.column}>
            <h2>Connect</h2>
            <a href="https://www.linkedin.com/company/vexellabs" target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="https://x.com/vexellabs" target="_blank" rel="noreferrer">
              X / Twitter
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="https://wa.me/256755038100" target="_blank" rel="noreferrer">
              WhatsApp
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="mailto:stackkens@gmail.com">
              Send an email
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} VexelLabs. All rights reserved.</p>
          <p className={styles.location}>Kampala, Uganda / Working globally</p>
          <a className={styles.topLink} href="#top">
            Back to top
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
