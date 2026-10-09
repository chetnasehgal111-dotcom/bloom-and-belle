import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_INFO } from "@/data/brand";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions governing the use of Bloom & Belle website, lead generation forms, and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-brand-ivory min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-brand-charcoal/60 uppercase tracking-widest mb-4 flex items-center gap-2 font-light">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span>&bull;</span>
          <span className="text-brand-emerald font-medium">Terms and Conditions</span>
        </nav>

        <header className="mb-10 pb-6 border-b border-brand-gold/25">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block mb-2">
            Legal &bull; Bloom &amp; Belle
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-emerald font-normal">
            Terms and Conditions
          </h1>
          <p className="text-xs text-brand-charcoal/60 font-light mt-2">
            Last Updated: August 2026 &bull; Status: Official Brand Draft (Pending Corporate Counsel Sign-Off)
          </p>
        </header>

        {/* Legal Notice Callout */}
        <div className="p-4 bg-brand-ivory-cream border-l-4 border-brand-gold mb-8 text-xs text-brand-charcoal/80 font-light leading-relaxed">
          <strong>Notice to Visitors:</strong> The following terms govern your access to and use of Bloom &amp; Belle website, lead generation forms, and customer concierge services. This document reflects the verified policy framework established for Bloom &amp; Belle direct-to-consumer operations.
        </div>

        <div className="prose prose-sm max-w-none text-xs sm:text-sm text-brand-charcoal/80 space-y-6 font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">1. Eligibility</h2>
            <p>
              You must be at least 18 years old (or the age of legal majority in your jurisdiction) to submit inquiries, register for promotions, or place an order with Bloom &amp; Belle. By using our website and services, you confirm that you meet this requirement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">2. Information You Provide</h2>
            <p>
              When you submit an inquiry form, styling request, or newsletter opt-in (including via Meta/Facebook/Instagram instant lead forms), you may provide personal information such as your name, email address, phone number, and shopping preferences. By submitting this form, you confirm that:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>The information you provide is accurate and belongs to you.</li>
              <li>You consent to us collecting and using this information as described in our Privacy Policy.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">3. Marketing Communications</h2>
            <p>
              By opting into our communications, you consent to receive periodic styling updates, secret drop announcements, and promotional codes from Bloom &amp; Belle via email or WhatsApp. You may opt out at any time by clicking the unsubscribe link in emails, replying &quot;STOP&quot; to messages, or contacting our concierge at {BRAND_INFO.social.supportEmail}.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">4. Promotional Offers &amp; Discount Codes</h2>
            <p>
              Any promotional discount code provided by Bloom &amp; Belle (such as our verified welcome offer code &quot;WELCOME10&quot;) is subject to the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Valid for one-time use per customer unless explicitly stated otherwise.</li>
              <li>Cannot be combined with other promotional codes or clearance promotions.</li>
              <li>Applies to full-price garments and edits.</li>
              <li>We reserve the right to modify or restrict promotional offers at our discretion.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">5. Intellectual Property</h2>
            <p>
              All content on our website and marketing collateral—including the Bloom &amp; Belle monogram, brand wordmark, botanical line illustrations, product photographs, styling guides, and copy—is the exclusive intellectual property of Bloom &amp; Belle and is protected by copyright and trademark laws. Unauthorized reproduction is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">6. Pricing and Orders</h2>
            <p>
              All prices are listed in Indian Rupees (₹) inclusive of applicable taxes unless stated otherwise. While we strive to maintain accurate inventory and pricing, we reserve the right to correct errors or cancel orders in cases of demonstrable typographical discrepancies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">7. Shipping, Exchanges &amp; Returns</h2>
            <p>
              Please refer to our dedicated <Link href="/shipping-policy" className="text-brand-emerald underline">Shipping Policy</Link> and <Link href="/return-refund-policy" className="text-brand-emerald underline">Return &amp; Exchange Policy</Link> for full details on delivery timelines, exchange windows, and return conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Bloom &amp; Belle shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our website, delay in communications, or external service disruptions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in the courts of New Delhi, without regard to conflict of law principles.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-brand-gold/20">
            <h2 className="font-serif text-lg text-brand-emerald font-semibold">10. Contact Us</h2>
            <p>
              For legal inquiries or questions regarding these terms, please contact:
            </p>
            <div className="bg-white p-4 border border-brand-gold/20 space-y-1">
              <strong className="block text-brand-emerald font-serif">Bloom &amp; Belle</strong>
              <p>Email: {BRAND_INFO.social.supportEmail}</p>
              <p>WhatsApp: {BRAND_INFO.social.whatsappDisplay}</p>
              <p>Location: {BRAND_INFO.social.location}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
