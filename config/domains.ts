import { Domain } from "@/types/domain";

export const domainsConfig: Domain[] = [
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Mobile vulnerabilities audit & dynamic runtime checks",
    description: "Orchestrating automated analysis pipelines to detect code vulnerability leak vectors, verify compliance markers against industry checklists, and secure data layers.",
    technologies: ["Mobile Security", "Static Analysis", "Dynamic Analysis", "Malware Detection", "OWASP"],
    tools: ["Python", "MobSF", "Frida", "YARA", "Burp Suite"],
    methodology: [
      "Decompile binary configurations to verify permissions",
      "Inject dynamic Frida agents to hook process targets",
      "Scan assemblies using custom YARA signature filters"
    ],
    relatedProjects: [
      { title: "Mobile Security Testing Platform", slug: "mobile-security-platform" }
    ],
    metrics: [
      { value: "0 Vulnerabilities", label: "Threat Score" },
      { value: "100% Verified", label: "Scan Coverage" }
    ],
    featured: true,
    order: 1
  },
  {
    id: "ai-systems",
    slug: "ai-systems",
    title: "AI Systems",
    subtitle: "Autonomous agentic workflow automations",
    description: "Designing structured multi-agent system workflows using generative intelligence APIs, context-optimized prompts, and real-time streaming integrations.",
    technologies: ["AI Agents", "Gemini", "Workflow Automation", "Prompt Engineering", "LLM Integration"],
    tools: ["Gemini API", "LangChain", "Python", "FastAPI"],
    methodology: [
      "Orchestrate LangChain graphs to align agent tasks",
      "Optimize context prompt windows dynamically",
      "Embed data layers using vector collection queries"
    ],
    relatedProjects: [
      { title: "CareerPilot AI Orchestrator", slug: "careerpilot-ai-agents" }
    ],
    metrics: [
      { value: "Multi-Agent", label: "Node Routing" },
      { value: "Gemini 1.5", label: "Model Platform" }
    ],
    featured: true,
    order: 2
  },
  {
    id: "full-stack",
    slug: "full-stack",
    title: "Full Stack Engineering",
    subtitle: "High-scale modular application environments",
    description: "Building production-grade full-stack layouts with beveled container design systems, optimized relational database query layers, and robust authentication layers.",
    technologies: ["Frontend Architecture", "Backend Infrastructure", "API Design", "Databases", "Authentication"],
    tools: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    methodology: [
      "Enforce type safety across API boundaries in TypeScript",
      "Optimize relational query loads using database index maps",
      "Deliver Lighthouse-compliant layouts matching W3C criteria"
    ],
    relatedProjects: [
      { title: "Enterprise Client Console", slug: "enterprise-dashboard-platform" }
    ],
    metrics: [
      { value: "24ms Latency", label: "API Speed" },
      { value: "99/100 A11y", label: "Lighthouse Score" }
    ],
    featured: true,
    order: 3
  },
  {
    id: "research-learning",
    slug: "research-learning",
    title: "Research & Learning",
    subtitle: "Documentation-driven technical architecture audits",
    description: "Running rigorous technical verification processes, deep-diving code compilers performance specs, and mapping architecture frameworks.",
    technologies: ["Research-driven Dev", "Technical Docs", "Performance Optimization", "Continuous Learning"],
    tools: ["Technical Writing", "Benchmarking Tools", "Performance Audits"],
    methodology: [
      "Deconstruct system dependencies to verify speed metrics",
      "Author clean, detailed technical architecture logs",
      "Validate codebase configurations against standards checklists"
    ],
    relatedProjects: [],
    metrics: [
      { value: "ISO Standard", label: "Compliance Marker" },
      { value: "Clean Docs", label: "Methodology Focus" }
    ],
    featured: true,
    order: 4
  }
];
