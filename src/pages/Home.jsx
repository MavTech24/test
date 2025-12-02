// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Your brands data
  const brands = [
    {
      name: "Zeva",
      type: "Premium Lager",
      description: "Crisp, refreshing lager with a smooth finish",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      abv: "5.0%",
      price: "₦1,800"
    },
    {
      name: "Oyi Bitters",
      type: "Herbal Bitters",
      description: "Traditional herbal bitters with authentic Nigerian roots",
      color: "from-green-500 to-green-700",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      abv: "4.5%",
      price: "₦2,200"
    },
    {
      name: "Cola",
      type: "Malt Drink",
      description: "Classic cola flavor with premium malt quality",
      color: "from-red-500 to-red-700",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
      abv: "0.0%",
      price: "₦1,500"
    },
    {
      name: "Orange",
      type: "Fruit Malt",
      description: "Zesty orange flavor with natural fruit extracts",
      color: "from-orange-500 to-orange-700",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      abv: "0.0%",
      price: "₦1,500"
    },
    {
      name: "Energy Drink",
      type: "Energy Boost",
      description: "Revitalizing energy drink with essential vitamins",
      color: "from-yellow-500 to-yellow-600",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      abv: "0.0%",
      price: "₦2,000"
    },
    {
      name: "Lime Variants",
      type: "Citrus Range",
      description: "Refreshing lime flavors in various formulations",
      color: "from-lime-500 to-lime-600",
      textColor: "text-lime-600",
      bgColor: "bg-lime-50",
      abv: "4.2%",
      price: "₦1,900"
    }
  ];

  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Restaurant Owner, Lagos",
      content: "Food Basket Brewery products have transformed our beverage offerings. The quality is exceptional and our customers keep coming back for more!",
      rating: 5
    },
    {
      name: "Chinwe Okoro",
      role: "Hotel Manager, Abuja",
      content: "We've been serving Zeva and Oyi Bitters for 3 years now. The consistency and quality are unmatched in the Nigerian market.",
      rating: 5
    },
    {
      name: "Emeka Nwosu",
      role: "Distributor, Port Harcourt",
      content: "The entire product range from Food Basket Brewery moves quickly. Great packaging, better taste, and excellent customer support.",
      rating: 4
    },
    {
      name: "Funke Adebayo",
      role: "Event Planner, Ibadan",
      content: "Our clients love the variety. From Zeva for celebrations to the malt drinks for family events - there's something for everyone.",
      rating: 5
    }
  ];

  const stats = [
    { number: '12+', label: 'Years Excellence' },
    { number: '50+', label: 'Product Variants' },
    { number: '25+', label: 'States Covered' },
    { number: '1M+', label: 'Happy Customers' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="w-full min-h-screen pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="container-custom text-center text-white relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-6 py-2 rounded-full font-bold text-sm mb-8 tracking-wider shadow-lg animate-pulse-slow">
              🏆 NIGERIA'S PREMIUM BEVERAGE COMPANY
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              Food Basket
              <span className="block text-yellow-400 mt-2 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
                Brewery Co.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Crafting Nigeria's favorite beverages since 2012. From premium beers to refreshing malt drinks, 
              we bring quality and taste to every bottle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center space-x-2"
              >
                <span>Explore Brands</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/brewery-tour"
                className="border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Book Tour</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm border-t border-blue-500/30">
          <div className="container-custom py-4 sm:py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Showcase Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Premium Brands
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our diverse range of beverages, each crafted with precision and passion for the Nigerian market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
              >
                {/* Brand Header */}
                <div className={`h-32 bg-gradient-to-r ${brand.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                        <span className="text-white font-bold text-xl">{brand.name.charAt(0)}</span>
                      </div>
                      <p className="text-sm opacity-90 font-semibold">PREMIUM QUALITY</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{brand.name}</h3>
                      <p className={`font-semibold ${brand.textColor}`}>{brand.type}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${brand.bgColor} ${brand.textColor}`}>
                      {brand.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{brand.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="font-semibold">ABV: {brand.abv}</span>
                    <span className="font-semibold">Made in Nigeria</span>
                  </div>
                  
                  <button className={`w-full ${brand.bgColor} ${brand.textColor} py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <span>Order Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers across Nigeria who trust Food Basket Brewery for quality beverages.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 relative">
              {/* Animated testimonial content */}
              <div key={currentTestimonial} className="animate-fade-in-up">
                <div className="text-yellow-400 text-2xl mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="text-right">
                  <p className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              {/* Testimonial Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Quality?
          </h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join the Food Basket Brewery family and discover why we're Nigeria's preferred beverage choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Become a Distributor
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;