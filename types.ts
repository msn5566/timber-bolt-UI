export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  priceRange: string;
  specifications: { [key: string]: string };
  sizes: string[];
  brochureText: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}
