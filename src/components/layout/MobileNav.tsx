"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/data/navigation";
import { BRAND_INFO } from "@/data/brand";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-brand-ivory text-brand-emerald animate-fade-in"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-brand-gold/20">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <Image
            src="/brand/monogram.png"
            alt="Bloom & Belle Monogram"
            width={38}
            height={38}
            className="w-9 h-9 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider text-brand-emerald leading-tight">
              Bloom &amp; Belle
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-brand-gold font-light">
              Western &amp; Ethnic
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-brand-emerald hover:text-brand-gold transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
        <nav className="flex flex-col space-y-4">
          {MAIN_NAV.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <div key={item.href} className="border-b border-brand-gold/15 pb-3">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between font-serif text-2xl transition-colors ${
                    isActive
                      ? "text-brand-gold font-medium"
                      : "text-brand-emerald hover:text-brand-gold"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold opacity-60" />
                </Link>

                {item.children && (
                  <div className="mt-3 pl-3 space-y-2 border-l border-brand-gold/30">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={onClose}
                        className="block text-xs text-brand-charcoal/80 hover:text-brand-gold transition-colors py-1 font-light"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer actions */}
        <div className="pt-6 border-t border-brand-gold/20 space-y-4">
          <div className="flex justify-center">
            <BotanicalMotif variant="sprout" size={24} />
          </div>

          <p className="text-center font-serif text-xs text-brand-charcoal/70 italic">
            &ldquo;{BRAND_INFO.tagline}&rdquo;
          </p>

          <a
            href={`https://wa.me/${BRAND_INFO.social.whatsappNumber.replace(
              "+",
              ""
            )}?text=Hi%20Bloom%20%26%20Belle%20team,%20I'd%20like%20to%20inquire%20about%20your%20collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-brand-emerald text-brand-ivory text-xs font-sans tracking-[0.16em] uppercase hover:bg-brand-emerald-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-brand-gold" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="text-center text-[10px] text-brand-charcoal/50 uppercase tracking-wider">
            {BRAND_INFO.social.location}
          </div>
        </div>
      </div>
    </div>
  );
}
