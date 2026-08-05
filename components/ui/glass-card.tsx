import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  "rounded-lg overflow-hidden border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "glass-panel shadow-sm border-border",
        elevated: "glass-panel shadow-md border-border/80",
        interactive: "glass-card hover:-translate-y-0.5 hover:shadow-lg",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

export function GlassCard({
  className,
  variant,
  padding,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(glassCardVariants({ variant, padding, className }))}
      {...props}
    />
  );
}
