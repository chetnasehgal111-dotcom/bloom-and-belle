import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND_INFO } from "@/data/brand";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloomandbelle.in"),
  alternates: {
    canonical: "https://bloomandbelle.in",
  },
  title: {
    default: "Bloom & Belle | For Every Version of You — Contemporary Western & Ethnic Wear",
    template: "%s | Bloom & Belle",
  },
  description:
    "Bloom & Belle offers premium contemporary women's fashion combining western and ethnic styles with 160+ GSM quality-conscious fabrics at accessible prices. Explore kurtis, suits, tops, co-ord sets, and more.",
  keywords: [
    "women's clothing online",
    "western wear for women",
    "ethnic wear for women",
    "kurtis for office",
    "non sheer white kurti",
    "160 GSM cotton clothing",
    "contemporary Indian fashion",
    "women's tops and shirts",
    "co-ord sets for women",
    "chanderi silk party wear suits",
    "capsule wardrobe women India",
    "Bloom and Belle",
    "affordable luxury clothing India",
    "body shape styling women",
  ],
  authors: [{ name: "Bloom & Belle" }],
  creator: "Bloom & Belle",
  publisher: "Bloom & Belle",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bloomandbelle.in",
    siteName: "Bloom & Belle",
    title: "Bloom & Belle | For Every Version of You",
    description:
      "Style that fits you, your vibe & your budget. Contemporary western silhouettes and timeless ethnic elegance with 160+ GSM non-sheer fabrics.",
    images: [
      {
        url: "/editorial/ad-hero.png",
        width: 1200,
        height: 630,
        alt: "Bloom & Belle Women's Clothing Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom & Belle | Contemporary Western & Ethnic Fashion",
    description:
      "Style that fits you, your vibe & your budget. Quality-conscious contemporary women's fashion.",
    images: ["/editorial/ad-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/monogram.png",
    apple: "/brand/monogram.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bloomandbelle.in/#organization",
        name: "Bloom & Belle",
        url: "https://bloomandbelle.in",
        logo: "https://bloomandbelle.in/brand/logo-full.png",
        slogan: BRAND_INFO.tagline,
        description: BRAND_INFO.philosophyShort,
        knowsAbout: [
          "Women's Western Fashion",
          "Indian Ethnic Wear",
          "160+ GSM Non-Sheer Cotton Fabrics",
          "Contemporary Co-ord Sets",
          "Body Shape Styling Guides",
          "Capsule Wardrobe Formulation",
        ],
        brand: {
          "@type": "Brand",
          name: "Bloom & Belle",
          slogan: BRAND_INFO.tagline,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support & Styling Concierge",
          email: BRAND_INFO.social.supportEmail,
          telephone: BRAND_INFO.social.whatsappNumber,
          areaServed: ["IN", "US", "CA", "GB", "AE", "AU"],
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          BRAND_INFO.social.instagram,
          BRAND_INFO.social.pinterest,
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://bloomandbelle.in/#website",
        url: "https://bloomandbelle.in",
        name: "Bloom & Belle",
        description: "Official online brand presence for Bloom & Belle — contemporary western and ethnic fashion for women.",
        publisher: {
          "@id": "https://bloomandbelle.in/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-ivory text-brand-charcoal min-h-screen flex flex-col antialiased selection:bg-brand-emerald selection:text-brand-ivory">
        {/* Skip to Content for WCAG 2.2 AA Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-emerald focus:text-brand-ivory focus:shadow-md"
        >
          Skip to main content
        </a>

        <AnnouncementBar />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
