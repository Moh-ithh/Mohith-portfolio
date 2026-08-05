import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { NavLink } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import { CommandButton } from "./command-button";
import { AvailabilityBadge } from "./availability-badge";
import { mainNav } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container variant="wide" className="flex h-16 items-center justify-between">
        {/* Left - Wordmark */}
        <Link 
          href="/" 
          className="font-bold text-lg tracking-tight text-foreground hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        >
          MOHITH
        </Link>

        {/* Center - Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Right - Widgets */}
        <div className="flex items-center gap-4">
          <AvailabilityBadge />
          <CommandButton />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
