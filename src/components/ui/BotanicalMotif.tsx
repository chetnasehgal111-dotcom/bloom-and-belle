import React from "react";
import { cn } from "@/lib/utils";

interface BotanicalProps {
  className?: string;
  variant?: "sprout" | "wreath" | "divider" | "leaf-branch" | "sparkle";
  size?: number;
}

export function BotanicalMotif({
  className,
  variant = "sprout",
  size = 24,
}: BotanicalProps) {
  if (variant === "sprout") {
    // Exact botanical leaf sprout motif from Brand Kit Logo variation #2
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("inline-block text-brand-gold", className)}
        aria-hidden="true"
      >
        <path d="M12 21V11" />
        <path d="M12 11C12 7.5 10 4 6 4C6 8 8.5 11 12 11Z" />
        <path d="M12 11C12 7.5 14 4 18 4C18 8 15.5 11 12 11Z" />
        <path d="M12 15C10 13.5 8 13.5 6 15" />
        <path d="M12 15C14 13.5 16 13.5 18 15" />
      </svg>
    );
  }

  if (variant === "leaf-branch") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("inline-block text-brand-gold", className)}
        aria-hidden="true"
      >
        <path d="M5 27C12 24 18 18 24 6" />
        <path d="M10 21C7 19 6 15 9 13C11 15 12 18 10 21Z" />
        <path d="M14 17C17 14 18 10 15 9C13 11 13 15 14 17Z" />
        <path d="M18 13C16 10 16 6 19 5C21 7 21 11 18 13Z" />
        <path d="M21 9C24 7 26 5 28 6C27 9 24 10 21 9Z" />
      </svg>
    );
  }

  if (variant === "divider") {
    return (
      <div className={cn("flex items-center justify-center gap-3 my-4", className)}>
        <span className="h-[1px] w-12 sm:w-20 bg-brand-gold/40" />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-brand-gold"
          aria-hidden="true"
        >
          <path d="M8 2C8 5 6 7 3 7C6 7 8 9 8 14C8 9 10 7 13 7C10 7 8 5 8 2Z" />
        </svg>
        <span className="h-[1px] w-12 sm:w-20 bg-brand-gold/40" />
      </div>
    );
  }

  if (variant === "sparkle") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="currentColor"
        className={cn("inline-block text-brand-gold", className)}
        aria-hidden="true"
      >
        <path d="M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5L10 1Z" />
      </svg>
    );
  }

  return (
    <div className={cn("inline-block text-brand-gold", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" strokeDasharray="1 3" />
        <path d="M12 6C12 10 9 13 6 13" />
        <path d="M12 6C12 10 15 13 18 13" />
        <path d="M12 6V18" />
      </svg>
    </div>
  );
}
