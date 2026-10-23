import React, { useState } from 'react';
import { ArrowRight, Truck, ShieldCheck, Heart, Sparkles, Star, Award, Camera } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function Hero({ onShopNow, onExploreCategory }) {
  const [activeVisual, setActiveVisual] = useState('bride'); // 'bride' or 'editorial'

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-14 md:py-16 bg-[#FFF9FA]">
      {/* Background soft glowing blur spheres */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-pink-200/35 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-5 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Handwritten cursive kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="font-script text-2xl md:text-3xl text-[#C45B72] tracking-wide transform -rotate-2">
                Areena Beauty Looks ♡
              </span>
            </div>

            {/* Serif Luxury Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#2A171C] leading-[1.15] tracking-tight">
              Award-Winning Bridal, <br />
              <span className="italic font-normal text-[#C45B72]">Beauty &amp; Style</span> — All in One Place
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              From signature celebrity bridal makeovers to trending nail art and luxury beauty accessories — designed to make you shine on your most unforgettable days.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onShopNow}
                className="group relative inline-flex items-center gap-3 bg-[#C45B72] hover:bg-[#A3334C] text-white px-8 py-3.5 rounded-full font-medium shadow-md shadow-pink-300/40 hover:shadow-lg hover:shadow-pink-300/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Shop Beauty Picks</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#bridal-portfolio"
                className="inline-flex items-center gap-2 border border-pink-200 text-[#733544] hover:bg-pink-50/80 px-6 py-3.5 rounded-full font-medium text-sm transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#C45B72]" />
                <span>View Bridal Portfolio</span>
              </a>
            </div>

            {/* Trust Badges matching image */}
            <div className="pt-8 border-t border-pink-100/80 grid grid-cols-3 gap-3 sm:gap-6 text-xs text-gray-700">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-pink-100/70 flex items-center justify-center shrink-0 text-[#C45B72]">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-[11px] sm:text-xs">Fast &amp; Reliable</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">Shipping</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-pink-100/70 flex items-center justify-center shrink-0 text-[#C45B72]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-[11px] sm:text-xs">Award Winner</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">Excellence 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-pink-100/70 flex items-center justify-center shrink-0 text-[#C45B72]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-[11px] sm:text-xs">Happy</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">Brides &amp; Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual from image + real bridal model */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end">
            
            {/* View Switcher Tabs */}
            <div className="mb-3 inline-flex bg-white/90 backdrop-blur-md p-1 rounded-full border border-pink-200/80 shadow-sm text-xs font-medium z-20">
              <button
                onClick={() => setActiveVisual('bride')}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  activeVisual === 'bride'
                    ? 'bg-[#C45B72] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#C45B72]'
                }`}
              >
                <span>👑 Signature Bride</span>
              </button>
              <button
                onClick={() => setActiveVisual('editorial')}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  activeVisual === 'editorial'
                    ? 'bg-[#C45B72] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#C45B72]'
                }`}
              >
                <span>🌸 Editorial Glow</span>
              </button>
            </div>

            <div className="relative w-full max-w-[430px]">
              
              {/* Aesthetic Image Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-pink-100 via-rose-50 to-pink-200 p-2 shadow-2xl shadow-rose-200/50 group">
                <div className="overflow-hidden rounded-[2.2rem] bg-white relative">
                  <img
                    src={activeVisual === 'bride' ? '/images/areena-bridal-glam.jpg' : '/images/hero-model.jpg'}
                    alt="Areena Beauty Looks Bridal Makeover"
                    className="w-full h-[470px] object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating aesthetic handwritten note from screenshot */}
              <div className="absolute -top-3 -right-3 md:-right-5 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-lg border border-pink-100 transform rotate-3 animate-float select-none">
                <p className="font-script text-xl md:text-2xl text-[#C45B72] font-semibold leading-none">
                  Your Beauty <br /> Our Priority ♡
                </p>
              </div>

              {/* Little Floating Heart Top Left */}
              <div className="absolute top-14 -left-3 text-[#C45B72] animate-bounce select-none">
                <span className="font-script text-3xl font-bold">♡</span>
              </div>

              {/* Floating Micro-Badge Bottom Left */}
              <div className="absolute bottom-6 -left-4 md:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl shadow-pink-200/50 border border-pink-100 flex items-center gap-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-[#C45B72]">
                  <Sparkles className="w-5 h-5 fill-[#C45B72]" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-gray-800 ml-1">4.9/5</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">Areena Verified Studio</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
