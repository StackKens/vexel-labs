'use client'

import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarCheck,
  CalendarRange,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  CreditCard,
  FileCheck,
  FileText,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  Megaphone,
  Menu,
  Monitor,
  School,
  Smartphone,
  Sparkles,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UsersRound,
  Wallet,
  X,
} from 'lucide-react'
import { ACS_PLATFORM_URL } from '@/lib/links'
import { AcsMobileDashboard } from './AcsMobileDashboard'
import styles from './acs-screenshot.module.css'

type NavItem = {
  icon: LucideIcon
  label: string
  ai?: boolean
}

type RangeKey = 'week' | 'month' | 'term'

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard' },
      { icon: Sparkles, label: 'AI', ai: true },
    ],
  },
  {
    label: 'School',
    items: [
      { icon: Users, label: 'Pupils' },
      { icon: UserPlus, label: 'Admissions' },
      { icon: School, label: 'Classes' },
      { icon: HeartHandshake, label: 'Parents & Guardians' },
      { icon: UsersRound, label: 'Staff' },
    ],
  },
  {
    label: 'Academics',
    items: [
      { icon: CalendarRange, label: 'Academic Years' },
      { icon: BookOpen, label: 'Subjects' },
    ],
  },
  {
    label: 'Monitoring',
    items: [
      { icon: CalendarCheck, label: 'Attendance' },
      { icon: ClipboardCheck, label: 'Assessments' },
      { icon: FileCheck, label: 'Examinations' },
    ],
  },
  {
    label: 'Finance',
    items: [
      { icon: Wallet, label: 'Finance' },
      { icon: CreditCard, label: 'Payments' },
      { icon: BarChart3, label: 'Reports' },
    ],
  },
  {
    label: 'Communication',
    items: [
      { icon: Megaphone, label: 'Announcements' },
      { icon: Bell, label: 'Notifications' },
    ],
  },
]

const summary = [
  {
    label: 'Pupils',
    value: '842',
    detail: '+3.4% this term',
    icon: Users,
    trend: true,
  },
  {
    label: 'Attendance',
    value: '94.2%',
    detail: '+1.8% vs last week',
    icon: CalendarCheck,
    trend: true,
  },
  {
    label: 'Needs Attention',
    value: '12',
    detail: '4 fee balances · 8 records',
    icon: AlertCircle,
    trend: false,
  },
  {
    label: 'Average Performance',
    value: '78%',
    detail: '+2.1% vs last term',
    icon: GraduationCap,
    trend: true,
  },
]

const rangeLabels: Record<RangeKey, string> = {
  week: 'This week',
  month: 'This month',
  term: 'This term',
}

const attendanceRanges: Record<RangeKey, { labels: string[]; values: number[] }> = {
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    values: [93, 94, 92, 95, 94, 96, 95, 97, 94, 92],
  },
  month: {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    values: [92, 93, 94, 93, 95, 96, 95, 94, 96, 95],
  },
  term: {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [91, 92, 93, 94, 94, 95, 96, 95, 96, 97],
  },
}

const enrolment = [
  { name: 'Primary 1', value: 96 },
  { name: 'Primary 2', value: 104 },
  { name: 'Primary 3', value: 118 },
  { name: 'Primary 4', value: 112 },
  { name: 'Primary 5', value: 126 },
  { name: 'Primary 6', value: 132 },
  { name: 'Primary 7', value: 154 },
]

const performance = [
  { name: 'Primary 1', value: 74 },
  { name: 'Primary 2', value: 76 },
  { name: 'Primary 3', value: 79 },
  { name: 'Primary 4', value: 77 },
  { name: 'Primary 5', value: 80 },
  { name: 'Primary 6', value: 81 },
  { name: 'Primary 7', value: 79 },
]

const actions = [
  { icon: UserCheck, label: 'Mark Attendance' },
  { icon: Users, label: 'View Pupils' },
  { icon: Wallet, label: 'Finance' },
  { icon: GraduationCap, label: 'Performance' },
  { icon: FileText, label: 'Reports' },
  { icon: Megaphone, label: 'Announcements' },
]

const academicContext = [
  { label: 'Year', value: '2025/26' },
  { label: 'Term', value: 'Term 2' },
  { label: 'Number of Classes', value: '14' },
  { label: 'Streams', value: '3' },
]

const maxEnrolment = Math.max(...enrolment.map((item) => item.value))

export function AcsScreenshot({ className = '' }: { className?: string }) {
  const [navOpen, setNavOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [device, setDevice] = useState<'desktop' | 'phone'>('desktop')
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [range, setRange] = useState<RangeKey>('week')
  const [activeAction, setActiveAction] = useState('')

  useEffect(() => {
    if (device === 'phone') {
      setExpanded(true)
    }
  }, [device])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1000px)')
    const expandOnMobile = () => {
      if (mobileQuery.matches) {
        setExpanded(true)
      }
    }

    expandOnMobile()
    mobileQuery.addEventListener('change', expandOnMobile)

    return () => mobileQuery.removeEventListener('change', expandOnMobile)
  }, [])

  const attendance = attendanceRanges[range]
  const activeNavItem = navGroups
    .flatMap((group) => group.items)
    .find((item) => item.label === activeNav)
  const ActiveNavIcon = activeNavItem?.icon ?? LayoutDashboard

  return (
    <div className={`${styles.preview} ${className}`}>
      <div className={styles.previewBar}>
        <span className={styles.previewStatus}>
          <i />
          Interactive preview
        </span>
        <div className={styles.previewTools}>
          <div className={styles.deviceSwitch} role="group" aria-label="Preview device">
            <button
              type="button"
              className={device === 'desktop' ? styles.deviceActive : ''}
              onClick={() => setDevice('desktop')}
              aria-pressed={device === 'desktop'}
            >
              <Monitor size={13} aria-hidden="true" />
              Desktop
            </button>
            <button
              type="button"
              className={device === 'phone' ? styles.deviceActive : ''}
              onClick={() => setDevice('phone')}
              aria-pressed={device === 'phone'}
            >
              <Smartphone size={13} aria-hidden="true" />
              Phone
            </button>
          </div>
          <a
            className={styles.liveLink}
            href={ACS_PLATFORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open live platform
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        id="acs-demo-viewport"
        className={`${styles.viewport} ${expanded ? styles.viewportExpanded : ''} ${
          device === 'phone' ? styles.phoneViewport : ''
        }`}
      >
        <div className={styles.desktopPanel}>
          <div
            className={styles.frame}
            role="group"
            aria-label="ACS school management dashboard preview"
          >
            <div className={styles.chrome}>
            <span className={styles.dots} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <a
              className={styles.url}
              href={ACS_PLATFORM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the live ACS platform"
            >
              <span className={styles.lock} aria-hidden="true" />
              acs-website.onrender.com
              <ArrowUpRight size={10} aria-hidden="true" />
            </a>
            <span className={styles.chromeLabel} aria-hidden="true">
              ACS
            </span>
          </div>

      <div className={styles.app}>
        <button
          type="button"
          className={`${styles.navBackdrop} ${navOpen ? styles.navBackdropOpen : ''}`}
          onClick={() => setNavOpen(false)}
          aria-label="Close navigation"
          tabIndex={navOpen ? 0 : -1}
        />
        <aside
          id="acs-demo-nav"
          className={`${styles.sidebar} ${navOpen ? styles.sidebarOpen : ''}`}
          aria-label="ACS navigation"
        >
          <div className={styles.brand}>
            <span className={styles.logo}>acs</span>
            <span className={styles.brandMeta}>
              <strong>Academic Cloud</strong>
              <small>School management</small>
            </span>
          </div>

          <nav className={styles.nav}>
            {navGroups.map((group) => (
              <div className={styles.navGroup} key={group.label}>
                <span className={styles.navGroupLabel}>{group.label}</span>
                <div className={styles.navList}>
                  {group.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.label}
                        type="button"
                        className={`${styles.navItem} ${
                          activeNav === item.label ? styles.navActive : ''
                        } ${item.ai ? styles.navAi : ''}`}
                        onClick={() => {
                          setActiveNav(item.label)
                          setNavOpen(false)
                        }}
                        aria-pressed={activeNav === item.label}
                      >
                        <Icon size={13} strokeWidth={1.7} />
                        <span>{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <div className={styles.main}>
          <header className={styles.topbar}>
            <div className={styles.topbarLeft}>
              <button
                type="button"
                className={styles.mobileMenu}
                onClick={() => setNavOpen((open) => !open)}
                aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={navOpen}
                aria-controls="acs-demo-nav"
              >
                {navOpen ? (
                  <X size={15} strokeWidth={1.8} />
                ) : (
                  <Menu size={15} strokeWidth={1.8} />
                )}
              </button>
              <span className={styles.schoolMark}>SM</span>
              <span className={styles.schoolMeta}>
                <strong>St. Mary&apos;s Primary School</strong>
                <small>Kampala, Uganda</small>
              </span>
            </div>

            <div className={styles.topbarRight}>
              <span className={styles.welcome}>
                <small>Welcome back</small>
                <strong>Alex Morgan</strong>
              </span>
              <span className={styles.role}>Administrator</span>
              <span className={styles.bell}>
                <Bell size={14} strokeWidth={1.7} />
                <i />
              </span>
              <span className={styles.avatar}>AM</span>
            </div>
          </header>

          {activeNav === 'Dashboard' ? (
            <div className={styles.content}>
              <div className={styles.dashboardHeader}>
              <div>
                <h2>Good afternoon, Alex</h2>
                <p>Here&apos;s the latest across your school.</p>
              </div>
              <span className={styles.termChip}>
                <i />
                Term 2 · 2025/26
              </span>
            </div>

            <div className={styles.statGrid}>
              {summary.map((item) => {
                const Icon = item.icon
                return (
                  <div className={styles.stat} key={item.label}>
                    <div className={styles.statTop}>
                      <span className={styles.statLabel}>{item.label}</span>
                      <span className={styles.statIcon}>
                        <Icon size={13} strokeWidth={1.7} />
                      </span>
                    </div>
                    <strong className={styles.statValue}>{item.value}</strong>
                    <span className={styles.statDetail}>
                      {item.trend ? <TrendingUp size={9} strokeWidth={2} /> : null}
                      {item.detail}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <div className={styles.panelTitle}>
                  <strong>Attendance Overview</strong>
                  <span>Daily attendance across all classes</span>
                </div>
                <div className={styles.filters}>
                  {(Object.keys(rangeLabels) as RangeKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      className={range === key ? styles.filterActive : ''}
                      onClick={() => setRange(key)}
                      aria-pressed={range === key}
                    >
                      {rangeLabels[key]}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.attendanceChart}>
                <div className={styles.yAxis}>
                  <span>100</span>
                  <span>95</span>
                  <span>90</span>
                  <span>85</span>
                  <span>80</span>
                </div>
                <div className={styles.plot}>
                  <div className={styles.gridLines}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className={styles.targetLine} />
                  <div className={styles.bars}>
                    {attendance.values.map((value, index) => (
                      <span
                        key={`${attendance.labels[index]}-${index}`}
                        className={`${styles.bar} ${
                          index === attendance.values.length - 2 ? styles.barActive : ''
                        }`}
                        style={{ height: `${((value - 80) / 20) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.xAxis}>
                {attendance.labels.map((label, index) => (
                  <span key={`${label}-${index}`}>{label}</span>
                ))}
              </div>
              <div className={styles.chartFoot}>
                <span className={styles.legendDot} />
                Attendance rate
                <span className={styles.targetLegend}>Target 95%</span>
              </div>
            </div>

            <div className={styles.analyticsGrid}>
              <div className={styles.panel}>
                <div className={styles.panelHead}>
                  <div className={styles.panelTitle}>
                    <strong>Enrolment by Class</strong>
                    <span>842 pupils across 7 year groups</span>
                  </div>
                </div>
                <div className={styles.metricList}>
                  {enrolment.map((item) => (
                    <div className={styles.metricRow} key={item.name}>
                      <span className={styles.metricName}>{item.name}</span>
                      <span className={styles.metricTrack}>
                        <span
                          className={styles.metricFill}
                          style={{ width: `${(item.value / maxEnrolment) * 100}%` }}
                        />
                      </span>
                      <span className={styles.metricValue}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.panel}>
                <div className={styles.panelHead}>
                  <div className={styles.panelTitle}>
                    <strong>Class Performance</strong>
                    <span>Average score by class</span>
                  </div>
                  <span className={styles.avgBadge}>78% avg</span>
                </div>
                <div className={styles.metricList}>
                  {performance.map((item) => (
                    <div className={styles.metricRow} key={item.name}>
                      <span className={styles.metricName}>{item.name}</span>
                      <span className={styles.metricTrack}>
                        <span
                          className={`${styles.metricFill} ${styles.metricFillSoft}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </span>
                      <span className={styles.metricValue}>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <div className={styles.panelTitle}>
                  <strong>Quick Actions</strong>
                  <span>Common tasks for the school day</span>
                </div>
              </div>
              <div className={styles.actionsGrid}>
                {actions.map((action) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={action.label}
                      type="button"
                      className={`${styles.action} ${
                        activeAction === action.label ? styles.actionActive : ''
                      }`}
                      onClick={() => setActiveAction(action.label)}
                      aria-pressed={activeAction === action.label}
                    >
                      <span className={styles.actionIcon}>
                        <Icon size={12} strokeWidth={1.7} />
                      </span>
                      <span className={styles.actionLabel}>{action.label}</span>
                    </button>
                  )
                })}
              </div>
              {activeAction ? (
                <p className={styles.actionNote}>
                  {activeAction} is ready in the live platform.{' '}
                  <a href={ACS_PLATFORM_URL} target="_blank" rel="noreferrer">
                    Open it
                    <ArrowUpRight size={11} aria-hidden="true" />
                  </a>
                </p>
              ) : null}
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <div className={styles.panelTitle}>
                  <strong>Academic Context</strong>
                  <span>Current session</span>
                </div>
              </div>
              <div className={styles.contextGrid}>
                {academicContext.map((item) => (
                  <div className={styles.contextItem} key={item.label}>
                    <span className={styles.contextLabel}>{item.label}</span>
                    <strong className={styles.contextValue}>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.moduleView}>
                <span className={styles.moduleIcon}>
                  <ActiveNavIcon size={22} strokeWidth={1.7} />
                </span>
                <p className={styles.moduleKicker}>ACS workspace</p>
                <h2>{activeNav}</h2>
                <p className={styles.moduleCopy}>
                  The {activeNav} workspace is part of the live ACS platform. Open it to see the
                  full records, actions and workflow.
                </p>
                <div className={styles.moduleActions}>
                  <a
                    className={styles.moduleLink}
                    href={ACS_PLATFORM_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open {activeNav} in the live platform
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className={styles.moduleBack}
                    onClick={() => setActiveNav('Dashboard')}
                  >
                    Back to dashboard
                  </button>
                </div>
              </div>
            </div>
          )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mobilePanel}>
          <div
            className={styles.frame}
            role="group"
            aria-label="ACS mobile dashboard preview"
          >
            <AcsMobileDashboard />
          </div>
        </div>

        {!expanded ? (
          <div className={styles.fade}>
        <button
          type="button"
          className={styles.expandButton}
          onClick={() => setExpanded(true)}
          aria-expanded={false}
          aria-controls="acs-demo-viewport"
        >
          Show full platform
          <ChevronDown size={14} aria-hidden="true" />
        </button>
      </div>
    ) : null}
      </div>
      {expanded ? (
        <div className={styles.collapseRow}>
          <button
            type="button"
            className={styles.collapseButton}
            onClick={() => setExpanded(false)}
            aria-expanded
            aria-controls="acs-demo-viewport"
          >
            Show less
            <ChevronUp size={14} aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  )
}
