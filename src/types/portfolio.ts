export type ProjectCategory = 'All' | 'Full Stack' | 'Real-time & Cloud' | 'AI & ML' | 'Open Source';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  image: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  badgeColor: string;
  icon?: string;
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  location: string;
  details: string;
  gpa?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Hiring' | 'Tech Stack';
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  iconName: string;
  features: string[];
}

export interface Profile {
  name: string;
  handle: string;
  headline: string;
  tagline: string;
  aboutShort: string;
  aboutLong: string;
  avatarUrl: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  yearsExperience: number;
  completedProjects: number;
  codeCommits: number;
  availableForHire: boolean;
  currentRole: string;
  roles: string[];
}
