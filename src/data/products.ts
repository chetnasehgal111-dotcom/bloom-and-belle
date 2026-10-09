export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "western-wear" | "ethnic-wear" | "co-ord-sets" | "jewellery";
  categoryLabel: string;
  subcategory: string;
  price: number;
  currency: string;
  inStock: boolean;
  featured: boolean;
  bestseller: boolean;
  isNewArrival?: boolean;
  rating: number;
  reviewCount: number;
  images: {
    src: string;
    alt: string;
    label?: string;
  }[];
  fabric: string;
  fabricDetails: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  description: string;
  stylingTips: string;
  bodyShapeMatch: ("Pear" | "Hourglass" | "Apple" | "Rectangle")[];
  careInstructions: string[];
  specs: {
    fit: string;
    length: string;
    neckline: string;
    sleeveLength: string;
    transparency: string;
    origin: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "bb-eth-001",
    slug: "niloufar-block-print-cotton-kurti",
    name: "Niloufar Block-Print Pure Cotton Kurti",
    subtitle: "Breathable all-day office & casual comfort in 100% high-GSM cotton",
    category: "ethnic-wear",
    categoryLabel: "Ethnic Wear",
    subcategory: "Kurtis",
    price: 1499,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: true,
    isNewArrival: false,
    rating: 4.9,
    reviewCount: 38,
    images: [
      {
        src: "/products/niloufar-kurti-full.png",
        alt: "Model wearing Bloom & Belle Niloufar pure cotton blue printed kurti with ivory pants",
        label: "Front View",
      },
      {
        src: "/products/niloufar-kurti-front.png",
        alt: "Close-up portrait of model in Niloufar cotton kurti",
        label: "Portrait View",
      },
      {
        src: "/products/niloufar-kurti-details.png",
        alt: "Craftsmanship details showing neckline piping, 3/4 sleeves, breathable cotton weave, and side slit",
        label: "Fabric & Finishes",
      },
      {
        src: "/products/niloufar-kurti-back.png",
        alt: "Back view of Niloufar kurti showing tailored darts and clean cut",
        label: "Back View",
      },
      {
        src: "/products/niloufar-kurti-sizeguide.png",
        alt: "Bloom & Belle official kurti size guide and fit breakdown",
        label: "Size & Fit Chart",
      },
    ],
    fabric: "100% Pure Combed Cotton (High GSM, Non-Sheer)",
    fabricDetails: [
      "Heavyweight 160+ GSM combed cotton prevents transparency without requiring heavy inner slips",
      "Hand-blocked botanical floral motif using skin-safe, fade-resistant dyes",
      "Pre-shrunk fabric to prevent size shrinkage after initial washing",
    ],
    colors: [
      { name: "Cornflower Blue & Sand", hex: "#6389A8" },
      { name: "Warm Ivory Accents", hex: "#F5F0E7" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Crafted from premium 100% pure combed cotton, the Niloufar Kurti is the everyday wardrobe anchor for modern working women. Featuring an intricate botanical block-print motif in soothing cornflower blue and warm ivory, it is tailored with a clean mandarin slit neckline, fine contrast piping, three-quarter sleeves, and reinforced side slits for effortless all-day movement.",
    stylingTips:
      "Style with crisp ivory cigarette trousers and delicate gold jhumkas for work meetings, or pair with relaxed linen culottes and Kolhapuris for weekend brunches.",
    bodyShapeMatch: ["Apple", "Pear", "Rectangle"],
    careInstructions: [
      "Machine wash gentle on cold (30°C) with mild detergent",
      "Wash inside out with similar light colors",
      "Dry in shade to preserve print vibrancy",
      "Warm iron on reverse side",
    ],
    specs: {
      fit: "Relaxed Straight Fit (True to size)",
      length: "Calf Length (45 inches in Size M)",
      neckline: "Mandarin Notch with Fine Piping",
      sleeveLength: "Three-Quarter Sleeves (17 inches)",
      transparency: "Opaque (No slip required)",
      origin: "Ethically crafted in India",
    },
  },
  {
    id: "bb-eth-002",
    slug: "aurelia-zari-embroidered-suit-set",
    name: "Aurelia Zari Embroidered Anarkali Suit Set",
    subtitle: "Understated festive glamour with delicate square neckline threadwork",
    category: "ethnic-wear",
    categoryLabel: "Ethnic Wear",
    subcategory: "Suits & Sets",
    price: 2999,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: true,
    isNewArrival: true,
    rating: 5.0,
    reviewCount: 44,
    images: [
      {
        src: "/products/ivory-anarkali-suit.png",
        alt: "Model wearing Bloom & Belle Aurelia ivory and blush embroidered anarkali suit with gold jhumkas",
        label: "Editorial Portrait",
      },
      {
        src: "/editorial/festive-story.png",
        alt: "Festive season wardrobe styling with Aurelia suit set",
        label: "Festive Mood",
      },
    ],
    fabric: "Chanderi Cotton Silk with Pure Mulmul Lining & Sheer Dupatta",
    fabricDetails: [
      "Lustrous Chanderi base blend offering gentle drape and subtle natural sheen",
      "Fully lined with breathable pure mulmul cotton for comfort during festive celebrations",
      "Intricate floral resham and champagne zari embroidery on neckline, cuffs, and hem",
    ],
    colors: [
      { name: "Warm Ivory & Blush Pink", hex: "#ECE3D4" },
      { name: "Champagne Zari", hex: "#C8A35F" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "The Aurelia Suit Set balances traditional Indian craftsmanship with clean modern silhouettes. Rendered in warm ivory with soft blush floral accents, this anarkali features a flattering structured square neckline, delicate resham threadwork, and an ethereal sheer dupatta with scalloped borders. Designed for festive gatherings, family occasions, and poojas where you want to look radiant without heavy, uncomfortable garments.",
    stylingTips:
      "Complement the square neckline with a delicate gold pendant or classic jhumkas as shown in our styling guide. Keep footwear neutral with metallic mojaris.",
    bodyShapeMatch: ["Pear", "Hourglass"],
    careInstructions: [
      "Dry clean recommended for the first 2 washes",
      "Subsequent washes: gentle hand wash in cold water with liquid silk detergent",
      "Do not wring; lay flat to dry in shade",
      "Steam iron or press on low heat with a protective cloth",
    ],
    specs: {
      fit: "Tailored Bodice with Flowing Flare",
      length: "Ankle Length (48 inches in Size M)",
      neckline: "Structured Square Neck with Embroidered Border",
      sleeveLength: "Three-Quarter Sheer Sleeves",
      transparency: "Bodice Opaque (Lined); Sleeves & Dupatta Sheer",
      origin: "Ethically crafted in India",
    },
  },
  {
    id: "bb-eth-003",
    slug: "zahra-sage-organza-suit-set",
    name: "Zahra Sage Green Embroidered Kurta Set",
    subtitle: "Ethereal translucent layers adorned with romantic rose floral threadwork",
    category: "ethnic-wear",
    categoryLabel: "Ethnic Wear",
    subcategory: "Suits & Sets",
    price: 2799,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: false,
    isNewArrival: true,
    rating: 4.8,
    reviewCount: 29,
    images: [
      {
        src: "/products/sage-organza-suit.png",
        alt: "Model wearing Bloom & Belle Zahra sage green embroidered organza suit with V-neckline",
        label: "Front Portrait",
      },
      {
        src: "/editorial/ad-hero.png",
        alt: "Bloom & Belle advertising feature showcasing modern ethnic elegance in sage green",
        label: "Campaign Feature",
      },
    ],
    fabric: "Tissue Organza Kurta with Dyed Mulmul Slip & Chanderi Bottoms",
    fabricDetails: [
      "Featherlight sage green organza with a delicate crystalline weave",
      "Separate matching pure cotton inner slip included for modesty and skin breathability",
      "Detailed floral vine borders in rose-petal pink and pale gold",
    ],
    colors: [
      { name: "Sage Green", hex: "#A8BCA1" },
      { name: "Dusty Rose Pink", hex: "#D6A6A6" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A breath of fresh air in contemporary ethnic wear. The Zahra Kurta Set pairs soothing sage green tissue organza with delicate floral embroidery running down the flattering elongated V-neckline. Accompanied by a breathable matching slip and tailored chanderi trousers, it represents the brand's 'Western silhouettes, Ethnic soul' design philosophy.",
    stylingTips:
      "Wear with minimal gold drop earrings and a sleek ponytail to let the detailed V-neck embroidery shine.",
    bodyShapeMatch: ["Apple", "Rectangle", "Hourglass"],
    careInstructions: [
      "Dry clean only to maintain delicate organza texture and embroidery threads",
      "Store hanging in a breathable cotton garment cover",
    ],
    specs: {
      fit: "Straight Fluid Silhouette",
      length: "Calf Length (46 inches in Size M)",
      neckline: "Scalloped Embroidered V-Neck",
      sleeveLength: "Three-Quarter Sheer Organza Sleeves",
      transparency: "Sheer outer layer with opaque detachable cotton inner",
      origin: "Ethically crafted in India",
    },
  },
  {
    id: "bb-west-001",
    slug: "summer-breeze-chevron-bow-shirt",
    name: "Summer Breeze Chevron Bow-Tie Blouse",
    subtitle: "Playful summer elegance in breezy chevron weave with front bow detail",
    category: "western-wear",
    categoryLabel: "Western Wear",
    subcategory: "Tops & Shirts",
    price: 1699,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: true,
    isNewArrival: false,
    rating: 4.9,
    reviewCount: 52,
    images: [
      {
        src: "/products/summer-bow-shirt.jpg",
        alt: "Bloom & Belle Summer Breeze Chevron Bow-Tie Blouse isolated studio flatlay",
        label: "Studio Flatlay",
      },
      {
        src: "/products/summer-bow-shirt-story.png",
        alt: "Model styling the Bloom & Belle summer bow shirt in 4 editorial frames",
        label: "Editorial Lookbook",
      },
    ],
    fabric: "Textured Cotton-Modal Rayon Weave",
    fabricDetails: [
      "Ultra-soft modal rayon blend with gentle crinkle texture that resists creasing",
      "Pastel buttercream base with undulating seafoam aqua chevron stripes",
      "Mother-of-pearl style buttons and reinforced bow attachment",
    ],
    colors: [
      { name: "Buttercream & Seafoam Wave", hex: "#F3E9D2" },
      { name: "Aqua Accent", hex: "#98C9C4" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "As featured in our signature summer reel: 'Looking for that perfect summer top? Light, stylish and made to make your summer looks better.' Crafted from a soft textured modal weave with pastel chevron striping, this collared button-down blouse is elevated by an architectural bow accent at the chest. Pair it with high-rise linen trousers for an instant chic statement.",
    stylingTips:
      "Tuck into wide-leg cream trousers or high-rise denim with beige loafers or minimal sandals. The statement bow provides built-in accessorizing.",
    bodyShapeMatch: ["Pear", "Rectangle"],
    careInstructions: [
      "Machine wash gentle cycle cold (30°C)",
      "Do not tumble dry; reshape bow while damp and hang to dry",
      "Cool iron if necessary",
    ],
    specs: {
      fit: "Regular Tailored Fit",
      length: "Waist Length (22 inches in Size M)",
      neckline: "Classic Collar with Button-Down Placket & Bow",
      sleeveLength: "Full Sleeves with Button Cuffs",
      transparency: "Opaque",
      origin: "Crafted in India",
    },
  },
  {
    id: "bb-west-002",
    slug: "celeste-3d-floral-peplum-blouse",
    name: "Celeste 3D Floral Appliqué Peplum Blouse",
    subtitle: "Handcrafted dimensional petal embroidery with waist-cinching ties",
    category: "western-wear",
    categoryLabel: "Western Wear",
    subcategory: "Tops & Shirts",
    price: 1899,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: false,
    isNewArrival: true,
    rating: 4.8,
    reviewCount: 21,
    images: [
      {
        src: "/products/sky-floral-peplum-blouse.jpg",
        alt: "Bloom & Belle Celeste sky blue 3D floral peplum blouse studio flatlay",
        label: "Studio Flatlay",
      },
    ],
    fabric: "100% Breathable Fine Poplin Cotton",
    fabricDetails: [
      "Premium 100% cotton poplin with smooth, crisp handfeel",
      "Dozens of individually stitched tonal 3D fabric flower petals on upper yoke",
      "Adjustable side drawstring ribbons for customizable waist cinch",
    ],
    colors: [
      { name: "Serene Sky Blue", hex: "#A5C7E6" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Romantic artistry meets modern feminine tailoring. The Celeste Blouse is cut from pure cotton poplin in a serene sky blue shade. Dimensional fabric petals blossom across the upper bodice, transitioning into a flouncy gathered peplum hem with dual side ties that let you adjust the waist cinch to your exact comfort.",
    stylingTips:
      "Contrast the voluminous peplum with sleek white skinny jeans or straight-cut ecru trousers and champagne gold huggie earrings.",
    bodyShapeMatch: ["Rectangle", "Hourglass"],
    careInstructions: [
      "Machine wash cold inside-out in a protective mesh laundry pouch",
      "Hang to dry away from direct sunlight",
      "Medium steam iron avoiding direct hard pressure on 3D petals",
    ],
    specs: {
      fit: "Adjustable Cinch Peplum",
      length: "Hip Length (24 inches in Size M)",
      neckline: "Point Collar with Concealed Button Placket",
      sleeveLength: "Long Sleeves with Elasticated Soft Cuffs",
      transparency: "Opaque",
      origin: "Crafted in India",
    },
  },
  {
    id: "bb-west-003",
    slug: "clara-meadow-embroidered-cinch-shirt",
    name: "Clara Meadow Embroidered Cinch Shirt",
    subtitle: "Delicate daisy florets on warm ivory with adjustable side cinch ties",
    category: "western-wear",
    categoryLabel: "Western Wear",
    subcategory: "Tops & Shirts",
    price: 1799,
    currency: "₹",
    inStock: true,
    featured: false,
    bestseller: true,
    isNewArrival: false,
    rating: 4.9,
    reviewCount: 33,
    images: [
      {
        src: "/products/cream-embroidered-shirt.jpg",
        alt: "Bloom & Belle Clara warm ivory meadow embroidered cinch shirt flatlay",
        label: "Studio Flatlay",
      },
    ],
    fabric: "Soft Tencel-Cotton Slub",
    fabricDetails: [
      "Tencel lyocell and cotton blend delivering breathable drape and buttery softness",
      "Tonal daisy flower embroidery placed artfully at the shoulders and collarbone",
      "Reinforced buttonholes and pearlescent buttons",
    ],
    colors: [
      { name: "Warm Ivory Cream", hex: "#F5F0E7" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Understated sophistication at its best. The Clara Shirt is designed in warm ivory with delicate floral embroidery adorning the collar and chest. Dual side drawstrings let you toggle between an easy relaxed silhouette or a gently cinched waist that flatters any body shape.",
    stylingTips:
      "Style with relaxed washed indigo denim and our signature gold monogram pendant for a timeless French-girl aesthetic.",
    bodyShapeMatch: ["Pear", "Hourglass", "Apple", "Rectangle"],
    careInstructions: [
      "Machine wash cold delicate",
      "Do not bleach",
      "Hang dry in shade; warm iron on reverse",
    ],
    specs: {
      fit: "Relaxed with Adjustable Side Cinch",
      length: "Waist-to-Hip (23.5 inches in Size M)",
      neckline: "Classic Point Collar",
      sleeveLength: "Full Sleeves with Buttoned Cuffs",
      transparency: "Opaque",
      origin: "Crafted in India",
    },
  },
  {
    id: "bb-coord-001",
    slug: "aanya-linen-blazer-capsule-set",
    name: "Aanya Tailored Linen Blazer & Ribbed Cami Set",
    subtitle: "The cornerstone of smart dressing: invest once, style forever",
    category: "co-ord-sets",
    categoryLabel: "Co-ord Sets",
    subcategory: "Tailored Sets",
    price: 2899,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: true,
    isNewArrival: false,
    rating: 5.0,
    reviewCount: 67,
    images: [
      {
        src: "/editorial/western-hero.png",
        alt: "Model Priya Sharma in Bloom & Belle Aanya cream linen blazer and ribbed cami at cafe",
        label: "Editorial Lifestyle",
      },
      {
        src: "/editorial/capsule-essentials.png",
        alt: "Capsule wardrobe essentials styling guide showing blazer, cami, denim, trousers, and bag",
        label: "Capsule Guide",
      },
      {
        src: "/editorial/capsule-flatlay.png",
        alt: "Build smart dress beautifully capsule flatlay with Bloom & Belle branding",
        label: "Wardrobe Flatlay",
      },
    ],
    fabric: "Premium French Linen Blend with Stretch Cotton Ribbed Cami",
    fabricDetails: [
      "Breathable, lightweight linen slub weave with natural cooling properties for warm climates",
      "Soft semi-structured shoulder padding and clean horn button closures",
      "Matching stretch ribbed tank top with clean bound scoop neckline included",
    ],
    colors: [
      { name: "Oatmeal Beige", hex: "#E3D7C3" },
      { name: "Warm Ivory Cami", hex: "#FCF9F4" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Representing our 'Build Smart, Dress Beautifully' philosophy, the Aanya Set is the ultimate versatile investment. Features a tailored single-breasted blazer in breathable oatmeal linen blend alongside a perfectly fitted stretch ribbed scoop camisole. Wear them together for professional workdays, or style individually with denim and kurtis for endless wardrobe rotations.",
    stylingTips:
      "Pair with pleated cream trousers for boardroom presentations, or roll the blazer sleeves and wear with straight jeans and white sneakers for weekend gallery visits.",
    bodyShapeMatch: ["Pear", "Hourglass", "Apple", "Rectangle"],
    careInstructions: [
      "Blazer: Dry clean recommended or delicate cold cycle; steam press",
      "Cami: Machine wash cold with like colors",
    ],
    specs: {
      fit: "Relaxed Modern Tailored Fit",
      length: "Blazer Hip Length (27 inches); Cami 21 inches",
      neckline: "Blazer Notched Lapel; Cami Scoop Neck",
      sleeveLength: "Blazer Full Long Sleeves; Cami Sleeveless",
      transparency: "Opaque",
      origin: "Crafted in India",
    },
  },
  {
    id: "bb-west-004",
    slug: "elysian-satin-draped-slip-dress",
    name: "Elysian Draped Cowl Satin Slip Dress",
    subtitle: "Fluid liquid drape in luxurious blush satin for romantic evenings",
    category: "western-wear",
    categoryLabel: "Western Wear",
    subcategory: "Dresses",
    price: 2499,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: false,
    isNewArrival: true,
    rating: 4.9,
    reviewCount: 19,
    images: [
      {
        src: "/editorial/western-opening.png",
        alt: "Bloom & Belle opening reel featuring Elysian satin draped slip dress and gold jewelry",
        label: "Editorial Reel",
      },
    ],
    fabric: "Heavyweight Liquid Charmeuse Satin",
    fabricDetails: [
      "Heavyweight 90D satin offering liquid drape without clinging to body contours",
      "Bias cut construction for natural flexibility and comfortable movement",
      "Lined cowl bodice with adjustable delicate spaghetti straps",
    ],
    colors: [
      { name: "Dusty Rose Satin", hex: "#D6A6A6" },
      { name: "Champagne Lustre", hex: "#E8D6C2" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Cut on the bias to hug and flatter every curve gently, the Elysian Slip Dress is rendered in liquid dusty rose satin. Featuring a soft draped cowl neckline, graceful side ruching, and a modest thigh slit, it epitomizes effortless contemporary glamour for cocktail dinners and special occasions.",
    stylingTips:
      "Layer under our Aanya Linen Blazer for a chic day-to-night transformation, or wear solo with delicate gold hoops and strappy heels.",
    bodyShapeMatch: ["Hourglass", "Rectangle"],
    careInstructions: [
      "Hand wash cold with gentle silk detergent or professional dry clean",
      "Do not twist or wring; roll in towel to remove excess water",
      "Low temperature steam iron using pressing cloth",
    ],
    specs: {
      fit: "Bias Cut Body-Skimming Drape",
      length: "Midi Length (46 inches in Size M)",
      neckline: "Draped Cowl Neck with Adjustable Straps",
      sleeveLength: "Sleeveless (Spaghetti Straps)",
      transparency: "Opaque with lined bodice",
      origin: "Crafted in India",
    },
  },
  {
    id: "bb-eth-004",
    slug: "seraphina-champagne-zari-couture-gown",
    name: "Seraphina Champagne Zari Occasion Gown",
    subtitle: "Hand-embellished Indo-Western celebration gown with golden flare",
    category: "ethnic-wear",
    categoryLabel: "Ethnic Wear",
    subcategory: "Occasion Wear",
    price: 4999,
    currency: "₹",
    inStock: true,
    featured: true,
    bestseller: true,
    isNewArrival: false,
    rating: 5.0,
    reviewCount: 56,
    images: [
      {
        src: "/editorial/ethnic-hero.png",
        alt: "Model wearing Seraphina champagne gold zari embroidered gown in sunlit archway",
        label: "Campaign Hero",
      },
      {
        src: "/editorial/brand-opening.png",
        alt: "Close-up fabric and jewellery details of Seraphina occasion wear",
        label: "Craftsmanship Detail",
      },
    ],
    fabric: "Italian Tulle with Silk Organza Lining & Dense Metallic Zari Threadwork",
    fabricDetails: [
      "Layered sheer tulle embroidered with thousands of shimmering champagne micro-sequins and metallic zari",
      "Internal boning in bodice for structured posture and comfortable support",
      "Hypoallergenic silk-organza lining ensures smooth comfort against skin",
    ],
    colors: [
      { name: "Champagne Gold", hex: "#C8A35F" },
      { name: "Warm Ivory Underlay", hex: "#FCF9F4" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A show-stopping Indo-western bridal and festive masterpiece. The Seraphina Gown is densely embroidered with hand-placed champagne zari vines and micro-sequins cascading down an expansive tulle skirt. Designed to make you feel like royalty at sangeets, receptions, and black-tie galas without the overwhelming weight of heavy bridal sets.",
    stylingTips:
      "Accessorize with antique gold jhumkas or a minimal diamond choker. A soft pinned-up hairstyle lets the sculpted sweetheart neckline take center stage.",
    bodyShapeMatch: ["Hourglass", "Pear", "Apple", "Rectangle"],
    careInstructions: [
      "Specialist dry clean only",
      "Store flat or hanging in the provided breathable cotton Bloom & Belle garment bag",
    ],
    specs: {
      fit: "Corseted Bodice with Voluminous A-Line Skirt",
      length: "Floor Length (58 inches in Size M)",
      neckline: "Sweetheart Neckline with Wide Straps",
      sleeveLength: "Sleeveless",
      transparency: "Opaque (Fully lined)",
      origin: "Ethically crafted in India",
    },
  },
  {
    id: "bb-coord-002",
    slug: "botanical-resort-linen-coord-set",
    name: "Botanical Resort Linen-Slub Co-ord Set",
    subtitle: "Airy relaxed two-piece set featuring signature hand-drawn botanical vines",
    category: "co-ord-sets",
    categoryLabel: "Co-ord Sets",
    subcategory: "Lounge & Resort",
    price: 2299,
    currency: "₹",
    inStock: true,
    featured: false,
    bestseller: false,
    isNewArrival: true,
    rating: 4.8,
    reviewCount: 17,
    images: [
      {
        src: "/editorial/festive-lookbook.png",
        alt: "Bloom & Belle festive and resort lookbook featuring botanical co-ord set",
        label: "Lookbook Feature",
      },
    ],
    fabric: "100% Breathable Cotton-Linen Slub",
    fabricDetails: [
      "Natural slub texture provides superior air circulation on warm days",
      "Eco-friendly botanical block-print artwork designed exclusively for Bloom & Belle",
      "Elasticated waistband on trousers with internal drawstring and deep side pockets",
    ],
    colors: [
      { name: "Sage & Ivory Floral", hex: "#98A892" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Effortless elegance in one coordinated package. The Botanical Resort Set features a notched camp-collar shirt with relaxed drop shoulders and matching wide-leg trousers. Whether packing for a coastal holiday or working from home, it delivers polished comfort with zero styling effort.",
    stylingTips:
      "Wear as a matching monochrome statement with woven mules, or break the set by pairing the shirt over jeans and the trousers with a fitted white cami.",
    bodyShapeMatch: ["Pear", "Hourglass", "Rectangle"],
    careInstructions: [
      "Machine wash cold gentle",
      "Do not bleach; line dry in shade",
      "Warm iron while slightly damp for crisp linen finish",
    ],
    specs: {
      fit: "Relaxed Easy Fit",
      length: "Shirt: 25 inches; Trouser Inseam: 28 inches",
      neckline: "Camp Notch Collar",
      sleeveLength: "Half Sleeves with Cuffed Hem",
      transparency: "Opaque",
      origin: "Crafted in India",
    },
  },
];

export const CATEGORIES = [
  {
    slug: "western-wear",
    name: "Western Wear",
    tagline: "Contemporary silhouettes designed for everyday elegance and smart styling",
    description:
      "From tailored linen blazers and crisp floral shirts to fluid draped satin midi dresses, our western wear is thoughtfully crafted for college, office, weekend cafes, and dinner dates.",
    heroImage: "/editorial/western-hero.png",
    count: PRODUCTS.filter((p) => p.category === "western-wear").length,
    features: ["Breathable Cotton & Linen Blends", "Wrinkle-Resistant Finishes", "Versatile Day-to-Night Styling"],
  },
  {
    slug: "ethnic-wear",
    name: "Ethnic Wear",
    tagline: "Modern Indian heritage with handcrafted zari embroidery and pure cotton comfort",
    description:
      "Celebrate Indian festivals, office ethnic days, and family milestones in lightweight kurtis and regal anarkali suit sets that combine timeless grace with effortless all-day ease.",
    heroImage: "/editorial/ethnic-hero.png",
    count: PRODUCTS.filter((p) => p.category === "ethnic-wear").length,
    features: ["100% Combed Non-Sheer Cotton", "Delicate Zari & Threadwork", "Full Mulmul Lining for Comfort"],
  },
  {
    slug: "co-ord-sets",
    name: "Co-ord Sets",
    tagline: "Coordinated perfection: zero morning styling stress, maximum polish",
    description:
      "Our matching two-piece sets solve the 'what do I wear today?' dilemma in seconds. Tailored blazer sets and relaxed resort linen combos built to be worn together or mixed endlessly.",
    heroImage: "/editorial/capsule-essentials.png",
    count: PRODUCTS.filter((p) => p.category === "co-ord-sets").length,
    features: ["Two-Piece Coordinated Styling", "Mix & Match Compatibility", "Tailored & Relaxed Silhouettes"],
  },
  {
    slug: "jewellery",
    name: "Jewellery & Accents",
    tagline: "Coming Soon: Delicate 18k gold-plated botanical line jewelry",
    description:
      "Designed to complement our necklines and color palettes. Our upcoming demi-fine jewelry line will feature signature monogram pendants, gold hoop earrings, and delicate floral bangles.",
    heroImage: "/editorial/brand-opening.png",
    count: 0,
    isTeaser: true,
    features: ["18k Champagne Gold PVD Plating", "Hypoallergenic & Anti-Tarnish", "Designed to Match Bloom & Belle Necklines"],
  },
];
