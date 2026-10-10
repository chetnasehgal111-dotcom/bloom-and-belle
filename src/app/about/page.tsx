import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_INFO, BRAND_PILLARS } from "@/data/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { Button } from "@/components/ui/Button";
import { Diamond, Sparkles, Globe, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Story & Philosophy | Bloom & Belle",
  description:
    "Learn about Bloom & Belle, our design philosophy, and our commitment to 160+ GSM non-sheer fabrics, thoughtful Indian tailoring, and accessible contemporary fashion.",
  alternates: {
    canonical: "https://bloomandbelle.in/about",
  },
  openGraph: {
    title: "About Bloom & Belle — For Every Version of You",
    description: "The story behind our fusion of western silhouettes and timeless Indian ethnic grace.",
    url: "https://bloomandbelle.in/about",
    images: ["/editorial/moodboard.png"],
  },
};

export default function AboutPage() {
  const iconMap = {
    diamond: Diamond,
    dress: Sparkles,
    globe: Globe,
    heart: Heart,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bloomandbelle.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://bloomandbelle.in/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-brand-ivory min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-ivory-cream border-b border-brand-gold/20 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>&bull;</span>
            <span className="text-brand-emerald font-medium">About</span>
          </nav>

          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            Our Purpose &amp; Story
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl text-brand-emerald font-normal tracking-tight text-balance">
            Crafting Elegance For Every Version Of You
          </h1>

          <div className="flex justify-center">
            <BotanicalMotif variant="divider" className="my-4" />
          </div>

          <p className="text-sm sm:text-base text-brand-charcoal/80 font-light max-w-2xl mx-auto leading-relaxed">
            &ldquo;{BRAND_INFO.supportingMessage}&rdquo;
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <section id="philosophy" className="py-16 sm:py-24 border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Authentic Lifestyle Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto border border-brand-gold/30 shadow-luxury overflow-hidden bg-white">
                <Image
                  src="/editorial/western-hero.png"
                  alt="Bloom & Belle modern woman styling"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-ivory/95 backdrop-blur-sm p-3 text-center border border-brand-gold/25">
                  <span className="font-serif text-xs italic text-brand-emerald">
                    &ldquo;For every version of you.&rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* Right: The Brand Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                eyebrow="The Genesis"
                title="Fashion That Bridges Your Everyday Worlds"
                withBotanical={false}
              />

              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                Modern women live fluid, dynamic lives. On a Tuesday morning, you might need a tailored linen blazer for an important workplace presentation. On Thursday evening, a relaxed embroidered blouse for coffee with friends. And on the weekend, an ethereal anarkali suit for a family festival or wedding celebration.
              </p>

              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                Yet the retail landscape often divides women into two extremes: either overpriced luxury labels whose price tags discourage everyday wear, or disposable fast-fashion whose flimsy, see-through fabrics disappoint in real life.
              </p>

              <div className="p-4 bg-brand-ivory-cream border-l-2 border-brand-gold">
                <p className="font-serif text-base text-brand-emerald italic">
                  &ldquo;At Bloom &amp; Belle, we believe you shouldn&apos;t have to compromise between quality, style, and your budget.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                We design with high-GSM non-sheer cottons, breathable linen blends, and rich Chanderi silks. Each garment is engineered with generous ease, thoughtful seam finishing, and timeless color palettes that outlast fleeting micro-trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-brand-ivory-cream border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-6 sm:p-8 border border-brand-gold/25 shadow-sm space-y-3">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block">
                Our Mission
              </span>
              <h3 className="font-serif text-2xl text-brand-emerald">
                Accessible Quality &amp; Versatile Styling
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed">
                To empower women across India and internationally with thoughtfully designed clothing that combines western silhouettes and ethnic grace—crafted from dependable fabrics at honest, sensible price points.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 sm:p-8 border border-brand-gold/25 shadow-sm space-y-3">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block">
                Our Vision
              </span>
              <h3 className="font-serif text-2xl text-brand-emerald">
                The Trusted Wardrobe Destination
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed">
                To become the premier direct-to-consumer destination where contemporary women can find their complete capsule wardrobe—from everyday office staples to cherished festive occasion wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-16 sm:py-24 border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title="The Four Pillars of Bloom &amp; Belle"
            subtitle="Extracted directly from our brand kit: the foundational promises that guide every sketch, stitch, and package."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_PILLARS.map((pillar) => {
              const IconComp = iconMap[pillar.icon];
              return (
                <div
                  key={pillar.title}
                  className="bg-brand-ivory-cream border border-brand-gold/20 p-6 flex flex-col text-center items-center shadow-subtle hover:border-brand-gold/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h4 className="font-serif text-lg text-brand-emerald font-semibold mb-1">
                    {pillar.title}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-medium mb-3">
                    {pillar.subtitle}
                  </span>
                  <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Craftsmanship & Packaging Section */}
      <section id="craft" className="py-16 sm:py-20 bg-brand-ivory-cream border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block">
                The Details Matter
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-emerald">
                From Fabric Selection to Unboxing
              </h2>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                Every Bloom &amp; Belle piece arrives packaged with care—in our signature deep emerald and warm ivory presentation bags and gift boxes adorned with champagne gold foil monograms.
              </p>
              <ul className="space-y-2 text-xs text-brand-charcoal/80 font-light pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>French seams and reinforced stitching that resist tearing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Skin-safe AZO-free dyes and pre-washed cottons</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Signature woven collar and wash care tags</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full border border-brand-gold/30 shadow-subtle overflow-hidden bg-white">
                <Image
                  src="/editorial/festive-lookbook.png"
                  alt="Bloom & Belle lifestyle lookbook showing curated outfits"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore CTA */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <BotanicalMotif variant="sprout" size={28} />
          <h2 className="font-serif text-3xl text-brand-emerald font-normal">
            Ready to find your next favorite outfit?
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light">
            Browse our contemporary western wear and handcrafted ethnic collections today.
          </p>
          <div className="pt-2">
            <Button href="/collections" size="lg">
              <span>Explore The Collections</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
