export const CATEGORIES = [
  {
    id: 'makeup',
    name: 'Makeup & Bridal',
    image: './images/areena-bridal-glam-sq.jpg',
    count: '24+ Looks',
    tagline: 'Glow from within',
    description: 'Signature HD bridal glam, reception looks, and luxury palettes.'
  },
  {
    id: 'skincare',
    name: 'Skincare',
    image: './images/cat-skincare.jpg',
    count: '18+ Treatments',
    tagline: 'Dewy & Pure',
    description: 'Pre-bridal facials, hydrating serums, and radiant glass skin.'
  },
  {
    id: 'nails',
    name: 'Nails & Extensions',
    image: './images/cat-nails.jpg',
    count: '32+ Styles',
    tagline: 'Salon finish at home',
    description: 'Aesthetic press-on nail sets, bows, gems, and acrylic extensions.'
  },
  {
    id: 'hair',
    name: 'Hair Styling & Accessories',
    image: './images/cat-hair.jpg',
    count: '28+ Styles',
    tagline: 'Effortlessly chic',
    description: 'Bridal floral buns, Korean style clips, and textured curls.'
  },
  {
    id: 'jewelry',
    name: 'Bridal Jewelry',
    image: './images/areena-royal-bridal-sq.jpg',
    count: '19+ Sets',
    tagline: 'Royal heritage',
    description: 'Kundan naths, royal chokers, maang tikka, and pearl haars.'
  },
  {
    id: 'accessories',
    name: 'Beauty Essentials',
    image: './images/cat-accessories.jpg',
    count: '15+ Items',
    tagline: 'Everyday must-haves',
    description: 'Ultra-soft blending sponges, cosmetic pouches, and vanity kits.'
  }
];

export const BRIDAL_PORTFOLIO = [
  {
    id: 'look-1',
    title: 'Signature HD Bridal Glam',
    subtitle: 'Nath, Maang Tikka & Glass Skin Glow',
    image: './images/areena-bridal-glam.jpg',
    category: 'Bridal Makeover',
    tag: 'Most Requested',
    features: ['Waterproof 24-hr Airbrush finish', 'Precision Winged Eyeliner', 'Soft Rose Blush & Hydrated Lips', 'Floral Hair Adornment']
  },
  {
    id: 'look-2',
    title: 'Royal Heritage Velvet Bridal',
    subtitle: 'Classic Maroon & Gold Embroidery',
    image: './images/areena-royal-bridal.jpg',
    category: 'Traditional Bridal',
    tag: 'Heritage Luxe',
    features: ['Royal Matha Patti & Double Dupatta Draping', 'Heavy Kundan & Pearl Haar Setting', 'Smokey Kohl Eye Definition', 'Long-lasting Flawless Base']
  },
  {
    id: 'look-3',
    title: 'Champagne Gold Reception Glam',
    subtitle: 'Sparkling Cocktail & Sangeet Look',
    image: './images/areena-reception-gold.jpg',
    category: 'Reception & Party',
    tag: 'Trending 2026',
    features: ['Dewy Luminous Shimmer Base', 'Layered Diamond-style Choker Matching', 'Soft Glam Beach Waves / Sleek Hair', 'Feather & Tassel Outfit Complement']
  }
];

export const PRODUCTS = [
  {
    id: 'nails-bow-heart',
    name: 'Cute Bow & Heart Press On Nails (24Pcs)',
    category: 'nails',
    price: 8.99,
    originalPrice: 11.25,
    discount: '-20%',
    image: './images/prod-nails.jpg',
    rating: 4.9,
    reviews: 142,
    badge: 'Best Seller',
    description: 'Handcrafted salon-quality press-on nails featuring cute 3D bows, blush heart gradients, and pearl accents. Includes prep kit, file, and non-damaging adhesive tabs.',
    features: ['24 pieces in 12 universal sizes', 'Reusable up to 5 times', 'Waterproof 14-day wear', 'Zero UV lamp required'],
    inStock: true
  },
  {
    id: 'hair-clips-set',
    name: 'Korean Style Hair Clips Set (10Pcs)',
    category: 'hair',
    price: 6.99,
    originalPrice: 8.25,
    discount: '-15%',
    image: './images/prod-clips.jpg',
    rating: 4.8,
    reviews: 98,
    badge: 'Trending',
    description: 'Super sweet pastel bow and tweed hair clips inspired by Korean street fashion. Gentle on delicate hair strands without pulling or snagging.',
    features: ['Set of 10 coordinated pieces', 'Strong anti-slip grip', 'Soft matte & pastel textures', 'Lightweight all-day comfort'],
    inStock: true
  },
  {
    id: 'matte-lip-gloss',
    name: 'Matte Lip Gloss Set (8 Colors)',
    category: 'makeup',
    price: 12.99,
    originalPrice: 15.85,
    discount: '-18%',
    image: './images/prod-gloss.jpg',
    rating: 5.0,
    reviews: 230,
    badge: 'Popular',
    description: 'Velvety-smooth matte liquid lip collection spanning nude blushes, petal pinks, and romantic mauves. Transfer-proof formula enriched with Vitamin E and jojoba oil.',
    features: ['8 high-pigment shades', 'Non-drying 12-hour formula', 'Velvet mousse texture', 'Sweet vanilla berry aroma'],
    inStock: true
  },
  {
    id: 'makeup-sponge-set',
    name: 'Makeup Sponge Set (4Pcs)',
    category: 'accessories',
    price: 5.99,
    originalPrice: 6.80,
    discount: '-12%',
    image: './images/prod-sponge.jpg',
    rating: 4.9,
    reviews: 84,
    badge: 'Essential',
    description: 'Air-cushion marshmallow blending sponges with convenient travel case. Expands when damp for seamless streak-free foundation, concealer, and contour blending.',
    features: ['4 unique precision shapes', 'Hypoallergenic latex-free foam', 'Includes ventilated case', 'Minimal product absorption'],
    inStock: true
  },
  {
    id: 'glow-serum-duo',
    name: 'Rosewater & Hyaluronic Dew Glow Drops',
    category: 'skincare',
    price: 14.50,
    originalPrice: 18.00,
    discount: '-19%',
    image: './images/cat-skincare.jpg',
    rating: 4.9,
    reviews: 67,
    badge: 'New',
    description: 'Hydrating lightweight serum for the ultimate glass-skin radiance. Soothes redness, tightens pores, and plumps tired skin with pure damask rose extract.',
    features: ['Instant hydration boost', 'Fast-absorbing glass skin finish', 'Non-comedogenic & vegan', 'Pairs beautifully with makeup'],
    inStock: true
  },
  {
    id: 'dainty-gold-choker',
    name: '18K Gold Plated Butterfly Choker Chain',
    category: 'jewelry',
    price: 13.99,
    originalPrice: 17.50,
    discount: '-20%',
    image: './images/cat-jewelry.jpg',
    rating: 4.8,
    reviews: 115,
    badge: 'Hot',
    description: 'Delicate layered butterfly and star pendant choker dipped in 18K gold. Waterproof, hypoallergenic, and guaranteed not to turn skin green.',
    features: ['18K PVD gold plating', 'Adjustable 38cm + 5cm extender', 'Tarnish-resistant & lead-free', 'Comes in pink gift pouch'],
    inStock: true
  }
];

export const STORE_INFO = {
  name: 'Areena Beauty Looks',
  brandShort: 'Areena',
  tagline: 'Bridal Makeover Studio & Salon',
  slogan: 'Your Beauty Our Priority ♡',
  googleMapsUrl: 'https://maps.app.goo.gl/VqQCfKcrwQY2TKVL8',
  instagramUrl: 'https://www.instagram.com/llll_rakhi_llll?srtk=MTF4ZnR6azE2ODJzdA==',
  instagramHandle: '@llll_rakhi_llll',
  phone: '+91 98765 43210',
  email: 'contact@areenabeautylooks.com',
  hours: 'Mon - Sun: 10:00 AM – 9:00 PM',
  award: 'Excellence in Bridal Makeover & Beauty Innovation 2024 (Felicitated by Sneha Ullal)',
  promoCode: 'WELCOME10',
  discountText: '10% OFF Your First Service / Order',
  freeShippingThreshold: 50
};
