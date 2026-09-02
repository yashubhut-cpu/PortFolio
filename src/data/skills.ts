import { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    categoryName: 'Frontend Architecture',
    iconName: 'Layout',
    skills: [
      { name: 'React / React 19', level: 95, badgeColor: 'bg-[#dde1ff] text-[#0d9488] dark:bg-blue-950 dark:text-blue-200' },
      { name: 'Next.js (App Router)', level: 90, badgeColor: 'bg-black text-white dark:bg-white dark:text-black' },
      { name: 'TypeScript', level: 92, badgeColor: 'bg-[#0d9488] text-white' },
      { name: 'Tailwind CSS', level: 95, badgeColor: 'bg-[#e85d04] text-black' },
      { name: 'Framer Motion', level: 85, badgeColor: 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200' },
      { name: 'HTML5 / CSS3 / Canvas', level: 95, badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200' }
    ]
  },
  {
    categoryName: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js / Express', level: 90, badgeColor: 'bg-[#059669] text-white' },
      { name: 'Python / FastAPI', level: 82, badgeColor: 'bg-[#dde1ff] text-[#0d9488] dark:bg-blue-950 dark:text-blue-200' },
      { name: 'REST & GraphQL APIs', level: 90, badgeColor: 'bg-[#e85d04] text-black' },
      { name: 'WebSockets / Real-time', level: 88, badgeColor: 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200' },
      { name: 'Authentication (JWT, OAuth)', level: 88, badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200' }
    ]
  },
  {
    categoryName: 'Databases & Infrastructure',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL & Prisma', level: 88, badgeColor: 'bg-[#0d9488] text-white' },
      { name: 'MongoDB & Mongoose', level: 90, badgeColor: 'bg-[#059669] text-white' },
      { name: 'Redis Pub/Sub', level: 84, badgeColor: 'bg-[#dc2626] text-white' },
      { name: 'Firebase & Firestore', level: 85, badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200' },
      { name: 'Docker & CI/CD', level: 80, badgeColor: 'bg-[#dde1ff] text-[#0d9488] dark:bg-blue-950 dark:text-blue-200' },
      { name: 'Git & GitHub Workflows', level: 95, badgeColor: 'bg-black text-white dark:bg-white dark:text-black' }
    ]
  }
];
