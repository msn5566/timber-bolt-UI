import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-light/80">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-light text-2xl font-bold flex items-center mb-4">
               <Icon icon="logo" className="h-8 w-8 mr-2 text-secondary" />
               The Plywood Emporium
            </Link>
            <p className="text-sm text-light/70">Your trusted partner for quality plywood, hardware, and building materials since 1995.</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-light tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/products" className="text-base text-light/70 hover:text-light">Products</Link></li>
              <li><Link to="/about" className="text-base text-light/70 hover:text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-base text-light/70 hover:text-light">Contact</Link></li>
               <li><Link to="/gallery" className="text-base text-light/70 hover:text-light">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-light tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <Icon icon="location" className="flex-shrink-0 h-5 w-5 text-secondary mt-1"/>
                <span className="ml-3 text-base text-light/70">456 Timber Lane, Millville, Forest State 54321</span>
              </li>
              <li className="flex items-center">
                <Icon icon="phone" className="flex-shrink-0 h-5 w-5 text-secondary"/>
                <span className="ml-3 text-base text-light/70">(555) 123-9876</span>
              </li>
              <li className="flex items-center">
                <Icon icon="email" className="flex-shrink-0 h-5 w-5 text-secondary"/>
                <span className="ml-3 text-base text-light/70">contact@plywoodemporium.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-light tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              <a href="#" className="text-light/70 hover:text-light"><Icon icon="facebook" className="h-6 w-6" /></a>
              <a href="#" className="text-light/70 hover:text-light"><Icon icon="instagram" className="h-6 w-6" /></a>
              <a href="#" className="text-light/70 hover:text-light"><Icon icon="twitter" className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-light/20 pt-8 text-center">
          <p className="text-base text-light/70">&copy; {new Date().getFullYear()} The Plywood Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;