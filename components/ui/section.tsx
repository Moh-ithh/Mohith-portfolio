import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full relative", {
  variants: {
    spacing: {
      standard: "py-16 md:py-24",
      compact: "py-8 md:py-12",
    },
  },
  defaultVariants: {
    spacing: "standard",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  id?: string;
}

export function Section({ className, spacing, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(sectionVariants({ spacing, className }))}
      {...props}
    />
  );
}
