import React, { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_INFO } from "@/data/brand";
import { ContactForm } from "@/components/contact/ContactForm";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { MessageCircle, Mail, MapPin, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Personal Styling Concierge | Bloom & Belle",
  description:
    "Get in touch with the Bloom & Belle customer care team or connect with our WhatsApp styling concierge for personalized sizing, fabric swatches, and styling assistance.",
  alternates: {
    canonical: "https://bloomandbelle.in/contact",
  },
  openGraph: {
    title: "Connect with Bloom & Belle — Customer Care & Styling Concierge",
    description: "Personal styling assistance, fabric swatch inquiries, and customer service.",
    url: "https://bloomandbelle.in/contact",
  },
};

export default function ContactPage() {
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
        name: "Contact Us",
        item: "https://bloomandbelle.in/contact",
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
      {/* Header */}
      <section className="bg-brand-ivory-cream border-b border-brand-gold/20 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-3 flex items-center justify-center gap-2 font-light">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>&bull;</span>
            <span className="text-brand-emerald font-medium">Contact</span>
          </nav>

          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            We&apos;re Here To Help
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl text-brand-emerald font-normal tracking-tight">
            Connect With Bloom &amp; Belle
          </h1>

          <div className="flex justify-center">
            <BotanicalMotif variant="divider" className="my-4" />
          </div>

          <p className="text-sm sm:text-base text-brand-charcoal/80 font-light max-w-2xl mx-auto leading-relaxed">
            Have questions about fabric weights, sizing measurements, custom styling, or delivery times? Send us a message or chat with our team on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl text-brand-emerald mb-2">
                Send an Inquiry
              </h2>
              <p className="text-xs text-brand-charcoal/70 font-light mb-6">
                Fill in your details below and our team will respond within 24 hours.
              </p>

              <Suspense
                fallback={
                  <div className="p-12 text-center text-xs text-brand-charcoal/50">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Right: Channels & Business Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp Concierge Card */}
              <div className="bg-brand-emerald text-brand-ivory p-6 sm:p-8 border border-brand-gold/30 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-sans uppercase tracking-widest font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Instant Concierge</span>
                </div>

                <h3 className="font-serif text-2xl text-white">
                  Chat On WhatsApp
                </h3>

                <p className="text-xs sm:text-sm text-brand-ivory/80 font-light leading-relaxed">
                  For immediate sizing advice, fabric swatch videos, or quick order questions, message our dedicated styling team directly.
                </p>

                <a
                  href={`https://wa.me/${BRAND_INFO.social.whatsappNumber.replace("+", "")}?text=Hi%20Bloom%20%26%20Belle,%20I'd%20like%20to%20inquire%20about%20your%20styles.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-emerald-deep font-sans text-xs tracking-[0.16em] uppercase font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Launch WhatsApp Chat</span>
                </a>

                <div className="text-[10px] text-brand-ivory/60 text-center font-light uppercase tracking-wider">
                  Typical response time: Under 15 minutes during business hours
                </div>
              </div>

              {/* Business Info Grid */}
              <div className="bg-brand-ivory-cream border border-brand-gold/25 p-6 sm:p-8 space-y-5">
                <h4 className="font-serif text-lg text-brand-emerald font-medium pb-2 border-b border-brand-gold/20">
                  Business Information
                </h4>

                <div className="space-y-4 text-xs text-brand-charcoal/80 font-light">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-emerald font-medium">Customer Support Email:</strong>
                      <a href={`mailto:${BRAND_INFO.social.supportEmail}`} className="hover:text-brand-gold underline">
                        {BRAND_INFO.social.supportEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-emerald font-medium">Support Operating Hours:</strong>
                      <span>{BRAND_INFO.social.operatingHours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-emerald font-medium">Design &amp; Sourcing Hubs:</strong>
                      <span>{BRAND_INFO.social.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <InstagramIcon className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-emerald font-medium">Official Social Channel:</strong>
                      <a
                        href={BRAND_INFO.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-gold underline"
                      >
                        {BRAND_INFO.social.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-gold/20 text-[11px] text-brand-charcoal/60 leading-relaxed font-light">
                  <em>Note: Physical studio visits and design consultations are available by prior appointment only.</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
