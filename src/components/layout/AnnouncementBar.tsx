"use client";

import React, { useState, useEffect } from "react";
import { ANNOUNCEMENT_MESSAGES } from "@/data/navigation";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? ANNOUNCEMENT_MESSAGES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
  };

  return (
    <aside
      aria-label="Announcement"
      className="bg-brand-emerald text-brand-ivory text-[11px] sm:text-xs py-2 px-4 border-b border-brand-gold/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="text-brand-ivory/60 hover:text-brand-gold p-1 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center justify-center gap-2 text-center tracking-[0.14em] uppercase font-light truncate px-2">
          <Sparkles className="w-3 h-3 text-brand-gold shrink-0 hidden sm:inline-block" />
          <span className="truncate transition-opacity duration-500">
            {ANNOUNCEMENT_MESSAGES[index]}
          </span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="text-brand-ivory/60 hover:text-brand-gold p-1 transition-colors"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
