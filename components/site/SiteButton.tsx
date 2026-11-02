import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import styles from './site-button.module.css'

type SiteButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'light'
  className?: string
  showArrow?: boolean
  external?: boolean
}

export function SiteButton({
  href,
  children,
  variant = 'primary',
  className = '',
  showArrow = true,
  external = false,
}: SiteButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowUpRight size={15} aria-hidden="true" />}
    </>
  )

  if (external || !href.startsWith('/')) {
    return (
      <a className={classes} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {content}
      </a>
    )
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  )
}
