// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Brands', href: '/products' },
    { name: 'Brewery Tour', href: '/brewery-tour' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom">
  <div className="flex justify-between items-center py-2 lg:py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 lg:space-x-3 z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm lg:text-base">FB</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg lg:text-2xl font-bold transition-colors ${
                isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white'
              }`}>
                Food Basket
              </h1>
              <p className={`text-xs lg:text-sm font-semibold transition-colors ${
                isScrolled || isMenuOpen ? 'text-blue-600' : 'text-blue-200'
              }`}>
                Brewery Co.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm 2xl:text-base ${
                  location.pathname === item.href
                    ? 'bg-blue-600 text-white shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/brewery-tour"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`xl:hidden flex flex-col space-y-1.5 p-2 rounded-lg transition-colors z-50 ${
              isScrolled || isMenuOpen ? 'bg-gray-100' : 'bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 transition-all ${
              isMenuOpen ? 'rotate-45 translate-y-2 bg-gray-800' : 
              isScrolled ? 'bg-gray-800' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 transition-all ${
              isMenuOpen ? 'opacity-0 bg-gray-800' : 
              isScrolled ? 'bg-gray-800' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 transition-all ${
              isMenuOpen ? '-rotate-45 -translate-y-2 bg-gray-800' : 
              isScrolled ? 'bg-gray-800' : 'bg-white'
            }`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-2xl font-semibold transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-blue-600 scale-110'
                    : 'text-gray-700 hover:text-blue-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/brewery-tour"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 mt-8"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Brewery Tour
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;