'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Search } from 'lucide-react'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
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
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      const matchesSearch = !query || [article.title, article.excerpt, article.category, ...(article.tags ?? [])].some((value) => value.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [articles, searchQuery, selectedCategory])

  const featuredVisible = featured && filteredArticles.some((article) => article.slug === featured.slug)
  const listArticles = featuredVisible ? filteredArticles.filter((article) => article.slug !== featured.slug) : filteredArticles

  return (
    <main className={styles.page}>
      <SiteHeader tone="dark" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Insights / field notes</p>
          <h1>Notes from<br /><em>the work.</em></h1>
          <p>Practical writing about software, product decisions, artificial intelligence, and the systems we are learning to build.</p>
        </div>
        <div className={styles.searchPanel}>
          <label htmlFor="insight-search">Search the archive</label>
          <div className={styles.searchBox}><Search size={17} aria-hidden="true" /><input id="insight-search" type="search" placeholder="Search articles" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} /></div>
          <span>{articles.length} notes in the archive</span>
        </div>
      </section>

      {featuredVisible && featured && (
        <section className={styles.featured}>
          <div className={styles.featuredLabel}>Featured note</div>
          <div className={styles.featuredGrid}>
            <div><span className={styles.category}>{featured.category}</span><h2>{featured.title}</h2></div>
            <div><p>{featured.excerpt}</p><div className={styles.articleMeta}><span>{featured.author.name}</span><span>{featured.readingTime} min read</span><time dateTime={featured.publishedDate}>{formatDate(featured.publishedDate)}</time></div><Link className={styles.readLink} href={`/insights/${featured.slug}`}>Read the note <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          </div>
        </section>
      )}

      <section className={styles.archive}>
        <div className={styles.archiveTop}><div><p className={styles.sectionLabel}>/ 01 — The archive</p><h2>Read the thinking<br /><em>behind the work.</em></h2></div><p className={styles.resultCount}>{filteredArticles.length} {filteredArticles.length === 1 ? 'note' : 'notes'}</p></div>
        <div className={styles.filters} role="group" aria-label="Filter insights by topic">{categories.map((category) => <button key={category} type="button" className={selectedCategory === category ? styles.filterActive : ''} onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category}>{category}</button>)}</div>
        {listArticles.length > 0 ? <div className={styles.articleList}>{listArticles.map((article, index) => <article className={styles.articleRow} key={article.slug}><span className={styles.articleIndex}>{String(index + 1).padStart(2, '0')}</span><div className={styles.articleContent}><div className={styles.articleMeta}><span className={styles.category}>{article.category}</span><time dateTime={article.publishedDate}>{formatDate(article.publishedDate, { year: 'numeric', month: 'short', day: 'numeric' })}</time></div><h3>{article.title}</h3><p>{article.excerpt}</p><div className={styles.articleBottom}><span>{article.author.name}</span><span>{article.readingTime} min read</span></div></div><Link className={styles.articleLink} href={`/insights/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowUpRight size={18} aria-hidden="true" /></Link></article>)}</div> : <div className={styles.empty}><h3>No notes found</h3><p>Try another search or return to the full archive.</p><button type="button" onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}>Clear filters</button></div>}
      </section>

      <section className={styles.perspective}><p className={styles.sectionLabel}>/ 02 — Perspective</p><div><h2>Technology is only valuable when it solves something real.</h2><p>We build from first principles, document what we learn, and share the thinking behind the products we create.</p><Link className={styles.textLink} href="/contact">Talk about a problem <ArrowUpRight size={16} aria-hidden="true" /></Link></div></section>
      <SiteFooter />
    </main>
  )
}
