
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import Icon from '../components/Icon';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <Link to="/products" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-blue-800">
            Back to Products
        </Link>
      </div>
    );
  }

  const handleDownloadBrochure = () => {
    const element = document.createElement("a");
    const file = new Blob([product.brochureText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${product.name.replace(/\s+/g, '-')}-Brochure.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
            {/* Simple gallery, could be expanded with thumbnails */}
          </div>
          
          {/* Product Info */}
          <div>
            <span className="text-sm font-semibold text-secondary uppercase">{product.category}</span>
            <h1 className="text-4xl font-extrabold text-dark mt-2">{product.name}</h1>
            <p className="text-2xl font-medium text-primary mt-4">{product.priceRange}</p>
            <p className="mt-6 text-lg text-gray-600">{product.description}</p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-dark">Specifications</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key} className="flex">
                    <span className="w-32 font-semibold">{key}:</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-dark">Available Sizes</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <span key={size} className="bg-light px-3 py-1 rounded-full text-sm font-medium text-dark">{size}</span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={handleDownloadBrochure}
                className="w-full bg-secondary text-white font-bold py-3 px-8 rounded-md hover:bg-amber-600 transition-colors text-lg"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
