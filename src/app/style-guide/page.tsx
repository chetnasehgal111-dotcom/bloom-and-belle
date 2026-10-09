import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BODY_SHAPE_GUIDES } from "@/data/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { Button } from "@/components/ui/Button";
import { Sparkles, CheckCircle2, ArrowRight, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Style & Body Shape Guide",
  description:
    "Style smarter, not harder. Discover how to style your body shape—Pear, Hourglass, Apple, or Rectangle—with Bloom & Belle's curated western and ethnic capsules.",
};

export default function StyleGuidePage() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-ivory-cream border-b border-brand-gold/20 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-3 flex items-center justify-center gap-2 font-light">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>&bull;</span>
            <span className="text-brand-emerald font-medium">Style Guide</span>
          </nav>

          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            Editorial Styling Lab
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl text-brand-emerald font-normal tracking-tight">
            Style According To Your Body Shape
          </h1>

          <div className="flex justify-center">
            <BotanicalMotif variant="divider" className="my-4" />
          </div>

          <p className="text-sm sm:text-base text-brand-charcoal/80 font-light max-w-2xl mx-auto leading-relaxed">
            &ldquo;Style smarter, not harder. Know your shape. Love your style.&rdquo;
          </p>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-12 border-b border-brand-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-8 bg-white border border-brand-gold/30 shadow-subtle flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-emerald/10 text-brand-gold flex items-center justify-center shrink-0">
              <Lightbulb className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-brand-emerald font-medium mb-1">
                The 90% Styling Mistake
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed">
                90% of women struggle with clothes that look gorgeous on hangers or models but disappoint in real life. True elegance isn&apos;t about chasing every trend—it&apos;s about selecting necklines, cuts, and fabrics engineered to celebrate your unique proportions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Shapes Breakdown */}
      <section className="py-16 sm:py-24 border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {BODY_SHAPE_GUIDES.map((guide, idx) => (
            <div
              key={guide.shape}
              id={guide.shape.toLowerCase()}
              className="bg-white border border-brand-gold/25 p-6 sm:p-10 shadow-subtle"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs text-brand-gold uppercase tracking-[0.2em] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Silhouette Formula #{idx + 1}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-brand-emerald">
                    The {guide.title}
                  </h2>

                  <p className="font-serif text-base text-brand-gold-dark italic font-light">
                    &ldquo;{guide.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed">
                    {guide.description}
                  </p>

                  {/* Best Picks */}
                  <div className="pt-2">
                    <h4 className="text-[11px] font-sans tracking-widest uppercase text-brand-emerald font-semibold mb-2">
                      Key Recommendations:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.bestPicks.map((pick) => (
                        <span
                          key={pick}
                          className="bg-brand-ivory text-brand-emerald text-xs px-3 py-1.5 border border-brand-gold/30 font-light"
                        >
                          {pick}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Styling Tips */}
                  <div className="space-y-2 pt-2">
                    {guide.stylingTips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal/80 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button href={`/collections/${guide.recommendedCategory}`} size="sm">
                      <span>Browse Matching Edits</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] w-full border border-brand-gold/25 overflow-hidden bg-brand-ivory-cream">
                    <Image
                      src={
                        idx === 0
                          ? "/editorial/western-hero.png"
                          : idx === 1
                          ? "/editorial/western-opening.png"
                          : idx === 2
                          ? "/editorial/ad-hero.png"
                          : "/editorial/capsule-essentials.png"
                      }
                      alt={`${guide.title} styling example`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capsule Wardrobe Formula */}
      <section className="py-16 sm:py-20 bg-brand-ivory-cream border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capsule Systems"
            title="The 5-Piece Foundation Wardrobe"
            subtitle="Build a wardrobe that rotates seamlessly from Monday mornings to Sunday brunch."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 bg-white border border-brand-gold/20 text-center">
              <span className="font-serif text-2xl text-brand-gold block font-semibold mb-1">01</span>
              <h4 className="font-serif text-base text-brand-emerald mb-1">White Button-Down</h4>
              <p className="text-[11px] text-brand-charcoal/70 font-light">
                High-GSM non-sheer combed cotton. Worn tucked into trousers or open over camisoles.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-gold/20 text-center">
              <span className="font-serif text-2xl text-brand-gold block font-semibold mb-1">02</span>
              <h4 className="font-serif text-base text-brand-emerald mb-1">Straight Clean Denim</h4>
              <p className="text-[11px] text-brand-charcoal/70 font-light">
                Mid-to-high rise indigo without distressing for effortless polish.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-gold/20 text-center">
              <span className="font-serif text-2xl text-brand-gold block font-semibold mb-1">03</span>
              <h4 className="font-serif text-base text-brand-emerald mb-1">Neutral Kurti</h4>
              <p className="text-[11px] text-brand-charcoal/70 font-light">
                Pure cotton straight silhouette with breathable side slits for office and festive transition.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-gold/20 text-center">
              <span className="font-serif text-2xl text-brand-gold block font-semibold mb-1">04</span>
              <h4 className="font-serif text-base text-brand-emerald mb-1">Tailored Co-ord</h4>
              <p className="text-[11px] text-brand-charcoal/70 font-light">
                Pre-matched elegance that removes morning decision fatigue entirely.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-gold/20 text-center">
              <span className="font-serif text-2xl text-brand-gold block font-semibold mb-1">05</span>
              <h4 className="font-serif text-base text-brand-emerald mb-1">Linen Blazer</h4>
              <p className="text-[11px] text-brand-charcoal/70 font-light">
                Single-breasted relaxed structure that instantly elevates jeans, dresses, or kurtis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <BotanicalMotif variant="sprout" size={28} />
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-emerald">
            Need 1-on-1 Personalized Advice?
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light">
            Connect directly with our styling team on WhatsApp with a photo or measurements.
          </p>
          <div className="pt-2">
            <Button
              href="https://wa.me/919876543210?text=Hi%20Bloom%20%26%20Belle,%20I'd%20like%20some%20advice%20for%20my%20body%20shape."
              external
              size="lg"
            >
              <span>Chat With A Stylist</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
