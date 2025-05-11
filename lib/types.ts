import {
  FileText,
  Download,
  Brush,
  Eye,
  Scissors,
  ZoomIn,
  Clock,
  Shield,
  Users,
  type LucideIcon, // Ensured LucideIcon is imported as a type
} from "lucide-react";

// Constants with explicit types

export const CV_TEMPLATES: CVTemplate[] = [
  {
    id: "professional",
    name: "Professional",
    thumbnail:
      "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A clean and professional template suitable for all industries.",
  },
  {
    id: "creative",
    name: "Creative",
    thumbnail:
      "https://images.pexels.com/photos/3771823/pexels-photo-3771823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A modern and creative template ideal for design and creative roles.",
  },
  {
    id: "executive",
    name: "Executive",
    thumbnail:
      "https://images.pexels.com/photos/3771820/pexels-photo-3771820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "An elegant and sophisticated template for executive positions.",
  },
  {
    id: "simple",
    name: "Simple",
    thumbnail:
      "https://images.pexels.com/photos/3771821/pexels-photo-3771821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A minimalist and straightforward template focusing on content.",
  },
];

export const FEATURES: FeatureData[] = [
  {
    id: "templates",
    title: "Professional Templates",
    description:
      "Choose from a variety of professionally designed CV templates that stand out to employers.",
    icon: "FileText",
  },
  {
    id: "export",
    title: "Easy Export",
    description:
      "Download your CV as a PDF or share it online with a custom link.",
    icon: "Download",
  },
  {
    id: "customization",
    title: "Full Customization",
    description:
      "Personalize colors, fonts, and layout to match your personal brand.",
    icon: "Brush",
  },
  {
    id: "preview",
    title: "Real-time Preview",
    description:
      "See changes to your CV as you make them with our live preview feature.",
    icon: "Eye",
  },
  {
    id: "sections",
    title: "Customizable Sections",
    description:
      "Add, remove, or rearrange sections to highlight your strengths.",
    icon: "Scissors",
  },
  {
    id: "ats",
    title: "ATS-Friendly",
    description:
      "Our templates are optimized for Applicant Tracking Systems to improve your chances.",
    icon: "ZoomIn",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "monthly",
    features: [
      "1 CV template",
      "Basic sections",
      "PDF download",
      "7-day history",
    ],
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    price: 9.99,
    period: "monthly",
    features: [
      "All CV templates",
      "Custom sections",
      "Remove watermark",
      "30-day history",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 19.99,
    period: "monthly",
    features: [
      "All Pro features",
      "AI content suggestions",
      "Custom domain",
      "Unlimited history",
      "Priority support",
      "Multiple CVs",
    ],
    cta: "Go Premium",
  },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "UX Designer",
    company: "Adobe",
    content:
      "The CV builder helped me land my dream job at Adobe. The templates are professional and the interface is so intuitive!",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    name: "David Chen",
    role: "Software Engineer",
    company: "Google",
    content:
      "I received three interview offers within a week of updating my CV with this tool. The export quality is outstanding!",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "Spotify",
    content:
      "The real-time preview feature saved me hours of guesswork. My CV now perfectly represents my personal brand.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const FOOTER_LINKS: FooterLinksGroup[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Templates", href: "/templates" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "CV Tips", href: "/cv-tips" },
      { name: "Career Advice", href: "/career-advice" },
      { name: "Interview Guide", href: "/interview-guide" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
  { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
];

export const DEFAULT_CV_DATA: DefaultCVValues = {
  personalInfo: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    summary: "",
    profileImage: "",
  },
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
};

export const FEATURE_BENEFITS: FeatureBenefit[] = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Create a professional CV in minutes, not hours.",
  },
  {
    icon: Shield,
    title: "ATS Optimized",
    description:
      "Get past automated screening with our ATS-friendly templates.",
  },
  {
    icon: Users,
    title: "Stand Out",
    description:
      "Differentiate yourself from other candidates with our professional designs.",
  },
];

// ADD TYPES;;
// START OF NEW TYPE DEFINITIONS

export type CVTemplate = {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
};

// Specific union type for icon names used in FEATURES
type FeatureIconName =
  | "FileText"
  | "Download"
  | "Brush"
  | "Eye"
  | "Scissors"
  | "ZoomIn";

export type FeatureData = {
  id: string;
  title: string;
  description: string;
  icon: FeatureIconName;
};

export type PricingPlan = {
  id: "free" | "pro" | "premium" | string;
  name: string;
  price: number;
  period: "monthly";
  features: string[];
  cta: string;
  recommended?: boolean;
};

export type TestimonialData = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

export type FooterLinkItem = {
  name: string;
  href: string;
};

export type FooterLinksGroup = {
  title: string;
  links: FooterLinkItem[];
};

// Specific union type for icon names used in SOCIAL_LINKS
type SocialIconName = "Twitter" | "Facebook" | "Instagram" | "Linkedin";

export type SocialLink = {
  name: string;
  url: string;
  icon: SocialIconName;
};

// Types for DEFAULT_CV_DATA structure
export type DefaultPersonalInfo = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  profileImage: string;
};

export type DefaultCVValues = {
  personalInfo: DefaultPersonalInfo;
  workExperience: unknown[];
  education: unknown[];
  skills: unknown[];
  projects: unknown[];
};

// Type for FEATURE_BENEFITS
export type FeatureBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// END OF NEW TYPE DEFINITIONS

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  title: string;
  profileImage?: string;
  website?: string;
  linkedin?: string;
  github?: string;
};

export type WorkExperience = {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Skill = {
  id: string;
  name: string;
  level: number; // 1-5
};

export type Project = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

export type Language = {
  id: string;
  name: string;
  proficiency: string; // "Basic", "Intermediate", "Fluent", "Native"
};

export type CVData = {
  personalInfo: PersonalInfo;
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
};

export const defaultCV: CVData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    title: "",
    website: "",
    linkedin: "",
    github: "",
  },
  summary: "",
  workExperience: [
    {
      id: "1",
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  ],
  education: [
    {
      id: "1",
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  skills: [
    {
      id: "1",
      name: "",
      level: 3,
    },
  ],
  projects: [
    {
      id: "1",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      link: "",
    },
  ],
  certifications: [
    {
      id: "1",
      name: "",
      issuer: "",
      date: "",
      link: "",
    },
  ],
  languages: [
    {
      id: "1",
      name: "",
      proficiency: "Intermediate",
    },
  ],
};

export const colorOptions = [
  { name: "Slate", value: "slate", preview: "#334155" },
  { name: "Gray", value: "gray", preview: "#4B5563" },
  { name: "Zinc", value: "zinc", preview: "#52525B" },
  { name: "Blue", value: "blue", preview: "#2563EB" },
  { name: "Indigo", value: "indigo", preview: "#4F46E5" },
  { name: "Violet", value: "violet", preview: "#7C3AED" },
  { name: "Green", value: "green", preview: "#16A34A" },
  { name: "Teal", value: "teal", preview: "#0D9488" },
  { name: "Cyan", value: "cyan", preview: "#06B6D4" },
  { name: "Red", value: "red", preview: "#DC2626" },
  { name: "Pink", value: "pink", preview: "#DB2777" },
  { name: "Purple", value: "purple", preview: "#9333EA" },
];

export const fontOptions = [
  { name: "Inter", value: "inter", preview: "ABCDEF" },
  { name: "Poppins", value: "poppins", preview: "ABCDEF" },
  { name: "Roboto", value: "roboto", preview: "ABCDEF" },
  { name: "Open Sans", value: "opensans", preview: "ABCDEF" },
  { name: "Montserrat", value: "montserrat", preview: "ABCDEF" },
  { name: "Raleway", value: "raleway", preview: "ABCDEF" },
];

export const templateOptions = [
  { name: "Modern", value: "modern", preview: "/templates/modern.png" },
  { name: "Classic", value: "classic", preview: "/templates/classic.png" },
  { name: "Minimal", value: "minimal", preview: "/templates/minimal.png" },
  {
    name: "Professional",
    value: "professional",
    preview: "/templates/professional.png",
  },
];

export type ExportOptions = {
  paperSize: "a4" | "letter";
  margins: "normal" | "narrow" | "wide";
  includePhoto: boolean;
  includeSections: Record<keyof Omit<CVData, "personalInfo">, boolean>;
};

export const defaultExportOptions: ExportOptions = {
  paperSize: "a4",
  margins: "normal",
  includePhoto: true,
  includeSections: {
    summary: true,
    workExperience: true,
    education: true,
    skills: true,
    projects: true,
    certifications: true,
    languages: true,
  },
};
