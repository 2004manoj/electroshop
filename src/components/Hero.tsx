import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Latest Tech,
              <span className="text-orange-400"> Best Prices</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover cutting-edge electronics with unbeatable deals and fast shipping.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Latest iPhone"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl">
              <div className="text-2xl font-bold text-orange-500">50% OFF</div>
              <div className="text-sm">Selected Items</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Lightning Fast</h3>
              <p className="text-blue-200">Same-day delivery available</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Warranty Included</h3>
              <p className="text-blue-200">2-year protection plan</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-blue-200">On orders over $99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;