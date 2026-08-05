import { Project } from "@/types/project";

export const projectsConfig: Project[] = [
  {
    id: "mobsf-security",
    slug: "mobile-security-platform",
    title: "Mobile Security Testing Platform",
    subtitle: "Automated vulnerability scanner & static/dynamic analyzer",
    description: "Enterprise-grade security orchestrator running automated Android/iOS build static & dynamic checks, verifying OWASP Top 10 vulnerabilities, and hooking Frida dynamic agent injections.",
    category: "Cybersecurity",
    status: "Maintained",
    role: "Lead Security & Backend Dev",
    timeline: "2024 - Present",
    technologies: ["Python", "MobSF", "Frida", "Docker", "FastAPI"],
    highlights: ["Bypassed SSL Pinning automatically", "OWASP compliance checklist reports", "Frida hooks injection console"],
    githubUrl: "https://github.com/mohith/mobsf-security",
    liveUrl: "https://security-scanner.mohith.dev",
    caseStudyUrl: "/work/mobile-security-platform",
    featured: true,
    order: 1
  },
  {
    id: "careerpilot-ai",
    slug: "careerpilot-ai-agents",
    title: "CareerPilot AI Orchestrator",
    subtitle: "Autonomous agentic workflow automation platform",
    description: "Intelligent career path navigation and profile optimization systems driven by multi-agent AI configurations, powered by Google Gemini and custom vector embedding pipelines.",
    category: "AI Systems",
    status: "Completed",
    role: "Principal AI Architect",
    timeline: "2023 - 2024",
    technologies: ["Gemini API", "LangChain", "Next.js", "PostgreSQL", "Python"],
    highlights: ["Autonomous profile optimization flows", "Retrieval Augmented Generation pipelines", "Interactive AI recommendation nodes"],
    githubUrl: "https://github.com/mohith/careerpilot-ai",
    liveUrl: "https://careerpilot.ai",
    caseStudyUrl: "/work/careerpilot-ai-agents",
    featured: true,
    order: 2
  },
  {
    id: "enterprise-admin",
    slug: "enterprise-dashboard-platform",
    title: "Enterprise Client Console",
    subtitle: "High-scale real-time database management workspace",
    description: "Premium full-stack administration dashboard with glassmorphic layout tokens, high-volume real-time telemetry tables, complex database migrations, and granular auth access controls.",
    category: "Full Stack",
    status: "Completed",
    role: "Lead Full Stack Engineer",
    timeline: "2023",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    highlights: ["Glassmorphic real-time statistics panels", "Interactive database migrator utility", "Optimized Lighthouse SEO metrics (99/100)"],
    githubUrl: "https://github.com/mohith/enterprise-admin",
    liveUrl: "https://console.enterprise.dev",
    caseStudyUrl: "/work/enterprise-dashboard-platform",
    featured: true,
    order: 3
  }
];
