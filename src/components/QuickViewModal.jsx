import React, { useState } from 'react';
import { X, Heart, Star, ShoppingBag, Check, ShieldCheck, RefreshCw, Truck } from 'lucide-react';

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, quantity });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-pink-100 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image */}
          <div className="bg-[#FFF5F7] p-6 flex items-center justify-center relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded-2xl shadow-md"
            />
            {product.discount && (
              <span className="absolute top-6 left-6 bg-[#C45B72] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {product.discount}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#C45B72] font-semibold">
                  {product.category}
                </span>
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="text-gray-400 hover:text-[#C45B72] transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? 'fill-[#C45B72] text-[#C45B72]' : ''}`}
                  />
                </button>
              </div>

              <h2 className="text-xl font-serif font-bold text-gray-900 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-2xl font-bold text-[#C45B72]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Feature Highlights */}
              {product.features && (
                <div className="space-y-1 pt-2">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C45B72]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity and CTA */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-pink-200 rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-pink-50"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-semibold text-gray-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-pink-50"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#C45B72] hover:bg-[#A3334C] text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag • ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 pt-2 border-t border-pink-100">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#C45B72]" />
                  <span>Ships in 24 hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#C45B72]" />
                  <span>30-Day Easy Returns</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
