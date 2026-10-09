import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { ArrowRight, SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Collections & Style Edits",
  description:
    "Explore Bloom & Belle's contemporary collections: Western Wear, Ethnic Kurtis & Suits, Co-ord Sets, and upcoming Demi-Fine Jewellery.",
};

export default function CollectionsPage() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-ivory-cream border-b border-brand-gold/20 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>&bull;</span>
            <span className="text-brand-emerald font-medium">Collections</span>
          </nav>

          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            Curated Wardrobes
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl text-brand-emerald font-normal tracking-tight">
            The Bloom &amp; Belle Collections
          </h1>

          <div className="flex justify-center">
            <BotanicalMotif variant="divider" className="my-4" />
          </div>

          <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light max-w-2xl mx-auto leading-relaxed">
            Discover contemporary western fashion and timeless Indian ethnic wear. Each piece is designed for versatile mix-and-match wearability, crafted from high-GSM fabrics with meticulous finishing.
          </p>
        </div>
      </section>

      {/* Category Navigation Cards */}
      <section className="py-12 border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="group relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden border border-brand-gold/25 bg-brand-emerald-dark"
              >
                <Image
                  src={cat.heroImage}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-deep/90 via-brand-emerald-deep/30 to-transparent" />

                {cat.isTeaser && (
                  <span className="absolute top-3 right-3 bg-brand-gold text-brand-emerald-deep text-[10px] font-sans tracking-widest uppercase font-semibold px-2 py-0.5">
                    Preview
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-brand-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-light block">
                    {cat.count > 0 ? `${cat.count} Verified Styles` : "Coming Soon"}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-brand-gold transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] font-sans tracking-wider uppercase text-brand-gold mt-1 opacity-90 group-hover:translate-x-1 transition-transform">
                    <span>View Edit</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Product Catalog */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8 pb-4 border-b border-brand-gold/20 gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-emerald">
                All Available Styles
              </h2>
              <p className="text-xs text-brand-charcoal/70 font-light mt-1">
                Showing {PRODUCTS.length} verified pieces with full fabric details, pricing, and sizing
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-brand-charcoal/70">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-gold" />
              <span>Curated by Category &amp; Fabric</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Sizing Help Banner */}
          <div className="mt-16 p-6 sm:p-8 bg-brand-ivory-cream border border-brand-gold/30 text-center max-w-3xl mx-auto">
            <BotanicalMotif variant="sprout" size={24} />
            <h3 className="font-serif text-xl text-brand-emerald mt-2 mb-1">
              Need Personal Sizing or Styling Assistance?
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light mb-4">
              Our stylists are available on WhatsApp to help you choose the best silhouette and size for your body shape.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20Bloom%20%26%20Belle%20team,%20I'd%20like%20assistance%20choosing%20the%20right%20outfit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-emerald text-brand-ivory text-xs font-sans tracking-[0.16em] uppercase hover:bg-brand-emerald-dark transition-colors font-medium"
            >
              <span>Chat With Our Stylist</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
