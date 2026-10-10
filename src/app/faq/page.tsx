import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FAQ_ITEMS } from "@/data/brand";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Fabrics, Sizing, Orders & Care",
  description:
    "Got questions? Find clear answers regarding Bloom & Belle's 160+ GSM fabric weights, S–XXL sizing specifications, 7-day exchange window, and care tips.",
  alternates: {
    canonical: "https://bloomandbelle.in/faq",
  },
  openGraph: {
    title: "Bloom & Belle FAQs — Fabric Quality, Sizing & Delivery",
    description: "Honest, direct answers about our materials, fit, care instructions, and customer service.",
    url: "https://bloomandbelle.in/faq",
  },
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        name: "Frequently Asked Questions",
        item: "https://bloomandbelle.in/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-brand-ivory min-h-screen">
        {/* Header */}
        <section className="bg-brand-ivory-cream border-b border-brand-gold/20 py-12 sm:py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-3 flex items-center justify-center gap-2 font-light">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>&bull;</span>
              <span className="text-brand-emerald font-medium">FAQs</span>
            </nav>

            <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
              Clear &amp; Honest Answers
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl text-brand-emerald font-normal tracking-tight">
              Frequently Asked Questions
            </h1>

            <div className="flex justify-center">
              <BotanicalMotif variant="divider" className="my-4" />
            </div>

            <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Bloom &amp; Belle fabric quality, sizing guidance, order dispatch, and our 7-day exchange policy.
            </p>
          </div>
        </section>

        {/* FAQs List */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion />
          </div>
        </section>
      </div>
    </>
  );
}
