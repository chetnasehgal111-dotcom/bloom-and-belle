import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_INFO } from "@/data/brand";

export const metadata: Metadata = {
  title: "Privacy Policy | Bloom & Belle",
  description: "Privacy policy detailing how Bloom & Belle collects, uses, and protects customer information.",
  alternates: {
    canonical: "https://bloomandbelle.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-ivory min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-4 flex items-center gap-2 font-light">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span>&bull;</span>
          <span className="text-brand-emerald font-medium">Privacy Policy</span>
        </nav>

        <header className="mb-10 pb-6 border-b border-brand-gold/25">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            Trust &amp; Privacy &bull; Bloom &amp; Belle
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-emerald font-normal">
            Privacy Policy
          </h1>
          <p className="text-xs text-brand-charcoal/60 font-light mt-2">
            Last Updated: August 2026 &bull; Compliant with Digital Personal Data Protection Act (DPDPA) &amp; Global Standards
          </p>
        </header>

        <div className="prose prose-sm max-w-none text-xs sm:text-sm text-brand-charcoal/80 space-y-6 font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">1. Commitment to Privacy</h2>
            <p>
              At Bloom &amp; Belle, we respect your privacy and are committed to protecting the personal data you share with us. This policy outlines how we collect, handle, and safeguard your details when you interact with our website, newsletter, Meta advertising lead forms, or WhatsApp concierge.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">2. Information We Collect</h2>
            <p>We may collect information you provide directly, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and delivery city.</li>
              <li><strong>Styling Inquiries:</strong> Preferred sizes, garment preferences, and occasion requirements shared via our contact form or WhatsApp.</li>
              <li><strong>Technical Data:</strong> Non-identifying browser data, anonymized analytics, and device specifications used to optimize responsive browsing performance.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">3. How We Use Your Information</h2>
            <p>Your information is used solely to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respond to your styling, sizing, and order inquiries.</li>
              <li>Send seasonal lookbook edits, styling guides, and promotional discounts (only if explicitly opted in).</li>
              <li>Enhance website performance and fix usability bugs.</li>
            </ul>
            <p>
              <strong>We never sell, rent, or trade your personal data to third-party data brokers.</strong>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">4. Data Security</h2>
            <p>
              We implement industry-standard encryption, SSL protocols, and restricted server-side access to protect your personal information against unauthorized disclosure or loss.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">5. Your Rights</h2>
            <p>
              You have the right to request access to the data we hold about you, request corrections, or withdraw your consent at any time. Simply write to us at{" "}
              <a href={`mailto:${BRAND_INFO.social.supportEmail}`} className="text-brand-emerald underline">
                {BRAND_INFO.social.supportEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
