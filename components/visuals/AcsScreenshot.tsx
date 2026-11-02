'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  AlertCircle,
  BarChart3,
  Bell,
  BookOpen,
  CalendarCheck,
  CalendarRange,
  ClipboardCheck,
  CreditCard,
  FileCheck,
  FileText,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  Megaphone,
  Menu,
  School,
  Sparkles,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UsersRound,
  Wallet,
  X,
} from 'lucide-react'
import styles from './acs-screenshot.module.css'

type NavItem = {
  icon: LucideIcon
  label: string
  active?: boolean
  ai?: boolean
}

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', active: true },
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

const attendance = [
  { day: 'Mon', value: 93 },
  { day: 'Tue', value: 94 },
  { day: 'Wed', value: 92 },
  { day: 'Thu', value: 95 },
  { day: 'Fri', value: 94 },
  { day: 'Mon', value: 96 },
  { day: 'Tue', value: 95 },
  { day: 'Wed', value: 97 },
  { day: 'Thu', value: 94 },
  { day: 'Fri', value: 92 },
]

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

  return (
    <div
      className={`${styles.frame} ${className}`}
      role="group"
      aria-label="ACS school management dashboard preview"
    >
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>
          <span className={styles.lock} />
          app.acs.vexellabs.com
        </span>
        <span className={styles.chromeLabel}>ACS</span>
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
                      <span
                        key={item.label}
                        className={`${styles.navItem} ${item.active ? styles.navActive : ''} ${
                          item.ai ? styles.navAi : ''
                        }`}
                      >
                        <Icon size={13} strokeWidth={1.7} />
                        <span>{item.label}</span>
                      </span>
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
                  <span className={styles.filterActive}>This week</span>
                  <span>This month</span>
                  <span>This term</span>
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
                    {attendance.map((point, index) => (
                      <span
                        key={`${point.day}-${index}`}
                        className={`${styles.bar} ${index === attendance.length - 2 ? styles.barActive : ''}`}
                        style={{ height: `${((point.value - 80) / 20) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.xAxis}>
                {attendance.map((point, index) => (
                  <span key={`${point.day}-${index}`}>{point.day}</span>
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
                    <span className={styles.action} key={action.label}>
                      <span className={styles.actionIcon}>
                        <Icon size={12} strokeWidth={1.7} />
                      </span>
                      <span className={styles.actionLabel}>{action.label}</span>
                    </span>
                  )
                })}
              </div>
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
        </div>
      </div>
    </div>
  )
}
