import styles from './state.module.css'

export default function Loading() {
  return (
    <main className={styles.statePage} aria-busy="true" aria-live="polite">
      <p className="eyebrow">VEXEL LABS / LOADING</p>
      <h1>Preparing the next view.</h1>
      <span className={styles.stateLine} aria-hidden="true" />
    </main>
  )
}
