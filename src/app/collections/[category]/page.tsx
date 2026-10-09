import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Collection`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === slug);

  return (
    <div className="bg-brand-ivory min-h-screen">
      {/* Category Hero Banner */}
      <section className="relative overflow-hidden bg-brand-emerald text-brand-ivory py-16 sm:py-24 border-b border-brand-gold/30">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            priority
            className="object-cover object-center filter blur-[1px]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald-deep via-brand-emerald/90 to-brand-emerald-deep/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-xs text-brand-ivory/60 uppercase tracking-widest mb-3 flex items-center gap-2 font-light">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>&bull;</span>
            <Link href="/collections" className="hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <span>&bull;</span>
            <span className="text-brand-gold font-medium">{category.name}</span>
          </nav>

          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block">
              Curated Edit &bull; Bloom &amp; Belle
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl text-brand-ivory font-normal tracking-tight">
              {category.name}
            </h1>

            <p className="font-serif text-lg text-brand-gold italic font-light">
              &ldquo;{category.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light">
              {category.description}
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.features.map((feat) => (
                <span
                  key={feat}
                  className="inline-flex items-center gap-1.5 text-[11px] bg-brand-ivory/10 text-brand-ivory/90 px-3 py-1 border border-brand-gold/25 font-light"
                >
                  <Check className="w-3 h-3 text-brand-gold" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {category.isTeaser ? (
            /* Special Jewellery Preview Section */
            <div className="max-w-3xl mx-auto text-center space-y-8 bg-brand-ivory-cream border border-brand-gold/30 p-8 sm:p-12 shadow-subtle">
              <BotanicalMotif variant="sprout" size={36} />

              <div>
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gold font-semibold block mb-1">
                  Demi-Fine Jewelry Line
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-emerald">
                  Something Beautiful Is Blooming Soon
                </h2>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light mt-3 max-w-xl mx-auto leading-relaxed">
                  We are finalizing our exclusive collection of 18k champagne gold demi-fine jewellery—designed specifically to complement Bloom &amp; Belle necklines, from square anarkalis to collared blouses.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 bg-white border border-brand-gold/20">
                  <h4 className="font-serif text-sm text-brand-emerald font-semibold mb-1">
                    18k Champagne PVD
                  </h4>
                  <p className="text-[11px] text-brand-charcoal/70 font-light">
                    Triple-coated vacuum plating for enduring lustrous gold shine.
                  </p>
                </div>

                <div className="p-4 bg-white border border-brand-gold/20">
                  <h4 className="font-serif text-sm text-brand-emerald font-semibold mb-1">
                    Anti-Tarnish &amp; Waterproof
                  </h4>
                  <p className="text-[11px] text-brand-charcoal/70 font-light">
                    Built for everyday wear without discoloration or skin irritation.
                  </p>
                </div>

                <div className="p-4 bg-white border border-brand-gold/20">
                  <h4 className="font-serif text-sm text-brand-emerald font-semibold mb-1">
                    Signature Monograms
                  </h4>
                  <p className="text-[11px] text-brand-charcoal/70 font-light">
                    Delicate botanical pendants matching our brand identity.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-gold/20">
                <p className="text-xs text-brand-charcoal/70 mb-3 font-light">
                  Want first access when the jewellery edit drops?
                </p>
                <Button href="/contact" variant="primary" size="md">
                  <span>Register For VIP Early Access</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          ) : categoryProducts.length > 0 ? (
            /* Products Grid */
            <div>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-brand-gold/20">
                <span className="text-xs text-brand-charcoal/70 uppercase tracking-wider font-light">
                  Showing {categoryProducts.length} verified {category.name.toLowerCase()} styles
                </span>
                <Link
                  href="/collections"
                  className="text-xs text-brand-emerald hover:text-brand-gold transition-colors font-medium flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>All Collections</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 space-y-4">
              <BotanicalMotif variant="sprout" size={32} />
              <h3 className="font-serif text-2xl text-brand-emerald">
                No products currently listed in this edit
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light">
                Please check back soon or explore our other collections.
              </p>
              <Button href="/collections" variant="outline">
                Browse All Collections
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
