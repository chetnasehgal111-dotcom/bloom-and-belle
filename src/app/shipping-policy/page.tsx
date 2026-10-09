import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Information on domestic India and international shipping timelines, packaging, and order tracking.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-brand-ivory min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-4 flex items-center gap-2 font-light">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span>&bull;</span>
          <span className="text-brand-emerald font-medium">Shipping Policy</span>
        </nav>

        <header className="mb-10 pb-6 border-b border-brand-gold/25">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            Logistics &bull; Bloom &amp; Belle
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-emerald font-normal">
            Shipping &amp; Delivery Policy
          </h1>
          <p className="text-xs text-brand-charcoal/60 font-light mt-2">
            Status: Brand Operating Guidelines (Subject to final business courier sign-off)
          </p>
        </header>

        <div className="prose prose-sm max-w-none text-xs sm:text-sm text-brand-charcoal/80 space-y-6 font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">1. Order Processing Timelines</h2>
            <p>
              All orders are processed and packed at our dispatch hub within <strong>24 to 48 business hours</strong> of confirmation. Orders placed on Sundays or public national holidays are dispatched on the subsequent business day.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">2. Domestic Delivery Across India</h2>
            <p>
              We deliver to over 19,000 pin codes across India through premium express courier partners:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>Tier-1 &amp; Metro Cities (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata):</strong> 3 to 5 business days from dispatch.</li>
              <li><strong>Tier-2 &amp; Tier-3 Cities (Jaipur, Chandigarh, Pune, Panipat, Lucknow, Ahmedabad, etc.):</strong> 5 to 7 business days from dispatch.</li>
              <li><strong>Complimentary Shipping:</strong> Free standard shipping applies to all prepaid orders exceeding ₹1,999. Orders below ₹1,999 incur a nominal flat shipping fee of ₹99.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">3. International Delivery</h2>
            <p>
              Bloom &amp; Belle proudly serves international customers and the global diaspora in the United States, United Kingdom, Canada, UAE, Australia, and Singapore:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>International deliveries take approximately <strong>7 to 10 business days</strong>.</li>
              <li>International orders are dispatched via tracked DHL Express or FedEx International.</li>
              <li>Customs duties or local import taxes (if applicable in the recipient country) are the responsibility of the customer.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">4. Tracking Your Parcel</h2>
            <p>
              Upon dispatch, a tracking link will be sent to your registered email and WhatsApp number. You can monitor the real-time movement of your parcel from our hub directly to your doorstep.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">5. Packaging Integrity</h2>
            <p>
              Every garment is packed in sealed protective inner packaging within our signature Bloom &amp; Belle presentation packaging. If the outer courier tamper-proof parcel appears damaged or breached upon delivery, please document photographs and contact our concierge immediately before accepting delivery.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
