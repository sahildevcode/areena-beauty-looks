import React, { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { getImageUrl } from '../utils/asset';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + diff, 100);
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF5F7] transition-all duration-700 ${
        isFading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Decorative background glows */}
      <div className="absolute w-72 h-72 rounded-full bg-pink-200/40 blur-3xl -top-10 -left-10 animate-pulse-subtle pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full bg-rose-200/30 blur-3xl -bottom-10 -right-10 animate-pulse-subtle pointer-events-none" />

      {/* Center Icon & Branding */}
      <div className="relative flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-white shadow-lg shadow-pink-200/60 flex items-center justify-center border border-pink-100">
            <Heart className="w-10 h-10 text-[#C45B72] fill-[#C45B72] animate-bounce" />
          </div>
          <Sparkles className="w-6 h-6 text-[#E58C9D] absolute -top-1 -right-2 animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        <div className="flex items-center gap-1.5 mb-2">
          <img
            src={getImageUrl('images/arina-logo.png')}
            alt="ARINA BEAUTY LOOKS"
            className="h-7 sm:h-9 w-auto object-contain"
          />
          <span className="text-[#C45B72] text-xl font-normal">♡</span>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#C45B72] font-medium mb-6">
          BEAUTY • STYLE • YOU
        </p>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-pink-100 rounded-full overflow-hidden p-0.5 border border-pink-200/50 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#F47092] to-[#C45B72] rounded-full transition-all duration-200 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-64 mt-2.5 text-xs text-rose-800/70 font-medium">
          <span className="font-script text-base text-[#C45B72]">Preparing your glow...</span>
          <span className="font-mono">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
