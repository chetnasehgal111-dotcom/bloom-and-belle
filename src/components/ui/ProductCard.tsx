import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];
  const hasSecondary = product.images.length > 1;

  return (
    <article className="group relative flex flex-col bg-brand-ivory border border-brand-gold/15 overflow-hidden transition-all duration-500 hover:border-brand-gold/40 hover:shadow-luxury">
      {/* Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-brand-ivory-cream"
      >
        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={cn(
            "object-cover object-top transition-all duration-700 ease-out",
            hasSecondary ? "group-hover:opacity-0 group-hover:scale-105" : "group-hover:scale-105"
          )}
        />
        {hasSecondary && (
          <Image
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
          />
        )}

        {/* Bestseller / New Arrival Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestseller && (
            <span className="inline-flex items-center gap-1 bg-brand-emerald text-brand-ivory text-[10px] font-sans tracking-[0.16em] uppercase px-2.5 py-1">
              <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
              Bestseller
            </span>
          )}
          {product.isNewArrival && (
            <span className="inline-flex items-center bg-brand-gold text-brand-emerald-deep text-[10px] font-sans tracking-[0.16em] uppercase font-medium px-2.5 py-1">
              New Arrival
            </span>
          )}
        </div>

        {/* Fabric Tag overlay */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
          <div className="bg-brand-emerald/90 backdrop-blur-sm text-brand-ivory text-[11px] font-sans px-3 py-1.5 text-center truncate">
            {product.fabric.split("(")[0]}
          </div>
        </div>
      </Link>

      {/* Info Container */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-center justify-between text-[11px] text-brand-charcoal/60 tracking-wider uppercase mb-1">
          <span>{product.categoryLabel}</span>
          <span className="text-brand-gold font-medium">★ {product.rating}</span>
        </div>

        <h3 className="font-serif text-base sm:text-lg text-brand-emerald group-hover:text-brand-gold-dark transition-colors line-clamp-1 mb-1">
          <Link href={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <p className="text-xs text-brand-charcoal/70 line-clamp-2 font-light mb-3">
          {product.subtitle}
        </p>

        {/* Price & Action */}
        <div className="mt-auto pt-3 border-t border-brand-gold/15 flex items-center justify-between">
          <div>
            <span className="font-serif text-lg text-brand-emerald font-semibold">
              {formatPrice(product.price, product.currency)}
            </span>
            <span className="text-[10px] text-brand-charcoal/50 ml-1.5 uppercase tracking-wider">
              incl. taxes
            </span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-[11px] font-sans tracking-[0.14em] uppercase text-brand-emerald group-hover:text-brand-gold transition-colors font-medium"
            aria-label={`View details for ${product.name}`}
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
