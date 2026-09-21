'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Menu, Search, X } from 'lucide-react'
import { articles, categories, getFeaturedArticle } from '@/lib/insights-data'

export default function InsightsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const featured = getFeaturedArticle()
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="insights-page">
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

      <section className="insights-hero section-pad">
        <div className="insights-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> INSIGHTS</p>
          <h1>Ideas, engineering, and technology from Vexel Labs.</h1>
          <p className="hero-description">Practical thinking about software products, artificial intelligence, engineering practices, and the systems being built.</p>
        </div>
        <div className="insights-search">
          <div className="search-box">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
          </div>
        </div>
      </section>

      {featured && (
        <section className="featured-article section-pad">
          <article className="featured-card">
            <div className="featured-meta">
              <span className="featured-label">FEATURED</span>
              <span className="featured-category">{featured.category}</span>
            </div>
            <h2>{featured.title}</h2>
            <p className="featured-excerpt">{featured.excerpt}</p>
            <div className="featured-info">
              <div className="featured-author">
                <span className="author-name">{featured.author.name}</span>
                <span className="author-role">{featured.author.role}</span>
              </div>
              <div className="featured-meta-right">
                <span className="reading-time">{featured.readingTime} min read</span>
                <time dateTime={featured.publishedDate}>{new Date(featured.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
            <Link href={`/insights/${featured.slug}`} className="featured-link">
              Read article <ArrowDownRight size={16} />
            </Link>
          </article>
        </section>
      )}

      <section className="insights-filters section-pad">
        <div className="filters-top">
          <h3>Filter by topic</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {filteredArticles.length === 0 ? (
        <section className="empty-state section-pad">
          <div className="empty-content">
            <h3>No articles found</h3>
            <p>Try a different search or explore another category.</p>
          </div>
        </section>
      ) : (
        <section className="articles-listing section-pad">
          <div className="articles-list">
            {filteredArticles.map((article, index) => (
              <article key={article.slug} className="article-row">
                <div className="article-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="article-content">
                  <div className="article-meta-top">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">
                      {new Date(article.publishedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3>{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta-bottom">
                    <div className="article-author">
                      <span>{article.author.name}</span>
                    </div>
                    <div className="article-reading">
                      <span>{article.readingTime} min read</span>
                    </div>
                  </div>
                </div>
                <Link href={`/insights/${article.slug}`} className="article-link">
                  <ArrowDownRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="insights-perspective section-pad">
        <div className="perspective-content">
          <h2>Our Perspective</h2>
          <p>Technology is only valuable when it solves something real. We build from first principles, document what we learn, and share the thinking behind the products we create.</p>
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
