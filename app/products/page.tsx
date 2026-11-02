import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteButton } from '@/components/site/SiteButton'
import { AcsScreenshot } from '@/components/visuals/AcsScreenshot'
import { AiScreenshot } from '@/components/visuals/AiScreenshot'
import styles from './products.module.css'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'VexelLabs products: Academic Cloud System, a school management platform, and VexelLabs AI, an applied intelligence workspace.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products — VexelLabs',
    description: 'Software with a clear job to do.',
    url: '/products',
  },
}

const shared = [
  {
    number: '01',
    title: 'A real job to do',
    text: 'Each product begins with a problem that people already live with, not a technology looking for a use.',
  },
  {
    number: '02',
    title: 'A system, not a feature',
    text: 'We build the whole working product: the interface, the data, the intelligence and the operations behind it.',
  },
  {
    number: '03',
    title: 'Room to become',
    text: 'The first release is a foundation. Products are designed to be improved in use, not frozen at launch.',
  },
]

export default function ProductsPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow rise">Products / VexelLabs</p>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>
              Software with a clear job to do.
            </h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              Two products, each built around a specific problem and given the room to become its
              own thing.
            </p>
          </div>

          <div className={`${styles.index} rise rise-delay-2`}>
            <div className={styles.indexHead}>
              <span>Product index</span>
              <span>02</span>
            </div>
            <Link href="/products/acs">
              <span>01</span>
              <div>
                <strong>Academic Cloud System</strong>
                <small>Education / School management</small>
              </div>
              <span className={styles.indexMark}>acs</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/products/ai">
              <span>02</span>
              <div>
                <strong>VexelLabs AI</strong>
                <small>Intelligence / Applied AI</small>
              </div>
              <span className={styles.indexMark}>VX</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <div className={styles.indexFoot}>
              <span>Designed and engineered in Lagos</span>
              <span>In development and use</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.acs} theme-light`}>
        <div className="container">
          <div className={styles.productTop}>
            <span>Product 01</span>
            <span>Education / School management</span>
            <span>Cloud platform</span>
          </div>

          <div className={styles.productHead}>
            <div>
              <span className={styles.productLogoAcs}>acs</span>
              <h2 className="display">Academic Cloud System</h2>
            </div>
            <p className="lede">
              A cloud-based school management platform for primary schools. Enrolment, attendance,
              fees and reporting in one dependable system.
            </p>
          </div>

          <div className={styles.productBody}>
            <div className={styles.productCopy}>
              <p className={styles.productLead}>
                Schools run on records that are often spread across registers, spreadsheets and
                memory. ACS brings the daily operation into one place.
              </p>
              <p>
                The platform follows the way a school actually works: pupils are enrolled, classes
                are registered, fees are recorded and terms are reported. It is built for
                administrators who need clarity, not another system to manage.
              </p>
              <div className={styles.featureList}>
                <div>
                  <span>01</span>
                  <div>
                    <h3>Pupil records and enrolment</h3>
                    <p>A single record for every pupil, from admission through each term.</p>
                  </div>
                </div>
                <div>
                  <span>02</span>
                  <div>
                    <h3>Attendance and reporting</h3>
                    <p>Daily registers, class-level views and term summaries that are ready to use.</p>
                  </div>
                </div>
                <div>
                  <span>03</span>
                  <div>
                    <h3>Fees, receipts and ledgers</h3>
                    <p>Record payments, issue receipts and see what is outstanding at a glance.</p>
                  </div>
                </div>
              </div>
              <Link className="text-link" href="/products/acs">
                Explore Academic Cloud System <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.productVisual}>
              <AcsScreenshot />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ai}>
        <div className="container">
          <div className={styles.productTop}>
            <span>Product 02</span>
            <span>Intelligence / Applied AI</span>
            <span>Workspace</span>
          </div>

          <div className={styles.productHead}>
            <div>
              <span className={styles.productLogoAi}>VX</span>
              <h2 className="display">VexelLabs AI</h2>
            </div>
            <p className="lede">
              An applied intelligence platform for teams building with models. Evaluation,
              retrieval and deployment in one considered workflow.
            </p>
          </div>

          <div className={`${styles.productBody} ${styles.productBodyReverse}`}>
            <div className={styles.productCopy}>
              <p className={styles.productLead}>
                Building with models is easy to start and hard to trust. VexelLabs AI makes the
                work between prototype and production visible.
              </p>
              <p>
                Teams can test prompts, ground answers in their own material and watch how a system
                behaves once real users arrive. The goal is not more surface area. It is a clearer
                path from an idea to an intelligent product that can be defended.
              </p>
              <div className={styles.featureList}>
                <div>
                  <span>01</span>
                  <div>
                    <h3>Prompt and evaluation workflows</h3>
                    <p>Compare approaches against a defined standard instead of a good demo.</p>
                  </div>
                </div>
                <div>
                  <span>02</span>
                  <div>
                    <h3>Grounded retrieval with citations</h3>
                    <p>Answers that point back to the material they came from.</p>
                  </div>
                </div>
                <div>
                  <span>03</span>
                  <div>
                    <h3>Production monitoring</h3>
                    <p>Latency, accuracy and cost visible in the same place as the work.</p>
                  </div>
                </div>
              </div>
              <Link className="text-link" href="/products/ai">
                Explore VexelLabs AI <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.productVisual}>
              <AiScreenshot />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.shared} theme-light`}>
        <div className="container">
          <div className={styles.sharedHead}>
            <div>
              <p className="eyebrow">Product principles</p>
              <h2 className="display">What every VexelLabs product shares.</h2>
            </div>
            <p className="lede">
              Different problems, the same standard of care for the system that carries them.
            </p>
          </div>

          <div className={styles.sharedList}>
            {shared.map((item) => (
              <div key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Work with us</p>
            <h2 className="display">A product of your own.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              If you are building something that needs to work in the real world, we would like to
              hear about it.
            </p>
            <div>
              <SiteButton href="/contact" variant="light">
                Contact our team
              </SiteButton>
              <Link className="text-link" href="/technology">
                How we build <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
