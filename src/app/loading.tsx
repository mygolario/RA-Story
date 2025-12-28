import { Heart } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-love-50/50 backdrop-blur-xs">
      <div className="relative">
        {/* Pulsing background heart */}
        <Heart 
          size={80} 
          className="text-love-200 animate-ping absolute top-0 left-0 opacity-75" 
          fill="currentColor" 
        />
        {/* Main bouncing heart */}
        <Heart 
          size={80} 
          className="text-love-500 animate-bounce relative z-10" 
          fill="currentColor" 
        />
      </div>
      <p className="mt-8 text-lg font-medium text-love-800 animate-pulse font-serif">
        در حال بارگذاری خاطرات عاشقانه...
      </p>
    </div>
  );
}
