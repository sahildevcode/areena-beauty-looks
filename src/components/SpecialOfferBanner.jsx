import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpecialOfferBanner({ onCopyPromo }) {
  const [copied, setCopied] = useState(false);
  const code = 'WELCOME10';

  const handleCopy = () => {
    onCopyPromo(code);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F47092', '#C45B72', '#FFE8EE', '#FFD0DC']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-[#FFF8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FFE7EC] via-[#FFEDF1] to-[#FFE2E9] border border-pink-200/80 shadow-lg shadow-pink-200/40 p-6 md:p-10">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-white/40 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Image: Flat-lay matching reference screenshot */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="relative group overflow-hidden rounded-2xl shadow-md border border-white/60 bg-white/40 p-1">
                <img
                  src="./images/banner-gift.jpg"
                  alt="Special Beauty Offer Gift Box"
                  className="w-full max-w-[260px] h-[160px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Center: Offer text and coupon pill */}
            <div className="md:col-span-5 text-center space-y-3">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold tracking-[0.25em] uppercase text-[#A3334C]">
                <Sparkles className="w-3.5 h-3.5 text-[#C45B72]" />
                <span>SPECIAL OFFER</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#31161D] font-normal leading-tight">
                Get <span className="text-[#C45B72] font-semibold">15% OFF</span> <br className="hidden sm:inline" />
                Your First Order
              </h3>

              <div className="pt-1">
                <button
                  onClick={handleCopy}
                  className="group inline-flex items-center gap-2 bg-[#C45B72] hover:bg-[#A3334C] text-white text-xs sm:text-sm font-medium py-2.5 px-6 rounded-full shadow-md shadow-pink-300/40 transition-all duration-300 hover:shadow-lg active:scale-95"
                  title="Click to copy promo code"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copied! Code Applied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                      <span>Use Code: <strong className="tracking-wider">{code}</strong></span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Handwritten aesthetic quote */}
            <div className="md:col-span-3 text-center md:text-right">
              <p className="font-script text-2xl sm:text-3xl text-[#C45B72] leading-tight select-none transform md:-rotate-3">
                Because <br />
                you deserve <br />
                the best ♡
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
