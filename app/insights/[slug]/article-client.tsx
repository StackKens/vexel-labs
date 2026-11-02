import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { formatDate } from '@/lib/format-date'
import type { Article, ArticleSummary } from '@/lib/insights-data'
import styles from '@/components/site/editorial.module.css'

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
  return (
    <PageShell>
      <header className={styles.articleHeader}>
        <div className={styles.articleHeaderInner}>
          <div className={styles.articleMeta}>
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
      </header>

      <section className={styles.section}>
        <article className={styles.prose}>
          {article.content.split('\n\n').map(renderBlock)}
        </article>
      </section>

      {related.length > 0 && (
        <section className={styles.alt}>
          <div className={styles.altInner}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.kicker}>Continue reading</p>
                <h2 className={styles.h2}>More from the archive.</h2>
              </div>
              <Link className={styles.textLink} href="/insights">
                All insights <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.grid3}>
              {related.map((item) => (
                <article key={item.slug}>
                  <div className={styles.articleMeta}>
                    <span>{item.category}</span>
                    <span>{item.readingTime} min read</span>
                  </div>
                  <h3 className={styles.subhead}>
                    <Link href={`/insights/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className={styles.featuredExcerpt}>{item.excerpt}</p>
                  <Link className={styles.textLink} href={`/insights/${item.slug}`}>
                    Read the note <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>A problem worth thinking through.</h2>
          <div className={styles.ctaActions}>
            <p>
              If the questions in this note overlap with something you are building, we would like
              to hear about it.
            </p>
            <Link className={styles.textLink} href="/contact">
              Contact our team <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
