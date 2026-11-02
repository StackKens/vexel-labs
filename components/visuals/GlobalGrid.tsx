import styles from './global-grid.module.css'

const cx = 470
const cy = 300
const radius = 216

const latitudes = [-0.62, -0.3, 0, 0.3, 0.62].map((offset) => ({
  y: cy + offset * radius,
  rx: Math.sqrt(Math.max(0, radius * radius - (offset * radius) ** 2)),
}))

const longitudes = [0.98, 0.78, 0.45, 0].map((factor) => radius * factor)

const arcs = [
  { d: `M ${cx + 62} ${cy + 54} Q ${cx + 170} ${cy - 10} ${cx + 250} ${cy - 94}` },
  { d: `M ${cx + 62} ${cy + 54} Q ${cx + 60} ${cy - 130} ${cx - 30} ${cy - 208}` },
  { d: `M ${cx + 62} ${cy + 54} Q ${cx - 90} ${cy + 10} ${cx - 196} ${cy - 48}` },
]

export function GlobalGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.frame} ${className}`} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 900 620" role="presentation">
        <defs>
          <radialGradient id="globe-glow" cx="52%" cy="48%" r="50%">
            <stop offset="0%" stopColor="#477bff" stopOpacity="0.19" />
            <stop offset="58%" stopColor="#1a2c4d" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#080d16" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arc-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7a9dff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#7a9dff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7a9dff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect width="900" height="620" fill="#080d16" />
        <rect width="900" height="620" fill="url(#globe-glow)" />

        <g className={styles.globe}>
          <circle cx={cx} cy={cy} r={radius} />
          <circle cx={cx} cy={cy} r={radius + 24} className={styles.outerRing} />
          {latitudes.map((line, index) => (
            <ellipse key={`lat-${index}`} cx={cx} cy={line.y} rx={line.rx} ry={line.rx * 0.045} />
          ))}
          {longitudes.map((rx, index) => (
            <ellipse key={`lon-${index}`} cx={cx} cy={cy} rx={rx} ry={radius} />
          ))}
          <ellipse
            cx={cx}
            cy={cy}
            rx={radius}
            ry={radius * 0.33}
            className={styles.equator}
          />
        </g>

        <g className={styles.arcs}>
          {arcs.map((arc, index) => (
            <path key={index} d={arc.d} />
          ))}
        </g>

        <g className={styles.origin}>
          <circle cx={cx + 62} cy={cy + 54} r="16" className={styles.pulse} />
          <circle cx={cx + 62} cy={cy + 54} r="5" className={styles.dot} />
          <line
            x1={cx + 62}
            y1={cy + 54}
            x2={cx + 142}
            y2={cy + 132}
            className={styles.leader}
          />
          <text x={cx + 150} y={cy + 136} className={styles.label}>
            LAGOS / 06.5°N
          </text>
        </g>

        <g className={styles.axis}>
          <line x1="46" y1="80" x2="46" y2="540" />
          <line x1="46" y1="540" x2="854" y2="540" />
          <text x="58" y="92">GLOBAL FIELD / 001</text>
          <text x="58" y="524">ORIGIN IN AFRICA</text>
          <text x="842" y="524" textAnchor="end">DESIGNED TO TRAVEL</text>
        </g>
      </svg>

      <div className={styles.labels}>
        <span>Operating context</span>
        <span>Built here / Used anywhere</span>
      </div>
    </div>
  )
}
