import React, { useState } from 'react';
import { X, Search, ShoppingBag, ArrowRight } from 'lucide-react';

export default function SearchModal({
  isOpen,
  onClose,
  products,
  onAddToCart,
  onQuickView
}) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? products.slice(0, 4)
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl z-10 border border-pink-100 overflow-hidden animate-fadeIn">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-pink-100 flex items-center gap-3 bg-[#FFF8FA]">
          <Search className="w-5 h-5 text-[#C45B72]" />
          <input
            type="text"
            autoFocus
            placeholder="Search press-on nails, lip gloss, hair clips, brushes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-pink-100 text-gray-400 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-1">
            {query.trim() === '' ? 'Popular Suggestions' : `Found ${results.length} Results`}
          </div>

          {results.length === 0 ? (
            <div className="py-8 text-center text-gray-500 text-xs">
              No beauty essentials found matching "{query}". Try "nails", "clips" or "gloss".
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-pink-50/70 border border-transparent hover:border-pink-100 transition-colors group cursor-pointer"
                onClick={() => {
                  onQuickView(product);
                  onClose();
                }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg bg-pink-100 shrink-0"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800 group-hover:text-[#C45B72] transition-colors line-clamp-1">
                      {product.name}
                    </h4>
                    <span className="text-xs font-bold text-[#C45B72]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  className="p-2 rounded-lg bg-white border border-pink-200 text-[#C45B72] hover:bg-[#C45B72] hover:text-white transition-colors shadow-sm"
                  title="Add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
