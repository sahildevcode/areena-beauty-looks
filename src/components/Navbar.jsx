import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X, Truck, Sparkles, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getImageUrl } from '../utils/asset';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist,
  onCopyPromo,
  onNavigate
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all shadow-[0_2px_15px_rgba(244,112,146,0.06)] border-b border-pink-100">
      {/* Top Notice Bar matching Pinterest screenshot */}
      <div className="bg-[#E58C9D] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center">
          <div className="hidden md:flex items-center gap-1.5 font-medium tracking-wide">
            <Truck className="w-3.5 h-3.5" />
            <span>Free Express Delivery on Orders Over ₹999</span>
          </div>

          <div
            onClick={() => onCopyPromo('WELCOME10')}
            className="cursor-pointer group flex items-center justify-center gap-1.5 hover:opacity-95 transition-all py-0.5 px-2 rounded-full hover:bg-white/10"
            title="Click to copy coupon code"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-100 group-hover:rotate-12 transition-transform" />
            <span>
              ✦ 10% OFF Your First Order | Use Code:{' '}
              <span className="font-semibold underline decoration-white/60 tracking-wider">WELCOME10</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs tracking-wider font-light">
            <span>Follow Us:</span>
            <div className="flex items-center gap-3 font-semibold">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform underline decoration-white/50"
              >
                Instagram ↗
              </a>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform underline decoration-white/50"
              >
                Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header matching Pinterest screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo: ARINA BEAUTY LOOKS */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex flex-col items-start group select-none py-1"
          title="Arina Beauty Looks"
        >
          <div className="flex items-center gap-1.5">
            <img
              src={getImageUrl('images/arina-logo.png')}
              alt="ARINA BEAUTY LOOKS"
              className="h-5 sm:h-6 md:h-7 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
            <span className="text-[#C45B72] text-base sm:text-lg font-normal transition-transform group-hover:scale-125 duration-300">
              ♡
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.32em] text-[#A3334C] font-semibold mt-0.5">
            BEAUTY • STYLE • YOU
          </span>
        </a>

        {/* Desktop Navigation Links matching Pinterest screenshot */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            Home
          </a>
          <a
            href="#shop"
            onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            Shop
          </a>
          <a
            href="#categories"
            onClick={(e) => { e.preventDefault(); onNavigate('categories'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            Categories
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            About
          </a>
          <a
            href="#location"
            onClick={(e) => { e.preventDefault(); onNavigate('location'); }}
            className="hover:text-[#C45B72] transition-colors py-1 flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C45B72]" />
            <span>Store Locator</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenSearch}
            className="p-2 text-gray-700 hover:text-[#C45B72] hover:bg-pink-50 rounded-full transition-colors relative"
            title="Search products"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenWishlist}
            className="p-2 text-gray-700 hover:text-[#C45B72] hover:bg-pink-50 rounded-full transition-colors relative hidden sm:block"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#C45B72] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="p-2 text-gray-700 hover:text-[#C45B72] hover:bg-pink-50 rounded-full transition-colors hidden sm:block"
            title="My Account"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="p-2 text-gray-800 hover:text-[#C45B72] hover:bg-pink-50 rounded-full transition-colors relative flex items-center gap-1 group"
            title="Shopping Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform text-[#44222A] group-hover:text-[#C45B72]" />
              <span className="absolute -top-1 -right-1.5 bg-[#C45B72] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                {cartCount}
              </span>
            </div>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-gray-700 hover:text-[#C45B72] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-pink-100 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <a
            href="#home"
            onClick={() => { setMobileMenuOpen(false); onNavigate('home'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72] border-b border-pink-50"
          >
            Home
          </a>
          <a
            href="#shop"
            onClick={() => { setMobileMenuOpen(false); onNavigate('shop'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72] border-b border-pink-50"
          >
            Shop All
          </a>
          <a
            href="#categories"
            onClick={() => { setMobileMenuOpen(false); onNavigate('categories'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72] border-b border-pink-50"
          >
            Categories
          </a>
          <a
            href="#about"
            onClick={() => { setMobileMenuOpen(false); onNavigate('about'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72] border-b border-pink-50"
          >
            About Us
          </a>
          <a
            href="#location"
            onClick={() => { setMobileMenuOpen(false); onNavigate('location'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72] border-b border-pink-50"
          >
            Store Locator &amp; Map
          </a>
          <a
            href="#contact"
            onClick={() => { setMobileMenuOpen(false); onNavigate('contact'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
