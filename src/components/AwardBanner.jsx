import React from 'react';
import { Award, Trophy, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getImageUrl } from '../utils/asset';

export default function AwardBanner() {
  return (
    <section className="py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2F151E] via-[#44222A] to-[#2B141C] text-white p-6 sm:p-10 shadow-2xl border border-pink-900/40">
          
          {/* Subtle gold / pink glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Image: The Award Ceremony Photo with Sneha Ullal */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-amber-300 via-pink-400 to-amber-200 shadow-xl max-w-md w-full">
                <img
                  src={getImageUrl('images/areena-award-ceremony.jpg')}
                  alt="Areena Beauty Looks receiving Business Conclave Excellence Award 2024 from Sneha Ullal"
                  className="w-full h-64 object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                
                {/* Floating pill */}
                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-300/40 text-[11px] text-amber-200 font-medium flex items-center gap-1.5 shadow-md">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Excellence Awards 2024</span>
                </div>
              </div>
            </div>

            {/* Right Details & Accolades */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Award-Winning Excellence</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight text-white">
                Recognized at <br className="hidden sm:inline" />
                <span className="text-amber-300 font-semibold italic">Business Conclave &amp; Excellence Awards 2024</span>
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Felicitated by Bollywood Celebrity Guest <strong className="text-white">Sneha Ullal</strong> in recognition of outstanding artistry, innovation, and supreme client satisfaction in professional bridal makeovers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>500+ Brides Styled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Certified Artists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Premium HD Products</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-950 font-semibold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Visit Studio on Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
