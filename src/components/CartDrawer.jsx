import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedPromo,
  onApplyPromo
}) {
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [isSuccessOrder, setIsSuccessOrder] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Apply discount if promo is active
  let discountRate = 0;
  if (appliedPromo === 'WELCOME10') discountRate = 0.10;
  if (appliedPromo === 'SPECIAL15') discountRate = 0.15;

  const discountAmount = rawSubtotal * discountRate;
  const subtotalAfterDiscount = rawSubtotal - discountAmount;
  const freeShippingThreshold = 50;
  const freeShippingDifference = freeShippingThreshold - subtotalAfterDiscount;
  const isFreeShipping = freeShippingDifference <= 0;
  const shippingFee = (rawSubtotal > 0 && !isFreeShipping) ? 4.99 : 0;
  const total = rawSubtotal > 0 ? (subtotalAfterDiscount + shippingFee) : 0;

  const handleApplyPromoCode = (e) => {
    e.preventDefault();
    const clean = promoInput.trim().toUpperCase();
    if (clean === 'WELCOME10' || clean === 'SPECIAL15') {
      onApplyPromo(clean);
      setPromoMessage(`Coupon ${clean} applied!`);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 }
      });
      setTimeout(() => setPromoMessage(''), 3000);
    } else {
      setPromoMessage('Invalid coupon code. Try WELCOME10');
      setTimeout(() => setPromoMessage(''), 3000);
    }
  };

  const handleCheckout = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setIsSuccessOrder(true);
    setTimeout(() => {
      onClearCart();
      setIsSuccessOrder(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-pink-100 flex items-center justify-between bg-[#FFF8FA]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C45B72]" />
              <h2 className="text-lg font-serif font-semibold text-gray-900">
                Your Shopping Bag
              </h2>
              <span className="text-xs bg-pink-100 text-[#C45B72] font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-pink-100 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          {cart.length > 0 && (
            <div className="bg-pink-50/70 px-5 py-3 border-b border-pink-100 text-xs">
              {isFreeShipping ? (
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Yay! You've unlocked <strong>FREE Standard Shipping</strong>!</span>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 font-medium">
                    Add <strong className="text-[#C45B72]">${freeShippingDifference.toFixed(2)}</strong> more to get <strong>FREE Shipping</strong>!
                  </p>
                  <div className="w-full bg-pink-200/60 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div
                      className="bg-[#C45B72] h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((subtotalAfterDiscount / freeShippingThreshold) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {isSuccessOrder ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900">Order Placed!</h3>
                <p className="text-sm text-gray-600 max-w-xs mx-auto">
                  Thank you! Your GlowNest beauty box is being prepared with love and sparkles.
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto text-[#C45B72]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-800">Your bag is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Looks like you haven't added anything yet. Explore our best sellers and cute accessories!
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-[#C45B72] text-white text-xs font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-[#A3334C] transition-colors"
                >
                  <span>Start Shopping</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-2xl border border-pink-100/70 bg-[#FFFDFE] hover:border-pink-200 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl bg-pink-50 shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-xs text-[#C45B72] font-bold mt-0.5 block">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-pink-200 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-pink-50 text-gray-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-pink-50 text-gray-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && !isSuccessOrder && (
            <div className="p-5 border-t border-pink-100 bg-[#FFF8FA] space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromoCode} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. WELCOME10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 text-xs px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-[#C45B72]/30 uppercase tracking-wider"
                />
                <button
                  type="submit"
                  className="text-xs bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-xl transition-colors shrink-0"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <p className={`text-xs ${promoMessage.includes('applied') ? 'text-emerald-600' : 'text-red-500'}`}>
                  {promoMessage}
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-pink-100/60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${rawSubtotal.toFixed(2)}</span>
                </div>

                {discountRate > 0 && (
                  <div className="flex justify-between text-[#C45B72] font-medium">
                    <span>Discount ({appliedPromo} - {discountRate * 100}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-pink-200">
                  <span>Total</span>
                  <span className="text-[#C45B72]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-[#C45B72] hover:bg-[#A3334C] text-white py-3.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-300/40 hover:shadow-xl transition-all active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-gray-400">
                🔒 Safe &amp; Secure 256-bit Encrypted Checkout
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
