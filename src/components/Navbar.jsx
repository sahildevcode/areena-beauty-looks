import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X, Truck, Sparkles, MapPin, Camera } from 'lucide-react';
import { STORE_INFO } from '../data/products';

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
      {/* Top Notice Bar */}
      <div className="bg-[#E58C9D] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center">
          <div className="hidden md:flex items-center gap-1.5 font-medium tracking-wide">
            <Truck className="w-3.5 h-3.5" />
            <span>Free Express Delivery on Orders Over ₹999 • All Over India</span>
          </div>

          <div
            onClick={() => onCopyPromo('WELCOME10')}
            className="cursor-pointer group flex items-center justify-center gap-1.5 hover:opacity-95 transition-all py-0.5 px-2 rounded-full hover:bg-white/10"
            title="Click to copy coupon code"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-100 group-hover:rotate-12 transition-transform" />
            <span>
              ✦ 10% OFF First Booking / Order | Code:{' '}
              <span className="font-semibold underline decoration-white/60 tracking-wider">WELCOME10</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs tracking-wider font-light">
            <span>Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform font-bold underline decoration-white/50"
                title="Follow @llll_rakhi_llll on Instagram"
              >
                Instagram ↗
              </a>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform font-bold underline decoration-white/50"
                title="View on Google Maps"
              >
                Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex flex-col items-start group select-none"
        >
          <div className="flex items-center gap-1">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#44222A] group-hover:text-[#C45B72] transition-colors">
              Areena
            </span>
            <span className="text-[#C45B72] text-xl font-normal transition-transform group-hover:scale-125 duration-300">
              ♡
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.32em] text-[#A3334C] font-semibold -mt-1">
            BEAUTY LOOKS • STUDIO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-gray-700">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            Home
          </a>
          
          <a
            href="#bridal-portfolio"
            onClick={(e) => { e.preventDefault(); onNavigate('bridal-portfolio'); }}
            className="hover:text-[#C45B72] transition-colors py-1 flex items-center gap-1 text-[#C45B72] font-semibold"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Bridal Portfolio</span>
          </a>

          <a
            href="#categories"
            onClick={(e) => { e.preventDefault(); onNavigate('categories'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            Services &amp; Categories
          </a>

          <a
            href="#shop"
            onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}
            className="hover:text-[#C45B72] transition-colors py-1"
          >
            Shop Essentials
          </a>

          <a
            href="#location"
            onClick={(e) => { e.preventDefault(); onNavigate('location'); }}
            className="hover:text-[#C45B72] transition-colors py-1 flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C45B72]" />
            <span>Studio Location</span>
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
        <div className="flex items-center space-x-2.5 sm:space-x-3.5">
          <button
            onClick={onOpenSearch}
            className="p-2 text-gray-700 hover:text-[#C45B72] hover:bg-pink-50 rounded-full transition-colors relative"
            title="Search products & styles"
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

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:opacity-95 transition-all"
            title="Follow on Instagram"
          >
            <span>Instagram ↗</span>
          </a>

          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all"
            title="Open Google Maps Location"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Maps</span>
          </a>

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
            href="#bridal-portfolio"
            onClick={() => { setMobileMenuOpen(false); onNavigate('bridal-portfolio'); }}
            className="block py-2 text-base font-semibold text-[#C45B72] border-b border-pink-50"
          >
            👑 Bridal Portfolio (Real Clients)
          </a>
          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-base font-semibold text-pink-600 border-b border-pink-50"
          >
            📸 Instagram (@llll_rakhi_llll) ↗
          </a>
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-base font-semibold text-emerald-600 border-b border-pink-50"
          >
            📍 Google Maps Studio Location ↗
          </a>
          <a
            href="#categories"
            onClick={() => { setMobileMenuOpen(false); onNavigate('categories'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72] border-b border-pink-50"
          >
            Services &amp; Categories
          </a>
          <a
            href="#shop"
            onClick={() => { setMobileMenuOpen(false); onNavigate('shop'); }}
            className="block py-2 text-base font-medium text-gray-800 hover:text-[#C45B72] border-b border-pink-50"
          >
            Shop Essentials
          </a>
        </div>
      )}
    </header>
  );
}
