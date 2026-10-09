import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

export function CapsuleWardrobeSection() {
  const capsuleItems = [
    { name: "Crisp Tailored Shirt", role: "Work & Weekend Layering", tag: "Essential #1" },
    { name: "Flattering Straight Trousers", role: "Effortless Posture & Fit", tag: "Essential #2" },
    { name: "Neutral Breathable Kurti", role: "Everyday Comfort & Grace", tag: "Essential #3" },
    { name: "Two-Piece Tailored Co-ord Set", role: "Zero-Stress Complete Outfit", tag: "Essential #4" },
    { name: "Signature Linen Blazer", role: "Instant Polish & Structure", tag: "Essential #5" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-ivory border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Flatlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square w-full max-w-lg mx-auto border border-brand-gold/30 shadow-luxury overflow-hidden bg-white">
              <Image
                src="/editorial/capsule-essentials.png"
                alt="Bloom & Belle capsule wardrobe essentials flatlay with blazer, shirt, denim, and accessories"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute top-4 left-4 bg-brand-emerald text-brand-ivory text-[10px] font-sans tracking-[0.2em] uppercase px-3 py-1.5 shadow-md">
                The Capsule System
              </div>
            </div>

            {/* Quote badge */}
            <div className="mt-4 p-4 bg-brand-ivory-cream border border-brand-gold/30 text-center max-w-lg mx-auto">
              <span className="font-serif text-sm sm:text-base text-brand-emerald italic block">
                &ldquo;Invest once. Style forever.&rdquo;
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-light mt-0.5 block">
                The Bloom &amp; Belle Wardrobe Principle
              </span>
            </div>
          </div>

          {/* Right Column: Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Capsule Philosophy"
              title="Build Smart. Dress Beautifully."
              subtitle="The smartest wardrobes aren't the biggest—they're the most intentional. We design versatile foundation pieces that rotate harmoniously across your life."
              withBotanical={false}
            />

            <div className="space-y-3 pt-2">
              {capsuleItems.map((item) => (
                <div
                  key={item.tag}
                  className="flex items-center justify-between p-3 bg-brand-ivory-cream border border-brand-gold/20 hover:border-brand-gold/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-sans tracking-widest uppercase bg-brand-emerald text-brand-ivory px-2 py-0.5">
                      {item.tag}
                    </span>
                    <div>
                      <h4 className="font-serif text-sm sm:text-base text-brand-emerald font-medium">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-brand-charcoal/70 font-light">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button href="/collections/co-ord-sets" size="md">
                <span>Shop Capsule Pieces</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/style-guide" variant="outline" size="md">
                <span>View Full Styling Formulas</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
