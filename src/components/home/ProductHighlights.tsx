"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FilterTab = "all" | "western-wear" | "ethnic-wear" | "co-ord-sets";

export function ProductHighlights() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "all") return p.featured;
    return p.category === activeTab;
  }).slice(0, 8);

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: "Featured Edit" },
    { key: "western-wear", label: "Western Wear" },
    { key: "ethnic-wear", label: "Ethnic Wear" },
    { key: "co-ord-sets", label: "Co-ord Sets" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-cream border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Signature Highlights"
          title="Designed for Real Life &amp; True Elegance"
          subtitle="A preview of our verified garments: crafted from high-GSM combed cottons, pure linen blends, and Chanderi silks."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-4 sm:px-6 py-2 text-xs font-sans tracking-[0.16em] uppercase transition-all duration-300 font-medium",
                activeTab === tab.key
                  ? "bg-brand-emerald text-brand-ivory border border-brand-emerald shadow-sm"
                  : "bg-white text-brand-charcoal/70 border border-brand-gold/25 hover:border-brand-gold hover:text-brand-emerald"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button href="/collections" variant="outline" size="lg">
            View Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}
