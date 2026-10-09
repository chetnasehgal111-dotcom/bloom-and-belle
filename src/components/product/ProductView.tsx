"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { BRAND_INFO } from "@/data/brand";
import { formatPrice } from "@/lib/utils";
import { SizeGuideModal } from "@/components/ui/SizeGuideModal";
import { Button } from "@/components/ui/Button";
import {
  Ruler,
  MessageCircle,
  Mail,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductView({ product, relatedProducts }: ProductViewProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const activeImage = product.images[activeImageIndex] || product.images[0];

  const whatsappMessage = encodeURIComponent(
    `Hi Bloom & Belle team! I'm interested in the ${product.name} (Size: ${selectedSize}, Price: ${formatPrice(product.price)}). Could you provide availability and styling assistance?`
  );

  return (
    <div className="bg-brand-ivory min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-6 flex flex-wrap items-center gap-2 font-light"
        >
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-brand-gold/60" />
          <Link href="/collections" className="hover:text-brand-gold transition-colors">
            Collections
          </Link>
          <ChevronRight className="w-3 h-3 text-brand-gold/60" />
          <Link
            href={`/collections/${product.category}`}
            className="hover:text-brand-gold transition-colors"
          >
            {product.categoryLabel}
          </Link>
          <ChevronRight className="w-3 h-3 text-brand-gold/60" />
          <span className="text-brand-emerald font-medium truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pb-16 border-b border-brand-gold/20">
          {/* Left: Gallery (Thumbnails + Main Image) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:max-h-[620px] shrink-0 pb-2 sm:pb-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View image ${idx + 1}: ${img.label || img.alt}`}
                    className={cn(
                      "relative w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border shrink-0 transition-all duration-200 bg-white",
                      activeImageIndex === idx
                        ? "border-brand-emerald ring-1 ring-brand-emerald"
                        : "border-brand-gold/25 hover:border-brand-gold opacity-75 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Active Image */}
            <div className="relative aspect-[3/4] w-full border border-brand-gold/30 bg-brand-ivory-cream shadow-luxury overflow-hidden flex-1">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-top transition-all duration-300"
              />

              {activeImage.label && (
                <div className="absolute top-3 right-3 bg-brand-emerald/90 backdrop-blur-sm text-brand-ivory text-[10px] font-sans tracking-widest uppercase px-2.5 py-1">
                  {activeImage.label}
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Details & Purchase/Inquiry CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-brand-charcoal/60 tracking-widest uppercase mb-1.5">
                <span>{product.subcategory}</span>
                <span className="text-brand-gold font-medium">
                  ★ {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl text-brand-emerald font-normal">
                {product.name}
              </h1>

              <p className="font-serif text-sm text-brand-gold-dark italic font-light mt-1">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="mt-4 pb-4 border-b border-brand-gold/20 flex items-baseline gap-3">
                <span className="font-serif text-2xl sm:text-3xl text-brand-emerald font-semibold">
                  {formatPrice(product.price, product.currency)}
                </span>
                <span className="text-xs text-brand-charcoal/50 uppercase tracking-wider font-light">
                  Inclusive of all taxes
                </span>
              </div>

              {/* Size Selector */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans tracking-wider uppercase text-brand-emerald font-medium">
                    Select Size:
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-xs text-brand-gold hover:text-brand-gold-dark underline font-medium transition-colors"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>View Size Guide</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-11 h-11 text-xs font-sans font-medium uppercase border transition-all duration-200 flex items-center justify-center",
                        selectedSize === size
                          ? "bg-brand-emerald text-brand-ivory border-brand-emerald shadow-sm"
                          : "bg-white text-brand-charcoal/80 border-brand-gold/30 hover:border-brand-gold"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Body Shape Styling Advice */}
              <div className="mt-6 p-4 bg-brand-ivory-cream border border-brand-gold/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-brand-gold font-sans uppercase tracking-widest font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Body Shape Match</span>
                </div>
                <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed">
                  Best suited for <strong>{product.bodyShapeMatch.join(" & ")}</strong> silhouettes. {product.stylingTips}
                </p>
                <Link
                  href="/style-guide"
                  className="text-[11px] text-brand-emerald underline hover:text-brand-gold block pt-1"
                >
                  Learn how to style this for your body shape &rarr;
                </Link>
              </div>

              {/* Fabric Callout */}
              <div className="mt-6 space-y-2">
                <span className="text-xs font-sans tracking-wider uppercase text-brand-emerald font-semibold block">
                  Fabric &amp; Finish
                </span>
                <p className="text-xs text-brand-charcoal/80 font-light">
                  {product.fabric}
                </p>
                <ul className="text-[11px] text-brand-charcoal/70 font-light space-y-1">
                  {product.fabricDetails.map((det, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-brand-gold shrink-0 mt-0.5" />
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 pt-4 border-t border-brand-gold/20">
                <a
                  href={`https://wa.me/${BRAND_INFO.social.whatsappNumber.replace("+", "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-4 bg-brand-emerald text-brand-ivory hover:bg-brand-emerald-dark font-sans text-xs tracking-[0.16em] uppercase font-semibold transition-all shadow-sm border border-brand-emerald"
                >
                  <MessageCircle className="w-4 h-4 text-brand-gold" />
                  <span>Inquire on WhatsApp (Size {selectedSize})</span>
                </a>

                <Button
                  href={`/contact?subject=${encodeURIComponent(`Inquiry: ${product.name} (Size: ${selectedSize})`)}`}
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  <Mail className="w-4 h-4 mr-1.5" />
                  <span>Inquire via Email Form</span>
                </Button>
              </div>

              {/* Delivery & Care Badges */}
              <div className="mt-6 pt-4 border-t border-brand-gold/20 grid grid-cols-3 gap-2 text-center text-[10px] text-brand-charcoal/70 font-light">
                <div className="flex flex-col items-center">
                  <Truck className="w-4 h-4 text-brand-gold mb-1" />
                  <span>Pan-India 3-5 Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw className="w-4 h-4 text-brand-gold mb-1" />
                  <span>7-Day Exchange</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-brand-gold mb-1" />
                  <span>100% Genuine Fabric</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs / Specifications */}
        <div className="py-12 border-b border-brand-gold/20">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Description */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-emerald mb-3">
                Garment Description &amp; Design Notes
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Specifications Grid */}
            <div>
              <h3 className="font-serif text-lg text-brand-emerald mb-3">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs bg-white p-6 border border-brand-gold/25">
                <div>
                  <span className="text-brand-charcoal/50 uppercase tracking-wider block text-[10px]">
                    Silhouette Fit
                  </span>
                  <span className="font-medium text-brand-emerald">{product.specs.fit}</span>
                </div>
                <div>
                  <span className="text-brand-charcoal/50 uppercase tracking-wider block text-[10px]">
                    Garment Length
                  </span>
                  <span className="font-medium text-brand-emerald">{product.specs.length}</span>
                </div>
                <div>
                  <span className="text-brand-charcoal/50 uppercase tracking-wider block text-[10px]">
                    Neckline Style
                  </span>
                  <span className="font-medium text-brand-emerald">{product.specs.neckline}</span>
                </div>
                <div>
                  <span className="text-brand-charcoal/50 uppercase tracking-wider block text-[10px]">
                    Sleeve Construction
                  </span>
                  <span className="font-medium text-brand-emerald">{product.specs.sleeveLength}</span>
                </div>
                <div>
                  <span className="text-brand-charcoal/50 uppercase tracking-wider block text-[10px]">
                    Opacity &amp; Transparency
                  </span>
                  <span className="font-medium text-brand-emerald">{product.specs.transparency}</span>
                </div>
                <div>
                  <span className="text-brand-charcoal/50 uppercase tracking-wider block text-[10px]">
                    Origin
                  </span>
                  <span className="font-medium text-brand-emerald">{product.specs.origin}</span>
                </div>
              </div>
            </div>

            {/* Care Instructions */}
            <div>
              <h3 className="font-serif text-lg text-brand-emerald mb-2">
                Care &amp; Longevity Instructions
              </h3>
              <ul className="text-xs text-brand-charcoal/80 font-light space-y-1.5 list-disc list-inside">
                {product.careInstructions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-brand-gold/20">
              <h3 className="font-serif text-2xl text-brand-emerald">
                Complete Your Look
              </h3>
              <Link
                href={`/collections/${product.category}`}
                className="text-xs text-brand-emerald hover:text-brand-gold uppercase tracking-wider font-medium"
              >
                More in {product.categoryLabel} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-brand-gold/20 p-3 group hover:border-brand-gold transition-colors"
                >
                  <Link href={`/products/${rel.slug}`} className="block relative aspect-[3/4] mb-3 overflow-hidden bg-brand-ivory-cream">
                    <Image
                      src={rel.images[0].src}
                      alt={rel.images[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <h4 className="font-serif text-sm text-brand-emerald truncate font-medium">
                    <Link href={`/products/${rel.slug}`}>{rel.name}</Link>
                  </h4>
                  <p className="text-xs text-brand-gold font-semibold mt-0.5">
                    {formatPrice(rel.price, rel.currency)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
