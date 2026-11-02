import {
  Activity,
  Blocks,
  Database,
  FlaskConical,
  Gauge,
  Settings2,
  Sparkles,
  Terminal,
} from 'lucide-react'
import styles from './ai-screenshot.module.css'

const nav = [
  { icon: Blocks, label: 'Workspace', active: true },
  { icon: Terminal, label: 'Playground' },
  { icon: FlaskConical, label: 'Evaluations' },
  { icon: Database, label: 'Datasets' },
  { icon: Activity, label: 'Deployments' },
]

const metrics = [
  { label: 'Latency', value: '412', unit: 'ms', trend: '−8.2%' },
  { label: 'Accuracy', value: '96.4', unit: '%', trend: '+1.4%' },
  { label: 'Cost', value: '0.42', unit: '/1k', trend: '−12%' },
]

const evaluations = [
  { name: 'Grounded answers', score: '0.96' },
  { name: 'Citation coverage', score: '0.93' },
  { name: 'Refusal safety', score: '0.99' },
]

export function AiScreenshot({ className = '' }: { className?: string }) {
  return (
    <div
      className={`${styles.frame} ${className}`}
      role="img"
      aria-label="Preview of the VexelLabs AI console showing a prompt, model response and evaluation metrics"
    >
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>
          <span className={styles.lock} />
          ai.vexellabs.com / workspace
        </span>
        <span className={styles.chromeLabel}>VX AI</span>
      </div>

      <div className={styles.app} aria-hidden="true">
        <aside className={styles.sidebar}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <Sparkles size={13} strokeWidth={1.8} />
            </span>
            <span className={styles.brandName}>
              VexelLabs <b>AI</b>
            </span>
          </div>

          <div className={styles.workspace}>
            <span>Workspace</span>
            <strong>Atlas support</strong>
          </div>

          <nav className={styles.nav}>
            {nav.map((item) => {
              const Icon = item.icon
              return (
                <span
                  key={item.label}
                  className={`${styles.navItem} ${item.active ? styles.navActive : ''}`}
                >
                  <Icon size={13} strokeWidth={1.7} />
                  {item.label}
                </span>
              )
            })}
          </nav>

          <div className={styles.sideFoot}>
            <span className={styles.avatar}>AK</span>
            <span className={styles.sideUser}>
              <strong>Amara K.</strong>
              <small>Engineering</small>
            </span>
            <Settings2 size={12} strokeWidth={1.7} />
          </div>
        </aside>

        <div className={styles.main}>
          <header className={styles.topbar}>
            <div>
              <small>Workspace / Playground</small>
              <strong>Support assistant</strong>
            </div>
            <div className={styles.topActions}>
              <span className={styles.modelChip}>vxl-2</span>
              <span className={styles.liveChip}>
                <i /> Live
              </span>
            </div>
          </header>

          <div className={styles.metrics}>
            {metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <span>{metric.label}</span>
                <strong>
                  {metric.value}
                  <small>{metric.unit}</small>
                </strong>
                <em>{metric.trend}</em>
              </div>
            ))}
          </div>

          <div className={styles.panels}>
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <span>Prompt</span>
                <span className={styles.panelMeta}>Context · 3 sources</span>
              </div>
              <div className={styles.promptBox}>
                <p>
                  Summarise the open support tickets for ACS and flag anything that needs a
                  product decision.
                </p>
                <span className={styles.cursor} />
              </div>
              <div className={styles.controls}>
                <div>
                  <span>Temperature</span>
                  <span className={styles.slider}>
                    <i />
                  </span>
                  <strong>0.2</strong>
                </div>
                <div>
                  <span>Max tokens</span>
                  <span className={styles.slider}>
                    <i style={{ width: '62%' }} />
                  </span>
                  <strong>2,048</strong>
                </div>
              </div>
              <button className={styles.runButton} type="button" tabIndex={-1}>
                Run evaluation
              </button>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <span>Response</span>
                <span className={styles.panelMeta}>412 ms · vxl-2</span>
              </div>
              <div className={styles.response}>
                <p>
                  Three tickets need a product decision. Two concern attendance exports for
                  schools using shared devices; one reports a mismatch between fee receipts and
                  the term ledger.
                </p>
                <div className={styles.citations}>
                  <span>ACS-1182</span>
                  <span>ACS-1179</span>
                  <span>Ledger</span>
                </div>
              </div>
              <div className={styles.evalList}>
                {evaluations.map((evaluation, index) => (
                  <div key={evaluation.name}>
                    <span>{evaluation.name}</span>
                    <span className={styles.evalBar}>
                      <i style={{ width: `${80 + index * 5}%` }} />
                    </span>
                    <strong>{evaluation.score}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.footerBar}>
            <span>
              <Gauge size={12} strokeWidth={1.7} /> 1,284 runs this week
            </span>
            <span className={styles.sparkline}>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>Production ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}
