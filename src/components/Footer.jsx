// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Beers', href: '/products' },
    { name: 'Brewery Tour', href: '/brewery-tour' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = {
    address: '123 Brewery Avenue, Victoria Island, Lagos, Nigeria',
    phone: '+234 (0) 800 123 4567',
    email: 'info@foodbasketbrewery.com',
    hours: 'Mon-Sat: 10AM - 10PM, Sun: 12PM - 8PM'
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FB</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Food Basket Brewery Co.</h3>
                <p className="text-amber-400 font-semibold">Premium Craft Beers Since 2012</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Crafting exceptional Nigerian beers with passion, tradition, and innovation. 
              We're committed to quality, sustainability, and celebrating Nigerian brewing culture.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Visit Us</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <span className="text-amber-500 mt-1">📍</span>
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-amber-500">📞</span>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-amber-500">✉️</span>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-500 mt-1">🕒</span>
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h5 className="text-lg font-bold mb-2">Stay Updated</h5>
              <p className="text-gray-400">Get the latest news, events, and beer releases.</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:border-amber-500 flex-1 md:w-64"
              />
              <button className="bg-amber-500 text-amber-900 px-6 py-3 rounded-r-xl font-bold hover:bg-amber-400 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>&copy; 2012 - 2024 Food Basket Brewery Co. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;