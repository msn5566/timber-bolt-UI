import type { Product, Category, Testimonial, Brand, GalleryImage } from './types';

export const CATEGORIES: Category[] = [
  { id: 'plywood', name: 'Plywood', image: 'https://images.unsplash.com/photo-1566492323637-c54a5a542b47?q=80&w=800', description: 'High-quality plywood for all construction needs.' },
  { id: 'laminates', name: 'Laminates', image: 'https://images.unsplash.com/photo-1599819864273-6056b57e7502?q=80&w=800', description: 'Durable and stylish laminates in various finishes.' },
  { id: 'hardware', name: 'Hardware', image: 'https://images.unsplash.com/photo-1633353528434-3c66f4a30034?q=80&w=800', description: 'A wide range of hardware fittings and accessories.' },
  { id: 'doors', name: 'Doors', image: 'https://images.unsplash.com/photo-1521783973741-6287c8f948f7?q=80&w=800', description: 'Strong and elegant doors for every room.' },
  { id: 'tools', name: 'Tools', image: 'https://images.unsplash.com/photo-1518615456667-6d1a087f5a34?q=80&w=800', description: 'Professional-grade tools for any project.' },
  { id: 'fittings', name: 'Kitchen & Wardrobe Fittings', image: 'https://images.unsplash.com/photo-1616763449377-6e6062a4a2a2?q=80&w=800', description: 'Smart solutions for modern living spaces.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-01',
    name: 'Marine Grade Plywood',
    category: 'Plywood',
    image: 'https://images.unsplash.com/photo-1566492323637-c54a5a542b47?q=80&w=800',
    description: 'Superior waterproof plywood, ideal for kitchens, bathrooms, and marine applications.',
    priceRange: '$50 - $120',
    specifications: { 'Grade': 'BWP (Boiling Water Proof)', 'Thickness': '6mm, 12mm, 18mm', 'Wood Type': 'Gurjan' },
    sizes: ['8x4 ft', '7x4 ft', '6x4 ft'],
    brochureText: 'Product: Marine Grade Plywood\nGrade: BWP\nDetails: Conforms to IS:710 standards. Treated for anti-termite and anti-fungus properties. Perfect for high-moisture areas.',
    featured: true,
  },
  {
    id: 'l-01',
    name: 'Textured Laminate Sheet',
    category: 'Laminates',
    image: 'https://images.unsplash.com/photo-1599819864273-6056b57e7502?q=80&w=800',
    description: 'A premium laminate with a rich, textured finish for a sophisticated, natural look.',
    priceRange: '$35 - $70 per sheet',
    specifications: { 'Finish': 'Textured Matte', 'Thickness': '1mm, 1.2mm', 'Base': 'Paper-based' },
    sizes: ['8x4 ft'],
    brochureText: 'Product: Textured Laminate Sheet\nFinish: Wood Grain Texture\nDetails: Scratch-resistant and easy to clean. Available in a wide variety of wood patterns.',
    featured: true,
  },
  {
    id: 'h-01',
    name: 'Cabinet Handles & Knobs',
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1633353528434-3c66f4a30034?q=80&w=800',
    description: 'Elegant and durable cabinet hardware in various finishes like matte black, brushed brass, and chrome.',
    priceRange: '$5 - $25 per piece',
    specifications: { 'Material': 'Brass, Stainless Steel', 'Finish': 'Matte, Polished, Brushed' },
    sizes: ['3 inches', '5 inches', '12 inches'],
    brochureText: 'Product: Cabinet Hardware Collection\nMaterial: Solid Brass\nDetails: Corrosion-resistant, includes all mounting hardware for easy installation.',
    featured: true,
  },
  {
    id: 'd-01',
    name: 'Solid Oak Panel Door',
    category: 'Doors',
    image: 'https://images.unsplash.com/photo-1521783973741-6287c8f948f7?q=80&w=800',
    description: 'A classic panel door with a solid oak construction for excellent strength and a timeless look.',
    priceRange: '$180 - $400',
    specifications: { 'Core': 'Solid Oak', 'Finish': 'Natural, Stained, or Paintable', 'Thickness': '35mm, 40mm' },
    sizes: ['80x36 inches', '80x32 inches'],
    brochureText: 'Product: Solid Oak Panel Door\nCore: 100% Seasoned Oak\nDetails: Kiln-dried and chemically treated wood for durability. Can be finished to match any interior.',
    featured: true,
  },
    {
    id: 'p-02',
    name: 'Commercial MR Plywood',
    category: 'Plywood',
    image: 'https://images.unsplash.com/photo-1513031405115-a2798b83a544?q=80&w=800',
    description: 'Moisture-resistant plywood for interior furniture and paneling.',
    priceRange: '$30 - $80',
    specifications: { 'Grade': 'MR (Moisture Resistant)', 'Thickness': '4mm, 6mm, 12mm, 18mm', 'Wood Type': 'Poplar, Eucalyptus' },
    sizes: ['8x4 ft', '7x4 ft'],
    brochureText: 'Product: Commercial MR Plywood\nGrade: MR\nDetails: Conforms to IS:303 standards. Ideal for home and office furniture where water exposure is minimal.',
  },
  {
    id: 't-01',
    name: 'Cordless Drill Driver Kit',
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1627932839954-5830954f9a56?q=80&w=800',
    description: 'A versatile and powerful cordless drill for wood, metal, and plastic.',
    priceRange: '$150 - $300',
    specifications: { 'Power': '20V MAX', 'Chuck Size': '1/2 inch', 'Type': 'Drill/Driver' },
    sizes: ['N/A'],
    brochureText: 'Product: Cordless Drill Driver Kit\nPower: 20V MAX Lithium-Ion\nDetails: Variable speed trigger, built-in LED light. Includes two batteries, charger, and carrying case.',
  },
   {
    id: 'f-01',
    name: 'Soft-Close Drawer Slides',
    category: 'Fittings',
    image: 'https://images.unsplash.com/photo-1616763449377-6e6062a4a2a2?q=80&w=800',
    description: 'Telescopic drawer slides with a silent, soft-closing mechanism.',
    priceRange: '$10 - $30 per pair',
    specifications: { 'Type': 'Ball Bearing', 'Feature': 'Soft-Close', 'Load Capacity': '45kg' },
    sizes: ['12"', '16"', '20"', '24"'],
    brochureText: 'Product: Soft-Close Drawer Slides\nLoad Capacity: 45kg\nDetails: Full extension slides for easy access to drawer contents. Smooth and silent operation. Made from high-grade steel.',
  },
  {
    id: 'h-02',
    name: 'Heavy Duty Hinges',
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1584377334015-3b95a0670f4a?q=80&w=800',
    description: 'Robust steel hinges for main doors and heavy cabinets, ensuring long-lasting performance.',
    priceRange: '$8 - $20 per pair',
    specifications: { 'Material': 'Stainless Steel', 'Type': 'Butt Hinge', 'Load Capacity': '80kg' },
    sizes: ['4 inches', '5 inches'],
    brochureText: 'Product: Heavy Duty Hinges\nMaterial: SS 304\nDetails: Corrosion-resistant with smooth, noise-free operation. Includes matching screws.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'John D.',
    role: 'Contractor',
    quote: "The Plywood Emporium is my go-to supplier. Their plywood quality is unmatched, and the staff is always knowledgeable and helpful. They always deliver on time.",
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
    { id: 'b1', name: 'Transistor', logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg' },
    { id: 'b2', name: 'Reform', logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg' },
    { id: 'b3', name: 'Tuple', logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg' },
    { id: 'b4', name: 'SavvyCal', logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg' },
    { id: 'b5', name: 'Statamic', logo: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg' },
    { id: 'b6', name: 'Statickit', logo: 'https://tailwindui.com/img/logos/158x48/statickit-logo-gray-900.svg' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800', alt: 'Modern kitchen with wooden cabinets', category: 'Kitchens' },
  { id: 2, src: 'https://images.unsplash.com/photo-1558997519-83ea7192d8a9?q=80&w=800', alt: 'Spacious wooden wardrobe with custom fittings', category: 'Wardrobes' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800', alt: 'Bright and airy living room with wood paneling', category: 'Living Rooms' },
  { id: 4, src: 'https://images.unsplash.com/photo-1542898748-0d1a4475a8a6?q=80&w=800', alt: 'Professional office space with wood accents', category: 'Commercial' },
  { id: 5, src: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=800', alt: 'Elegant wooden door entrance', category: 'Doors' },
  { id: 6, src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800', alt: 'Custom bedroom furniture', category: 'Wardrobes' },
  { id: 7, src: 'https://images.unsplash.com/photo-1588854337236-6889d631f1ac?q=80&w=800', alt: 'Sleek kitchen island with laminate countertop', category: 'Kitchens' },
  { id: 8, src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800', alt: 'Cozy living room setup', category: 'Living Rooms' },
];