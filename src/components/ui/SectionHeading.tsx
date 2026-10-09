import React from "react";
import { cn } from "@/lib/utils";
import { BotanicalMotif } from "./BotanicalMotif";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  withBotanical?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  withBotanical = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-brand-gold">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-emerald tracking-tight text-balance">
        {title}
      </h2>

      {withBotanical && (
        <div className={align === "center" ? "flex justify-center" : "flex justify-start"}>
          <BotanicalMotif variant="divider" className="my-3" />
        </div>
      )}

      {subtitle && (
        <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
