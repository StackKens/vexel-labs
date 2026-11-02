import styles from './article-cover.module.css'

type ArticleCoverProps = {
  category: string
  seed?: string
  className?: string
}

function variantFor(category: string) {
  const value = category.toLowerCase()
  if (value.includes('ai') || value.includes('ml')) return 'ai'
  if (value.includes('engineer')) return 'engineering'
  if (value.includes('research')) return 'research'
  if (value.includes('product')) return 'product'
  return 'technology'
}

function seedValue(seed: string) {
  let total = 0
  for (let index = 0; index < seed.length; index += 1) {
    total += seed.charCodeAt(index) * (index + 1)
  }
  return total % 24
}

export function ArticleCover({ category, seed = '', className = '' }: ArticleCoverProps) {
  const variant = variantFor(category)
  const rotation = seedValue(seed || category)

  return (
    <div className={`${styles.frame} ${className}`} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 800 500" role="presentation">
        <defs>
          <linearGradient id={`cover-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#101722" />
            <stop offset="100%" stopColor="#0a101a" />
          </linearGradient>
          <linearGradient id={`cover-line-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#477bff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#477bff" stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id={`cover-glow-${variant}`} cx="70%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#477bff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#080d16" stopOpacity="0" />
          </radialGradient>
          <pattern
            id={`cover-grid-${variant}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#293444" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect width="800" height="500" fill={`url(#cover-${variant})`} />
        <rect width="800" height="500" fill={`url(#cover-grid-${variant})`} opacity="0.45" />
        <rect width="800" height="500" fill={`url(#cover-glow-${variant})`} />

        {variant === 'ai' && (
          <g className={styles.ai} transform={`rotate(${rotation * 0.4} 520 250)`}>
            {[70, 130, 190, 250, 310].map((radius, index) => (
              <circle key={radius} cx="520" cy="250" r={radius} opacity={0.7 - index * 0.08} />
            ))}
            {[18, 92, 166, 228, 304].map((angle, index) => {
              const radians = (angle * Math.PI) / 180
              const radius = 130 + index * 38
              return (
                <g key={angle}>
                  <line
                    x1="520"
                    y1="250"
                    x2={520 + Math.cos(radians) * radius}
                    y2={250 + Math.sin(radians) * radius}
                    className={styles.hairline}
                  />
                  <circle
                    cx={520 + Math.cos(radians) * radius}
                    cy={250 + Math.sin(radians) * radius}
                    r="4"
                    className={styles.node}
                  />
                </g>
              )
            })}
            <circle cx="520" cy="250" r="12" className={styles.core} />
          </g>
        )}

        {variant === 'engineering' && (
          <g className={styles.engineering} transform={`translate(${rotation * 2} 0)`}>
            {Array.from({ length: 9 }, (_, index) => (
              <line
                key={index}
                x1={120 + index * 72}
                y1="80"
                x2={60 + index * 72}
                y2="430"
                opacity={0.35 + index * 0.04}
              />
            ))}
            <path d="M 120 250 H 700" className={styles.accentLine} />
            <path d="M 210 250 L 250 210 M 210 250 L 250 290" className={styles.accentLine} />
            <path d="M 610 250 L 570 210 M 610 250 L 570 290" className={styles.accentLine} />
            <rect x="300" y="170" width="200" height="160" className={styles.brace} />
          </g>
        )}

        {variant === 'research' && (
          <g className={styles.research} transform={`rotate(${rotation} 400 250)`}>
            {[60, 120, 180, 240].map((radius, index) => (
              <ellipse key={radius} cx="400" cy="250" rx={radius * 1.5} ry={radius * 0.68} opacity={0.7 - index * 0.12} />
            ))}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const radians = (angle * Math.PI) / 180
              return (
                <circle
                  key={angle}
                  cx={400 + Math.cos(radians) * 225}
                  cy={250 + Math.sin(radians) * 102}
                  r="3"
                  className={styles.node}
                />
              )
            })}
            <circle cx="400" cy="250" r="7" className={styles.core} />
          </g>
        )}

        {variant === 'product' && (
          <g className={styles.product}>
            <rect x="190" y="130" width="300" height="220" className={styles.panel} />
            <rect x="230" y="170" width="300" height="220" className={styles.panel} />
            <rect x="270" y="210" width="300" height="220" className={styles.panelActive} />
            <line x1="270" y1="250" x2="570" y2="250" className={styles.hairline} />
            <line x1="270" y1="290" x2="470" y2="290" className={styles.hairline} />
            <line x1="270" y1="330" x2="520" y2="330" className={styles.hairline} />
          </g>
        )}

        {variant === 'technology' && (
          <g className={styles.technology}>
            <ellipse cx="430" cy="300" rx="270" ry="120" opacity="0.5" />
            <ellipse cx="430" cy="300" rx="190" ry="84" opacity="0.6" />
            <ellipse cx="430" cy="300" rx="110" ry="48" opacity="0.7" />
            <line x1="430" y1="80" x2="430" y2="420" className={styles.hairline} />
            <line x1="120" y1="300" x2="740" y2="300" className={styles.hairline} />
            <circle cx="430" cy="300" r="8" className={styles.core} />
          </g>
        )}

        <line x1="0" y1="460" x2="800" y2="460" className={styles.rule} />
        <text x="28" y="478" className={styles.caption}>
          VEXEL / FIELD NOTES
        </text>
        <text x="772" y="478" textAnchor="end" className={styles.caption}>
          {category.toUpperCase()}
        </text>
      </svg>
    </div>
  )
}
