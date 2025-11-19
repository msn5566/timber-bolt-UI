import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Dealer Enquiry', path: '/dealer-enquiry' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-secondary font-semibold';
  const inactiveLinkClass = 'text-brown hover:text-secondary transition-colors';

  return (
    <header className="bg-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-brown text-2xl font-bold flex items-center">
              <Icon icon="logo" className="h-8 w-8 mr-2 text-primary" />
              The Plywood Emporium
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-secondary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <Icon icon="close" className="h-6 w-6" /> : <Icon icon="menu" className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-light border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? 'bg-primary/10 text-secondary font-semibold' : 'text-brown hover:bg-gray-200'} block px-3 py-2 rounded-md text-base font-medium`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;