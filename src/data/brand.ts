export interface BrandPillar {
  title: string;
  subtitle: string;
  icon: "diamond" | "dress" | "globe" | "heart";
  description: string;
}

export interface BodyShapeGuide {
  shape: "Pear" | "Hourglass" | "Apple" | "Rectangle";
  title: string;
  tagline: string;
  description: string;
  bestPicks: string[];
  stylingTips: string[];
  recommendedCategory: string;
}

export interface SizeChartEntry {
  size: string;
  bustInches: number;
  waistInches: number;
  hipInches: number;
  lengthInches: number;
}

export const BRAND_INFO = {
  name: "Bloom & Belle",
  tagline: "For every version of you.",
  supportingMessage: "Style that fits you, your vibe & your budget.",
  sloganEditorial: "Western silhouettes. Ethnic soul.",
  philosophyShort:
    "We believe fashion should empower women to feel effortlessly confident, comfortable, and beautiful—without having to choose between quality and affordability.",
  philosophyFull: `Bloom & Belle was born from a simple yet powerful observation: modern women lead multifaceted lives. On any given week, you might lead a team presentation in a tailored blazer, meet friends for iced coffee in a relaxed embroidered shirt, and celebrate a family festive evening in an ethereal anarkali suit.

Too often, women are forced to compromise—between overpriced designer labels that drain savings, and disposable fast fashion that loses its shape, fades, or turns see-through after one wash.

At Bloom & Belle, we bridge this gap. We curate premium high-GSM combed cottons, pure linen blends, and artisanal Chanderi silks with meticulous pattern drafting, reinforced seams, and timeless color palettes. Premium quality fabrics at prices that genuinely make sense.`,
  social: {
    instagram: "https://instagram.com/bloomandbelle",
    instagramHandle: "@bloomandbelle",
    pinterest: "https://pinterest.com/bloomandbelle",
    whatsappNumber: "+919876543210",
    whatsappDisplay: "+91 98765 43210",
    supportEmail: "care@bloomandbelle.in",
    location: "New Delhi & Jaipur, India",
    operatingHours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
  },
  promoCode: "WELCOME10",
  promoDiscount: "10% OFF",
};

export const BRAND_PILLARS: BrandPillar[] = [
  {
    title: "Premium Quality Fabrics",
    subtitle: "Built to last, not to toss",
    icon: "diamond",
    description:
      "We source 160+ GSM combed cottons, French linen blends, and rich Chanderi silks. Never paper-thin, transparent, or scratchy.",
  },
  {
    title: "Western & Ethnic In Harmony",
    subtitle: "One trusted brand for your whole wardrobe",
    icon: "dress",
    description:
      "Seamlessly transition from contemporary workday blouses and co-ord sets to graceful festive kurtis and celebration suits.",
  },
  {
    title: "Pan-India & Global Delivery",
    subtitle: "Bringing thoughtful styling everywhere",
    icon: "globe",
    description:
      "Express tracked dispatch across India (Delhi, Mumbai, Bengaluru, Jaipur, and beyond) and seamless delivery to our global diaspora.",
  },
  {
    title: "Made For Modern Women",
    subtitle: "Thoughtful silhouettes for sizes S to XXL",
    icon: "heart",
    description:
      "Engineered with real body shapes in mind—with generous armholes, non-gaping necklines, and comfortable ease for everyday life.",
  },
];

export const BODY_SHAPE_GUIDES: BodyShapeGuide[] = [
  {
    shape: "Pear",
    title: "Pear Shape",
    tagline: "Balance lower body with statement shoulders & A-line flares",
    description:
      "Your hips and thighs are gently wider than your shoulders. The goal is to draw eyes upward to your neckline while providing fluid ease over the hips.",
    bestPicks: ["Bow & Puffed Sleeve Blouses", "A-Line Anarkalis & Skirts", "Square Neck Tops", "Wide-Leg Linen Trousers"],
    stylingTips: [
      "Choose tops with structural accents like our Summer Breeze bow blouse to visually balance proportions.",
      "Opt for high-waisted bottoms that sit comfortably at your natural waist without pulling.",
      "A-line kurtas like the Aurelia Anarkali drape naturally over hips without clinging.",
    ],
    recommendedCategory: "western-wear",
  },
  {
    shape: "Hourglass",
    title: "Hourglass Shape",
    tagline: "Celebrate your natural waist with wrap cuts & tailored drape",
    description:
      "Your bust and hips are balanced with a naturally defined waistline. Highlight your silhouette with contouring cuts that honor your curves.",
    bestPicks: ["Cinch-Waist Peplum Blouses", "Liquid Satin Draped Slip Dresses", "Belted Co-ord Sets", "Fitted Bodice Gowns"],
    stylingTips: [
      "Use our adjustable drawstring cinch blouses like Celeste and Clara to emphasize your waistline comfortably.",
      "Bias-cut dresses like the Elysian slip contour your curves gracefully without constriction.",
      "Avoid boxy oversized garments that hide your natural waist definition.",
    ],
    recommendedCategory: "co-ord-sets",
  },
  {
    shape: "Apple",
    title: "Apple Shape",
    tagline: "Elongate your torso with graceful V-necks & flowy straight lines",
    description:
      "Your torso and bust are fuller with slender arms and legs. Look for vertical styling lines, gentle draping fabrics, and elongating necklines.",
    bestPicks: ["Elongated V-Neck Kurta Sets", "Straight-Cut Pure Cotton Kurtis", "Mandarin Notch Necklines", "Flowy Open-Front Blazers"],
    stylingTips: [
      "Our Zahra sage kurta features an open V-neck that draws the eye vertically and elongates your posture.",
      "The Niloufar straight cotton kurti provides a clean, streamlined vertical column that flows effortlessly.",
      "Layer our Aanya unbuttoned linen blazer to create sleek slimming vertical frame lines.",
    ],
    recommendedCategory: "ethnic-wear",
  },
  {
    shape: "Rectangle",
    title: "Rectangle Shape",
    tagline: "Create dynamic curves with peplum flares, cinches & layering",
    description:
      "Your shoulders, waist, and hips are aligned in a sleek, athletic silhouette. Have fun creating dimension with peplums, ties, and textured fabrics.",
    bestPicks: ["3D Peplum Tops with Ties", "Layered Linen Blazer Ensembles", "Textured Tiered Dresses", "Waist-Cinched Shirts"],
    stylingTips: [
      "Peplum tops with side cinch ribbons like Celeste create an instant, flattering hourglass illusion.",
      "Layer textured knits under structured blazers to build dimension and visual depth.",
      "Experiment with statement neckline embroidery and delicate jewelry.",
    ],
    recommendedCategory: "western-wear",
  },
];

export const SIZE_CHART: SizeChartEntry[] = [
  { size: "S", bustInches: 34, waistInches: 30, hipInches: 38, lengthInches: 44 },
  { size: "M", bustInches: 36, waistInches: 32, hipInches: 40, lengthInches: 45 },
  { size: "L", bustInches: 38, waistInches: 34, hipInches: 42, lengthInches: 46 },
  { size: "XL", bustInches: 40, waistInches: 36, hipInches: 44, lengthInches: 47 },
  { size: "XXL", bustInches: 42, waistInches: 38, hipInches: 46, lengthInches: 48 },
];

export const MODEL_SPECS = {
  height: "5'7\" (170 cm)",
  bust: "34 inches",
  waist: "28 inches",
  wearingSize: "Size M",
};

export const FAQ_ITEMS = [
  {
    category: "Fabrics & Quality",
    question: "How do you ensure white and light-colored garments are not transparent?",
    answer:
      "Tired of having to wear multiple layers under white clothes? We solve this by using heavier, high-GSM (grams per square meter) fabrics. Our pure cotton kurtis and tops use 160+ GSM combed weaves, and delicate festive pieces come pre-lined with breathable pure mulmul cotton so you never have to worry about see-through garments.",
  },
  {
    category: "Fabrics & Quality",
    question: "Will the colors fade or the fabric shrink after washing?",
    answer:
      "All Bloom & Belle fabrics undergo pre-shrinking and color-fastness testing before production. We use fade-resistant dyes that preserve their richness wash after wash. Simply follow the gentle care instructions provided on each garment's label and product page.",
  },
  {
    category: "Sizing & Fit",
    question: "How do I find my correct size?",
    answer:
      "We design for real Indian and international body proportions with generous armhole ease and true-to-size grading. Check our detailed Size Guide table on every product page for exact bust, waist, hip, and length measurements. If you fall between sizes, we recommend sizing up for relaxed comfort.",
  },
  {
    category: "Sizing & Fit",
    question: "Can I get personalized styling or sizing advice?",
    answer:
      "Yes! Our styling team is available via our WhatsApp Concierge. Share your measurements, preferred fit, or the event you're dressing for, and we will happily recommend the best silhouette for your body shape.",
  },
  {
    category: "Ordering & Delivery",
    question: "How do I place an order or inquire about a piece?",
    answer:
      "Bloom & Belle operates as an informative online brand experience with personalized customer assistance. Click 'Inquire on WhatsApp' on any product page to chat directly with our team with pre-filled product details, or send us a message through our Contact page.",
  },
  {
    category: "Ordering & Delivery",
    question: "What are your delivery timelines and shipping fees?",
    answer:
      "Standard orders across metro Indian cities are delivered within 3–5 business days. Tier-2/Tier-3 locations take 5–7 days. International shipping takes approximately 7–10 business days. Standard shipping across India is complimentary on all prepaid orders over ₹1,999.",
  },
  {
    category: "Returns & Exchanges",
    question: "What is your exchange and return policy?",
    answer:
      "We want you to feel confident and beautiful in your Bloom & Belle pieces. If you need a different size, we offer a hassle-free 7-day exchange window from the date of delivery, provided the garment is unworn, unwashed, and in its original packaging with tags intact.",
  },
];
