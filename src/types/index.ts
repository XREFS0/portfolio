export type ProjectCategory = 
  | 'All'
  | 'Cybersecurity & Recon'
  | 'C# & .NET'
  | 'Networking'
  | 'Systems & Linux'
  | 'Enterprise Systems';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
  technologies: string[];
  keyFeatures: string[];
  architecture?: string;
  image: string;
  additionalImages?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export type CertificateCategory =
  | 'All'
  | 'Cybersecurity'
  | 'Software Engineering'
  | 'Web & Backend'
  | 'Mobile'
  | 'Testing'
  | 'Blockchain & Other'
  | 'Freelancing';

export interface Certificate {
  id: string;
  title: string;
  category: Exclude<CertificateCategory, 'All'>;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  image: string;
  duration?: string;
  verificationUrl?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  label: string;
  icon: 'github' | 'linkedin' | 'telegram' | 'youtube' | 'instagram' | 'facebook' | 'globe' | 'mail';
  priority: number;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  notes?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}
