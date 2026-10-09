import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24 bg-brand-ivory border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Edits"
          title="Curated For Every Version Of You"
          subtitle="Explore contemporary western silhouettes, timeless festive ethnic wear, and smart coordinated sets designed to elevate your everyday wardrobe."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className="group relative flex flex-col bg-white border border-brand-gold/20 overflow-hidden transition-all duration-500 hover:border-brand-gold/50 hover:shadow-luxury"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-ivory-cream">
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                {category.isTeaser && (
                  <span className="absolute top-3 right-3 bg-brand-gold text-brand-emerald-deep text-[10px] font-sans tracking-[0.16em] uppercase font-semibold px-2.5 py-1 shadow-md">
                    Preview
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-brand-ivory">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-light block mb-1">
                    {category.count > 0 ? `${category.count} Verified Styles` : "Coming Soon"}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal group-hover:text-brand-gold transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Bottom text description */}
              <div className="p-4 flex flex-col justify-between flex-1 bg-brand-ivory">
                <p className="text-xs text-brand-charcoal/70 line-clamp-2 font-light leading-relaxed mb-3">
                  {category.tagline}
                </p>

                <div className="flex items-center justify-between text-[11px] font-sans tracking-[0.14em] uppercase text-brand-emerald group-hover:text-brand-gold font-medium pt-2 border-t border-brand-gold/15">
                  <span>{category.isTeaser ? "Preview Line" : "Explore Edit"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
