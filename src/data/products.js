import { getImageUrl } from '../utils/asset';

export const CATEGORIES = [
  {
    id: 'makeup',
    name: 'Makeup',
    image: getImageUrl('images/cat-makeup-hd.jpg?v=3'),
    count: '24+ Items',
    tagline: 'Glow from within',
    description: 'Luxury brushes, creamy palettes, and luminous essentials.'
  },
  {
    id: 'skincare',
    name: 'Skincare',
    image: getImageUrl('images/cat-skincare-hd.jpg?v=3'),
    count: '18+ Items',
    tagline: 'Dewy & Pure',
    description: 'Gentle cleansers, hydrating serums, and radiant moisturizers.'
  },
  {
    id: 'nails',
    name: 'Nails',
    image: getImageUrl('images/cat-nails-hd.jpg?v=3'),
    count: '32+ Items',
    tagline: 'Salon finish at home',
    description: 'Aesthetic press-on nail sets, bows, gems, and gel tips.'
  },
  {
    id: 'hair',
    name: 'Hair Accessories',
    image: getImageUrl('images/cat-hair-hd.jpg?v=3'),
    count: '28+ Items',
    tagline: 'Effortlessly chic',
    description: 'Korean style pastel claw clips, satin scrunchies, and bows.'
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    image: getImageUrl('images/cat-jewelry-hd.jpg?v=3'),
    count: '19+ Items',
    tagline: 'Timeless sparkle',
    description: 'Dainty gold chokers, pearl drop earrings, and charms.'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: getImageUrl('images/cat-accessories-hd.jpg?v=3'),
    count: '15+ Items',
    tagline: 'Everyday must-haves',
    description: 'Ultra-soft blending sponges, cosmetic pouches, and mirrors.'
  }
];

export const PRODUCTS = [
  {
    id: 'nails-bow-heart',
    name: 'Cute Bow & Heart Press On Nails (24Pcs)',
    category: 'nails',
    price: 499,
    originalPrice: 799,
    discount: '-38%',
    image: getImageUrl('images/prod-nails-hd.jpg?v=3'),
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
    price: 349,
    originalPrice: 599,
    discount: '-42%',
    image: getImageUrl('images/prod-clips-hd.jpg?v=3'),
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
    price: 899,
    originalPrice: 1299,
    discount: '-30%',
    image: getImageUrl('images/prod-gloss-hd.jpg?v=3'),
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
    price: 299,
    originalPrice: 499,
    discount: '-40%',
    image: getImageUrl('images/prod-sponge-hd.jpg?v=3'),
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
    price: 999,
    originalPrice: 1499,
    discount: '-33%',
    image: getImageUrl('images/cat-skincare-hd.jpg?v=3'),
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
    price: 699,
    originalPrice: 999,
    discount: '-30%',
    image: getImageUrl('images/cat-jewelry-hd.jpg?v=3'),
    rating: 4.8,
    reviews: 115,
    badge: 'Hot',
    description: 'Delicate layered butterfly and star pendant choker dipped in 18K gold. Waterproof, hypoallergenic, and guaranteed not to turn skin green.',
    features: ['18K PVD gold plating', 'Adjustable 38cm + 5cm extender', 'Tarnish-resistant & lead-free', 'Comes in pink gift pouch'],
    inStock: true
  }
];

export const STORE_INFO = {
  name: 'Arina Beauty Looks',
  brandShort: 'Arina Beauty Looks',
  tagline: 'Beauty • Style • You',
  slogan: 'Your Beauty Our Priority ♡',
  googleMapsUrl: 'https://maps.app.goo.gl/VqQCfKcrwQY2TKVL8',
  instagramUrl: 'https://www.instagram.com/llll_rakhi_llll?srtk=MTF4ZnR6azE2ODJzdA==',
  instagramHandle: '@llll_rakhi_llll',
  phone: '+91 98765 43210',
  email: 'hello@arinabeautylooks.com',
  hours: 'Mon - Sun: 10:00 AM – 9:00 PM',
  promoCode: 'WELCOME10',
  discountText: '10% OFF Your First Order',
  freeShippingThreshold: 999,
  currency: '₹'
};
