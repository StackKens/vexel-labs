import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import styles from './editorial.module.css'

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="top" className={styles.page}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  )
}
