export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNav: NavItem[] = [
  {
    title: "GitHub",
    href: "https://github.com",
    external: true,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    external: true,
  },
];
