export interface JobPosting {
  slug: string;
  title: string;
  department: 'Engineering' | 'AI / ML' | 'Design' | 'Product' | 'Infrastructure' | 'Business' | 'Other';
  location: 'Kampala' | 'Uganda' | 'Remote' | 'Hybrid' | 'International';
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Lead';
  description: string;
  responsibilities: string[];
  requirements: {
    required: string[];
    niceToHave: string[];
  };
  technologies?: string[];
  benefits?: string[];
  salary?: string;
  status: 'Draft' | 'Open' | 'Paused' | 'Closed';
  postedDate: string;
  deadline?: string;
  applicationUrl?: string;
}

export const careers = {
  principles: [
    {
      title: 'Build Real Things',
      description: 'Work on products and systems that solve actual problems.',
    },
    {
      title: 'Learn Constantly',
      description: 'Work in an environment where engineering, research, experimentation, and continuous learning matter.',
    },
    {
      title: 'Own Your Work',
      description: 'Have meaningful responsibility and direct impact on what you build.',
    },
    {
      title: 'Think Beyond Borders',
      description: 'Build from Africa while designing technology that can serve a global market.',
    },
    {
      title: 'Grow With The Company',
      description: 'Take on greater technical and product responsibility as Vexel grows.',
    },
  ],

  workAreas: [
    'Software Engineering',
    'AI & Machine Learning',
    'Mobile Applications',
    'Web Products',
    'Business Systems',
    'Automation',
    'Data',
    'Cloud / Infrastructure',
    'Experimental Technology',
    'Vexel Products',
  ],

  cultureValues: [
    { name: 'Curiosity', description: 'We ask questions and explore possibilities.' },
    { name: 'Ownership', description: 'We take responsibility for the work and its impact.' },
    { name: 'Craft', description: 'We care about quality and thoughtfulness.' },
    { name: 'Honesty', description: 'We communicate directly and face challenges openly.' },
    { name: 'Learning', description: 'We grow through experiences and from each other.' },
    { name: 'Collaboration', description: 'We build better together than alone.' },
  ],

  engineeringPrinciples: [
    'Writing maintainable software',
    'Code reviews and feedback loops',
    'Version control discipline',
    'Documentation and clarity',
    'Testing and verification',
    'System design thinking',
    'Technical discussions',
    'Experimentation and iteration',
    'Learning from failure',
    'Shipping responsibly',
  ],

  aiResearchAreas: [
    'Machine learning',
    'Deep learning',
    'Neural networks',
    'Generative AI',
    'Data systems',
    'Model experimentation',
    'AI applications',
    'Intelligent automation',
  ],
};

export const jobPostings: JobPosting[] = [
  {
    slug: 'software-engineer-backend',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    employmentType: 'Full-time',
    experienceLevel: 'Mid',
    description: 'We are looking for a Backend Engineer to help build robust, scalable systems that power Vexel products.',
    responsibilities: [
      'Design and build backend services using modern frameworks',
      'Work with databases and data systems',
      'Implement APIs and integrations',
      'Participate in code reviews and technical discussions',
      'Collaborate with product and frontend teams',
    ],
    requirements: {
      required: [
        'Experience with backend frameworks (Node.js, Python, or similar)',
        'Understanding of databases and SQL',
        'Git proficiency',
        'Problem-solving mindset',
      ],
      niceToHave: [
        'Experience with cloud platforms (AWS, GCP, Vercel)',
        'Knowledge of system design',
        'Open source contributions',
      ],
    },
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    benefits: ['Competitive salary', 'Remote work', 'Professional development'],
    status: 'Draft',
    postedDate: '2026-01-15',
  },
  {
    slug: 'ml-engineer',
    title: 'Machine Learning Engineer',
    department: 'AI / ML',
    location: 'Kampala',
    employmentType: 'Full-time',
    experienceLevel: 'Mid',
    description: 'Help us build intelligent systems and explore the frontier of AI applications.',
    responsibilities: [
      'Design and train machine learning models',
      'Experiment with new architectures and approaches',
      'Build data pipelines and evaluation systems',
      'Deploy and monitor models in production',
      'Document research and findings',
    ],
    requirements: {
      required: [
        'Strong Python skills',
        'Experience with ML frameworks (TensorFlow, PyTorch, or similar)',
        'Understanding of ML fundamentals',
        'Problem-solving approach',
      ],
      niceToHave: [
        'Published papers or significant projects',
        'Experience with large language models',
        'Knowledge of MLOps',
        'Research background',
      ],
    },
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face'],
    status: 'Draft',
    postedDate: '2026-01-20',
  },
  {
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    employmentType: 'Full-time',
    experienceLevel: 'Mid',
    description: 'Build beautiful, performant interfaces that make complex systems feel clear and intuitive.',
    responsibilities: [
      'Build responsive web applications',
      'Implement designs with attention to detail',
      'Optimize for performance and accessibility',
      'Work with design and backend teams',
      'Contribute to component libraries',
    ],
    requirements: {
      required: [
        'React or similar framework experience',
        'HTML, CSS, JavaScript proficiency',
        'Understanding of responsive design',
        'Git and version control',
      ],
      niceToHave: [
        'TypeScript experience',
        'Next.js knowledge',
        'Accessibility (A11y) awareness',
        'Performance optimization experience',
      ],
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    status: 'Draft',
    postedDate: '2026-01-18',
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Kampala',
    employmentType: 'Full-time',
    experienceLevel: 'Mid',
    description: 'Design experiences that solve real problems and make technology more human.',
    responsibilities: [
      'Research user needs and pain points',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user testing and gather feedback',
      'Collaborate with engineering and product teams',
      'Maintain design systems and standards',
    ],
    requirements: {
      required: [
        'Portfolio demonstrating design work',
        'Proficiency in design tools (Figma, etc.)',
        'Understanding of user-centered design',
        'Communication skills',
      ],
      niceToHave: [
        'Product management experience',
        'User research background',
        'Front-end development knowledge',
        'Design system experience',
      ],
    },
    technologies: ['Figma', 'Prototyping', 'User Research'],
    status: 'Draft',
    postedDate: '2026-01-22',
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps / Cloud Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    employmentType: 'Full-time',
    experienceLevel: 'Senior',
    description: 'Build and maintain the infrastructure that powers Vexel systems at scale.',
    responsibilities: [
      'Design cloud architecture',
      'Build deployment pipelines',
      'Monitor and optimize systems',
      'Implement security best practices',
      'Document infrastructure decisions',
    ],
    requirements: {
      required: [
        'Cloud platform experience (AWS, GCP, or Vercel)',
        'Container and orchestration knowledge',
        'Linux administration',
        'Infrastructure-as-code experience',
      ],
      niceToHave: [
        'Kubernetes expertise',
        'Security certifications',
        'Monitoring and logging experience',
        'Cost optimization knowledge',
      ],
    },
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    status: 'Draft',
    postedDate: '2026-01-25',
  },
];

export const getAllJobs = () => jobPostings.filter((job) => job.status === 'Open');
export const getJobBySlug = (slug: string) => jobPostings.find((job) => job.slug === slug && job.status === 'Open');
export const getJobsByDepartment = (department: string) =>
  jobPostings.filter((job) => job.department === department && job.status === 'Open');
export const getJobsByLocation = (location: string) =>
  jobPostings.filter((job) => job.location === location && job.status === 'Open');
