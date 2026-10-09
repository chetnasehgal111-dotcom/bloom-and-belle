"use client";

import React, { useEffect } from "react";
import { SIZE_CHART, MODEL_SPECS } from "@/data/brand";
import { X, Ruler, CheckCircle2 } from "lucide-react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="size-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-charcoal/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brand-ivory border border-brand-gold/30 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-charcoal/60 hover:text-brand-emerald hover:bg-brand-gold/10 transition-colors"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-brand-gold text-xs tracking-[0.2em] uppercase font-medium mb-1">
            <Ruler className="w-3.5 h-3.5" />
            <span>Fit & Measurements</span>
          </div>
          <h2 id="size-guide-title" className="font-serif text-2xl sm:text-3xl text-brand-emerald">
            Official Size Guide
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 mt-1 font-light">
            Find your perfect fit across Bloom & Belle western and ethnic garments
          </p>
        </div>

        {/* Size Chart Table */}
        <div className="overflow-x-auto border border-brand-gold/20 mb-6 bg-white">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-brand-emerald text-brand-ivory font-serif">
                <th className="py-3 px-4 font-normal tracking-wide">Size</th>
                <th className="py-3 px-4 font-normal tracking-wide">Bust (inches)</th>
                <th className="py-3 px-4 font-normal tracking-wide">Waist (inches)</th>
                <th className="py-3 px-4 font-normal tracking-wide">Hip (inches)</th>
                <th className="py-3 px-4 font-normal tracking-wide">Length (inches)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-gold/10 font-sans">
              {SIZE_CHART.map((entry, idx) => (
                <tr
                  key={entry.size}
                  className={idx % 2 === 0 ? "bg-brand-ivory/50" : "bg-white"}
                >
                  <td className="py-3 px-4 font-medium text-brand-emerald">{entry.size}</td>
                  <td className="py-3 px-4 text-brand-charcoal/80">{entry.bustInches}&quot;</td>
                  <td className="py-3 px-4 text-brand-charcoal/80">{entry.waistInches}&quot;</td>
                  <td className="py-3 px-4 text-brand-charcoal/80">{entry.hipInches}&quot;</td>
                  <td className="py-3 px-4 text-brand-charcoal/80">{entry.lengthInches}&quot;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Model Measurements Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-brand-ivory-cream p-4 border border-brand-gold/20">
          <div>
            <h4 className="font-serif text-sm text-brand-emerald font-semibold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              Model Statistics
            </h4>
            <ul className="text-xs text-brand-charcoal/80 space-y-1 font-light">
              <li>• <strong>Height:</strong> {MODEL_SPECS.height}</li>
              <li>• <strong>Bust:</strong> {MODEL_SPECS.bust}</li>
              <li>• <strong>Waist:</strong> {MODEL_SPECS.waist}</li>
              <li>• <strong>Wearing Size:</strong> {MODEL_SPECS.wearingSize}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-brand-emerald font-semibold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              Fit Guarantee
            </h4>
            <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed">
              Our patterns are engineered with 2 inches of breathing ease around the bust and hips for true all-day comfort without tight tugging.
            </p>
          </div>
        </div>

        {/* How to Measure Instructions */}
        <div className="text-xs text-brand-charcoal/70 space-y-1.5 font-light pt-3 border-t border-brand-gold/20">
          <p><strong>Bust:</strong> Measure around the fullest part of your chest with a relaxed tape.</p>
          <p><strong>Waist:</strong> Measure around your natural waistline, typically 2 inches above the navel.</p>
          <p><strong>Hips:</strong> Measure around the widest part of your hips with feet together.</p>
        </div>

        {/* WhatsApp Assist footer */}
        <div className="mt-6 text-center">
          <a
            href="https://wa.me/919876543210?text=Hi%20Bloom%20%26%20Belle%20team,%20I%20need%20help%20choosing%20my%20size!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-brand-emerald font-medium underline hover:text-brand-gold transition-colors"
          >
            Still unsure? Chat directly with our sizing assistant on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
