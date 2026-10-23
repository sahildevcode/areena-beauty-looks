import React, { useState } from 'react';
import { Sparkles, Heart, Eye, Star, Check } from 'lucide-react';
import { getImageUrl } from '../utils/asset';

export default function ClientStyleGallery({ onSelectLook }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const LOOKS = [
    {
      id: 'glam-signature',
      title: 'Dewy Rose Glam',
      category: 'Signature Makeover',
      image: getImageUrl('images/client-glam-hero.jpg'),
      rating: 5.0,
      description: 'Luminous glass skin finish, soft blush contours, defined wings, and our signature velvet rose lip.',
      tags: ['Glass Skin', 'Nude Rose Lip', 'Fluffy Lashes']
    },
    {
      id: 'royal-heritage',
      title: 'Royal Heritage Glow',
      category: 'Celebration Look',
      image: getImageUrl('images/client-royal-look.jpg'),
      rating: 5.0,
      description: 'Radiant golden undertones, dramatic kohl-rimmed eyes, and traditional handcrafted jewelry styling.',
      tags: ['Gold Shimmer', 'Kohl Eyes', 'Jewelry Styling']
    },
    {
      id: 'golden-reception',
      title: 'Golden Hour Radiance',
      category: 'Evening Glamour',
      image: getImageUrl('images/client-reception-look.jpg'),
      rating: 5.0,
      description: 'Champagne shimmer lids, peach cheek tint, and high-shine gloss for an effortless evening presence.',
      tags: ['Champagne Shimmer', 'Peach Blush', 'High Gloss']
    }
  ];

  return (
    <section id="looks" className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FFF8FA] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Pinterest Theme */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-pink-50 border border-pink-200/80 px-3.5 py-1 rounded-full text-xs font-semibold text-[#C45B72]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Results • Real Glow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#31161D] tracking-tight">
            Client Style &amp; <span className="italic font-normal text-[#C45B72]">Glam Looks</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Discover the artistry behind our signature looks. Captured in crystal-clear HD to inspire your next beauty routine.
          </p>
        </div>

        {/* 3 Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {LOOKS.map((look) => (
            <div
              key={look.id}
              className="group bg-white rounded-3xl overflow-hidden border border-pink-100/90 shadow-sm hover:shadow-xl hover:shadow-pink-200/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative overflow-hidden bg-pink-50 h-80 sm:h-96">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#A3334C] border border-pink-100 shadow-sm">
                  {look.category}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-[11px] font-bold text-gray-800 border border-pink-100 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  <span>5.0</span>
                </div>

                {/* Quick Zoom Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(look)}
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  title="View Fullscreen HD"
                >
                  <Eye className="w-4 h-4 text-[#C45B72]" />
                </button>
              </div>

              {/* Look Info */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#31161D] group-hover:text-[#C45B72] transition-colors">
                    {look.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {look.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-pink-50">
                  {look.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-pink-50 text-[#872B40] font-medium px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center font-bold text-sm shadow-md transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-5 space-y-1 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#C45B72] uppercase tracking-wider">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-amber-500 font-bold">5.0 ★ Top Rated</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900">{selectedPhoto.title}</h4>
              <p className="text-xs text-gray-600">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
