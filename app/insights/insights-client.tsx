'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { ArticleCover } from '@/components/visuals/ArticleCover'
import { formatDate } from '@/lib/format-date'
import type { ArticleSummary } from '@/lib/insights-data'
import styles from './insights.module.css'

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
    <main id="top">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow rise">Insights / Field notes</p>
            <h1 className={`${styles.heroTitle} rise rise-delay-1`}>Notes from the work.</h1>
            <p className={`${styles.heroLede} rise rise-delay-2`}>
              Practical writing about software, product decisions, artificial intelligence and the
              systems we are learning to build.
            </p>
          </div>

          <div className={`${styles.heroAside} rise rise-delay-2`}>
            <label htmlFor="insight-search">Search the archive</label>
            <div className={styles.searchBox}>
              <Search size={16} aria-hidden="true" />
              <input
                id="insight-search"
                type="search"
                placeholder="Search notes"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
            <span className={styles.searchCount}>
              {articles.length} {articles.length === 1 ? 'note' : 'notes'} in the archive
            </span>
          </div>
        </div>
      </section>

      {featuredVisible && featured && (
        <section className={`${styles.featured} theme-light`}>
          <div className="container">
            <div className={styles.featuredTop}>
              <span>Featured note</span>
              <span>{formatDate(featured.publishedDate)}</span>
            </div>

            <div className={styles.featuredGrid}>
              <Link
                className={styles.featuredVisual}
                href={`/insights/${featured.slug}`}
                aria-label={`Read ${featured.title}`}
              >
                <ArticleCover category={featured.category} seed={featured.slug} />
              </Link>

              <div className={styles.featuredCopy}>
                <span className={styles.category}>{featured.category}</span>
                <h2>
                  <Link href={`/insights/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p>{featured.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <span>{featured.author.name}</span>
                  <span>{featured.readingTime} min read</span>
                  <time dateTime={featured.publishedDate}>
                    {formatDate(featured.publishedDate, { month: 'short', year: 'numeric' })}
                  </time>
                </div>
                <Link className="text-link" href={`/insights/${featured.slug}`}>
                  Read the note <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`${styles.archive} theme-light`} id="archive">
        <div className="container">
          <div className={styles.archiveHead}>
            <div>
              <p className="eyebrow">The archive</p>
              <h2 className="display">Read the thinking behind the work.</h2>
            </div>
            <p className={styles.resultCount}>
              {filteredArticles.length} {filteredArticles.length === 1 ? 'note' : 'notes'}
            </p>
          </div>

          <div className={styles.filters} role="group" aria-label="Filter insights by topic">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={selectedCategory === category ? styles.filterActive : undefined}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {listArticles.length > 0 ? (
            <div className={styles.articleList}>
              {listArticles.map((article, index) => (
                <article className={styles.articleRow} key={article.slug}>
                  <span className={styles.articleIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.articleContent}>
                    <div className={styles.articleMeta}>
                      <span className={styles.category}>{article.category}</span>
                      <time dateTime={article.publishedDate}>
                        {formatDate(article.publishedDate, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <h3>
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p>{article.excerpt}</p>
                    <div className={styles.articleBottom}>
                      <span>{article.author.name}</span>
                      <span>{article.readingTime} min read</span>
                    </div>
                  </div>
                  <Link
                    className={styles.articleLink}
                    href={`/insights/${article.slug}`}
                    aria-label={`Read ${article.title}`}
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
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
        </div>
      </section>

      <section className={styles.perspective}>
        <div className={`container ${styles.perspectiveInner}`}>
          <div>
            <p className="eyebrow">Perspective</p>
            <h2 className="display">Technology is only valuable when it solves something real.</h2>
          </div>
          <div className={styles.perspectiveCopy}>
            <p>
              We build from first principles, document what we learn, and share the thinking behind
              the products we create.
            </p>
            <Link className="text-link" href="/contact">
              Talk about a problem <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
