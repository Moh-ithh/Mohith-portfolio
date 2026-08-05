import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { cn } from "@/lib/utils";

export interface IconButtonProps extends Omit<ButtonProps, "children" | "variant"> {
  icon: LucideIcon;
  variant?: "default" | "ghost";
  "aria-label": string;
}

export function IconButton({
  icon: Icon,
  variant = "default",
  className,
  ref,
  ...props
}: IconButtonProps) {
  const buttonVariant = variant === "ghost" ? "ghost" : "icon";

  return (
    <Button
      ref={ref}
      variant={buttonVariant}
      className={cn(
        variant === "ghost" && "rounded-full p-0 aspect-square justify-center items-center",
        className
      )}
      {...props}
    >
      <Icon className="size-4" />
    </Button>
  );
}
