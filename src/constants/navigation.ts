export interface NavItem {
  label: string;
  href: string;
  desc?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about', desc: 'Background & Developer Overview' },
  { label: 'Services', href: '#services', desc: 'Full-Stack & Cloud Solutions' },
  { label: 'Projects', href: '#projects', desc: 'Featured Applications & Engine Demos' },
  { label: 'Skills', href: '#skills', desc: 'Tech Stack & Engineering Skills' },
  { label: 'Experience', href: '#experience', desc: 'Work History & Career Timeline' },
  { label: 'FAQ', href: '#faq', desc: 'Hiring & Technical FAQs' },
];

export const SITE_CONFIG = {
  title: 'Yash Bhut | Full-Stack Software Engineer & Technology Architect',
  shortTitle: 'Yash Bhut Portfolio',
  description: 'Portfolio of Yash Bhut — Full-Stack Software Engineer specializing in MERN Stack, Next.js, TypeScript, and Real-time Engines.',
  author: 'Yash Bhut',
  url: 'https://www.instagram.com/mr._yash_bhut/',
  githubUrl: 'https://github.com/yashubhut-cpu',
  linkedinUrl: 'https://www.linkedin.com/in/yash-bhut/',
  instagramUrl: 'https://www.instagram.com/mr._yash_bhut/',
  email: 'yashubhut@gmail.com',
};
