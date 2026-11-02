import styles from './architecture-diagram.module.css'

const layers = [
  {
    index: '05',
    name: 'Experience',
    detail: 'Web, mobile and operational interfaces',
    tag: 'Surface',
  },
  {
    index: '04',
    name: 'Application',
    detail: 'Product logic, services and integrations',
    tag: 'Logic',
  },
  {
    index: '03',
    name: 'Intelligence',
    detail: 'Models, retrieval and evaluation',
    tag: 'Inference',
    accent: true,
  },
  {
    index: '02',
    name: 'Data',
    detail: 'Pipelines, storage and governance',
    tag: 'Foundation',
  },
  {
    index: '01',
    name: 'Infrastructure',
    detail: 'Cloud, deployment and observability',
    tag: 'Runtime',
  },
]

export function ArchitectureDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.diagram} ${className}`} aria-label="VexelLabs system architecture">
      <div className={styles.header}>
        <span>System architecture</span>
        <span>VXL / REF 04</span>
      </div>

      <div className={styles.stack}>
        {layers.map((layer) => (
          <div className={styles.layer} key={layer.index}>
            <span className={styles.index}>{layer.index}</span>
            <span className={`${styles.dot} ${layer.accent ? styles.dotAccent : ''}`} aria-hidden="true" />
            <div className={styles.name}>
              <strong>{layer.name}</strong>
              <span>{layer.detail}</span>
            </div>
            <span className={`${styles.tag} ${layer.accent ? styles.tagAccent : ''}`}>
              {layer.tag}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.flow}>
        <span>Signal</span>
        <span className={styles.flowLine} aria-hidden="true">
          <i />
        </span>
        <span>Structure</span>
        <span className={styles.flowLine} aria-hidden="true">
          <i />
        </span>
        <span>System</span>
      </div>

      <div className={styles.footer}>
        <span>Designed for change</span>
        <span>Observable by default</span>
      </div>
    </div>
  )
}
