import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'gambles',
    title: 'GamBles — Real-time Event & Gaming Engine',
    category: 'Real-time & Cloud',
    shortDesc: 'High-frequency real-time betting platform built with Next.js, Node.js, WebSockets, and Redis.',
    fullDesc: 'GamBles is an end-to-end interactive real-time gaming engine capable of handling high-frequency state updates, live payout calculations, and seamless concurrency. Engineered with WebSockets for sub-50ms synchronization and Redis pub/sub for instant state distribution.',
    techStack: ['Next.js', 'React', 'Node.js', 'WebSockets', 'Redis', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/yashubhut-cpu/GamBles',
    liveUrl: 'https://gambles-demo.yashh1524.com',
    featured: true,
    metrics: [
      { label: 'Latency', value: '<45ms' },
      { label: 'Live Users', value: '1,000+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Implemented WebSockets pub/sub architecture for real-time odds calculation',
      'Built optimistic UI updates with rollback state management',
      'Designed responsive neo-brutalist theme for gamified user experience',
      'Integrated security audits and transactional state locking'
    ]
  },
  {
    id: 'givewithtrust',
    title: 'GiveWithTrust — Transparent Donation Protocol',
    category: 'Full Stack',
    shortDesc: 'Transparent charitable donation and escrow platform tracking fund disbursement end-to-end.',
    fullDesc: 'GiveWithTrust eliminates opacity in non-profit donations by introducing transparent audit trails, milestone-based fund release, and verified photo proof of disbursements for donors.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yashubhut-cpu/GiveWithTrust',
    liveUrl: 'https://givewithtrust.yashh1524.com',
    featured: true,
    metrics: [
      { label: 'Tracked Funds', value: '$250K+' },
      { label: 'Verification Rate', value: '100%' },
      { label: 'Transactions', value: '5,000+' }
    ],
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Milestone-locked escrow system for transparent disbursement',
      'Instant WhatsApp/Email automated receipts with PDF invoices',
      'Role-based dashboard for donors, non-profits, and independent auditors',
      'Comprehensive reporting with chart analytics'
    ]
  },
  {
    id: 'locale-dev',
    title: 'Locale Dev Suite — Interactive Business Systems',
    category: 'Full Stack',
    shortDesc: 'Neo-brutalist management & POS suite with live invoice reader and CI/CD audit logs.',
    fullDesc: 'Inspired by modern urban curation platforms, the Locale Dev Suite provides venue owners and digital businesses with live register POS checkout, sprint task boards, OCR receipt extraction, and automated operations.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide React'],
    githubUrl: 'https://github.com/yashubhut-cpu',
    liveUrl: 'https://thelocale.in',
    featured: true,
    metrics: [
      { label: 'Components', value: '45+' },
      { label: 'Bundle Size', value: '<120KB' },
      { label: 'LCP Score', value: '98/100' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Crafted custom Neo-brutalist design system with solid offset shadows',
      'Built 4 live interactive micro-widgets for checkout, tasks, OCR, and CI/CD',
      'Achieved 100% responsive fluid grid down to 320px mobile screens',
      'Full dark/light mode toggle with persistent local storage'
    ]
  },
  {
    id: 'ai-reviewer',
    title: 'CodePulse — AI Code Review & Security Assistant',
    category: 'AI & ML',
    shortDesc: 'Automated PR reviewer using Gemini API to detect security flaws and performance bugs.',
    fullDesc: 'CodePulse hooks into GitHub pull requests to automatically analyze code diffs, flag potential SQL injection or memory leak patterns, and suggest optimized TypeScript refactors.',
    techStack: ['Python', 'FastAPI', 'TypeScript', 'Gemini API', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/yashubhut-cpu',
    liveUrl: 'https://codepulse.yashh1524.com',
    featured: false,
    metrics: [
      { label: 'PRs Scanned', value: '2,400+' },
      { label: 'Accuracy', value: '94%' },
      { label: 'Review Speed', value: '4s' }
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Integrated Gemini Flash 2.5 API for rapid diff scanning',
      'Custom regex and AST parsing for TypeScript/Python codebases',
      'Automated PR comment bot with inline diff code suggestions'
    ]
  },
  {
    id: 'vivid-analytics',
    title: 'VividPulse — SaaS Microservices Dashboard',
    category: 'Open Source',
    shortDesc: 'Open-source telemetry dashboard monitoring container metrics and latency spikes.',
    fullDesc: 'VividPulse is a high-performance developer dashboard for visualizing Prometheus metrics, API error rates, and cluster health in real time.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yashubhut-cpu',
    liveUrl: 'https://vividpulse.yashh1524.com',
    featured: false,
    metrics: [
      { label: 'GitHub Stars', value: '180+' },
      { label: 'Forks', value: '42' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Modular dashboard grid with drag-and-drop widget layout',
      'Real-time WebSocket streaming with memory throttling',
      'Clean open-source documentation with setup scripts'
    ]
  }
];
