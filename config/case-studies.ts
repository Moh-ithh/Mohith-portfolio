import { CaseStudy } from "@/types/case-study";

export const caseStudiesConfig: CaseStudy[] = [
  {
    id: "mobsf-security",
    slug: "mobile-security-platform",
    title: "Mobile Security Testing Platform",
    subtitle: "Automating OWASP binary vulnerability audits & dynamic Frida tracing",
    overview: "Designed and implemented an automated orchestrator running static decompilations and dynamic memory analysis of Android/iOS build binaries, eliminating manual auditor checks and verifying compliance standards.",
    problem: "Manual security reviews for build binaries were bottlenecking deployment speeds. The engineering team lacked automated ways to verify OWASP vulnerabilities and test dynamic runtime memory injections before releasing software.",
    objectives: [
      "Automate decompilation checks and manifest audits.",
      "Integrate dynamic memory hook execution using Frida scripts.",
      "Produce compliant, exportable OWASP security checklists reports."
    ],
    architecture: "A decoupled worker queue model. FastAPI gateways accept APK/IPA uploads, pushing tasks to Celery workers containerized in Docker. Workers trigger headless MobSF CLI containers and launch Frida node runtimes on virtual target emulators, writing log flows back to PostgreSQL databases.",
    engineeringDecisions: [
      {
        decision: "Python & Celery Queue",
        rationale: "Binary analysis is process-intensive. Decoupling upload APIs from task execution prevents thread locks during multi-megabyte decompilations."
      },
      {
        decision: "MobSF CLI Containerization",
        rationale: "Standardizes dependencies for decompiler libraries and APK tools across local staging and production cluster targets."
      }
    ],
    implementation: "The orchestrator loads manifest XML configs to extract Android permissions, mapping dangerous elements against YARA signature databases. Dynamic analysis is executed by spawning virtual Android emulators, booting target assemblies, injecting customized Frida instrumentation hooks, and monitoring socket connections in real time.",
    challenges: [
      {
        challenge: "SSL Pinning blocks dynamic analytics",
        solution: "Wrote automated Frida hooks that target standard SSL libraries (like OkHttp, JSSE) at runtime, injecting certificate bypass instructions before security verifications evaluate."
      }
    ],
    results: [
      { metric: "100% Automated", label: "Verification scans" },
      { metric: "0 Security Leaks", label: "Dynamic runtime" }
    ],
    lessonsLearned: [
      "Decoupled asynchronous worker task models are essential when handling heavy system resources.",
      "Automating security compliance early in CI/CD saves dev cycles before final releases."
    ],
    technologies: ["Python", "MobSF", "Frida", "FastAPI", "Docker", "Celery", "PostgreSQL"],
    timeline: "2024",
    role: "Lead Security & Backend Dev",
    repository: "https://github.com/mohith/mobsf-security",
    liveDemo: "https://security-scanner.mohith.dev",
    featured: true,
    order: 1
  },
  {
    id: "careerpilot-ai",
    slug: "careerpilot-ai-agents",
    title: "CareerPilot AI Orchestrator",
    subtitle: "Multi-agent LLM task mapping & Retrieval Augmented Generation (RAG) graphs",
    overview: "Architected a multi-agent system executing intelligent career navigation, resume tailoring, and interview preparation workflows, resolving context constraints through state graphs and LangChain maps.",
    problem: "Single-agent LLM prompts frequently suffer from context drift and failure to follow sequential structures when processing complex resume histories against diverse job specifications.",
    objectives: [
      "Divide profiling, matching, and editing into independent, specialized agent processes.",
      "Integrate vector database retrieval to fetch highly relevant sample profiles.",
      "Guarantee response consistency and format validations (JSON schema)."
    ],
    architecture: "LangChain orchestrates state validation trees. Gemini API serves as the primary LLM platform. Context variables are stored in PostgreSQL, and embedding vectors are indexed inside pgvector databases to match candidate backgrounds with job descriptions.",
    engineeringDecisions: [
      {
        decision: "Multi-Agent State Trees",
        rationale: "Specializing agents (e.g. Profiler Agent vs. Editor Agent) keeps prompt scopes narrow, reducing context drift and API cost."
      },
      {
        decision: "pgvector Indexing",
        rationale: "Keeps relational meta data and vector embeddings within a unified, ACID-compliant database, reducing multi-service setup complexity."
      }
    ],
    implementation: "The pipeline converts candidate resumes into semantic vectors, querying vector databases to extract mapping job benchmarks. In parallel, a state machine passes the resume and target job through sequential agent nodes. The final payload is validated against strict JSON schemas before being served to the client.",
    challenges: [
      {
        challenge: "LLM output format drift",
        solution: "Implemented validation wrapper classes that catch parsing anomalies, automatically re-prompting LLM agents with corrective schemas if output formats diverge."
      }
    ],
    results: [
      { metric: "Multi-Agent Graph", label: "Autonomous workflow" },
      { metric: "98% Format Pass", label: "Schema validations" }
    ],
    lessonsLearned: [
      "Stateful agent networks produce significantly higher output consistency than long prompt chains.",
      "Automated fallback models are vital when developing production-level AI configurations."
    ],
    technologies: ["Gemini API", "LangChain", "Next.js", "PostgreSQL", "Python", "FastAPI"],
    timeline: "2023 - 2024",
    role: "Principal AI Architect",
    repository: "https://github.com/mohith/careerpilot-ai",
    liveDemo: "https://careerpilot.ai",
    featured: true,
    order: 2
  },
  {
    id: "enterprise-admin",
    slug: "enterprise-dashboard-platform",
    title: "Enterprise Client Console",
    subtitle: "High-scale real-time database console & glassmorphic system design",
    overview: "Developed a premium database administration platform using Next.js 16 and Tailwind CSS v4, styling data grids, handling database migrations, and optimizing Lighthouse performance metrics. Built an administration control console featuring real-time data table streams, dynamic configuration toggles, and complex database migration managers.",
    problem: "Legacy consoles lacked real-time feedback and responsive controls, leading to dashboard latency when querying high-volume production datasets.",
    objectives: [
      "Deliver a glassmorphic dashboard experience with Lighthouse compliance (99/100).",
      "Support real-time data streaming and complex relational table pagination.",
      "Establish a robust authentication system with role-based access control."
    ],
    architecture: "Next.js App Router serves as the application shell. Prisma handles migrations and queries on a PostgreSQL database. Tailwind CSS v4 coordinates glassmorphic style layers, and SSE (Server-Sent Events) feeds real-time telemetry updates.",
    engineeringDecisions: [
      {
        decision: "Next.js App Router (React RSC)",
        rationale: "Fetching heavy client configuration arrays directly on server nodes eliminates layout shift and optimizes load speeds."
      },
      {
        decision: "Tailwind CSS v4 & Vanilla CSS custom variables",
        rationale: "Provides a system of modular, responsive design tokens with minimal visual complexity and high runtime efficiency."
      }
    ],
    implementation: "Mapped complex PostgreSQL tables into interactive paginated client tables. Implemented real-time telemetry cards using Server-Sent Events, updating status fields without page loads. Applied secure authentication states using JWT tokens with middleware route guards.",
    challenges: [
      {
        challenge: "Real-time telemetry caused UI lagging",
        solution: "Implemented event debouncing and virtualized lists (using react-window) so only visible rows trigger paint computations on high-volume update cycles."
      }
    ],
    results: [
      { metric: "24ms Latency", label: "Database queries" },
      { metric: "99/100 Speed", label: "Lighthouse audit" }
    ],
    lessonsLearned: [
      "Server Components significantly minimize payload delivery overhead for complex dashboard systems.",
      "Strict data virtualization is critical when rendering high-frequency SSE telemetry updates."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    timeline: "2023",
    role: "Lead Full Stack Engineer",
    repository: "https://github.com/mohith/enterprise-admin",
    liveDemo: "https://console.enterprise.dev",
    featured: true,
    order: 3
  }
];
