import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_INFO } from '../data/products';

export default function Footer({ onNavigate, onTriggerLoader }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.9 }
      });
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer id="contact" className="bg-[#FFF8FA] pt-16 pb-12 border-t border-pink-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-pink-100/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start select-none">
              <div className="flex items-center gap-1">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#44222A]">
                  Areena
                </span>
                <span className="text-[#C45B72] text-xl font-normal">
                  ♡
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.32em] text-[#A3334C] font-semibold -mt-1">
                BEAUTY LOOKS • BRIDAL STUDIO
              </span>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              Award-winning bridal makeover studio, trendsetting salon treatments, and viral beauty essentials. Winner of Business Conclave Excellence Awards 2024.
            </p>

            {/* Social Links matching user requests */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center gap-1.5 hover:opacity-95 hover:scale-105 transition-all text-xs font-semibold shadow-sm"
                title="Instagram Profile"
              >
                <span>📸 @llll_rakhi_llll</span>
                <span>↗</span>
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-gray-700 flex items-center gap-1.5 hover:bg-pink-100 hover:scale-105 transition-all text-xs font-semibold shadow-sm"
                title="Google Maps Location"
              >
                <span>📍 Google Maps Reviews</span>
                <span>↗</span>
              </a>
            </div>

            {/* Test Loader Button */}
            <div className="pt-2">
              <button
                onClick={onTriggerLoader}
                className="inline-flex items-center gap-1.5 text-[11px] text-[#A3334C] hover:text-[#C45B72] bg-white px-3 py-1.5 rounded-full border border-pink-200 hover:border-pink-300 transition-colors shadow-sm"
              >
                <Sparkles className="w-3 h-3 text-[#C45B72]" />
                <span>Replay Loading Animation</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-[#C45B72] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#bridal-portfolio" onClick={(e) => { e.preventDefault(); onNavigate('bridal-portfolio'); }} className="hover:text-[#C45B72] transition-colors font-medium text-[#C45B72]">
                  Bridal Portfolio
                </a>
              </li>
              <li>
                <a href="#shop" onClick={(e) => { e.preventDefault(); onNavigate('shop'); }} className="hover:text-[#C45B72] transition-colors">
                  Shop Best Sellers
                </a>
              </li>
              <li>
                <a href="#categories" onClick={(e) => { e.preventDefault(); onNavigate('categories'); }} className="hover:text-[#C45B72] transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => { e.preventDefault(); onNavigate('location'); }} className="hover:text-[#C45B72] transition-colors">
                  Studio Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Direct Socials
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <a href={STORE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 font-semibold hover:underline flex items-center gap-1">
                  <span>Instagram: @llll_rakhi_llll ↗</span>
                </a>
              </li>
              <li>
                <a href={STORE_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline flex items-center gap-1">
                  <span>Google Maps GPS Navigation ↗</span>
                </a>
              </li>
              <li>
                <a href="#shipping" onClick={(e) => e.preventDefault()} className="hover:text-[#C45B72] transition-colors">
                  Bridal Consultation Timings
                </a>
              </li>
              <li>
                <a href="#returns" onClick={(e) => e.preventDefault()} className="hover:text-[#C45B72] transition-colors">
                  30-Day Easy Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Stay in Touch
            </h4>
            <p className="text-xs text-gray-600">
              Get exclusive bridal discount alerts, beauty tips, and special offers!
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="flex rounded-xl overflow-hidden border border-pink-200 bg-white focus-within:ring-2 focus-within:ring-[#C45B72]/30 shadow-sm">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 focus:outline-none text-gray-800 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#C45B72] hover:bg-[#A3334C] text-white px-4 transition-colors flex items-center justify-center shrink-0"
                  title="Subscribe"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-600 mt-1 font-medium">
                  Welcome to Areena Beauty Looks family! Code WELCOME10 is ready.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 Areena Beauty Looks. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-script text-lg text-[#C45B72]">
            <span>♡</span>
            <span>Areena Beauty Looks • Look Good Feel Better</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
