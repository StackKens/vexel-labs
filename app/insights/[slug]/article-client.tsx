'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { ArticleCover } from '@/components/visuals/ArticleCover'
import { formatDate } from '@/lib/format-date'
import type { Article, ArticleSummary } from '@/lib/insights-data'
import styles from './article.module.css'

type ArticleClientProps = {
  article: Article
  related: ArticleSummary[]
}

function renderInlineMarkdown(value: string) {
  const parts = value.split(/(\*\*.*?\*\*|`.*?`)/g).filter(Boolean)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>
    }
    return <span key={index}>{part}</span>
  })
}

function renderBlock(block: string, index: number) {
  const value = block.trim()
  if (!value || value.startsWith('# ')) return null

  if (value.startsWith('## ')) return <h2 key={index}>{value.substring(3)}</h2>

  const lines = value.split('\n')
  if (lines.every((line) => /^\d+\.\s/.test(line.trim()))) {
    return (
      <ol key={index}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>
            {renderInlineMarkdown(line.trim().replace(/^\d+\.\s/, ''))}
          </li>
        ))}
      </ol>
    )
  }

  if (lines.every((line) => /^- /.test(line.trim()))) {
    return (
      <ul key={index}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{renderInlineMarkdown(line.trim().replace(/^- /, ''))}</li>
        ))}
      </ul>
    )
  }

  return <p key={index}>{renderInlineMarkdown(value)}</p>
}

export default function ArticleClient({ article, related }: ArticleClientProps) {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      setReadingProgress(
        scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0
      )
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <main className={styles.page} id="top">
      <div
        className={styles.progress}
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(readingProgress)}
      />
      <SiteHeader />

      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.kicker}>
            <Link href="/insights">Insights</Link>
            <span>{article.category}</span>
            <span>{article.readingTime} min read</span>
          </div>
          <h1>{article.title}</h1>
          <p className={styles.subtitle}>{article.excerpt}</p>
          <div className={styles.byline}>
            <div>
              <strong>{article.author.name}</strong>
              <span>{article.author.role}</span>
            </div>
            <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
          </div>
        </div>

        <div className={`container ${styles.cover}`}>
          <ArticleCover category={article.category} seed={article.slug} />
        </div>
      </header>

      <section className={`${styles.body} theme-light`}>
        <div className={`container ${styles.bodyGrid}`}>
          <aside className={styles.rail}>
            <div>
              <span>Written by</span>
              <strong>{article.author.name}</strong>
              <p>{article.author.role}</p>
            </div>
            <div>
              <span>Published</span>
              <strong>
                <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
              </strong>
            </div>
            <div>
              <span>Reading time</span>
              <strong>{article.readingTime} minutes</strong>
            </div>
            {article.tags && article.tags.length > 0 && (
              <div>
                <span>Topics</span>
                <ul className={styles.tags}>
                  {article.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <article className={`${styles.content} prose`}>
            {article.content.split('\n\n').map(renderBlock)}
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className={`${styles.related} theme-light`}>
          <div className="container">
            <div className={styles.relatedHead}>
              <div>
                <p className="eyebrow">Continue reading</p>
                <h2 className="display-sm">More from the archive.</h2>
              </div>
              <Link className="text-link" href="/insights">
                All insights <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <article key={item.slug}>
                  <div className={styles.relatedMeta}>
                    <span>{item.category}</span>
                    <span>{item.readingTime} min read</span>
                  </div>
                  <h3>
                    <Link href={`/insights/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p>{item.excerpt}</p>
                  <Link className={styles.relatedLink} href={`/insights/${item.slug}`}>
                    Read the note <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Work with us</p>
            <h2 className="display">A problem worth thinking through.</h2>
          </div>
          <div className={styles.ctaActions}>
            <p>
              If the questions in this note overlap with something you are building, we would like
              to hear about it.
            </p>
            <Link className="text-link" href="/contact">
              Contact our team <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
