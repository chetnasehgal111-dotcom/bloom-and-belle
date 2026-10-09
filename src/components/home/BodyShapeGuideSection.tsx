"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BODY_SHAPE_GUIDES } from "@/data/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function BodyShapeGuideSection() {
  const [selectedShape, setSelectedShape] = useState<"Pear" | "Hourglass" | "Apple" | "Rectangle">("Pear");

  const currentGuide = BODY_SHAPE_GUIDES.find((g) => g.shape === selectedShape) || BODY_SHAPE_GUIDES[0];

  return (
    <section className="py-16 sm:py-24 bg-brand-ivory border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Style Smarter, Not Harder"
          title="Style According To Your Body Shape"
          subtitle="90% of fashion frustration comes from buying clothes that are trendy but don't honor your unique silhouette. Know your shape. Love your style."
        />

        {/* Body Shape Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto mt-10 mb-10">
          {BODY_SHAPE_GUIDES.map((guide) => (
            <button
              key={guide.shape}
              onClick={() => setSelectedShape(guide.shape)}
              className={cn(
                "p-3 sm:p-4 text-center border transition-all duration-300 flex flex-col items-center justify-center gap-1",
                selectedShape === guide.shape
                  ? "bg-brand-emerald text-brand-ivory border-brand-emerald shadow-md"
                  : "bg-white text-brand-charcoal/80 border-brand-gold/25 hover:border-brand-gold"
              )}
            >
              <span className="font-serif text-base sm:text-lg font-medium">
                {guide.title}
              </span>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-wider font-light",
                  selectedShape === guide.shape ? "text-brand-gold" : "text-brand-charcoal/50"
                )}
              >
                Silhouette
              </span>
            </button>
          ))}
        </div>

        {/* Selected Body Shape Card */}
        <div className="bg-brand-ivory-cream border border-brand-gold/30 p-6 sm:p-10 shadow-subtle max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Guide Text */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-sans uppercase tracking-[0.2em] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentGuide.tagline}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-brand-emerald">
                {currentGuide.title} Guide
              </h3>

              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                {currentGuide.description}
              </p>

              {/* Best Picks */}
              <div className="pt-2">
                <h4 className="font-sans text-[11px] uppercase tracking-[0.16em] text-brand-emerald font-semibold mb-2">
                  Best Silhouettes For You:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentGuide.bestPicks.map((pick) => (
                    <span
                      key={pick}
                      className="bg-white text-brand-emerald text-xs px-3 py-1.5 border border-brand-gold/30 font-light"
                    >
                      {pick}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="pt-2 space-y-2">
                {currentGuide.stylingTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-brand-charcoal/80 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  href={`/collections/${currentGuide.recommendedCategory}`}
                  variant="primary"
                  size="sm"
                >
                  <span>Shop Curated Styles</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* Visual Context Box */}
            <div className="md:col-span-5 relative aspect-[3/4] w-full border border-brand-gold/30 overflow-hidden bg-white shadow-sm">
              <Image
                src="/editorial/moodboard.png"
                alt="Bloom & Belle body shape styling moodboard"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-brand-emerald/90 backdrop-blur-sm text-brand-ivory text-[10px] font-sans px-3 py-2 text-center uppercase tracking-wider">
                Interactive Styling System &bull; Bloom &amp; Belle
              </div>
            </div>
          </div>
        </div>

        {/* Full Guide Link */}
        <div className="text-center mt-8">
          <Link
            href="/style-guide"
            className="text-xs text-brand-emerald hover:text-brand-gold uppercase tracking-[0.16em] font-medium transition-colors inline-flex items-center gap-1.5"
          >
            <span>Explore Complete Body Shape &amp; Wardrobe Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
