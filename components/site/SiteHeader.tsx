'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import styles from './site-shell.module.css'

const primaryLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/lab', label: 'Lab' },
]

type SiteHeaderProps = {
  tone?: 'dark' | 'light'
}

export function SiteHeader({ tone = 'dark' }: SiteHeaderProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isCurrent = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  return (
    <header className={`${styles.header} ${tone === 'dark' ? styles.onDark : styles.onLight} ${menuOpen ? styles.open : ''}`}>
      <Link className={styles.brand} href="/" aria-label="Vexel Labs home" onClick={() => setMenuOpen(false)}>
        <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /></span>
        <span>Vexel <b>Labs</b></span>
      </Link>

      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {primaryLinks.map((item) => (
          <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className={styles.headerCta} href="/contact">
        Start a project <ArrowUpRight size={15} aria-hidden="true" />
      </Link>

      <button
        className={styles.menuButton}
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="site-mobile-navigation"
      >
        {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {menuOpen && (
        <nav id="site-mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation">
          {primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span><ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <span>Start a project</span><ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  )
}
