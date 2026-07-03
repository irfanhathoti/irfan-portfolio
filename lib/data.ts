import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Server,
  Sparkles,
  Database,
  Cloud,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  project?: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  detail: string;
  duration: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/* ------------------------------------------------------------------ */
/*  Personal info                                                      */
/* ------------------------------------------------------------------ */

export const personal = {
  name: "Irfan H",
  role: "Full Stack Developer",
  experience: "3+ years",
  location: "Bengaluru, India",
  email: "irfanhathoti@gmail.com",
  phone: "+91 7337630454",
  github: "#",
  linkedin: "#",
  resume: "/resume.pdf",
  tagline:
    "I build modern web applications, AI-powered tools, and scalable full-stack products.",
  description:
    "Full Stack Developer with 3+ years of experience in React, Next.js, Node.js, Express.js, Firebase, MongoDB, GraphQL, and AI API integrations.",
};

export const aboutText =
  "I am a Full Stack Developer based in Bengaluru, India, experienced in building production web applications using React.js, Next.js, Node.js, and Express.js. I have worked on AI integrations with OpenAI and Anthropic Claude, authentication systems with Firebase, REST/GraphQL APIs, and deployments using AWS Lightsail, Nginx, PM2, and Vercel.";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Apollo Client",
      "React Flow",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "GraphQL", "Apollo Server", "RESTful APIs"],
  },
  {
    category: "AI & Integrations",
    icon: Sparkles,
    skills: ["OpenAI API", "Anthropic Claude API", "SendGrid", "Twilio"],
  },
  {
    category: "Auth & Database",
    icon: Database,
    skills: [
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "MongoDB",
      "Neo4j",
      "Learning PostgreSQL",
      "Learning Redis",
    ],
  },
  {
    category: "DevOps & Infra",
    icon: Cloud,
    skills: [
      "Linux",
      "Nginx",
      "PM2",
      "AWS Lightsail",
      "Vercel",
      "GoDaddy Domain",
      "Git",
      "Azure",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "LeanAgileNautics",
    location: "Chennai / Houston",
    duration: "Mar 2023 – Present",
    project: "Portfolio & Project Management Tool",
    points: [
      "Built a full-stack project management application using Next.js, React.js, and Tailwind CSS, from UI development to production deployment.",
      "Integrated OpenAI and Anthropic Claude APIs to power AI-driven task suggestions and automated project summaries.",
      "Built RESTful APIs with Node.js and Express.js and implemented Firebase authentication with role-based access control.",
      "Used React Flow for visual tracking and Neo4j GraphQL with Apollo Client for complex graph-based data management.",
      "Deployed applications on AWS Lightsail with Nginx reverse proxy and PM2 process manager, with staging environments on Vercel.",
    ],
  },
  {
    role: "UI/UX Developer",
    company: "HTC Global Services",
    location: "Chennai",
    duration: "Jan 2022 – Nov 2022",
    points: [
      "Built accessible and reusable UI components for enterprise applications.",
      "Improved team-wide development speed by creating consistent frontend components.",
      "Ensured WCAG accessibility and cross-browser responsiveness.",
      "Contributed to wireframing and prototyping new product interfaces.",
    ],
  },
  {
    role: "LabVIEW Intern",
    company: "VI Solution",
    location: "Bengaluru",
    duration: "Mar 2021 – Apr 2021",
    points: [
      "Worked on real-time embedded systems and industrial automation.",
      "Improved data transmission efficiency in automation workflows.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    title: "AI Chat Assistant",
    description:
      "A modern AI chat application with Firebase Google authentication, Firestore-based chat history, Claude API integration, and a clean responsive chat interface.",
    tech: [
      "Next.js",
      "Firebase Auth",
      "Firestore",
      "Anthropic Claude API",
      "Tailwind CSS",
      "Vercel",
    ],
    links: [
      { label: "Live Demo", href: "https://ai-chat-assistant-opal.vercel.app" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Developer Blog",
    description:
      "A full-stack developer blog platform with markdown post editor, tagging, search, Firebase admin authentication, and email subscription support using SendGrid.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "SendGrid",
      "Tailwind CSS",
      "Vercel",
    ],
    links: [
      { label: "Live Demo", href: "https://developer-blog-omega.vercel.app" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "ReactFlow — Agile Project Management",
    description:
      "An enterprise Jira-style project management platform built around a visual flowchart canvas for non-linear workflows. Features backlog, sprints, Gantt and calendar views, a tree-view file manager, TipTap rich-text editing, role-based access control, and real-time GraphQL subscriptions over WebSockets. Backed by a Neo4j graph database with AI assistance (Claude / OpenAI) and email/SMS notifications. Deployed on AWS with Nginx and PM2.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "React Flow",
      "Zustand",
      "Ant Design",
      "TipTap",
      "Apollo Client",
      "GraphQL",
      "Node.js",
      "Express.js",
      "Apollo Server",
      "Neo4j",
      "WebSockets",
      "Redis",
      "Firebase Auth",
      "Anthropic Claude API",
      "SendGrid",
      "Twilio",
      "AWS",
      "Nginx",
      "PM2",
    ],
    links: [
      { label: "Live Demo", href: "https://app.flonautics.com" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Prepr — AI Interview Platform",
    description:
      "A premium interview-practice platform with a streaming AI interviewer that talks, challenges, and scores you like the real thing. Features an in-browser Monaco coding challenge with sandboxed JS execution, a 5-axis scorecard with downloadable PDF, and a dashboard with analytics and searchable history.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Firebase Auth",
      "Anthropic Claude API",
      "Tailwind CSS",
      "Vercel",
    ],
    links: [
      { label: "Live Demo", href: "https://ai-interview-platform-sand.vercel.app" },
      { label: "GitHub", href: "#" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Education & Languages                                              */
/* ------------------------------------------------------------------ */

export const education: Education = {
  degree: "B.E. – Electronics & Communication",
  institution: "Proudhadevaraya Institute of Technology, Hospete",
  detail: "CGPA: 8.10",
  duration: "2017 – 2021",
};

export const languages: string[] = ["English", "Hindi", "Urdu", "Kannada"];

/* ------------------------------------------------------------------ */
/*  Contact cards                                                      */
/* ------------------------------------------------------------------ */

export const contactCards = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { icon: MapPin, label: "Location", value: personal.location, href: "#" },
];

export const socials = [
  { icon: Github, label: "GitHub", href: personal.github },
  { icon: Linkedin, label: "LinkedIn", href: personal.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
];
