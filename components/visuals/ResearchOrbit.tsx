import styles from './research-orbit.module.css'

const nodes = [
  { angle: 26, radius: 168, label: 'AI' },
  { angle: 112, radius: 232, label: 'ML' },
  { angle: 206, radius: 132, label: 'APPLIED' },
  { angle: 292, radius: 262, label: 'EMERGING' },
  { angle: 350, radius: 196, label: 'SYSTEMS' },
]

const cx = 560
const cy = 310

function point(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180
  return {
    x: cx + Math.cos(radians) * radius,
    y: cy + Math.sin(radians) * radius,
  }
}

const waveform = Array.from({ length: 120 }, (_, index) => {
  const x = 40 + index * 6.8
  const y =
    610 +
    Math.sin(index * 0.32) * 18 +
    Math.sin(index * 0.11 + 1.4) * 26 +
    Math.cos(index * 0.58) * 6
  return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
}).join(' ')

export function ResearchOrbit({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.frame} ${className}`} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 900 720" role="presentation">
        <defs>
          <radialGradient id="orbit-glow" cx="62%" cy="43%" r="48%">
            <stop offset="0%" stopColor="#477bff" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#162748" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#080d16" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbit-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#477bff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#477bff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect width="900" height="720" fill="#080d16" />
        <rect width="900" height="720" fill="url(#orbit-glow)" />

        <g className={styles.rings}>
          {[92, 156, 220, 284, 348].map((radius, index) => (
            <circle
              key={radius}
              cx={cx}
              cy={cy}
              r={radius}
              className={index % 2 === 0 ? styles.solidRing : styles.dashedRing}
            />
          ))}
        </g>

        <g className={styles.ticks}>
          {Array.from({ length: 72 }, (_, index) => {
            const angle = index * 5
            const outer = point(angle, 366)
            const inner = point(angle, index % 6 === 0 ? 346 : 357)
            return (
              <line
                key={angle}
                x1={outer.x}
                y1={outer.y}
                x2={inner.x}
                y2={inner.y}
                className={index % 6 === 0 ? styles.majorTick : styles.minorTick}
              />
            )
          })}
        </g>

        <g className={styles.orbitArcs}>
          <circle cx={cx} cy={cy} r="284" transform={`rotate(-28 ${cx} ${cy})`} />
          <circle cx={cx} cy={cy} r="220" transform={`rotate(150 ${cx} ${cy})`} />
        </g>

        <g className={styles.nodes}>
          {nodes.map((node) => {
            const position = point(node.angle, node.radius)
            return (
              <g key={node.label}>
                <circle cx={position.x} cy={position.y} r="4" className={styles.node} />
                <circle cx={position.x} cy={position.y} r="11" className={styles.nodeRing} />
                <line
                  x1={position.x}
                  y1={position.y}
                  x2={position.x + (position.x > cx ? 26 : -26)}
                  y2={position.y - 12}
                  className={styles.nodeLeader}
                />
                <text
                  x={position.x + (position.x > cx ? 32 : -32)}
                  y={position.y - 9}
                  textAnchor={position.x > cx ? 'start' : 'end'}
                  className={styles.nodeLabel}
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </g>

        <g className={styles.core}>
          <circle cx={cx} cy={cy} r="46" />
          <circle cx={cx} cy={cy} r="24" />
          <line x1={cx} y1={cy - 70} x2={cx} y2={cy + 70} />
          <line x1={cx - 70} y1={cy} x2={cx + 70} y2={cy} />
        </g>

        <path d={waveform} className={styles.waveform} />
        <line x1="40" y1="610" x2="860" y2="610" className={styles.axis} />
        <line x1="40" y1="660" x2="860" y2="660" className={styles.axisFaint} />

        <g className={styles.readout}>
          <text x="40" y="690">SIGNAL / 0.42</text>
          <text x="450" y="690" textAnchor="middle">WORKING NOTES — 2026</text>
          <text x="860" y="690" textAnchor="end">EVIDENCE / OPEN</text>
        </g>
      </svg>

      <div className={styles.labels}>
        <span>Research / 002</span>
        <span>Areas of inquiry</span>
      </div>
    </div>
  )
}
