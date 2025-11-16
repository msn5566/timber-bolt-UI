import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS, TESTIMONIALS, BRANDS } from '../constants';
import type { Category, Product, Testimonial } from '../types';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';

const Hero: React.FC = () => (
  <div className="relative bg-dark text-white">
    <div className="absolute inset-0">
      <img src="https://picsum.photos/seed/hero/1920/1080" alt="Workshop background" className="w-full h-full object-cover opacity-30" />
    </div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Quality Materials for Every Project</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">Your one-stop shop for premium plywood, hardware, and building supplies.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/products" className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded-md hover:bg-amber-600 transition-colors text-lg">
          Explore Products
        </Link>
        <Link to="/contact" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-dark transition-colors text-lg">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => (
  <div className="py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-dark">Why Choose Timber & Bolt?</h2>
        <p className="mt-4 text-lg text-gray-600">We are committed to providing the best products and services.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
            <Icon icon="check" className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-lg font-medium text-dark">Unmatched Quality</h3>
          <p className="mt-2 text-base text-gray-600">We source only the finest materials to ensure durability and performance for your projects.</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
             <Icon icon="logo" className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-lg font-medium text-dark">Expert Advice</h3>
          <p className="mt-2 text-base text-gray-600">Our knowledgeable team is always ready to help you choose the right products for your needs.</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
            <Icon icon="phone" className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-lg font-medium text-dark">Reliable Service</h3>
          <p className="mt-2 text-base text-gray-600">We pride ourselves on timely delivery and excellent customer support, from start to finish.</p>
        </div>
      </div>
    </div>
  </div>
);


const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <Link to="/products" state={{ filter: category.name }} className="group relative block rounded-lg overflow-hidden shadow-lg">
        <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white text-center p-4">{category.name}</h3>
        </div>
    </Link>
);


const ProductCategories: React.FC = () => (
  <div className="py-16 bg-light">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-dark">Our Product Categories</h2>
        <p className="mt-4 text-lg text-gray-600">Find everything you need in one place.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map(cat => <CategoryCard key={cat.id} category={cat} />)}
      </div>
    </div>
  </div>
);


const FeaturedProducts: React.FC = () => {
    const featured = PRODUCTS.filter(p => p.featured);
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-dark">Featured Products</h2>
                    <p className="mt-4 text-lg text-gray-600">Check out our best-selling and top-rated items.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    );
}

const OurBrands: React.FC = () => (
  <div className="py-16 bg-light">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-dark">Our Trusted Brands</h2>
        <p className="mt-4 text-lg text-gray-600">We partner with the best in the industry to bring you top-quality products.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
        {BRANDS.map(brand => (
          <div key={brand.id} title={brand.name}>
            <img src={brand.logo} alt={brand.name} className="h-12 filter grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
        nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">What Our Customers Say</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-blue-900 p-8 rounded-lg shadow-xl text-center">
            <p className="text-gray-300 text-lg italic h-24">"{activeTestimonial.quote}"</p>
            <div className="mt-6 flex items-center justify-center">
              <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="h-12 w-12 rounded-full" />
              <div className="ml-4 text-left">
                <p className="font-bold text-white">{activeTestimonial.name}</p>
                <p className="text-secondary">{activeTestimonial.role}</p>
              </div>
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 md:-left-16 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <Icon icon="chevronLeft" className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 md:-right-16 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <Icon icon="chevronRight" className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactCTA: React.FC = () => (
    <div className="bg-light">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-dark">Have a project in mind?</h2>
            <p className="mt-4 text-lg text-gray-600">Let's build something great together. Get in touch with our experts today.</p>
            <Link to="/contact" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-blue-800 transition-colors text-lg">
                Get a Quote
            </Link>
        </div>
    </div>
)

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ProductCategories />
      <FeaturedProducts />
      <OurBrands />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;
