import styles from './state.module.css'

export default function Loading() {
  return (
    <main className={styles.loading} aria-busy="true" aria-live="polite">
      <span className="eyebrow">VexelLabs / Loading</span>
      <span className={styles.loadingLine} aria-hidden="true" />
    </main>
  )
}
