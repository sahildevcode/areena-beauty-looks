import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CategoriesSection({ onSelectCategory, activeCategory }) {
  return (
    <section id="categories" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-4 h-4 text-[#C45B72]" />
            <span className="text-xs uppercase tracking-widest text-[#C45B72] font-semibold">
              Curated Collections
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#31161D] flex items-center justify-center gap-2">
            <span>Shop by Category</span>
            <span className="text-[#C45B72] font-normal font-script text-4xl">♡</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
            Discover tailored beauty treats and high-trend adornments picked for your everyday style.
          </p>
        </div>

        {/* 6 Category Cards matching reference screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group cursor-pointer flex flex-col items-center bg-[#FFF8FA] rounded-2xl p-3 border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-200/50 ${
                  isSelected
                    ? 'border-[#C45B72] ring-2 ring-[#C45B72]/20 shadow-lg shadow-pink-200/40'
                    : 'border-pink-100/80 hover:border-pink-300'
                }`}
              >
                {/* Image Container with smooth zoom */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-white mb-3 shadow-inner relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-colors duration-300" />
                </div>

                {/* Category Name & Arrow */}
                <div className="w-full text-center flex items-center justify-center gap-1 py-1">
                  <span className={`text-xs sm:text-sm font-medium transition-colors ${
                    isSelected ? 'text-[#C45B72] font-bold' : 'text-gray-800 group-hover:text-[#C45B72]'
                  }`}>
                    {cat.name}
                  </span>
                  <span className="text-xs text-[#C45B72] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* Micro badge count */}
                <span className="text-[10px] text-gray-400 font-light mt-0.5">
                  {cat.count}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
