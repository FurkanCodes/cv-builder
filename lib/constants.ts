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
} from "lucide-react";
import { CVTemplate, FeatureData, PricingPlan, TestimonialData } from "./types";

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

export const FOOTER_LINKS = [
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

export const SOCIAL_LINKS = [
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
  { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
];

export const DEFAULT_CV_DATA = {
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

export const FEATURE_BENEFITS = [
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
