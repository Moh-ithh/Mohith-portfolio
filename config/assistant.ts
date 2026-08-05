import { AssistantConfig } from "@/types/assistant";

export const assistantConfig: AssistantConfig = {
  welcomeMessage: "Welcome to the Portfolio Intelligence Console. Ask me questions about my development projects, system architectures, or technical expertise.",
  suggestions: [
    {
      id: "mobsf-platform",
      prompt: "Explain your Mobile Security Platform",
      category: "Cybersecurity"
    },
    {
      id: "mobsf-choice",
      prompt: "Why did you choose MobSF?",
      category: "Cybersecurity"
    },
    {
      id: "careerpilot-workflow",
      prompt: "How does CareerPilot AI work?",
      category: "AI Systems"
    },
    {
      id: "fullstack-workflow",
      prompt: "Explain your Full Stack workflow.",
      category: "Full Stack"
    },
    {
      id: "cyber-exp",
      prompt: "Show your Cybersecurity expertise.",
      category: "Cybersecurity"
    },
    {
      id: "eng-process",
      prompt: "Explain your engineering process.",
      category: "Architecture"
    },
    {
      id: "tech-spec",
      prompt: "What technologies do you specialize in?",
      category: "Research"
    },
    {
      id: "arch-approach",
      prompt: "How do you approach architecture?",
      category: "Architecture"
    }
  ],
  responses: {
    "explain your mobile security platform": {
      title: "Mobile Security Testing Platform Overview",
      summary: "An automated security orchestrator designed to run static decompilation scans and dynamic runtime tracing checks on Android/iOS build binaries.",
      explanation: "The orchestrator gateway is built using FastAPI. Uploaded APK/IPA binaries are pushed to a Celery tasks queue backed by Redis. Celery workers launch containerized instances of MobSF CLI to perform static decompilations, inspecting manifest permissions and parsing certificates. Dynamic tracing is orchestrated by launching virtual Android emulators, injecting custom Frida instrumentation scripts, and sniffing network sockets to verify OWASP vulnerabilities.",
      relatedProjects: ["Mobile Security Testing Platform"],
      technologies: ["Python", "MobSF", "Frida", "Docker", "Celery", "FastAPI"],
      suggestedFollowUps: [
        "Why did you choose MobSF?",
        "Show your Cybersecurity expertise."
      ]
    },
    "why did you choose mobsf?": {
      title: "Selection Rationale: MobSF",
      summary: "MobSF was selected as the static analysis foundation due to its extensible parser engine, CLI utility packaging, and OWASP compliance reporting.",
      explanation: "MobSF structures decompiler utilities (like jadx, apktool) inside a single engine. Building a wrapper around the MobSF CLI allows us to automate manifest permission audits, trace static API key exposures, and run code analyses without maintaining separate, complex binary parser dependencies. Containerizing MobSF in Docker makes the security scan pipeline scalable across server nodes.",
      relatedProjects: ["Mobile Security Testing Platform"],
      technologies: ["MobSF", "Docker", "Python"],
      suggestedFollowUps: [
        "Explain your Mobile Security Platform",
        "How do you approach architecture?"
      ]
    },
    "how does careerpilot ai work?": {
      title: "CareerPilot AI Orchestrator Core Workflow",
      summary: "A stateful multi-agent system executing resume tailors, profile optimization, and vector search matching.",
      explanation: "CareerPilot AI decouples profiling, job description matching, and resume formatting into specialized agent nodes. LangChain coordinates state graph transitions. User resume metadata is mapped into vector embeddings and queried against index structures in pgvector databases. LangChain passes data sets through sequential LLM calls using Gemini APIs, applying strict JSON schema validations on final outputs.",
      relatedProjects: ["CareerPilot AI Orchestrator"],
      technologies: ["Gemini API", "LangChain", "Next.js", "PostgreSQL", "pgvector"],
      suggestedFollowUps: [
        "Explain your engineering process.",
        "What technologies do you specialize in?"
      ]
    },
    "explain your full stack workflow.": {
      title: "Full Stack Development Methodology",
      summary: "Strict type safety, database index planning, server-side data rendering, and Lighthouse audits.",
      explanation: "My workflow prioritizes Next.js App Router server components to prefetch relational queries, eliminating layout shifts. Prisma maps tables into PostgreSQL databases, using index tables to optimize query latency to sub-30ms scopes. Tailwind CSS v4 provides modular styling classes, and Lighthouse verifies accessibility benchmarks remain above 98/100 thresholds.",
      relatedProjects: ["Enterprise Client Console"],
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      suggestedFollowUps: [
        "How do you approach architecture?",
        "Explain your engineering process."
      ]
    },
    "show your cybersecurity expertise.": {
      title: "Cybersecurity Methodology & Toolsets",
      summary: "Decompilation parsing, dynamic Frida memory injection, and signature-based YARA scanning.",
      explanation: "My security process is grounded in OWASP Mobile Top 10 standards. I automate permission audits by parsing AndroidManifest.xml tables, scan target codes for signature risks using YARA filters, and bypass SSL pinning barriers by compiling dynamic Frida script injections. Scans run asynchronously inside container networks to isolate threat execution spaces.",
      relatedProjects: ["Mobile Security Testing Platform"],
      technologies: ["Python", "Frida", "YARA", "MobSF", "Burp Suite"],
      suggestedFollowUps: [
        "Explain your Mobile Security Platform",
        "Why did you choose MobSF?"
      ]
    },
    "explain your engineering process.": {
      title: "Engineering Lifecycle & System Quality",
      summary: "Design document auditing, modular types schemas, and verification testing pipelines.",
      explanation: "I approach software construction like a principal architect: compiling detailed implementation plans before writing files, enforcing strict TypeScript validation layers, separating UI layouts from configurator files to support CMS dynamic bindings, and running automated compilation and linter quality gates.",
      relatedProjects: ["Mobile Security Testing Platform", "CareerPilot AI Orchestrator", "Enterprise Client Console"],
      technologies: ["TypeScript", "CI/CD", "Design Systems"],
      suggestedFollowUps: [
        "How do you approach architecture?",
        "What technologies do you specialize in?"
      ]
    },
    "what technologies do you specialize in?": {
      title: "Core Technical Specializations",
      summary: "Full Stack Web Architectures, Security Binaries Auditing, and Multi-Agent GenAI pipelines.",
      explanation: "My engineering stack is optimized for production-grade scale. I specialize in Next.js/React full-stack interfaces, Python/Docker backend workflows, Frida/MobSF security analysis tools, and LangChain/Gemini AI agent graphs.",
      relatedProjects: ["Mobile Security Testing Platform", "CareerPilot AI Orchestrator", "Enterprise Client Console"],
      technologies: ["Next.js", "React", "TypeScript", "Python", "Docker", "Frida", "Gemini API"],
      suggestedFollowUps: [
        "Explain your Full Stack workflow.",
        "How does CareerPilot AI work?"
      ]
    },
    "how do you approach architecture?": {
      title: "Architectural Principles: Scale, Decoupling, and Trust",
      summary: "Asynchronous task queue separation, ACID database consistency, and modular types mapping.",
      explanation: "I design software systems to be decoupled and robust. High-load processes (like binary decompilations) are isolated in background queues. Vector data sits within ACID-compliant databases to prevent sync drift, and UI layouts consume config data variables to remain modular and ready for dynamic server-side injections.",
      relatedProjects: ["Mobile Security Testing Platform", "CareerPilot AI Orchestrator", "Enterprise Client Console"],
      technologies: ["Celery", "PostgreSQL", "Prisma", "Next.js"],
      suggestedFollowUps: [
        "Explain your engineering process.",
        "Why did you choose MobSF?"
      ]
    }
  }
};
