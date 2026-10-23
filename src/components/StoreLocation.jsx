import React from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink, Navigation, Sparkles, Star, Heart, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getImageUrl } from '../utils/asset';

export default function StoreLocation() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 mb-2 bg-pink-50 border border-pink-200/60 px-3 py-1 rounded-full">
            <MapPin className="w-4 h-4 text-[#C45B72]" />
            <span className="text-xs uppercase tracking-widest text-[#C45B72] font-semibold">
              Visit Us in Person
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#31161D]">
            Visit GlowNest Boutique Store
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Experience our viral beauty collections, sample skincare products, try nail styles, or order online for fast doorstep delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#FFF8FA] rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="border-b border-pink-100 pb-5">
                <span className="font-script text-2xl text-[#C45B72]">GlowNest Store ♡</span>
                <h3 className="text-xl font-serif text-gray-900 font-semibold mt-1 flex items-center gap-2">
                  <span>Flagship Beauty &amp; Style Boutique</span>
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-semibold">
                    5.0 Star Rated on Google Maps
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center shrink-0 text-[#C45B72]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Store Location</h4>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                    GlowNest Beauty &amp; Lifestyle Store
                  </p>
                  <p className="text-xs text-[#C45B72] font-medium mt-1">
                    Direct GPS link active on Google Maps
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center shrink-0 text-[#C45B72]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Store Hours</h4>
                  <p className="text-sm text-gray-600 mt-0.5">Monday – Sunday: 10:00 AM – 9:00 PM</p>
                  <p className="text-xs text-emerald-600 font-medium">Online Orders Dispatched Same Day</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-2 border-t border-pink-100">
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                  Store Features &amp; Perks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Aesthetic Press-On Nail Bar',
                    'Lip Gloss Swatch Counter',
                    'Curated Korean Hair Clips',
                    'Dainty Gold Jewelry Display',
                    'Instant In-Store Pickup',
                    'Free Cute Gift Wrapping'
                  ].map((feat, idx) => (
                    <span key={idx} className="text-[11px] bg-white border border-pink-200 text-gray-700 px-2.5 py-1 rounded-lg">
                      ✦ {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Google Maps Action Button */}
            <div className="pt-6 mt-6 border-t border-pink-100">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C45B72] hover:bg-[#A3334C] text-white py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-md shadow-pink-200/50 hover:shadow-lg active:scale-98 group"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:rotate-45" />
                <span>Open in Google Maps Navigation</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-pink-100 bg-[#FFF5F7] min-h-[380px] flex flex-col justify-between p-6 sm:p-8 shadow-sm">
            
            {/* Top info badge */}
            <div className="flex items-center justify-between">
              <div className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-pink-100 flex items-center gap-2 text-xs font-medium text-gray-800 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Verified Google Location</span>
              </div>

              <span className="font-script text-xl text-[#C45B72]">
                Come Say Hi ♡
              </span>
            </div>

            {/* Center Visual: GlowNest aesthetic boutique visual */}
            <div className="my-auto py-6 flex flex-col sm:flex-row items-center gap-6 justify-center">
              <div className="relative group shrink-0">
                <img
                  src={getImageUrl('images/hero-model.jpg')}
                  alt="GlowNest Store Experience"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-cover object-top rounded-2xl shadow-lg border-2 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                  <Heart className="w-4 h-4 text-[#C45B72] fill-[#C45B72]" />
                </div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <span className="text-[11px] font-bold text-[#C45B72] uppercase tracking-wider">
                  Verified Google Customer Rating
                </span>
                <h4 className="text-xl font-serif font-bold text-gray-900">
                  "Most aesthetic beauty store!"
                </h4>
                <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
                  "The quality of the press-on nails and lip glosses is unmatched. Packaging was super cute and delivery was so fast!"
                </p>
                <div className="pt-2 flex items-center gap-2 justify-center sm:justify-start text-xs text-gray-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>5.0 ★ Top Rated on Google Maps</span>
                </div>
              </div>
            </div>

            {/* Bottom bar with link */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
              <span className="truncate">
                Google Maps Link: <strong className="text-gray-800">{STORE_INFO.googleMapsUrl}</strong>
              </span>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C45B72] hover:underline font-bold shrink-0 flex items-center gap-1"
              >
                <span>Navigate via GPS ↗</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
