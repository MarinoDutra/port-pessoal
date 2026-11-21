export interface Skill {
  name: string;
  level: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  course: string;
  period: string;
  description?: string;
}

export interface Certificate {
  id: string;
  name: string;
  institution: string;
  date: string;
  image: string;
  verificationUrl: string;
}

export interface Hobby {
  name: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  headline: string;
  about: string;
}
