"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  activeClassName?: string;
  exact?: boolean;
}

export function NavLink({
  href,
  className,
  activeClassName = "text-foreground font-semibold",
  exact = false,
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  
  const isActive = exact 
    ? pathname === href 
    : pathname.startsWith(href.toString()) && (href === "/" ? pathname === "/" : true);

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded",
        isActive && activeClassName,
        className
      )}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
