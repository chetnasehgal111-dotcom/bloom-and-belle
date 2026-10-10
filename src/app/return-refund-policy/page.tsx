import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_INFO } from "@/data/brand";

export const metadata: Metadata = {
  title: "Return & Exchange Policy | Bloom & Belle",
  description: "Information on our hassle-free 7-day size exchange and returns process at Bloom & Belle.",
  alternates: {
    canonical: "https://bloomandbelle.in/return-refund-policy",
  },
};

export default function ReturnRefundPolicyPage() {
  return (
    <div className="bg-brand-ivory min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-4 flex items-center gap-2 font-light">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span>&bull;</span>
          <span className="text-brand-emerald font-medium">Return &amp; Exchange Policy</span>
        </nav>

        <header className="mb-10 pb-6 border-b border-brand-gold/25">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            Confidence &bull; Bloom &amp; Belle
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-emerald font-normal">
            Return &amp; Exchange Policy
          </h1>
          <p className="text-xs text-brand-charcoal/60 font-light mt-2">
            Status: Brand Operating Guidelines (Subject to final business sign-off)
          </p>
        </header>

        <div className="prose prose-sm max-w-none text-xs sm:text-sm text-brand-charcoal/80 space-y-6 font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">1. Our 7-Day Exchange Window</h2>
            <p>
              We want you to feel confident, comfortable, and beautiful in every Bloom &amp; Belle outfit. If your piece doesn&apos;t fit exactly the way you anticipated, we offer a hassle-free <strong>7-day exchange window</strong> from the date your shipment is marked delivered.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">2. Eligibility Criteria</h2>
            <p>To be eligible for an exchange or return:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>The garment must be unworn, unwashed, and free of perfumes, makeup marks, or alterations.</li>
              <li>All original Bloom &amp; Belle tags, woven labels, and accessories (such as belts or slips) must remain attached.</li>
              <li>The garment must be returned in its original protective packaging.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">3. Free Size Exchanges</h2>
            <p>
              Need a smaller or larger size? We will arrange a reverse pickup from your address and dispatch the replacement size with no additional shipping charge across India.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">4. How to Initiate an Exchange</h2>
            <p>Simply contact our concierge with your order number and requested size:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>WhatsApp Concierge:</strong> {BRAND_INFO.social.whatsappDisplay}</li>
              <li><strong>Support Email:</strong> {BRAND_INFO.social.supportEmail}</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">5. Refund Processing</h2>
            <p>
              If an exchange item is out of stock or you prefer a return, an inspection will be completed within 48 hours of receipt at our hub. Approved returns are refunded via store credit or to the original payment method within 5 to 7 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
