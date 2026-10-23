import React, { useState } from 'react';
import { Sparkles, Calendar, Heart, CheckCircle2, ArrowRight, Eye } from 'lucide-react';
import { BRIDAL_PORTFOLIO, STORE_INFO } from '../data/products';

export default function BridalPortfolio({ onBookLook }) {
  const [selectedLook, setSelectedLook] = useState(null);

  return (
    <section id="bridal-portfolio" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FFF9FA] to-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 mb-2 bg-pink-50 border border-pink-200/60 px-3.5 py-1 rounded-full">
            <Sparkles className="w-4 h-4 text-[#C45B72]" />
            <span className="text-xs uppercase tracking-widest text-[#C45B72] font-semibold">
              Real Client Transformations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#31161D] leading-tight">
            Celebrity Bridal &amp; Glam Looks
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-lg mx-auto">
            Crafted with passion at <strong className="text-gray-800">Areena Beauty Looks</strong>. Every bride deserves to feel like royalty on her most special day.
          </p>
        </div>

        {/* 3 Featured Bridal Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRIDAL_PORTFOLIO.map((look) => (
            <div
              key={look.id}
              className="group bg-white rounded-3xl overflow-hidden border border-pink-100/90 shadow-[0_8px_30px_rgba(244,112,146,0.08)] hover:shadow-[0_15px_40px_rgba(244,112,146,0.2)] transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden bg-pink-50 aspect-[4/5] cursor-pointer" onClick={() => setSelectedLook(look)}>
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-[#C45B72] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {look.tag}
                  </span>
                </div>

                {/* Zoom hover indicator */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Eye className="w-4 h-4 text-[#C45B72]" />
                </div>

                {/* Bottom title inside image overlay */}
                <div className="absolute bottom-4 left-4 right-14 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-pink-200 font-medium">
                    {look.category}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-white drop-shadow-sm leading-snug">
                    {look.title}
                  </h3>
                </div>
              </div>

              {/* Content info */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    {look.subtitle}
                  </p>

                  <div className="mt-3 space-y-1.5">
                    {look.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C45B72] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FFF0F4] hover:bg-[#C45B72] text-[#C45B72] hover:text-white py-3 px-4 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 group/btn"
                  >
                    <span>Book This Look</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedLook && (
        <div
          onClick={() => setSelectedLook(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedLook.image}
              alt={selectedLook.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl bg-neutral-900"
            />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-gray-900 text-base">{selectedLook.title}</h4>
                <p className="text-xs text-gray-500">{selectedLook.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedLook(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-xs font-semibold"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
