export type CVData = {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
};

export type PersonalInfo = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  profileImage?: string;
};

export type WorkExperience = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description?: string;
  gpa?: string;
};

export type Skill = {
  id: string;
  name: string;
  level: number;
  category: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
};

export type CVTemplate = {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
};

export type CVSection =
  | "personalInfo"
  | "workExperience"
  | "education"
  | "skills"
  | "projects";

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  features: string[];
  cta: string;
  recommended?: boolean;
  period: "monthly" | "yearly";
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type TestimonialData = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

export type FeatureData = {
  id: string;
  title: string;
  description: string;
  icon: string;
};
