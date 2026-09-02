import { FAQItem } from '../types/portfolio';

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in full-stack JavaScript/TypeScript engineering: React 19, Next.js, Node.js, Express, PostgreSQL, MongoDB, Redis, WebSockets, Python, and Tailwind CSS.',
    category: 'Tech Stack'
  },
  {
    id: 'faq-2',
    question: 'Are you available for full-time roles or contract projects?',
    answer: 'Yes! I am actively open to full-time Software Engineering roles, contract consulting, and full-stack web application development for startups and enterprise clients.',
    category: 'Hiring'
  },
  {
    id: 'faq-3',
    question: 'How do you ensure code quality and UI performance?',
    answer: 'I write clean TypeScript code with strict type checking, component-driven modular design, automated CI/CD testing, and optimize for 95+ Google Lighthouse scores across desktop and mobile.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Can you handle both UI design and complex backend logic?',
    answer: 'Absolutely. I bridge the gap between creative Neo-brutalist / modern UI design and robust backend microservices architecture, real-time WebSocket state management, and database query optimization.',
    category: 'Services'
  }
];
