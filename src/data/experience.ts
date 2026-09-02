import { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Software Engineer',
    company: 'Independent Tech Consultant & Freelance',
    period: '2023 — Present',
    location: 'Surat, India / Remote',
    description: 'Architecting and deploying custom web applications, SaaS platforms, and enterprise tools for international clients.',
    bulletPoints: [
      'Engineered GamBles real-time betting platform handling 1,000+ simultaneous WebSocket connections with sub-50ms latency.',
      'Developed Neo-brutalist web applications with React 19, TypeScript, and Tailwind CSS achieving 98+ Lighthouse scores.',
      'Built automated CI/CD pipelines, containerized backend microservices with Docker, and deployed on cloud platforms.',
      'Collaborated directly with founders to translate business requirements into clean, scalable codebase architecture.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    isCurrent: true
  },
  {
    id: 'exp-2',
    role: 'Software Development Engineer Intern',
    company: 'Tech Innovators Studio',
    period: '2022 — 2023',
    location: 'Surat, India',
    description: 'Developed responsive frontend modules and RESTful API endpoints for client web applications.',
    bulletPoints: [
      'Built 15+ reusable React components using TypeScript and Tailwind CSS.',
      'Optimized backend SQL & MongoDB database query execution times by 35%.',
      'Implemented JWT authentication, OAuth sign-ins, and role-based access control.',
      'Participated in daily agile sprints, code reviews, and unit testing.'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git']
  }
];
