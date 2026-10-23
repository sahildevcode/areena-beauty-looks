import React, { useState } from 'react';
import { ShoppingBag, Heart, Eye, Star, Check } from 'lucide-react';

export default function BestSellers({
  products,
  onAddToCart,
  onToggleWishlist,
  wishlist,
  onQuickView,
  selectedCategory,
  onClearCategory
}) {
  const [addedId, setAddedId] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  // Filter products by selected category or tab
  const filterKey = selectedCategory !== 'all' ? selectedCategory : activeTab;
  const filteredProducts = filterKey === 'all'
    ? products
    : products.filter(p => p.category.toLowerCase() === filterKey.toLowerCase());

  const tabs = [
    { id: 'all', label: 'All Products' },
    { id: 'nails', label: 'Nails' },
    { id: 'hair', label: 'Hair Clips' },
    { id: 'makeup', label: 'Lip & Makeup' },
    { id: 'accessories', label: 'Sponges & More' },
  ];

  return (
    <section id="shop" className="py-14 sm:py-20 bg-[#FFF9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-script text-2xl text-[#C45B72] tracking-wide block">
              Popular Picks
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#31161D] flex items-center gap-2 mt-1">
              <span>Best Sellers</span>
              <span className="text-[#C45B72] font-normal font-script text-3xl">♡</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {selectedCategory !== 'all' && (
              <button
                onClick={onClearCategory}
                className="text-xs bg-pink-100 text-[#A3334C] hover:bg-pink-200 px-3 py-1.5 rounded-full font-medium transition-colors"
              >
                Clear Category Filter ✕
              </button>
            )}

            <button
              onClick={() => setActiveTab('all')}
              className="text-xs sm:text-sm font-medium border border-pink-200 hover:border-[#C45B72] text-[#733544] hover:text-[#C45B72] hover:bg-white px-5 py-2 rounded-full transition-all duration-200 shadow-sm"
            >
              View All →
            </button>
          </div>
        </div>

        {/* Category Pills Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (selectedCategory !== 'all') onClearCategory();
                setActiveTab(tab.id);
              }}
              className={`text-xs px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                (selectedCategory === 'all' && activeTab === tab.id) || selectedCategory === tab.id
                  ? 'bg-[#C45B72] text-white shadow-md shadow-pink-300/50'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-[#C45B72] border border-pink-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const isJustAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-pink-100/90 shadow-[0_4px_20px_rgba(244,112,146,0.06)] hover:shadow-[0_10px_30px_rgba(244,112,146,0.18)] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Product Image Area */}
                <div className="relative aspect-square w-full bg-[#FFF5F7] overflow-hidden p-3">
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <span className="absolute top-3 right-3 z-10 bg-[#C45B72] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {product.discount}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-500 hover:text-[#C45B72] hover:scale-110 active:scale-90 transition-all duration-200"
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isWishlisted ? 'fill-[#C45B72] text-[#C45B72]' : ''
                      }`}
                    />
                  </button>

                  {/* Quick View Button (appears on hover) */}
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-white/95 text-gray-700 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:text-[#C45B72] hover:bg-pink-50"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                </div>

                {/* Content Area */}
                <div className="p-4 flex flex-col flex-grow justify-between text-left">
                  <div>
                    {/* Star ratings */}
                    <div className="flex items-center gap-1 mb-1.5">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-400">({product.reviews})</span>
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => onQuickView(product)}
                      className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-[#C45B72] transition-colors cursor-pointer"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Price matching reference image */}
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-base font-bold text-[#C45B72]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button matching image */}
                  <div className="mt-4 pt-2">
                    <button
                      onClick={() => handleAdd(product)}
                      className={`w-full py-2.5 px-4 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm active:scale-95 ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#C45B72] hover:bg-[#A3334C] text-white hover:shadow-md hover:shadow-pink-300/40'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
