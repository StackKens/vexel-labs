export interface Author {
  name: string
  role: string
  bio?: string
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: Author
  publishedDate: string
  readingTime: number
  featured?: boolean
  image?: string
  tags?: string[]
}

export type ArticleSummary = Omit<Article, 'content'>

const vexelTeam: Author = {
  name: 'Vexel Labs',
  role: 'Technology & Engineering',
}

export const articles: Article[] = [
  {
    slug: 'building-ai-products',
    title: 'What It Actually Takes to Build an AI Product',
    excerpt: 'A practical look at the engineering decisions behind turning models into useful products.',
    category: 'AI & ML',
    author: vexelTeam,
    publishedDate: '2024-09-15',
    readingTime: 8,
    featured: true,
    tags: ['AI', 'Product Development', 'Engineering'],
    content: `
# What It Actually Takes to Build an AI Product

Building AI products is fundamentally different from building traditional software. The challenges aren't just technical—they're about understanding what "good" means when the output is probabilistic, not deterministic.

## The Real Problem

Most discussions about AI focus on models. But a model is not a product. A model is a component. Between the model and the user experience lie dozens of decisions about reliability, latency, cost, and behavior.

We spent months building an AI system for document classification. The model achieved 94% accuracy in testing. In production, it failed frequently because we didn't account for edge cases, regional language variations, and the simple fact that users don't always provide well-formatted input.

## What We Learned

**1. Validation is not optional.** Every AI system needs multiple layers of validation—pre-processing checks, output sanity checks, fallback behaviors. The model is confident by default. You need to be skeptical.

**2. Cost scales differently.** Traditional software costs scale with users. AI products often scale with API calls. An innocent feature that seemed fine at 1,000 daily requests becomes expensive at scale. We had to redesign the entire inference pipeline to batch requests and cache results.

**3. User expectations are real.** People expect AI to be magic. When it makes a mistake, they often blame the system rather than understanding limitations. Clear communication about what the system does and doesn't do is critical.

## The Approach We Use Now

We treat AI systems like any other critical infrastructure:

- **Monitoring is essential.** We track not just error rates but confidence scores, response times, and failure modes.
- **Fallbacks are safety nets.** Every AI decision needs a fallback—whether that's routing to a human, using a simpler rule-based approach, or gracefully degrading functionality.
- **Testing is thorough.** We don't just test happy paths. We test edge cases, adversarial inputs, out-of-distribution examples, and real user data.

## What Makes a Difference

The best AI products we've built share a common trait: they solve a specific problem extremely well rather than trying to do everything with AI. The more constrained the problem, the more reliable the solution.

If you're building an AI product, start there. Define the exact problem. Understand the failure modes. Build around them. The technology is the easy part.
    `,
  },
  {
    slug: 'react-performance-patterns',
    title: 'React Performance Patterns for Real Applications',
    excerpt: 'Practical patterns for building fast React applications that feel responsive to users.',
    category: 'Engineering',
    author: vexelTeam,
    publishedDate: '2024-09-08',
    readingTime: 6,
    tags: ['React', 'Performance', 'Frontend'],
    content: `
# React Performance Patterns for Real Applications

React makes it easy to build interactive UIs. It's harder to build interactive UIs that remain fast as they grow.

## The Common Pitfalls

Most performance problems we see come from the same places:

- **Re-rendering everything.** A parent state change causes every child to re-render, even if nothing changed.
- **Creating new objects on every render.** Inline objects, array filters, and function definitions cause unnecessary dependency changes.
- **Loading everything at once.** A dashboard that loads all charts immediately is slower than one that loads what you see first.

## Patterns That Work

**1. Memoization is tactical, not strategic.** React.memo prevents unnecessary renders, but it's not a performance panacea. Use it where re-renders are expensive (large lists, complex components).

**2. Code splitting matches user journeys.** We split our apps at route boundaries and at major feature boundaries. Users only download what they need.

**3. State lives close to where it's used.** Moving state down the tree means fewer re-renders of unrelated components.

## Real Example

We built a project management dashboard that initially rendered every section at once. Initial load was slow (2.5s to interactive). We restructured it to:

- Load the header and sidebar immediately
- Code-split the main content areas
- Render charts only when they come into view (intersection observer)
- Memoize expensive components

Result: 0.8s to interactive, faster perceived performance, and much better battery life on mobile.

## When to Optimize

Optimize when you have evidence—use Lighthouse, Web Vitals, or your analytics. Don't prematurely optimize. But know these patterns so you can apply them when you need them.
    `,
  },
  {
    slug: 'backend-api-design',
    title: 'Designing APIs That Scale and Feel Right',
    excerpt: 'How to design backend APIs that are reliable, efficient, and enjoyable for frontend teams to use.',
    category: 'Engineering',
    author: vexelTeam,
    publishedDate: '2024-09-01',
    readingTime: 7,
    tags: ['Backend', 'API Design', 'Engineering'],
    content: `
# Designing APIs That Scale and Feel Right

A good API is invisible. Bad APIs become legendary.

## What Makes an API Feel Right

**Consistency.** If one endpoint returns \`{ data: [...] }\` and another returns \`[...]\` directly, you've already frustrated your consumer.

**Predictability.** When you know one endpoint, you should be able to guess how others work. Consistent naming, consistent pagination, consistent error responses.

**Debuggability.** When something breaks, your frontend team should be able to understand why quickly.

## Common Mistakes We've Made

**Over-nesting data.** Just because data is related doesn't mean it should be nested 5 levels deep. Include what you need, let the client request more with explicit fields.

**Ignoring pagination.** A user list endpoint that returns 100,000 users will crash. Pagination isn't optional.

**Inconsistent error responses.** One endpoint returns \`{ error: "..." }\`, another returns \`{ message: "..." }\`, another returns an HTML error page. Pick one format and stick to it.

## Patterns We Use

We design every API endpoint by asking:
- What is the minimal data this needs to return?
- What relationships will the consumer want?
- What will break if we don't paginate?
- How will someone debug this tomorrow?

Then we document it. Good documentation saves weeks of confusion.
    `,
  },
  {
    slug: 'database-decisions',
    title: 'Choosing the Right Database for Your Problem',
    excerpt: 'A practical guide to selecting databases based on your actual constraints, not hype.',
    category: 'Technology',
    author: vexelTeam,
    publishedDate: '2024-08-25',
    readingTime: 9,
    tags: ['Databases', 'Infrastructure', 'Architecture'],
    content: `
# Choosing the Right Database for Your Problem

Every startup wants to use NoSQL. Every established company wishes they had stuck with SQL. The truth is more nuanced.

## Start With the Problem

Before you choose a database, answer these questions:

1. **What's the read/write ratio?** If you read 1000x more than you write, your database strategy is very different than if you write as much as you read.

2. **Do you need consistency or availability?** CAP theorem isn't a joke. You can't have both at scale. Most applications can tolerate eventual consistency. Some can't.

3. **What's your query pattern?** Will you mostly query by ID? By complex filters? By time ranges? The query patterns determine everything.

4. **How much data?** This changes at different scales. What's perfect for 100GB is wrong for 100TB.

## Common Choices

**PostgreSQL.** If you don't know what to use, use PostgreSQL. It's ACID compliant, supports complex queries, scales vertically well, and there's a 30-year trail of solutions to problems you'll hit.

**MongoDB.** If your data is truly document-shaped and you don't need complex transactions, MongoDB is simpler to scale horizontally. But "document-shaped" is more restrictive than people think.

**Redis.** If you need sub-millisecond responses and you're okay with data in memory, Redis is unbeatable. But it's not a primary database.

**Specialized databases.** Graph databases for relationships, time-series databases for metrics, search databases for full-text search. Pick the right tool for the specific problem.

## What We Do

We default to PostgreSQL. We add Redis for caching. If we have a specific problem (full-text search, time-series data), we add a specialized database. We very rarely need MongoDB—most "document" data fits better in PostgreSQL with JSON columns.

The principle: Use boring, well-understood databases until you have a specific reason not to.
    `,
  },
  {
    slug: 'shipping-code-safely',
    title: 'Shipping Code Safely in Production',
    excerpt: 'Practical strategies for deploying changes with confidence and recovering quickly when things go wrong.',
    category: 'Engineering',
    author: vexelTeam,
    publishedDate: '2024-08-18',
    readingTime: 8,
    tags: ['DevOps', 'Deployment', 'Production'],
    content: `
# Shipping Code Safely in Production

You will ship bugs to production. The question is whether you can recover from them quickly.

## Strategies That Work

**1. Feature flags.** Deploy code hidden behind a flag. Test it in production with a small percentage of traffic. Gradually roll out. Disable instantly if something goes wrong.

**2. Gradual rollouts.** Don't deploy to 100% of servers at once. Go to 10%, then 50%, then 100%. Monitor at each stage.

**3. Automated rollback.** If error rates spike after a deploy, automatically roll back. This requires good monitoring and quick deploy/rollback cycles.

**4. Blue-green deployments.** Keep two production environments. Deploy to green, verify everything, swap traffic. If something's wrong, swap back instantly.

## What We Don't Do

We don't deploy at 5pm on Friday. We don't deploy massive changes at once. We don't deploy without being able to roll back quickly.

## Monitoring is the Foundation

None of this works without monitoring. You need to know:
- Error rates, broken down by endpoint and error type
- Response times, including percentiles (p50, p95, p99)
- Resource usage, including when it's trending up
- Business metrics, so you notice when something's wrong even if errors look normal

Without this data, you're flying blind.

## The Reality

Deploying safely isn't about being risk-averse. It's about moving fast with confidence. The teams that deploy multiple times a day have lower incident rates than teams that deploy once a month.
    `,
  },
]

export const categories = ['All', 'AI & ML', 'Engineering', 'Product', 'Technology', 'Research', 'Tutorials']

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return articles
  return articles.filter(article => article.category === category)
}

export function getRelatedArticles(slug: string, limit: number = 3): Article[] {
  const article = getArticleBySlug(slug)
  if (!article) return []

  return articles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, limit)
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find(article => article.featured)
}

export function toArticleSummary(article: Article): ArticleSummary {
  const { content: _content, ...summary } = article
  return summary
}
