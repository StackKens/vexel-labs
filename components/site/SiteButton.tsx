import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import styles from './site-shell.module.css'

type SiteButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'quiet' | 'light'
  className?: string
  showArrow?: boolean
}

export function SiteButton({ href, children, variant = 'primary', className = '', showArrow = true }: SiteButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()
  const content = <>{children}{showArrow && <ArrowUpRight size={15} aria-hidden="true" />}</>

  if (href.startsWith('/')) {
    return <Link className={classes} href={href}>{content}</Link>
  }

  return <a className={classes} href={href}>{content}</a>
}
