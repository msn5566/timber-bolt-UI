import type { Product, Category, Testimonial, Brand, GalleryImage } from './types';

export const CATEGORIES: Category[] = [
  { id: 'plywood', name: 'Plywood', image: 'https://picsum.photos/seed/plywood/600/400', description: 'High-quality plywood for all construction needs.' },
  { id: 'laminates', name: 'Laminates', image: 'https://picsum.photos/seed/laminates/600/400', description: 'Durable and stylish laminates in various finishes.' },
  { id: 'hardware', name: 'Hardware', image: 'https://picsum.photos/seed/hardware/600/400', description: 'A wide range of hardware fittings and accessories.' },
  { id: 'doors', name: 'Doors', image: 'https://picsum.photos/seed/doors/600/400', description: 'Strong and elegant doors for every room.' },
  { id: 'tools', name: 'Tools', image: 'https://picsum.photos/seed/tools/600/400', description: 'Professional-grade tools for any project.' },
  { id: 'fittings', name: 'Kitchen & Wardrobe Fittings', image: 'https://picsum.photos/seed/fittings/600/400', description: 'Smart solutions for modern living spaces.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-01',
    name: 'Marine Grade Plywood',
    category: 'Plywood',
    image: 'https://picsum.photos/seed/marineply/800/600',
    description: 'Superior waterproof plywood, ideal for kitchens, bathrooms, and marine applications.',
    priceRange: '$50 - $120',
    specifications: { 'Grade': 'BWP (Boiling Water Proof)', 'Thickness': '6mm, 12mm, 18mm', 'Wood Type': 'Gurjan' },
    sizes: ['8x4 ft', '7x4 ft', '6x4 ft'],
    brochureText: 'Product: Marine Grade Plywood\nGrade: BWP\nDetails: Conforms to IS:710 standards. Treated for anti-termite and anti-fungus properties. Perfect for high-moisture areas.',
    featured: true,
  },
  {
    id: 'p-02',
    name: 'Commercial MR Plywood',
    category: 'Plywood',
    image: 'https://picsum.photos/seed/mrply/800/600',
    description: 'Moisture-resistant plywood for interior furniture and paneling.',
    priceRange: '$30 - $80',
    specifications: { 'Grade': 'MR (Moisture Resistant)', 'Thickness': '4mm, 6mm, 12mm, 18mm', 'Wood Type': 'Poplar, Eucalyptus' },
    sizes: ['8x4 ft', '7x4 ft'],
    brochureText: 'Product: Commercial MR Plywood\nGrade: MR\nDetails: Conforms to IS:303 standards. Ideal for home and office furniture where water exposure is minimal.',
  },
  {
    id: 'l-01',
    name: 'High Gloss Laminate Sheet',
    category: 'Laminates',
    image: 'https://picsum.photos/seed/glosslam/800/600',
    description: 'A premium laminate with a mirror-like finish for a modern look.',
    priceRange: '$25 - $60 per sheet',
    specifications: { 'Finish': 'High Gloss', 'Thickness': '1mm, 0.8mm', 'Base': 'Acrylic' },
    sizes: ['8x4 ft'],
    brochureText: 'Product: High Gloss Laminate\nFinish: 99-degree gloss\nDetails: Scratch-resistant and easy to clean. Available in a wide variety of colors and patterns.',
    featured: true,
  },
  {
    id: 'h-01',
    name: 'Stainless Steel Door Handles',
    category: 'Hardware',
    image: 'https://picsum.photos/seed/handles/800/600',
    description: 'Elegant and durable SS 304 grade door handles.',
    priceRange: '$15 - $50 per pair',
    specifications: { 'Material': 'Stainless Steel', 'Grade': 'SS 304', 'Finish': 'Matte, Polished' },
    sizes: ['6 inches', '8 inches', '12 inches'],
    brochureText: 'Product: Stainless Steel Door Handles\nMaterial: SS 304\nDetails: Corrosion-resistant, suitable for both interior and exterior doors. Includes all mounting hardware.',
    featured: true,
  },
  {
    id: 'd-01',
    name: 'Solid Wood Flush Door',
    category: 'Doors',
    image: 'https://picsum.photos/seed/flushdoor/800/600',
    description: 'A classic flush door with a solid wood core for excellent strength and insulation.',
    priceRange: '$80 - $200',
    specifications: { 'Core': 'Solid Wood Blockboard', 'Finish': 'Veneer, Laminate, or Paintable', 'Thickness': '30mm, 35mm' },
    sizes: ['80x36 inches', '80x32 inches'],
    brochureText: 'Product: Solid Wood Flush Door\nCore: 100% Pine Wood\nDetails: Seasoned and chemically treated wood for durability. Can be finished to match any interior.',
    featured: true,
  },
  {
    id: 't-01',
    name: 'Professional Power Drill',
    category: 'Tools',
    image: 'https://picsum.photos/seed/drill/800/600',
    description: 'A versatile and powerful drill for wood, metal, and masonry.',
    priceRange: '$120 - $250',
    specifications: { 'Power': '750W', 'Chuck Size': '13mm', 'Type': 'Hammer Drill' },
    sizes: ['N/A'],
    brochureText: 'Product: Professional Power Drill\nPower: 750W\nDetails: Variable speed control, reverse function, and depth gauge for precision work. Comes with a carrying case and drill bit set.',
  },
   {
    id: 'f-01',
    name: 'Soft-Close Drawer Slides',
    category: 'Fittings',
    image: 'https://picsum.photos/seed/slides/800/600',
    description: 'Telescopic drawer slides with a silent, soft-closing mechanism.',
    priceRange: '$10 - $30 per pair',
    specifications: { 'Type': 'Ball Bearing', 'Feature': 'Soft-Close', 'Load Capacity': '45kg' },
    sizes: ['12"', '16"', '20"', '24"'],
    brochureText: 'Product: Soft-Close Drawer Slides\nLoad Capacity: 45kg\nDetails: Full extension slides for easy access to drawer contents. Smooth and silent operation. Made from high-grade steel.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'John D.',
    role: 'Contractor',
    quote: "Timber & Bolt is my go-to supplier. Their plywood quality is unmatched, and the staff is always knowledgeable and helpful. They always deliver on time.",
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: 2,
    name: 'Sarah K.',
    role: 'Interior Designer',
    quote: "I love their diverse range of laminates and hardware. It allows me to bring my creative visions to life. The quality and finish are always top-notch.",
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d'
  },
  {
    id: 3,
    name: 'Mike P.',
    role: 'DIY Enthusiast',
    quote: "As a homeowner doing my own projects, I appreciate the expert advice I get here. They have all the tools and materials I need under one roof.",
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'
  },
];

export const BRANDS: Brand[] = [
  { id: 'b1', name: 'Greenlam', logo: 'https://via.placeholder.com/150x60/cccccc/000000?text=Greenlam' },
  { id: 'b2', name: 'Hettich', logo: 'https://via.placeholder.com/150x60/cccccc/000000?text=Hettich' },
  { id: 'b3', name: 'CenturyPly', logo: 'https://via.placeholder.com/150x60/cccccc/000000?text=CenturyPly' },
  { id: 'b4', name: 'Bosch', logo: 'https://via.placeholder.com/150x60/cccccc/000000?text=Bosch' },
  { id: 'b5', name: 'Dormakaba', logo: 'https://via.placeholder.com/150x60/cccccc/000000?text=Dormakaba' },
  { id: 'b6', name: 'Asian Paints', logo: 'https://via.placeholder.com/150x60/cccccc/000000?text=Asian+Paints' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/kitchen1/800/600', alt: 'Modern kitchen design', category: 'Kitchens' },
  { id: 2, src: 'https://picsum.photos/seed/wardrobe1/800/600', alt: 'Spacious wardrobe', category: 'Wardrobes' },
  { id: 3, src: 'https://picsum.photos/seed/office1/800/600', alt: 'Corporate office interior', category: 'Commercial' },
  { id: 4, src: 'https://picsum.photos/seed/door1/800/600', alt: 'Elegant wooden door', category: 'Doors' },
  { id: 5, src: 'https://picsum.photos/seed/kitchen2/800/600', alt: 'Classic kitchen cabinetry', category: 'Kitchens' },
  { id: 6, src: 'https://picsum.photos/seed/exterior1/800/600', alt: 'Exterior wall paneling', category: 'Exteriors' },
  { id: 7, src: 'https://picsum.photos/seed/wardrobe2/800/600', alt: 'Walk-in closet design', category: 'Wardrobes' },
  { id: 8, src: 'https://picsum.photos/seed/commercial2/800/600', alt: 'Retail store checkout counter', category: 'Commercial' },
];
