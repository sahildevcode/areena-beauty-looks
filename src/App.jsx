import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesSection from './components/CategoriesSection';
import BestSellers from './components/BestSellers';
import ClientStyleGallery from './components/ClientStyleGallery';
import SpecialOfferBanner from './components/SpecialOfferBanner';
import StoreLocation from './components/StoreLocation';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';
import FloatingSocialBar from './components/FloatingSocialBar';

import { PRODUCTS, STORE_INFO } from './data/products';
import { getImageUrl } from './utils/asset';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([
    {
      id: 'nails-bow-heart',
      name: 'Cute Bow & Heart Press On Nails (24Pcs)',
      category: 'nails',
      price: 499,
      originalPrice: 799,
      image: getImageUrl('images/prod-nails-hd.jpg?v=2'),
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState(['matte-lip-gloss']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [appliedPromo, setAppliedPromo] = useState('WELCOME10');
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'promo') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Add to cart handler
  const handleAddToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || qty) }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          quantity: product.quantity || qty
        }
      ];
    });

    showToast(`Added "${product.name.slice(0, 22)}..." to Bag ♡`, 'cart');
  };

  // Update quantity
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove item
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast('Item removed from cart', 'cart');
  };

  // Wishlist toggle
  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from Wishlist', 'wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to Wishlist ♡', 'wishlist');
        return [...prev, productId];
      }
    });
  };

  // Promo code copy
  const handleCopyPromo = (code) => {
    navigator.clipboard?.writeText(code);
    setAppliedPromo(code);
    showToast(`Coupon "${code}" applied with 10% OFF! 🎉`, 'promo');
  };

  // Navigation scroll helper
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Category select
  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    handleNavigate('shop');
    showToast(`Filtered by ${categoryId.toUpperCase()} ✨`, 'promo');
  };

  return (
    <div className="min-h-screen bg-[#FFF9FA] text-gray-800 flex flex-col font-sans selection:bg-pink-200 selection:text-[#44222A] relative">
      {/* Loading Animation Screen */}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      {/* Fixed Floating Social & Location Bar on Right Side */}
      <FloatingSocialBar />

      {/* Main App Bar & Sticky Navigation */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => {
          setSelectedCategory('all');
          handleNavigate('shop');
          showToast(`Viewing your ${wishlist.length} wishlisted items ♡`, 'wishlist');
        }}
        onCopyPromo={handleCopyPromo}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        onShopNow={() => handleNavigate('shop')}
        onExploreCategory={(cat) => handleSelectCategory(cat)}
      />

      {/* Shop by Category Section */}
      <CategoriesSection
        onSelectCategory={handleSelectCategory}
        activeCategory={selectedCategory}
      />

      {/* Popular Picks / Best Sellers Section */}
      <BestSellers
        products={PRODUCTS}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlist={wishlist}
        onQuickView={(p) => setQuickViewProduct(p)}
        selectedCategory={selectedCategory}
        onClearCategory={() => setSelectedCategory('all')}
      />

      {/* Real Client Style & Glam Looks Gallery */}
      <ClientStyleGallery />

      {/* Special Offer Promotional Banner */}
      <SpecialOfferBanner onCopyPromo={handleCopyPromo} />

      {/* Google Maps Store Location Section */}
      <StoreLocation />

      {/* Customer Community Reviews */}
      <CustomerReviews />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onTriggerLoader={() => setIsLoading(true)}
      />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCart([])}
        appliedPromo={appliedPromo}
        onApplyPromo={(code) => {
          setAppliedPromo(code);
          showToast(`Promo ${code} applied!`, 'promo');
        }}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* Floating Animated Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
