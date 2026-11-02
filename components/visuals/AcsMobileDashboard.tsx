'use client'

import { useState } from 'react'
import {
  AlertCircle,
  Bell,
  CalendarCheck,
  GraduationCap,
  House,
  MoreHorizontal,
  Users,
  Wallet,
} from 'lucide-react'
import styles from './acs-mobile-dashboard.module.css'

type RangeKey = 'week' | 'month' | 'term'

const summaryCards = [
  {
    label: 'Pupils',
    value: '1',
    detail: 'Across 8 classes',
    icon: Users,
    tone: 'blue',
  },
  {
    label: 'Attendance',
    value: '100.0%',
    detail: 'Across recorded sessions',
    icon: CalendarCheck,
    tone: 'green',
  },
  {
    label: 'Needs Attention',
    value: '0',
    detail: 'Low attendance or declining',
    icon: AlertCircle,
    tone: 'orange',
  },
  {
    label: 'Avg Performance',
    value: '0%',
    detail: 'All subjects, this term',
    icon: GraduationCap,
    tone: 'yellow',
  },
]

const rangeLabels: Record<RangeKey, string> = {
  week: 'This week',
  month: 'This month',
  term: 'This term',
}

const attendanceRanges: Record<RangeKey, { labels: string[]; values: number[] }> = {
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    values: [100, 100, 100, 100],
  },
  month: {
    labels: ['19 Oct', '20 Oct', '23 Oct', '26 Oct'],
    values: [100, 100, 100, 100],
  },
  term: {
    labels: ['Sep', 'Oct', 'Nov', 'Dec'],
    values: [100, 100, 100, 100],
  },
}

const navItems = [
  { label: 'Home', icon: House },
  { label: 'Pupils', icon: Users },
  { label: 'Attendance', icon: CalendarCheck },
  { label: 'Finance', icon: Wallet },
  { label: 'More', icon: MoreHorizontal },
]

function buildChart(values: number[]) {
  const points = values.map((value, index) => {
    const x = 2 + (index / Math.max(values.length - 1, 1)) * 96
    const y = (1 - value / 100) * 100
    return { x, y }
  })
  const line = points.map((point, index) => `${index === 0 ? 'M' : 'L'}${point.x},${point.y}`).join(' ')
  const area = `${line} L${points[points.length - 1].x},100 L${points[0].x},100 Z`
  return { points, line, area }
}

export function AcsMobileDashboard() {
  const [range, setRange] = useState<RangeKey>('month')
  const [activeNav, setActiveNav] = useState('Home')
  const attendance = attendanceRanges[range]
  const chart = buildChart(attendance.values)

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <span className={styles.logo} aria-label="St. Mary's Primary School">
          SM
        </span>
        <div className={styles.headerActions}>
          <button className={styles.bell} type="button" aria-label="Notifications">
            <Bell size={20} strokeWidth={1.7} />
          </button>
          <span className={styles.avatar} role="img" aria-label="Alex Morgan profile">
            AM
          </span>
        </div>
      </header>

      <div className={styles.scroll}>
        <main className={styles.content}>
          <section className={styles.welcome}>
            <h1>Good evening, Alex</h1>
            <p>Term 3 · 2026</p>
          </section>

          <section className={styles.summaryGrid} aria-label="School summary">
            {summaryCards.map((card) => {
              const Icon = card.icon
              return (
                <article className={styles.card} key={card.label}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardLabel}>{card.label}</span>
                    <span className={`${styles.cardIcon} ${styles[card.tone]}`}>
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                  </div>
                  <strong className={styles.cardValue}>{card.value}</strong>
                  <span className={styles.cardDetail}>{card.detail}</span>
                </article>
              )
            })}
          </section>

          <section className={styles.panel} aria-labelledby="attendance-overview">
            <div className={styles.panelHead}>
              <h2 id="attendance-overview">Attendance Overview</h2>
              <p>Overall attendance rate across all classes</p>
            </div>

            <div className={styles.tabs} role="group" aria-label="Attendance range">
              {(Object.keys(rangeLabels) as RangeKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={range === key ? styles.tabActive : ''}
                  onClick={() => setRange(key)}
                  aria-pressed={range === key}
                >
                  {rangeLabels[key]}
                </button>
              ))}
            </div>

            <div className={styles.chart}>
              <div className={styles.yAxis} aria-hidden="true">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              <div className={styles.plot}>
                <div className={styles.gridLines} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <svg
                  className={styles.lineChart}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Attendance rate at 100 percent"
                >
                  <defs>
                    <linearGradient id="acs-mobile-attendance-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>
                  <path d={chart.area} fill="url(#acs-mobile-attendance-fill)" />
                  <path
                    d={chart.line}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                    vectorEffect="non-scaling-stroke"
                  />
                  {chart.points.map((point, index) => (
                    <circle
                      key={`${point.x}-${point.y}-${index}`}
                      cx={point.x}
                      cy={point.y}
                      r="1.6"
                      fill="#ffffff"
                      stroke="#2563eb"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>
              </div>
            </div>
            <div className={styles.xAxis} aria-hidden="true">
              {attendance.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </section>
        </main>
      </div>

      <nav className={styles.bottomNav} aria-label="Mobile navigation">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              type="button"
              className={activeNav === item.label ? styles.navActive : ''}
              onClick={() => setActiveNav(item.label)}
              aria-current={activeNav === item.label ? 'page' : undefined}
            >
              <Icon size={20} strokeWidth={1.7} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
