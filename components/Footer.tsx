
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-white text-2xl font-bold flex items-center mb-4">
               <Icon icon="logo" className="h-8 w-8 mr-2 text-secondary" />
               Timber & Bolt
            </Link>
            <p className="text-sm text-gray-400">Your trusted partner for quality plywood, hardware, and building materials since 1995.</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/products" className="text-base text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/about" className="text-base text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <Icon icon="location" className="flex-shrink-0 h-5 w-5 text-secondary mt-1"/>
                <span className="ml-3 text-base text-gray-400">123 Industrial Way, Suite 45, Buildtown, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Icon icon="phone" className="flex-shrink-0 h-5 w-5 text-secondary"/>
                <span className="ml-3 text-base text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Icon icon="email" className="flex-shrink-0 h-5 w-5 text-secondary"/>
                <span className="ml-3 text-base text-gray-400">sales@timberandbolt.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              <a href="#" className="text-gray-400 hover:text-white"><Icon icon="facebook" className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Icon icon="instagram" className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Icon icon="twitter" className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Timber & Bolt Hardware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
