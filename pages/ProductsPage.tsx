
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (location.state?.filter) {
      setActiveFilter(location.state.filter);
    }
  }, [location.state]);

  const filteredProducts = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === activeFilter);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-dark">Our Products</h1>
          <p className="mt-4 text-lg text-gray-600">Explore our extensive collection of high-quality materials.</p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/4 lg:w-1/5 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveFilter('All')} 
                  className={`w-full text-left p-2 rounded ${activeFilter === 'All' ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}
                >
                  All Products
                </button>
              </li>
              {CATEGORIES.map(category => (
                <li key={category.id}>
                  <button 
                    onClick={() => setActiveFilter(category.name)} 
                    className={`w-full text-left p-2 rounded ${activeFilter === category.name ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          
          {/* Product Grid */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                 <h3 className="text-2xl font-semibold text-dark">No Products Found</h3>
                 <p className="text-gray-600 mt-2">There are no products matching the selected category.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
