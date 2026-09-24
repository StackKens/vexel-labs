'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
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
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>
    return <span key={index}>{part}</span>
  })
}

function renderBlock(block: string, index: number) {
  const value = block.trim()
  if (!value || value.startsWith('# ')) return null

  if (value.startsWith('## ')) return <h2 key={index}>{value.substring(3)}</h2>

  const lines = value.split('\n')
  if (lines.every((line) => /^\d+\.\s/.test(line.trim()))) {
    return <ol key={index}>{lines.map((line, lineIndex) => <li key={lineIndex}>{renderInlineMarkdown(line.trim().replace(/^\d+\.\s/, ''))}</li>)}</ol>
  }

  if (lines.every((line) => /^- /.test(line.trim()))) {
    return <ul key={index}>{lines.map((line, lineIndex) => <li key={lineIndex}>{renderInlineMarkdown(line.trim().replace(/^- /, ''))}</li>)}</ul>
  }

  return <p key={index}>{renderInlineMarkdown(value)}</p>
}

export default function ArticleClient({ article, related }: ArticleClientProps) {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setReadingProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0)
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
    <main className={styles.page}>
      <div className={styles.progress} style={{ width: `${readingProgress}%` }} role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(readingProgress)} />
      <SiteHeader tone="light" />

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <div className={styles.articleKicker}><span>{article.category}</span><span>{article.readingTime} min read</span></div>
          <h1>{article.title}</h1>
          <p className={styles.subtitle}>{article.excerpt}</p>
          <div className={styles.byline}><div><strong>{article.author.name}</strong><span>{article.author.role}</span></div><time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time></div>
        </header>

        <div className={styles.articleBody}><div className={styles.articleContent}>{article.content.split('\n\n').map(renderBlock)}</div></div>

        {article.tags && article.tags.length > 0 && <div className={styles.tags}><span>Topics</span><div>{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>}

        {related.length > 0 && <section className={styles.related}><p className={styles.sectionLabel}>Continue reading</p><div className={styles.relatedGrid}>{related.map((item) => <article key={item.slug}><span>{item.category}</span><h2>{item.title}</h2><p>{item.excerpt}</p><Link href={`/insights/${item.slug}`}>Read more <ArrowUpRight size={15} aria-hidden="true" /></Link></article>)}</div></section>}
      </article>

      <section className={styles.back}><div><p className={styles.sectionLabel}>More from Vexel Labs</p><h2>Keep following<br /><em>the thinking.</em></h2><Link className={styles.textLink} href="/insights">Back to insights <ArrowDownRight size={16} aria-hidden="true" /></Link></div></section>
      <SiteFooter />
    </main>
  )
}
