import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { ProductView } from "@/components/product/ProductView";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.name} | ${product.categoryLabel} | Bloom & Belle`;
  const description = `${product.subtitle} Crafted from ${product.fabric} (${product.specs.transparency}). Available in sizes S–XXL with 2-inch comfort ease.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      product.categoryLabel,
      product.fabric,
      product.colors.map((c) => c.name).join(", "),
      "non sheer clothing India",
      "contemporary women fashion",
      "Bloom & Belle",
    ],
    alternates: {
      canonical: `https://bloomandbelle.in/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://bloomandbelle.in/products/${product.slug}`,
      images: [
        {
          url: product.images[0].src,
          width: 800,
          height: 1000,
          alt: `${product.name} - Bloom & Belle`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bloomandbelle.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Collections",
        item: "https://bloomandbelle.in/collections",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.categoryLabel,
        item: `https://bloomandbelle.in/collections/${product.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `https://bloomandbelle.in/products/${product.slug}`,
      },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => `https://bloomandbelle.in${img.src}`),
    description: product.description,
    sku: product.id,
    mpn: product.id,
    material: product.fabric,
    color: product.colors.map((c) => c.name).join(", "),
    category: product.categoryLabel,
    countryOfOrigin: "IN",
    brand: {
      "@type": "Brand",
      name: "Bloom & Belle",
      slogan: "For every version of you.",
    },
    offers: {
      "@type": "Offer",
      url: `https://bloomandbelle.in/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      priceValidUntil: "2027-12-31",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 3,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductView product={product} relatedProducts={relatedProducts} />
    </>
  );
}
