import React from "react";
import { BotanicalMotif } from "@/components/ui/BotanicalMotif";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-ivory px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-5">
        <BotanicalMotif variant="sprout" size={40} />

        <span className="text-xs font-sans tracking-[0.24em] uppercase text-brand-gold font-medium block">
          Error 404 &bull; Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-brand-emerald">
          This Piece Seems To Have Blossomed Elsewhere
        </h1>

        <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light leading-relaxed">
          The page or product you are looking for may have been updated, relocated, or is no longer available.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" size="md" className="w-full sm:w-auto">
            <span>Return to Home</span>
          </Button>
          <Button href="/collections" variant="outline" size="md" className="w-full sm:w-auto">
            <span>Browse Collections</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
