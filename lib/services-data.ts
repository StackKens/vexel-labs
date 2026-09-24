export interface Service {
  slug: string
  number: string
  name: string
  shortDescription: string
  details: string
  capabilities: string[]
  technologies: string[]
  problems: string[]
  builds: string[]
  audience: { label: string; text: string }[]
  faqs: { q: string; a: string }[]
  flow: string[]
}

export const services: Service[] = [
  {
    slug: 'software-engineering',
    number: '01',
    name: 'Software Engineering',
    shortDescription: 'Custom software tailored to specific business requirements.',
    details: 'We engineer reliable digital foundations that scale with your growth.',
    capabilities: ['Custom web applications', 'Management systems', 'Internal business tools', 'APIs & backend systems', 'Database architecture', 'System integrations'],
    technologies: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    problems: ['Disconnected tools', 'Manual workflows', 'Hard-to-reach data', 'Systems that cannot grow'],
    builds: ['Custom web applications', 'Internal business tools', 'APIs and backend systems', 'Databases and integrations', 'Management platforms'],
    audience: [
      { label: 'Startups', text: 'Build the first dependable version of a product.' },
      { label: 'Businesses', text: 'Replace friction with systems that fit the operation.' },
      { label: 'Organizations', text: 'Turn a complex process into clear software.' },
    ],
    faqs: [
      { q: 'Can you work with an existing system?', a: 'Yes. We can extend, integrate, or rethink existing software based on the problem at hand.' },
      { q: 'Do I need to know the technology?', a: 'No. Start with the problem. We will help determine the right technical approach.' },
      { q: 'Can you support the system after launch?', a: 'We can continue improving the product as your needs evolve.' },
    ],
    flow: ['Requirements', 'Architecture', 'Engineering', 'Product'],
  },
  {
    slug: 'web-digital-products',
    number: '02',
    name: 'Web & Digital Products',
    shortDescription: 'Modern digital products that people return to.',
    details: 'From web applications to SaaS platforms, we build experiences that solve real problems.',
    capabilities: ['Web applications', 'Dashboards & analytics', 'Customer portals', 'Digital marketplaces', 'SaaS products', 'Progressive web apps'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    problems: ['Unclear digital experiences', 'Disconnected user journeys', 'Products that do not reflect the way people work'],
    builds: ['Web applications', 'Dashboards and analytics', 'Customer portals', 'Digital marketplaces', 'SaaS products', 'Progressive web apps'],
    audience: [
      { label: 'Startups', text: 'Turn a first product direction into something dependable.' },
      { label: 'Businesses', text: 'Give customers and teams a clearer way to work.' },
      { label: 'Product teams', text: 'Shape the experience before adding more surface area.' },
    ],
    faqs: [
      { q: 'Do you work from an existing product?', a: 'Yes. We can help clarify the product, redesign key experiences, or build a new foundation.' },
      { q: 'Can you work with our design system?', a: 'Yes. We can work within an established system or define the foundations when one is needed.' },
      { q: 'What happens after the first release?', a: 'We can continue improving the product based on real use and changing requirements.' },
    ],
    flow: ['Direction', 'Experience', 'Product', 'Iteration'],
  },
  {
    slug: 'mobile-applications',
    number: '03',
    name: 'Mobile Applications',
    shortDescription: 'Mobile experiences focused on usability and performance.',
    details: 'We create native and cross-platform applications that work reliably in the real world.',
    capabilities: ['Native iOS apps', 'Android applications', 'Cross-platform solutions', 'Business apps', 'Marketplace apps', 'Productivity tools'],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
    problems: ['Poor mobile access', 'Fragmented user journeys', 'Slow manual tasks', 'Disconnected field work'],
    builds: ['Business applications', 'Education apps', 'Marketplace apps', 'Productivity tools', 'Custom mobile systems'],
    audience: [
      { label: 'Startups', text: 'Turn a useful idea into a product people can carry.' },
      { label: 'Businesses', text: 'Give teams and customers a better mobile experience.' },
      { label: 'Institutions', text: 'Create accessible tools for real-world users.' },
    ],
    faqs: [
      { q: 'Can you build for both iOS and Android?', a: 'We choose the approach that best fits the product, audience, and constraints.' },
      { q: 'Can a mobile app connect to our existing system?', a: 'Yes. Mobile products are often designed as part of a wider system.' },
      { q: 'Do you help with the product experience?', a: 'Yes. We shape the experience before engineering the interface.' },
    ],
    flow: ['Experience', 'Interface', 'Application', 'Deployment'],
  },
  {
    slug: 'business-enterprise-systems',
    number: '04',
    name: 'Business & Enterprise Systems',
    shortDescription: 'Systems that help organizations operate more effectively.',
    details: 'We build operational infrastructure that helps people run complex work with more clarity.',
    capabilities: ['Management systems', 'Fleet management', 'Inventory systems', 'Workflow automation', 'Administrative platforms', 'Operations dashboards'],
    technologies: ['Next.js', 'PostgreSQL', 'Node.js', 'TypeScript', 'AWS'],
    problems: ['Work spread across disconnected tools', 'Processes that are difficult to repeat', 'Important information that is hard to find'],
    builds: ['Management systems', 'Fleet and inventory tools', 'Workflow platforms', 'Administrative systems', 'Operations dashboards'],
    audience: [
      { label: 'Businesses', text: 'Make recurring work easier to run and improve.' },
      { label: 'Organizations', text: 'Give teams a clearer view of the work and the information behind it.' },
      { label: 'Operators', text: 'Replace manual coordination with dependable systems.' },
    ],
    faqs: [
      { q: 'Can you improve an existing internal tool?', a: 'Yes. We can work with the current system, its data, and the way the team already works.' },
      { q: 'Do you start with the process?', a: 'Yes. The process and its constraints are part of the product, not an afterthought.' },
      { q: 'Can the system grow with the organisation?', a: 'We design foundations that can accommodate changing processes and usage.' },
    ],
    flow: ['Process', 'Data', 'Workflow', 'System'],
  },
  {
    slug: 'artificial-intelligence',
    number: '05',
    name: 'Artificial Intelligence',
    shortDescription: 'Intelligent systems that automate and enhance.',
    details: 'We build AI-powered applications that create value through automation and insight.',
    capabilities: ['AI-powered applications', 'Machine learning systems', 'Intelligent automation', 'Data-driven tools', 'AI assistants', 'Recommendation systems'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain'],
    problems: ['Manual analysis', 'Information overload', 'Repetitive decisions', 'Data that is not being used'],
    builds: ['AI-powered applications', 'Intelligent assistants', 'Data-driven tools', 'Recommendation systems', 'Intelligent automation'],
    audience: [
      { label: 'Businesses', text: 'Make information easier to understand and act on.' },
      { label: 'Organizations', text: 'Automate the work that slows teams down.' },
      { label: 'Product teams', text: 'Put useful intelligence inside an existing product.' },
    ],
    faqs: [
      { q: 'Do you build custom AI features?', a: 'Yes. The right approach depends on your data, workflow, and intended outcome.' },
      { q: 'Do I need a large dataset?', a: 'Not always. We start by understanding what information exists and what the system needs to do.' },
      { q: 'Can AI work with our existing tools?', a: 'Often, yes. Integrations are considered as part of the product architecture.' },
    ],
    flow: ['Data', 'Model', 'Intelligence', 'Application'],
  },
  {
    slug: 'automation-workflows',
    number: '06',
    name: 'Automation & Workflows',
    shortDescription: 'Technology that removes friction from repetitive work.',
    details: 'We connect manual processes and systems to make recurring work clearer and more dependable.',
    capabilities: ['Workflow automation', 'Process automation', 'Data processing', 'Document workflows', 'System integrations', 'Scheduled tasks'],
    technologies: ['Node.js', 'Zapier', 'Make.com', 'Python', 'AWS Lambda'],
    problems: ['Repeated manual steps', 'Information moving between tools', 'Processes that depend on memory'],
    builds: ['Workflow automation', 'Process automation', 'Data processing pipelines', 'Document workflows', 'System integrations'],
    audience: [
      { label: 'Operations teams', text: 'Reduce repeated work without losing visibility.' },
      { label: 'Businesses', text: 'Connect the tools and information the work already depends on.' },
      { label: 'Product teams', text: 'Remove repetitive steps from a larger experience.' },
    ],
    faqs: [
      { q: 'Can automation work with our current tools?', a: 'Yes. We start with the systems already in use and connect them where it makes sense.' },
      { q: 'How do you avoid automating the wrong process?', a: 'We document the current workflow, identify the real constraint, and test the smallest useful improvement.' },
      { q: 'Can the workflow change later?', a: 'Yes. We prefer clear, maintainable systems over brittle one-off scripts.' },
    ],
    flow: ['Map', 'Connect', 'Automate', 'Improve'],
  },
  {
    slug: 'cloud-infrastructure',
    number: '07',
    name: 'Cloud & Infrastructure',
    shortDescription: 'Deployment, hosting, and infrastructure for scale.',
    details: 'We build deployment, data, and infrastructure foundations that keep systems dependable as they grow.',
    capabilities: ['Cloud deployment', 'API architecture', 'Database design', 'Scalability planning', 'Infrastructure automation', 'System monitoring'],
    technologies: ['Vercel', 'AWS', 'PostgreSQL', 'Redis', 'Docker'],
    problems: ['Deployment work that is hard to repeat', 'Limited visibility into system health', 'Infrastructure that does not match the product'],
    builds: ['Cloud deployment', 'API architecture', 'Database design', 'Scalability planning', 'Infrastructure automation', 'System monitoring'],
    audience: [
      { label: 'Product teams', text: 'Ship reliably without making infrastructure the bottleneck.' },
      { label: 'Businesses', text: 'Give internal systems a dependable operating foundation.' },
      { label: 'Technical teams', text: 'Create clearer infrastructure decisions and documentation.' },
    ],
    faqs: [
      { q: 'Can you work with our current cloud provider?', a: 'Yes. The right infrastructure follows the product, team, and constraints.' },
      { q: 'Do you document the setup?', a: 'Yes. Clear documentation and repeatable deployment are part of the work.' },
      { q: 'Can you help after launch?', a: 'We can help improve monitoring, deployment, and the systems around the product.' },
    ],
    flow: ['Design', 'Deploy', 'Observe', 'Scale'],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
