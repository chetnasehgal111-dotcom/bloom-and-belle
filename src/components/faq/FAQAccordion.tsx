"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/brand";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));

  return (
    <div className="space-y-12">
      {categories.map((cat) => {
        const items = FAQ_ITEMS.filter((i) => i.category === cat);
        return (
          <div key={cat} className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-brand-emerald pb-2 border-b border-brand-gold/25 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-gold" />
              <span>{cat}</span>
            </h2>

            <div className="space-y-3">
              {items.map((item) => {
                const globalIdx = FAQ_ITEMS.indexOf(item);
                const isOpen = openIndex === globalIdx;

                return (
                  <div
                    key={item.question}
                    className="bg-white border border-brand-gold/20 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggle(globalIdx)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-brand-emerald hover:text-brand-gold transition-colors"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-brand-gold shrink-0 transition-transform duration-300",
                          isOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed border-t border-brand-gold/10 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Still Have Questions CTA */}
      <div className="mt-16 p-8 bg-brand-ivory-cream border border-brand-gold/30 text-center space-y-3">
        <BotanicalMotif variant="sprout" size={24} />
        <h3 className="font-serif text-2xl text-brand-emerald">
          Have A Specific Question We Haven&apos;t Answered?
        </h3>
        <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light max-w-lg mx-auto">
          Our styling and support team is on standby to help you personally with fabric swatches, sizing, and styling advice.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/919876543210?text=Hi%20Bloom%20%26%20Belle,%20I%20have%20a%20question%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-emerald text-brand-ivory text-xs font-sans tracking-[0.16em] uppercase hover:bg-brand-emerald-dark font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-brand-gold" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
