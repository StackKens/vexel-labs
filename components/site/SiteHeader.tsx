'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import styles from './site-header.module.css'

const primaryLinks = [
  { href: '/research', label: 'Research' },
  { href: '/technology', label: 'Technology' },
  { href: '/products', label: 'Products', hasMenu: true },
  { href: '/about', label: 'Company' },
  { href: '/insights', label: 'Insights' },
]

const productLinks = [
  {
    href: '/products/acs',
    label: 'ACS',
    detail: 'Academic Cloud System',
  },
  {
    href: '/products/ai',
    label: 'VexelLabs AI',
    detail: 'Applied intelligence platform',
  },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)

  const isCurrent = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!productsOpen) return

    const onPointerDown = (event: MouseEvent) => {
      if (!productsRef.current?.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProductsOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [productsOpen])

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.open : ''}`}
    >
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="VexelLabs home">
          <svg className={styles.mark} viewBox="0 0 22 22" aria-hidden="true">
            <path d="M2 3h4.2l3 16H4.9L2 3Z" fill="currentColor" />
            <path d="M8.9 3h4.2l3 16h-4.3L8.9 3Z" fill="currentColor" opacity="0.55" />
            <path d="M15.8 3H20l-2.9 16h-4.3L15.8 3Z" fill="currentColor" opacity="0.28" />
          </svg>
          <span className={styles.wordmark}>
            Vexel<span>Labs</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {primaryLinks.map((item) =>
            item.hasMenu ? (
              <div className={styles.dropdown} key={item.href} ref={productsRef}>
                <button
                  type="button"
                  className={`${styles.navLink} ${styles.dropdownTrigger} ${
                    isCurrent(item.href) ? styles.current : ''
                  }`}
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                  onClick={() => setProductsOpen((open) => !open)}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={productsOpen ? styles.chevronOpen : undefined}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`${styles.dropdownPanel} ${productsOpen ? styles.dropdownVisible : ''}`}
                >
                  <Link className={styles.dropdownAll} href={item.href}>
                    <span>All products</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                  {productLinks.map((product) => (
                    <Link className={styles.dropdownItem} href={product.href} key={product.href}>
                      <strong>{product.label}</strong>
                      <span>{product.detail}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                className={`${styles.navLink} ${isCurrent(item.href) ? styles.current : ''}`}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.actions}>
          <Link className={styles.contact} href="/contact">
            Contact
            <ArrowUpRight size={14} aria-hidden="true" />
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
        </div>
      </div>

      <div
        id="site-mobile-navigation"
        className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}
        hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {primaryLinks.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.mobileIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span>{item.label}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
          <Link
            href="/contact"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            <span className={styles.mobileIndex}>06</span>
            <span>Contact</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </nav>
        <div className={styles.mobileFoot}>
          <div>
            <span>Products</span>
            {productLinks.map((product) => (
              <Link key={product.href} href={product.href} onClick={() => setMenuOpen(false)}>
                {product.label}
              </Link>
            ))}
          </div>
          <div>
            <span>Get in touch</span>
            <a href="mailto:stackkens@gmail.com">Send an email</a>
            <a href="https://wa.me/256755038100" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <p>Kampala, Uganda / Working globally</p>
          </div>
        </div>
      </div>
    </header>
  )
}
