import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import Icon from './Icon';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-light rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 hover:shadow-xl hover:border-secondary">
      <img className="w-full h-56 object-cover" src={product.image} alt={product.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brown mb-2">{product.name}</h3>
        <p className="text-dark text-sm mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-semibold text-primary">{product.priceRange}</span>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center px-4 py-2 bg-secondary text-light text-sm font-bold rounded-lg hover:brightness-105 transition-transform hover:scale-105"
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