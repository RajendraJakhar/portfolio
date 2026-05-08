export type SectionId = 'dashboard' | 'about' | 'skills' | 'projects' | 'certifications' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
}

export interface Metric {
  label: string;
  value: string;
  sub: string;
  color: 'cyan' | 'green' | 'purple' | 'blue';
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  color: 'cyan' | 'green' | 'purple' | 'blue';
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  color: 'cyan' | 'green' | 'purple' | 'blue';
  status: 'live' | 'in-progress' | 'completed';
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  color: 'cyan' | 'green' | 'purple' | 'blue';
  credentialId?: string;
}
