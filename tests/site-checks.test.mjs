import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { PRODUCTS, CATEGORIES } from "../src/data/products.ts";
import { BRAND_INFO, BRAND_PILLARS, SIZE_CHART, FAQ_ITEMS } from "../src/data/brand.ts";
import { MAIN_NAV, FOOTER_LINKS } from "../src/data/navigation.ts";

describe("Bloom & Belle — Data & Catalog Integrity", () => {
  it("should have all products with unique IDs and slugs", () => {
    const ids = new Set();
    const slugs = new Set();

    for (const p of PRODUCTS) {
      assert.ok(p.id, "Product must have an id");
      assert.ok(p.slug, "Product must have a slug");
      assert.equal(ids.has(p.id), false, `Duplicate ID: ${p.id}`);
      assert.equal(slugs.has(p.slug), false, `Duplicate Slug: ${p.slug}`);
      ids.add(p.id);
      slugs.add(p.slug);
    }
  });

  it("should verify that every product image file exists in public directory", () => {
    for (const p of PRODUCTS) {
      for (const img of p.images) {
        const relativePath = img.src.startsWith("/") ? img.src.slice(1) : img.src;
        const fullPath = path.resolve("public", relativePath);
        assert.ok(
          fs.existsSync(fullPath),
          `Missing image file: ${fullPath} for product ${p.name}`
        );
        assert.ok(img.alt && img.alt.length > 5, `Image missing descriptive alt text: ${img.src}`);
      }
    }
  });

  it("should ensure all product prices are positive INR values and sizes are provided", () => {
    for (const p of PRODUCTS) {
      assert.ok(p.price > 0, `Product price must be greater than 0: ${p.name}`);
      assert.equal(p.currency, "₹");
      assert.ok(p.sizes.length >= 3, `Product must offer multiple sizes: ${p.name}`);
      assert.ok(p.fabric.length > 5, `Product must have genuine fabric details: ${p.name}`);
      assert.ok(p.bodyShapeMatch.length > 0, `Product must have body shape recommendations: ${p.name}`);
    }
  });

  it("should verify categories exist and contain valid hero images", () => {
    assert.ok(CATEGORIES.length >= 4, "Must have at least 4 category definitions");
    for (const cat of CATEGORIES) {
      const relPath = cat.heroImage.startsWith("/") ? cat.heroImage.slice(1) : cat.heroImage;
      const fullPath = path.resolve("public", relPath);
      assert.ok(fs.existsSync(fullPath), `Missing category hero image: ${fullPath}`);
    }
  });
});

describe("Bloom & Belle — Brand Kit & Design System", () => {
  it("should match exact verified brand kit values", () => {
    assert.equal(BRAND_INFO.name, "Bloom & Belle");
    assert.equal(BRAND_INFO.tagline, "For every version of you.");
    assert.equal(BRAND_INFO.supportingMessage, "Style that fits you, your vibe & your budget.");
    assert.equal(BRAND_INFO.sloganEditorial, "Western silhouettes. Ethnic soul.");
    assert.equal(BRAND_INFO.promoCode, "WELCOME10");
  });

  it("should have all 4 brand pillars defined from brand kit", () => {
    assert.equal(BRAND_PILLARS.length, 4);
    const titles = BRAND_PILLARS.map((p) => p.title);
    assert.ok(titles.includes("Premium Quality Fabrics"));
    assert.ok(titles.includes("Western & Ethnic In Harmony"));
    assert.ok(titles.includes("Pan-India & Global Delivery"));
    assert.ok(titles.includes("Made For Modern Women"));
  });

  it("should contain size chart entries for S through XXL", () => {
    assert.equal(SIZE_CHART.length, 5);
    const sizes = SIZE_CHART.map((s) => s.size);
    assert.deepEqual(sizes, ["S", "M", "L", "XL", "XXL"]);
    for (const s of SIZE_CHART) {
      assert.ok(s.bustInches > 0);
      assert.ok(s.waistInches > 0);
      assert.ok(s.hipInches > 0);
      assert.ok(s.lengthInches > 0);
    }
  });

  it("should have FAQs covering all required customer touchpoints", () => {
    assert.ok(FAQ_ITEMS.length >= 6);
    const cats = new Set(FAQ_ITEMS.map((f) => f.category));
    assert.ok(cats.has("Fabrics & Quality"));
    assert.ok(cats.has("Sizing & Fit"));
    assert.ok(cats.has("Ordering & Delivery"));
    assert.ok(cats.has("Returns & Exchanges"));
  });
});

describe("Bloom & Belle — Navigation & Link Integrity", () => {
  it("should verify all main navigation routes", () => {
    for (const item of MAIN_NAV) {
      assert.ok(item.href.startsWith("/"));
      if (item.children) {
        for (const sub of item.children) {
          assert.ok(sub.href.startsWith("/collections/"));
        }
      }
    }
  });

  it("should verify legal and trust routes in footer", () => {
    const legalHrefs = FOOTER_LINKS.legal.map((l) => l.href);
    assert.ok(legalHrefs.includes("/terms-and-conditions"));
    assert.ok(legalHrefs.includes("/privacy-policy"));
    assert.ok(legalHrefs.includes("/shipping-policy"));
    assert.ok(legalHrefs.includes("/return-refund-policy"));
  });
});
