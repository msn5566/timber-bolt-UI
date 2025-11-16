
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import Icon from './Icon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <img className="w-full h-56 object-cover" src={product.image} alt={product.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-semibold text-primary">{product.priceRange}</span>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center px-4 py-2 bg-secondary text-white text-sm font-medium rounded-md hover:bg-amber-600 transition-colors"
          >
            View Details
            <Icon icon="chevronRight" className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
