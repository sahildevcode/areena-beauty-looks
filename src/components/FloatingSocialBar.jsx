import React, { useState } from 'react';
import { MapPin, Navigation, Sparkles } from 'lucide-react';

export default function FloatingSocialBar() {
  const [hovered, setHovered] = useState(null);

  const instagramUrl = 'https://www.instagram.com/llll_rakhi_llll?srtk=MTF4ZnR6azE2ODJzdA==';
  const mapsUrl = 'https://maps.app.goo.gl/VqQCfKcrwQY2TKVL8';

  return (
    <aside
      aria-label="Quick Connect Floating Bar"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 select-none pointer-events-auto"
    >
      {/* Instagram Floating Pill */}
      <div className="relative flex items-center justify-end group">
        {/* Tooltip on left */}
        <div className="absolute right-full mr-3 hidden sm:flex items-center gap-1.5 bg-gray-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
          <span>Follow @llll_rakhi_llll</span>
          <span className="text-[10px] text-pink-300">↗</span>
        </div>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered('insta')}
          onMouseLeave={() => setHovered(null)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-lg shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-110 active:scale-95 transition-all duration-300 group/btn border-2 border-white/90"
          title="Follow GlowNest on Instagram"
        >
          {/* SVG Instagram Icon */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover/btn:rotate-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>

          {/* Pulse ping animation on badge */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-pink-300 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-rose-600 rounded-full animate-ping" />
          </span>
        </a>
      </div>

      {/* Google Maps Floating Pill */}
      <div className="relative flex items-center justify-end group">
        {/* Tooltip on left */}
        <div className="absolute right-full mr-3 hidden sm:flex items-center gap-1.5 bg-gray-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
          <span>GlowNest on Google Maps</span>
          <span className="text-[10px] text-emerald-300">📍</span>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered('maps')}
          onMouseLeave={() => setHovered(null)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#EA4335] via-[#FBBC05] to-[#34A853] text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group/btn border-2 border-white/90"
          title="Open Location in Google Maps"
        >
          {/* Map Pin icon */}
          <div className="relative">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 transition-transform group-hover/btn:scale-110" />
            <Navigation className="w-3 h-3 text-white absolute -bottom-1 -right-1 group-hover/btn:rotate-45 transition-transform" />
          </div>

          {/* Live pulsing indicator */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </span>
        </a>
      </div>
    </aside>
  );
}
