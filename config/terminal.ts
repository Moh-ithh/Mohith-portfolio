import { TerminalConfig } from "@/types/terminal";

export const terminalConfig: TerminalConfig = {
  welcomeMessage: "Mohith Portfolio CLI v1.1.0\nType 'help' to review available terminal instructions.",
  systemInfo: {
    host: "mohith-workspace.local",
    kernel: "Darwin 23.5.0 x86_64",
    shell: "zsh 5.9",
    uptime: "2 days, 14 hours"
  },
  commands: {
    help: {
      name: "help",
      description: "List all supported terminal console instructions",
      category: "System",
      output: {
        title: "Available Commands Reference List",
        description: "Execute these keywords to query portfolio details:",
        structuredContent: [
          { key: "help", value: "Display this support list table" },
          { key: "whoami", value: "Show general profile information" },
          { key: "projects", value: "List featured development applications" },
          { key: "case-studies", value: "Display engineering process case files" },
          { key: "domains", value: "Review core engineering specialization domains" },
          { key: "ai", value: "Show AI assistant integration metrics" },
          { key: "skills", value: "Query categorized technical language tools" },
          { key: "experience", value: "Show engineering timeline checkpoints" },
          { key: "resume", value: "Fetch download targets links for resume" },
          { key: "github", value: "Show source code targets repositories" },
          { key: "linkedin", value: "Show professional social credentials" },
          { key: "contact", value: "Display secure email communications endpoint" },
          { key: "version", value: "Show shell environment version variables" },
          { key: "clear", value: "Reset terminal outputs history blocks" }
        ],
        relatedProjects: [],
        suggestedCommands: ["whoami", "projects", "skills"]
      }
    },
    whoami: {
      name: "whoami",
      description: "Display general engineer profile metadata",
      category: "General",
      output: {
        title: "Mohith | Systems & Frontend Engineer",
        description: "General profile details:",
        structuredContent: [
          { key: "Role", value: "Lead UI Engineer & Cybersecurity Specialist" },
          { key: "Location", value: "India" },
          { key: "Status", value: "Available for engineering roles" },
          { key: "Specialties", value: "Mobile Security, Multi-Agent AI systems, Next.js Full Stack" }
        ],
        relatedProjects: [],
        suggestedCommands: ["skills", "experience", "contact"]
      }
    },
    projects: {
      name: "projects",
      description: "List details for featured development systems",
      category: "Portfolio",
      output: {
        title: "Featured Engineering Projects",
        description: "Production applications deployed in portfolio:",
        structuredContent: [
          { key: "Mobile Security Testing", value: "Static parser and dynamic hook tracer scans platform" },
          { key: "CareerPilot AI Orchestrator", value: "Stateful LangChain multi-agent resume profiling RAG graph" },
          { key: "Enterprise Client Console", value: "Sub-30ms PostgreSQL dashboard using SSE real-time feeds" }
        ],
        relatedProjects: ["Mobile Security Testing Platform", "CareerPilot AI Orchestrator", "Enterprise Client Console"],
        suggestedCommands: ["case-studies", "domains"]
      }
    },
    "case-studies": {
      name: "case-studies",
      description: "Show engineering process logs summaries",
      category: "Portfolio",
      output: {
        title: "Engineering Case Studies Summary Logs",
        description: "Case files explaining architectural trade-offs:",
        structuredContent: [
          { key: "Mobile Security Platform", value: "Bypassing Android SSL pinning limits using runtime Frida instrumentation injections" },
          { key: "CareerPilot AI", value: "Narrowing prompt scopes via LangChain state nodes to prevent formatting drift" },
          { key: "Enterprise Client Console", value: "Minimizing dashboard paint overhead using server component caching and virtual lists" }
        ],
        relatedProjects: ["Mobile Security Testing Platform", "CareerPilot AI Orchestrator", "Enterprise Client Console"],
        suggestedCommands: ["projects", "domains"]
      }
    },
    domains: {
      name: "domains",
      description: "Display core engineering specializations",
      category: "Portfolio",
      output: {
        title: "Core Specialization Domains",
        description: "Areas of deep technical expertise:",
        structuredContent: [
          { key: "Cybersecurity", value: "Binary decompilation and static/dynamic assembly checking pipelines" },
          { key: "AI Systems", value: "Multi-agent graph topologies and vector retrieval databases" },
          { key: "Full Stack", value: "Strict type boundaries, server prefetching, and data virtualization" },
          { key: "Research & Learning", value: "Detailed audit checklists and systems benchmarking audits" }
        ],
        relatedProjects: [],
        suggestedCommands: ["skills", "projects"]
      }
    },
    ai: {
      name: "ai",
      description: "Query portfolio AI assistant parameters",
      category: "General",
      output: {
        title: "Portfolio RAG AI Assistant Status",
        description: "Configuration metadata for the AI Playground console:",
        structuredContent: [
          { key: "Status", value: "ACTIVE / ONLINE" },
          { key: "Framework", value: "Next.js 16 + React 19 Client components" },
          { key: "Index Size", value: "4.8MB text logs chunk maps" },
          { key: "Sources", value: "Hero, Featured Work, Domains, Case Studies configurations" }
        ],
        relatedProjects: ["CareerPilot AI Orchestrator"],
        suggestedCommands: ["whoami", "help"]
      }
    },
    skills: {
      name: "skills",
      description: "List technical languages and developer tools",
      category: "General",
      output: {
        title: "Categorized Technical Toolstack",
        description: "Active development frameworks and languages:",
        structuredContent: [
          { key: "Languages", value: "TypeScript, JavaScript, Python, SQL, HTML, CSS" },
          { key: "Frontend", value: "Next.js, React, Tailwind CSS, class-variance-authority, shadcn" },
          { key: "Backend", value: "FastAPI, Node.js, Celery, Redis" },
          { key: "Databases", value: "PostgreSQL, pgvector, Prisma, MongoDB" },
          { key: "Security", value: "Frida, MobSF CLI, YARA signature scanners, Burp Suite" }
        ],
        relatedProjects: [],
        suggestedCommands: ["experience", "projects"]
      }
    },
    experience: {
      name: "experience",
      description: "Show engineering timeline checkpoints",
      category: "General",
      output: {
        title: "Professional Engineering Checkpoints",
        description: "Technical roles history:",
        structuredContent: [
          { key: "Principal UI Engineer", value: "Design systems development, and data visualization architectures" },
          { key: "Lead Security Auditor", value: "Automating security checks, decompiling packages, and hooking memory" },
          { key: "AI Systems Architect", value: "Authoring RAG state graphs and agent prompt pipelines" }
        ],
        relatedProjects: [],
        suggestedCommands: ["whoami", "skills", "contact"]
      }
    },
    resume: {
      name: "resume",
      description: "Fetch resume download configurations link",
      category: "General",
      output: {
        title: "Resume Export Details",
        description: "Download locations for resume files:",
        structuredContent: [
          { key: "PDF Format", value: "https://resume.mohith.dev/mohith-resume-latest.pdf" },
          { key: "JSON Resume Schema", value: "https://resume.mohith.dev/mohith-resume.json" }
        ],
        relatedProjects: [],
        suggestedCommands: ["contact", "whoami"]
      }
    },
    github: {
      name: "github",
      description: "Show source code repositories targets links",
      category: "General",
      output: {
        title: "GitHub Repositories Map",
        description: "Primary engineering workspaces:",
        structuredContent: [
          { key: "Profile Target", value: "https://github.com/mohith" },
          { key: "Security Platform", value: "https://github.com/mohith/mobsf-security" },
          { key: "AI Agent Orchestrator", value: "https://github.com/mohith/careerpilot-ai" },
          { key: "Enterprise Admin Console", value: "https://github.com/mohith/enterprise-admin" }
        ],
        relatedProjects: [],
        suggestedCommands: ["linkedin", "contact"]
      }
    },
    linkedin: {
      name: "linkedin",
      description: "Show professional social credentials target link",
      category: "General",
      output: {
        title: "LinkedIn Social Profile",
        description: "Professional networking profile links:",
        structuredContent: [
          { key: "LinkedIn URL", value: "https://linkedin.com/in/mohith" }
        ],
        relatedProjects: [],
        suggestedCommands: ["github", "contact"]
      }
    },
    contact: {
      name: "contact",
      description: "Display secure email communications endpoint",
      category: "General",
      output: {
        title: "Secure Communications Endpoint",
        description: "Contact and secure communication parameters:",
        structuredContent: [
          { key: "E-mail Address", value: "mohith@example.com" },
          { key: "GPG Public Fingerprint", value: "8A4C 9E2F B6D1 0E7C 4F9B  2A3D 5E8F 1C9D 0A4B" },
          { key: "Communication Status", value: "Encrypted mail preferred" }
        ],
        relatedProjects: [],
        suggestedCommands: ["whoami", "resume"]
      }
    },
    version: {
      name: "version",
      description: "Show shell environment version variables",
      category: "System",
      output: {
        title: "Terminal Version Parameters",
        description: "Shell variables setup details:",
        structuredContent: [
          { key: "CLI Core Version", value: "1.1.0-release" },
          { key: "Target Compilation", value: "Next.js 16.3.0 + React 19" },
          { key: "Lint Rules", value: "TypeScript Strict Standard" }
        ],
        relatedProjects: [],
        suggestedCommands: ["help", "clear"]
      }
    },
    clear: {
      name: "clear",
      description: "Reset terminal outputs history blocks",
      category: "System",
      output: {
        title: "Clear Command Triggered",
        description: "Resets the display viewport.",
        structuredContent: [],
        relatedProjects: [],
        suggestedCommands: ["help"]
      }
    }
  }
};
