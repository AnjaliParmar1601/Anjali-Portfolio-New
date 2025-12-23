
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
