import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandIntroSection } from "@/components/home/BrandIntroSection";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { BodyShapeGuideSection } from "@/components/home/BodyShapeGuideSection";
import { CapsuleWardrobeSection } from "@/components/home/CapsuleWardrobeSection";
import { FabricCraftsmanshipSection } from "@/components/home/FabricCraftsmanshipSection";
import { InstagramDiscovery } from "@/components/home/InstagramDiscovery";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BrandIntroSection />
      <FeaturedCollections />
      <ProductHighlights />
      <BodyShapeGuideSection />
      <CapsuleWardrobeSection />
      <FabricCraftsmanshipSection />
      <InstagramDiscovery />
    </div>
  );
}
