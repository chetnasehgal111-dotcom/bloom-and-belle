import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-[0.14em] uppercase font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-brand-emerald text-brand-ivory hover:bg-brand-emerald-dark hover:shadow-subtle border border-brand-emerald",
    secondary:
      "bg-brand-gold text-brand-emerald-deep hover:bg-brand-gold-dark hover:text-white border border-brand-gold",
    outline:
      "border border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-brand-ivory bg-transparent",
    ghost:
      "text-brand-emerald hover:bg-brand-emerald/5 border border-transparent hover:border-brand-emerald/20",
  };

  const sizeStyles = {
    sm: "text-[11px] px-4 py-2 rounded-none gap-2",
    md: "text-xs px-6 py-3 rounded-none gap-2.5",
    lg: "text-xs sm:text-sm px-8 py-4 rounded-none gap-3 tracking-[0.18em]",
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
