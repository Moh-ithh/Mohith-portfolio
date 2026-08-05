"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui";
import { NavLink } from "./nav-link";
import { mainNav } from "@/config/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="p-1.5 text-muted-foreground hover:text-foreground aspect-square rounded-md"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu className="size-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-background p-6 shadow-xl border-l border-border">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground">Navigation</span>
              <Button
                variant="ghost"
                size="sm"
                className="p-1.5 text-muted-foreground hover:text-foreground aspect-square rounded-md"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="size-6" />
              </Button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {mainNav.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 border-b border-border/40"
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
