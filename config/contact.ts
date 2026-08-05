import { ContactConfig } from "@/types/contact";

export const contactConfig: ContactConfig = {
  welcomeMessage: "Initiate secure communications. Recruiters, engineering hiring managers, and clients may schedule queries or submit task briefs.",
  gpgKeyFingerprint: "8A4C 9E2F B6D1 0E7C 4F9B  2A3D 5E8F 1C9D 0A4B",
  availability: {
    status: "ACTIVE / AVAILABLE",
    types: [
      "Full-time Senior/Staff UI roles",
      "Cybersecurity auditing contracts",
      "AI Systems graph integrations",
      "Research collaboration tasks"
    ]
  },
  methods: [
    {
      id: "email",
      label: "Secure Email",
      value: "mohith@example.com",
      icon: "email",
      link: "mailto:mohith@example.com"
    },
    {
      id: "linkedin",
      label: "LinkedIn Professional",
      value: "linkedin.com/in/mohith",
      icon: "linkedin",
      link: "https://linkedin.com/in/mohith"
    },
    {
      id: "github",
      label: "GitHub Workspaces",
      value: "github.com/mohith",
      icon: "github",
      link: "https://github.com/mohith"
    },
    {
      id: "resume",
      label: "Latest Resume Profile",
      value: "Download PDF (Latest)",
      icon: "resume",
      link: "https://resume.mohith.dev/mohith-resume-latest.pdf"
    }
  ],
  socials: [
    {
      id: "github-alt",
      label: "GitHub",
      value: "@mohith",
      link: "https://github.com/mohith"
    },
    {
      id: "linkedin-alt",
      label: "LinkedIn",
      value: "/in/mohith",
      link: "https://linkedin.com/in/mohith"
    }
  ]
};
