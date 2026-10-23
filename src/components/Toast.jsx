import React from 'react';
import { Sparkles, Heart, ShoppingBag, Check } from 'lucide-react';

export default function Toast({ message, type, onClose }) {
  if (!message) return null;

  const icons = {
    cart: <ShoppingBag className="w-4 h-4 text-[#C45B72]" />,
    wishlist: <Heart className="w-4 h-4 text-[#C45B72] fill-[#C45B72]" />,
    promo: <Sparkles className="w-4 h-4 text-[#C45B72]" />,
    success: <Check className="w-4 h-4 text-emerald-600" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl shadow-pink-200/50 border border-pink-100 text-xs font-medium text-gray-800">
      <div className="w-7 h-7 rounded-full bg-pink-100/70 flex items-center justify-center shrink-0">
        {icons[type] || icons.promo}
      </div>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-gray-400 hover:text-gray-600 font-bold"
      >
        ✕
      </button>
    </div>
  );
}
