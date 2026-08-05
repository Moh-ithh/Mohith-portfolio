import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dividerVariants = cva("bg-border shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full my-4",
      vertical: "w-[1px] h-full mx-4 self-stretch",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {}

export function Divider({ className, orientation, ...props }: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation === "vertical" ? "vertical" : "horizontal"}
      className={cn(dividerVariants({ orientation, className }))}
      {...props}
    />
  );
}
