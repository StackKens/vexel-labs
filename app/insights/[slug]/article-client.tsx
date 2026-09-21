'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import type { Article } from '@/lib/insights-data'

interface ArticleClientProps {
  article: Article
  related: Article[]
  publishDate: Date
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

export default function ArticleClient({ article, related, publishDate }: ArticleClientProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setReadingProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="article-page">
      <div className="reading-progress" style={{ width: `${readingProgress}%` }} />
      
      <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="/" aria-label="Vexel Labs home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>Vexel<span className="brand-muted"> Labs</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/work">Work</a>
          <a href="/insights">Insights</a>
          <a href="/lab">Lab</a><a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/about" onClick={() => setMenuOpen(false)}>About</a><a href="/services" onClick={() => setMenuOpen(false)}>Services</a><a href="/work" onClick={() => setMenuOpen(false)}>Work</a><a href="/insights" onClick={() => setMenuOpen(false)}>Insights</a><a href="/lab" onClick={() => setMenuOpen(false)}>Lab</a><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a><a href="/contact" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight size={15} /></a></nav>}
      </header>

      <article className="article-container">
        <div className="article-header section-pad">
          <div className="article-header-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-divider">—</span>
            <span className="article-reading-time">{article.readingTime} min read</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-subtitle">{article.excerpt}</p>
          <div className="article-byline">
            <div className="byline-author">
              <span className="author-name">{article.author.name}</span>
              <span className="author-role">{article.author.role}</span>
            </div>
            <div className="byline-date">
              <time dateTime={article.publishedDate}>
                {publishDate.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
          </div>
        </div>

        <div className="article-body section-pad">
          <div className="article-content">
            {article.content.split('\n\n').map((block, idx) => {
              const paragraph = block.trim()
              if (!paragraph || paragraph.startsWith('# ')) return null
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx}>{paragraph.substring(3)}</h2>
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx}>
                    {paragraph.split('\n').map((item) => (
                      <li key={item}>{renderInlineMarkdown(item.replace(/^- /, ''))}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={idx}>{renderInlineMarkdown(paragraph)}</p>
            })}
          </div>
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="article-tags section-pad">
            <div className="tags-label">Topics</div>
            <div className="tags-list">
              {article.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <section className="related-articles section-pad">
            <h2 className="related-title">Continue Reading</h2>
            <div className="related-list">
              {related.map((relatedArticle) => (
                <article key={relatedArticle.slug} className="related-card">
                  <div className="related-category">{relatedArticle.category}</div>
                  <h3>{relatedArticle.title}</h3>
                  <p>{relatedArticle.excerpt}</p>
                  <Link href={`/insights/${relatedArticle.slug}`} className="related-link">
                    Read more <ArrowDownRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </article>

      <section className="insights-cta section-pad">
        <div className="cta-content">
          <h2>More insights coming</h2>
          <p>We regularly publish articles about technology, engineering, and product development.</p>
          <Link href="/insights" className="button button-primary">
            Back to insights <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="signature section-pad">
        <div className="signature-word">VEXEL</div>
        <div className="signature-bottom">
          <span>Technology. Built with intent.</span>
          <span>© {new Date().getFullYear()} Vexel Labs</span>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-top">
          <a className="brand" href="/">
            <span className="brand-mark"><span /><span /><span /></span>
            <span>Vexel<span className="brand-muted"> Labs</span></span>
          </a>
          <p>Digital products and systems<br />for people moving forward.</p>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/work">Work</a>
            <a href="/insights">Insights</a>
            <a href="/contact">Contact</a>
          </div>
          <a href="mailto:hello@vexellabs.com">hello@vexellabs.com <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </main>
  )
}
