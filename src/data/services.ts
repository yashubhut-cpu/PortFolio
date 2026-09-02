import { ServiceItem } from '../types/portfolio';

export const servicesData: ServiceItem[] = [
  {
    id: 'pos',
    title: 'Full-Stack Web App Development',
    subtitle: 'MERN & NEXT.JS APPS',
    description: 'Build fast, responsive, and SEO-optimized web applications with modern React 19, TypeScript, Next.js, and Tailwind CSS.',
    bgColor: 'from-rose-100 to-pink-200 dark:from-stone-900 dark:to-rose-950/40',
    iconName: 'Code',
    features: ['React 19 & Next.js App Router', 'Sub-second page loads & 95+ Lighthouse', 'Responsive Neo-brutalist & Tailwind UI', 'State management with Redux / Zustand']
  },
  {
    id: 'tasks',
    title: 'Real-Time Engines & WebSockets',
    subtitle: 'LIVE ENGINE SUITE',
    description: 'Architect low-latency real-time applications with WebSockets, Redis pub/sub, optimistic UI state, and multi-user synchronization.',
    bgColor: 'from-emerald-100 to-teal-200 dark:from-stone-900 dark:to-emerald-950/40',
    iconName: 'Activity',
    features: ['Sub-50ms WebSocket state sync', 'Redis caching & pub/sub distribution', 'Live gaming & sports betting engines', 'Optimistic UI rollback handling']
  },
  {
    id: 'purchase',
    title: 'API & Microservices Architecture',
    subtitle: 'BACKEND ARCHITECTURE',
    description: 'Design robust RESTful APIs, GraphQL endpoints, and containerized backend microservices built with Node.js, Express, and Python.',
    bgColor: 'from-amber-100 to-orange-200 dark:from-stone-900 dark:to-amber-950/40',
    iconName: 'Server',
    features: ['PostgreSQL & MongoDB schema design', 'Secure JWT / OAuth2 authentication', 'Automated PDF/receipt generation', 'Rate limiting & API security audits']
  },
  {
    id: 'invoice',
    title: 'DevOps & AI Systems Integration',
    subtitle: 'AUTOMATION & CLOUD',
    description: 'Automate CI/CD pipelines, containerize with Docker, and integrate LLM APIs (Gemini, OpenAI) to create intelligent developer workflows.',
    bgColor: 'from-indigo-100 to-purple-200 dark:from-stone-900 dark:to-purple-950/40',
    iconName: 'Cpu',
    features: ['GitHub Actions CI/CD workflows', 'Docker containerization & deployment', 'LLM API integration (Gemini / AI assistants)', 'Automated testing & code health monitoring']
  }
];
