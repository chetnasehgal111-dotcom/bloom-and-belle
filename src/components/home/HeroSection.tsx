import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { BRAND_INFO } from "@/data/brand";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-ivory border-b border-brand-gold/20 pt-6 pb-12 sm:pt-10 sm:pb-20">
      {/* Background delicate pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `radial-gradient(#0E4D3F 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Statement & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald/5 border border-brand-gold/30 text-brand-emerald text-[11px] font-sans tracking-[0.2em] uppercase font-medium w-fit mb-4 sm:mb-6">
              <BotanicalMotif variant="sprout" size={14} />
              <span>Contemporary Women&apos;s Fashion</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-emerald font-normal leading-[1.12] tracking-tight text-balance mb-4 sm:mb-6">
              For every version <br className="hidden sm:inline" />
              <span className="italic font-normal text-brand-gold-dark">of you.</span>
            </h1>

            <p className="font-serif text-lg sm:text-xl text-brand-emerald/90 italic font-light mb-3">
              &ldquo;{BRAND_INFO.supportingMessage}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light max-w-xl mb-6 sm:mb-8">
              Western silhouettes meet ethnic soul. Thoughtfully curated for modern women who value premium-weight fabrics, breathable cottons, and flattering fits—without inflated price tags.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 sm:mb-10">
              <Button href="/collections" size="lg" className="w-full sm:w-auto">
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href="/style-guide"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Body Shape Guide</span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-brand-gold/20 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="font-serif text-base sm:text-lg text-brand-emerald font-semibold block">
                  160+ GSM
                </span>
                <span className="text-[10px] sm:text-[11px] text-brand-charcoal/70 uppercase tracking-wider font-light">
                  Non-Sheer Cotton
                </span>
              </div>

              <div>
                <span className="font-serif text-base sm:text-lg text-brand-emerald font-semibold block">
                  S to XXL
                </span>
                <span className="text-[10px] sm:text-[11px] text-brand-charcoal/70 uppercase tracking-wider font-light">
                  True-To-Size Fits
                </span>
              </div>

              <div>
                <span className="font-serif text-base sm:text-lg text-brand-emerald font-semibold block">
                  Pan-India
                </span>
                <span className="text-[10px] sm:text-[11px] text-brand-charcoal/70 uppercase tracking-wider font-light">
                  &amp; Global Shipping
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Primary Image */}
              <div className="relative aspect-[3/4] w-full border border-brand-gold/30 shadow-luxury overflow-hidden bg-brand-ivory-cream">
                <Image
                  src="/editorial/ad-hero.png"
                  alt="Bloom & Belle model showcasing modern emerald green festive and western clothing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />

                {/* Subtle Floating Banner Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-ivory/95 backdrop-blur-md p-3.5 border border-brand-gold/30 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-medium block">
                      Featured Edit
                    </span>
                    <span className="font-serif text-sm text-brand-emerald font-medium">
                      Western Silhouettes. Ethnic Soul.
                    </span>
                  </div>

                  <Link
                    href="/collections/ethnic-wear"
                    className="text-[11px] text-brand-emerald font-medium uppercase tracking-wider flex items-center gap-1 hover:text-brand-gold transition-colors"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Decorative Champagne Gold hairline frame offset */}
              <div
                className="absolute -top-3 -right-3 -bottom-3 -left-3 border border-brand-gold/25 pointer-events-none -z-10 hidden sm:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
