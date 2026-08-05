import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      body: "leading-7 text-foreground",
      lead: "text-xl text-muted-foreground leading-8",
      caption: "text-sm font-medium leading-none text-muted-foreground",
      code: "relative rounded bg-elevated px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "code" | "div";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyTag;
}

export function Typography({
  className,
  variant = "body",
  as,
  ...props
}: TypographyProps) {
  const defaultTagMap: Record<TypographyTag | string, TypographyTag> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    body: "p",
    lead: "p",
    caption: "span",
    code: "code",
  };

  const Component = as || defaultTagMap[variant || "body"] || "span";

  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}
