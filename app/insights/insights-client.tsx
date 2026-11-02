'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import { PageShell } from '@/components/site/PageShell'
import { formatDate } from '@/lib/format-date'
import type { ArticleSummary } from '@/lib/insights-data'
import styles from '@/components/site/editorial.module.css'

type InsightsClientProps = {
  articles: ArticleSummary[]
  categories: string[]
  featured?: ArticleSummary
}

export default function InsightsClient({ articles, categories, featured }: InsightsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory
      const matchesSearch =
        !query ||
        [article.title, article.excerpt, article.category, ...(article.tags ?? [])].some((value) =>
          value.toLowerCase().includes(query)
        )
      return matchesCategory && matchesSearch
    })
  }, [articles, searchQuery, selectedCategory])

  const featuredVisible =
    featured && filteredArticles.some((article) => article.slug === featured.slug)
  const listArticles = featuredVisible
    ? filteredArticles.filter((article) => article.slug !== featured.slug)
    : filteredArticles

  return (
    <PageShell>
      <section className={styles.hero}>
        <p className={styles.kicker}>Insights</p>
        <h1 className={styles.title}>Notes from the work.</h1>
        <p className={styles.lede}>
          Practical writing about software, product decisions, artificial intelligence and the
          systems we are learning to build.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.toolbar}>
          <div className={styles.search}>
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              aria-label="Search insights"
              placeholder="Search notes"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
          <div className={styles.filters} role="group" aria-label="Filter insights by topic">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.filter} ${
                  selectedCategory === category ? styles.filterActive : ''
                }`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {featuredVisible && featured && (
          <div className={`${styles.card} ${styles.featuredNote}`}>
            <div className={styles.articleMeta}>
              <span>Featured note</span>
              <span>{featured.category}</span>
              <time dateTime={featured.publishedDate}>
                {formatDate(featured.publishedDate, { month: 'short', year: 'numeric' })}
              </time>
            </div>
            <h2 className={`${styles.h2} ${styles.featuredTitle}`}>
              <Link href={`/insights/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            <Link className={styles.textLink} href={`/insights/${featured.slug}`}>
              Read the note <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        )}

        {listArticles.length > 0 ? (
          <div className={styles.articleList}>
            {listArticles.map((article) => (
              <article className={styles.articleItem} key={article.slug}>
                <div>
                  <div className={styles.articleMeta}>
                    <span>{article.category}</span>
                    <time dateTime={article.publishedDate}>
                      {formatDate(article.publishedDate, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span>{article.readingTime} min read</span>
                  </div>
                  <h3>
                    <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.excerpt}</p>
                  <Link className={styles.textLink} href={`/insights/${article.slug}`}>
                    Read the note <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <h3>No notes found.</h3>
            <p>Try another search or return to the full archive.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.h2}>Technology is only valuable when it solves something real.</h2>
          <div className={styles.ctaActions}>
            <p>
              We build from first principles, document what we learn, and share the thinking behind
              the products we create.
            </p>
            <Link className={styles.textLink} href="/contact">
              Talk about a problem <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
