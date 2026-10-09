import { MetadataRoute } from "next";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bloomandbelle.in";
  const now = new Date();

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/collections",
    "/style-guide",
    "/contact",
    "/faq",
    "/terms-and-conditions",
    "/privacy-policy",
    "/shipping-policy",
    "/return-refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Category routes
  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/collections/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Product routes
  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
