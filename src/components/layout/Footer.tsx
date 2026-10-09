"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/data/navigation";
import { BRAND_INFO } from "@/data/brand";
import { Diamond, Sparkles, Globe, Heart, ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribed(true);
      } else {
        setError(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-brand-emerald text-brand-ivory border-t border-brand-gold/20 overflow-hidden">
      {/* Brand Pillars Bar - matching bottom of brand kit */}
      <div className="border-b border-brand-gold/20 bg-brand-emerald-dark/50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center justify-center p-2">
            <Diamond className="w-5 h-5 text-brand-gold mb-2" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium">
              Premium Quality
            </span>
            <span className="text-[10px] text-brand-ivory/60 font-light mt-0.5">
              160+ GSM Combed Fabrics
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <Sparkles className="w-5 h-5 text-brand-gold mb-2" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium">
              Western &amp; Ethnic
            </span>
            <span className="text-[10px] text-brand-ivory/60 font-light mt-0.5">
              Versatile Style Harmony
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <Globe className="w-5 h-5 text-brand-gold mb-2" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium">
              India &amp; Global Shipping
            </span>
            <span className="text-[10px] text-brand-ivory/60 font-light mt-0.5">
              Fast Tracked Dispatch
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <Heart className="w-5 h-5 text-brand-gold mb-2" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium">
              Made For Modern Women
            </span>
            <span className="text-[10px] text-brand-ivory/60 font-light mt-0.5">
              Sizes S to XXL True Fit
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-brand-ivory/10 p-1 flex items-center justify-center border border-brand-gold/30">
                <Image
                  src="/brand/monogram.png"
                  alt="Bloom & Belle"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl text-brand-ivory tracking-wider block">
                  Bloom &amp; Belle
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-brand-gold font-light">
                  Western &amp; Ethnic Wear
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light max-w-sm">
              &ldquo;{BRAND_INFO.tagline}&rdquo; — {BRAND_INFO.supportingMessage}
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <h4 className="font-serif text-sm text-brand-gold mb-1 font-medium tracking-wide">
                Join The Bloom Journal
              </h4>
              <p className="text-[11px] text-brand-ivory/70 font-light mb-3">
                Receive secret new-season drop previews and styling guides.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-brand-emerald-dark border border-brand-gold/30 text-xs text-brand-gold font-light">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>Welcome to the Bloom &amp; Belle family.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      disabled={loading}
                      aria-label="Email address for newsletter"
                      className="w-full bg-brand-emerald-deep/60 border border-brand-gold/30 text-brand-ivory px-3.5 py-2.5 text-xs placeholder:text-brand-ivory/40 focus:outline-none focus:border-brand-gold transition-colors font-light"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      aria-label="Subscribe to newsletter"
                      className="bg-brand-gold hover:bg-brand-gold-dark text-brand-emerald-deep px-4 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors shrink-0 disabled:opacity-50"
                    >
                      {loading ? "..." : <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                  {error && <p className="text-[11px] text-red-300">{error}</p>}
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-emerald transition-colors"
                aria-label="Follow Bloom & Belle on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.social.whatsappNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-emerald transition-colors"
                aria-label="Connect with Bloom & Belle on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span className="text-xs text-brand-ivory/70 font-light ml-1">
                {BRAND_INFO.social.instagramHandle}
              </span>
            </div>
          </div>

          {/* Links Column 1: The Brand */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-brand-gold tracking-wide uppercase">
              The Brand
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-ivory/80 font-light">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Collections */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-brand-gold tracking-wide uppercase">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-ivory/80 font-light">
              {FOOTER_LINKS.collections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Customer Care & Policies */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-brand-gold tracking-wide uppercase">
              Trust &amp; Care
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-ivory/80 font-light">
              {FOOTER_LINKS.customerCare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-ivory/60 font-light gap-4">
          <div className="flex items-center gap-2">
            <BotanicalMotif variant="sprout" size={16} />
            <span>&copy; {new Date().getFullYear()} Bloom &amp; Belle. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-brand-ivory/60">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions" className="hover:text-brand-gold transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/shipping-policy" className="hover:text-brand-gold transition-colors">
              Shipping &amp; Delivery
            </Link>
            <span>&bull;</span>
            <Link href="/return-refund-policy" className="hover:text-brand-gold transition-colors">
              Returns &amp; Exchanges
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
