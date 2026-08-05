export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  icon: "email" | "linkedin" | "github" | "resume";
  link: string;
}

export interface SocialLink {
  id: string;
  label: string;
  value: string;
  link: string;
}

export interface Availability {
  status: string;
  types: string[];
}

export interface ContactConfig {
  welcomeMessage: string;
  gpgKeyFingerprint: string;
  methods: ContactMethod[];
  socials: SocialLink[];
  availability: Availability;
}
