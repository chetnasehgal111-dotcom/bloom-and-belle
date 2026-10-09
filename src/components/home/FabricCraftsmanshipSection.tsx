import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Feather, Sparkles } from "lucide-react";

export function FabricCraftsmanshipSection() {
  const craftFeatures = [
    {
      icon: Feather,
      title: "160+ GSM Non-Sheer Weave",
      description:
        "We choose denser thread counts so white and pastel garments are never uncomfortably transparent. No awkward multi-layering required.",
    },
    {
      icon: ShieldCheck,
      title: "Pre-Shrunk & Tested Color Fastness",
      description:
        "Every textile batch undergoes pre-shrinkage washing and fade-resistance checks. Your favorite piece fits the same on wash 20 as day 1.",
    },
    {
      icon: Sparkles,
      title: "Breathable Mulmul Linings",
      description:
        "Our festive and sheer organza pieces include 100% pure cotton mulmul slips that keep your skin cool through warm Indian celebrations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-cream border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Craftsmanship Details */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Craftsmanship &amp; Fabrics"
              title="What Makes Fabric &lsquo;Premium&rsquo;?"
              subtitle="Behind every Bloom &amp; Belle garment is a commitment to fabric integrity, honest stitching, and comfort you can feel from the first touch."
              withBotanical={false}
            />

            <div className="space-y-4 pt-2">
              {craftFeatures.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex items-start gap-4 p-4 bg-white border border-brand-gold/25 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-brand-emerald font-semibold mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-brand-charcoal/70 italic font-light">
              &ldquo;The best wardrobe isn&apos;t the biggest—it&apos;s the smartest.&rdquo;
            </div>
          </div>

          {/* Right: Authentic Macro Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto border border-brand-gold/30 shadow-luxury overflow-hidden bg-white">
              <Image
                src="/products/niloufar-kurti-details.png"
                alt="Macro craftsmanship details of Bloom & Belle fabric texture, neckline piping, and side slit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-brand-emerald/95 backdrop-blur-md p-3.5 text-brand-ivory text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold block font-medium">
                  Verified Construction Detail
                </span>
                <span className="font-serif text-sm font-normal">
                  Reinforced French Seams &bull; Handcrafted Piping &bull; Pure Combed Cotton
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
