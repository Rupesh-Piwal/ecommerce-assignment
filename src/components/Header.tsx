import React from "react";
import { Search, ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-end px-8 py-2 text-xs text-gray-600 border-b">
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-black transition-colors">
            Help
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Orders & Returns
          </a>
          <span className="font-medium">Hi, Guest</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-light tracking-wider">ECOMMERCE</div>

        <nav className="flex items-center gap-10">
          <a href="#" className="text-sm hover:text-gray-600 transition-colors">
            Categories
          </a>
          <a href="#" className="text-sm hover:text-gray-600 transition-colors">
            Sale
          </a>
          <a href="#" className="text-sm hover:text-gray-600 transition-colors">
            New Arrivals
          </a>
          <a href="#" className="text-sm hover:text-gray-600 transition-colors">
            Collections
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="hover:text-gray-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-600 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-black text-white py-2.5">
        <div className="flex items-center justify-center gap-4 pl-20">
          <ArrowLeft className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
          <span className="text-xs font-light tracking-wide">
            FREE SHIPPING ON ALL ORDERS OVER $150
          </span>
          <ArrowRight className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
