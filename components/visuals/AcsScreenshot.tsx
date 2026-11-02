import {
  BarChart3,
  CalendarCheck,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Users,
  Wallet,
} from 'lucide-react'
import styles from './acs-screenshot.module.css'

const nav = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Users, label: 'Students' },
  { icon: GraduationCap, label: 'Classes' },
  { icon: CalendarCheck, label: 'Attendance' },
  { icon: Wallet, label: 'Fees' },
  { icon: BarChart3, label: 'Reports' },
]

const bars = [58, 72, 64, 81, 76, 88, 83, 92, 86, 94, 90, 97]

const pupils = [
  { name: 'Amara Nwosu', id: 'ACS-2041', grade: 'Primary 4', status: 'Active' },
  { name: 'Tunde Balogun', id: 'ACS-2042', grade: 'Primary 2', status: 'Active' },
  { name: 'Zainab Musa', id: 'ACS-2043', grade: 'Primary 5', status: 'Pending' },
  { name: 'Kofi Mensah', id: 'ACS-2044', grade: 'Primary 3', status: 'Active' },
]

export function AcsScreenshot({ className = '' }: { className?: string }) {
  return (
    <div
      className={`${styles.frame} ${className}`}
      role="img"
      aria-label="Preview of the ACS school management dashboard showing enrolment, attendance and pupil records"
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

      <div className={styles.app} aria-hidden="true">
        <aside className={styles.sidebar}>
          <div className={styles.brand}>
            <span className={styles.logo}>acs</span>
            <span className={styles.brandName}>Academic Cloud</span>
          </div>
          <nav className={styles.nav}>
            {nav.map((item) => {
              const Icon = item.icon
              return (
                <span
                  key={item.label}
                  className={`${styles.navItem} ${item.active ? styles.navActive : ''}`}
                >
                  <Icon size={14} strokeWidth={1.7} />
                  {item.label}
                </span>
              )
            })}
          </nav>
          <div className={styles.sideFoot}>
            <span className={styles.avatar}>AO</span>
            <span className={styles.sideUser}>
              <strong>A. Okafor</strong>
              <small>Administrator</small>
            </span>
            <Settings size={13} strokeWidth={1.7} />
          </div>
        </aside>

        <div className={styles.main}>
          <header className={styles.topbar}>
            <div className={styles.greeting}>
              <small>St. Mary&apos;s Primary School</small>
              <strong>Good morning, Adaeze</strong>
            </div>
            <div className={styles.topActions}>
              <span className={styles.term}>Term 2 · 2025/26</span>
              <button className={styles.addButton} type="button" tabIndex={-1}>
                Add pupil
              </button>
            </div>
          </header>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>Enrolment</span>
              <strong>842</strong>
              <small className={styles.up}>+3.4% this term</small>
            </div>
            <div className={styles.stat}>
              <span>Attendance today</span>
              <strong>94.2%</strong>
              <small className={styles.up}>+1.8% vs last week</small>
            </div>
            <div className={styles.stat}>
              <span>Fees collected</span>
              <strong>78%</strong>
              <small>of term target</small>
            </div>
            <div className={styles.stat}>
              <span>Staff present</span>
              <strong>36 / 38</strong>
              <small>2 absent</small>
            </div>
          </div>

          <div className={styles.lower}>
            <div className={styles.chartCard}>
              <div className={styles.cardHead}>
                <div>
                  <strong>Attendance this term</strong>
                  <span>Daily average across all classes</span>
                </div>
                <span className={styles.legend}>
                  <i /> Present
                </span>
              </div>
              <div className={styles.chart}>
                {bars.map((height, index) => (
                  <span
                    key={index}
                    className={index === bars.length - 3 ? styles.barActive : styles.bar}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className={styles.chartAxis}>
                <span>Wk 1</span>
                <span>Wk 4</span>
                <span>Wk 8</span>
                <span>Wk 12</span>
              </div>
            </div>

            <div className={styles.todayCard}>
              <div className={styles.cardHead}>
                <div>
                  <strong>Today&apos;s register</strong>
                  <span>Updated 08:42</span>
                </div>
              </div>
              <div className={styles.todayRows}>
                <div>
                  <span>Present</span>
                  <strong>768</strong>
                </div>
                <div>
                  <span>Late</span>
                  <strong>30</strong>
                </div>
                <div>
                  <span>Absent</span>
                  <strong>44</strong>
                </div>
              </div>
              <div className={styles.progress}>
                <span style={{ width: '91%' }} />
              </div>
              <p className={styles.todayNote}>Primary 4 has the highest attendance this week.</p>
            </div>
          </div>

          <div className={styles.table}>
            <div className={styles.tableHead}>
              <span>Recent pupils</span>
              <span>View all</span>
            </div>
            <div className={styles.tableGrid}>
              <span className={styles.th}>Pupil</span>
              <span className={styles.th}>ID</span>
              <span className={styles.th}>Class</span>
              <span className={styles.th}>Status</span>
              {pupils.map((pupil) => (
                <span className={styles.row} key={pupil.id}>
                  <span className={styles.pupilName}>
                    <span className={styles.pupilAvatar}>{pupil.name.slice(0, 1)}</span>
                    {pupil.name}
                  </span>
                  <span>{pupil.id}</span>
                  <span>{pupil.grade}</span>
                  <span
                    className={`${styles.status} ${
                      pupil.status === 'Pending' ? styles.pending : ''
                    }`}
                  >
                    {pupil.status}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
