export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Collections",
    href: "/collections",
    children: [
      {
        label: "Western Wear",
        href: "/collections/western-wear",
        description: "Contemporary blazers, tailored shirts, slip dresses & blouses",
      },
      {
        label: "Ethnic Wear",
        href: "/collections/ethnic-wear",
        description: "Handcrafted pure cotton kurtis, Chanderi anarkalis & festive suits",
      },
      {
        label: "Co-ord Sets",
        href: "/collections/co-ord-sets",
        description: "Effortless 2-piece tailored sets and resort linen combinations",
      },
      {
        label: "Jewellery & Accents",
        href: "/collections/jewellery",
        description: "Coming Soon: 18k champagne gold demi-fine botanical jewellery",
      },
    ],
  },
  { label: "Style Guide", href: "/style-guide" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "The Philosophy", href: "/about#philosophy" },
    { label: "Fabric & Craftsmanship", href: "/about#craft" },
    { label: "Style Guide & Body Shapes", href: "/style-guide" },
    { label: "Contact & WhatsApp Concierge", href: "/contact" },
  ],
  collections: [
    { label: "All Collections", href: "/collections" },
    { label: "Western Wear", href: "/collections/western-wear" },
    { label: "Ethnic Wear & Kurtis", href: "/collections/ethnic-wear" },
    { label: "Co-ord Sets", href: "/collections/co-ord-sets" },
    { label: "Festive Occasion Sets", href: "/collections/ethnic-wear" },
    { label: "Jewellery (Preview)", href: "/collections/jewellery" },
  ],
  customerCare: [
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Size Chart & Fitting Guide", href: "/products/niloufar-block-print-cotton-kurti#size-guide" },
    { label: "Fabric Care Guidelines", href: "/faq#fabrics" },
    { label: "WhatsApp Styling Support", href: "https://wa.me/919876543210" },
    { label: "Track Your Inquiry", href: "/contact" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return & Exchange Policy", href: "/return-refund-policy" },
  ],
};

export const ANNOUNCEMENT_MESSAGES = [
  "Welcome to Bloom & Belle — For Every Version of You",
  "Use code WELCOME10 for 10% off your first order",
  "Complimentary express shipping across India on orders above ₹1,999",
  "International delivery available to US, UK, UAE, Canada & Australia",
];
