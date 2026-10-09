"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/data/navigation";
import { BRAND_INFO } from "@/data/brand";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { Menu, ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [collectionsHovered, setCollectionsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-brand-ivory/95 backdrop-blur-md shadow-subtle border-b border-brand-gold/25 py-2.5 sm:py-3"
            : "bg-brand-ivory border-b border-brand-gold/15 py-3.5 sm:py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on the left */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
            aria-label="Bloom & Belle Home"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 overflow-hidden">
              <Image
                src="/brand/monogram.png"
                alt="Bloom & Belle Monogram"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-brand-emerald tracking-wider font-normal leading-tight group-hover:text-brand-gold-dark transition-colors">
                Bloom &amp; Belle
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-brand-gold font-light">
                Western &amp; Ethnic Wear
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {MAIN_NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setCollectionsHovered(true)}
                    onMouseLeave={() => setCollectionsHovered(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-2 text-xs font-sans tracking-[0.16em] uppercase transition-colors font-medium",
                        isActive
                          ? "text-brand-gold font-semibold"
                          : "text-brand-emerald hover:text-brand-gold"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 text-brand-gold transition-transform duration-200",
                          collectionsHovered ? "rotate-180" : ""
                        )}
                      />
                    </Link>

                    {/* Mega Dropdown */}
                    {collectionsHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-brand-ivory border border-brand-gold/30 shadow-luxury p-3 space-y-1 animate-fade-in z-50">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block p-2.5 hover:bg-brand-emerald/5 transition-colors group/sub"
                          >
                            <div className="font-serif text-sm text-brand-emerald group-hover/sub:text-brand-gold font-medium">
                              {sub.label}
                            </div>
                            <div className="text-[11px] text-brand-charcoal/60 font-light mt-0.5 line-clamp-1">
                              {sub.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-xs font-sans tracking-[0.16em] uppercase transition-colors font-medium relative",
                    isActive
                      ? "text-brand-gold font-semibold"
                      : "text-brand-emerald hover:text-brand-gold"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Concierge */}
            <a
              href={`https://wa.me/${BRAND_INFO.social.whatsappNumber.replace(
                "+",
                ""
              )}?text=Hi%20Bloom%20%26%20Belle%20team,%20I'd%20love%20some%20styling%20advice!`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-[11px] text-brand-emerald hover:text-brand-gold transition-colors font-sans tracking-wider uppercase font-medium p-1.5"
              aria-label="Chat with Bloom & Belle Stylist on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>Styling Help</span>
            </a>

            {/* Explore CTA */}
            <Button
              href="/collections"
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Explore Collections
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={isMobileOpen}
              className="md:hidden p-2 text-brand-emerald hover:text-brand-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
