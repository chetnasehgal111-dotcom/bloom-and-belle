import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Check } from "lucide-react";

export function BrandIntroSection() {
  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-cream border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Authentic Model Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto border border-brand-gold/30 shadow-subtle overflow-hidden bg-white">
              <Image
                src="/editorial/western-hero.png"
                alt="Bloom & Belle lifestyle image representing modern confident women in relaxed tailoring"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />

              {/* Verified brand tag */}
              <div className="absolute top-4 left-4 bg-brand-emerald text-brand-ivory text-[10px] font-sans tracking-[0.2em] uppercase px-3 py-1.5 shadow-sm">
                Real Styles &bull; Real Fits
              </div>
            </div>

            {/* Gold offset accent */}
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-brand-gold/40 pointer-events-none hidden sm:block"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The Bloom &amp; Belle Story"
              title="Style that fits you, your vibe & your budget."
              withBotanical={false}
            />

            <p className="font-serif text-lg text-brand-emerald/90 italic font-light">
              &ldquo;Fashion shouldn&apos;t force you to choose between feeling comfortable and looking impeccably dressed.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
              We know the frustration of online shopping: thin, transparent white fabrics that require three awkward layers; trendy tops that unravel after a single spin cycle; and luxury labels whose prices feel completely out of touch with reality.
            </p>

            <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
              At Bloom &amp; Belle, we build for the modern woman who transitions seamlessly between boardroom presentations, coffee dates, and festive celebrations. We craft premium-weight textiles, thoughtful tailoring, and timeless colors that allow you to invest once and style endlessly.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-gold" />
                </div>
                <span className="text-xs text-brand-charcoal/80 font-light">
                  <strong>High-GSM Fabrics:</strong> Never see-through or scratchy
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-gold" />
                </div>
                <span className="text-xs text-brand-charcoal/80 font-light">
                  <strong>Ethical Pricing:</strong> Accessible without luxury markups
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-gold" />
                </div>
                <span className="text-xs text-brand-charcoal/80 font-light">
                  <strong>Body Shape Conscious:</strong> Sized for true Indian &amp; global fits
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-gold" />
                </div>
                <span className="text-xs text-brand-charcoal/80 font-light">
                  <strong>Capsule Wardrobe:</strong> Multi-occasion mix &amp; match versatility
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.16em] uppercase text-brand-emerald hover:text-brand-gold font-medium transition-colors"
              >
                <span>Read Our Full Story &amp; Craftsmanship</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
