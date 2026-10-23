import React from 'react';
import { Star, CheckCircle, Heart } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      name: 'Sophia M.',
      role: 'Verified Buyer',
      text: 'The press-on nails look exactly like my salon acrylics! Lasted 2 full weeks with zero lifting. The cute bow details are everything.',
      product: 'Cute Bow & Heart Press On Nails',
      stars: 5,
      date: '2 days ago'
    },
    {
      name: 'Emily R.',
      role: 'Beauty Enthusiast',
      text: 'The Korean hair clips don’t tug or break fine hair at all. The pastel colors match all my spring and summer fits perfectly.',
      product: 'Korean Style Hair Clips Set',
      stars: 5,
      date: '5 days ago'
    },
    {
      name: 'Aisha K.',
      role: 'Verified Buyer',
      text: 'The matte lip gloss collection has become my daily obsession. Truly non-drying and smudge proof. Smells delicious like sweet berries!',
      product: 'Matte Lip Gloss Set',
      stars: 5,
      date: '1 week ago'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 mb-2">
            <Heart className="w-4 h-4 text-[#C45B72] fill-[#C45B72]" />
            <span className="text-xs uppercase tracking-widest text-[#C45B72] font-semibold">
              Real Glow Love
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#31161D]">
            Loved by 10,000+ Queens
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Read real stories from our glowing community across the globe.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-[#FFF8FA] p-6 rounded-3xl border border-pink-100 flex flex-col justify-between hover:shadow-lg hover:shadow-pink-200/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-pink-100/70 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <span className="text-[10px] text-[#C45B72] font-medium">{rev.product}</span>
                </div>
                <span className="font-script text-xl text-[#C45B72]">♡</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
