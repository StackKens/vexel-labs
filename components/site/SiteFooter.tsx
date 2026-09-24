import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import styles from './site-shell.module.css'

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/lab', label: 'Lab' },
  { href: '/careers', label: 'Careers' },
]

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Link className={styles.brand} href="/" aria-label="Vexel Labs home">
          <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /></span>
          <span>Vexel <b>Labs</b></span>
        </Link>
        <p>Digital products and systems<br />built with intent.</p>
      </div>
      <div className={styles.footerBottom}>
        <nav aria-label="Footer navigation">
          {footerLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
