import { Heart } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-nostalgia-bg backdrop-blur-xs">
      <div className="relative">
        <div className="absolute inset-0 bg-nostalgia-gold/20 blur-xl rounded-full animate-pulse" />
        {/* Pulsing background heart */}
        <Heart 
          size={80} 
          className="text-nostalgia-wood/20 animate-ping absolute top-0 left-0" 
          fill="currentColor" 
        />
        {/* Main bouncing heart */}
        <Heart 
          size={80} 
          className="text-nostalgia-gold animate-bounce relative z-10" 
          fill="currentColor" 
        />
      </div>
      <p className="mt-8 text-xl font-serif font-medium text-nostalgia-wood animate-pulse tracking-widest uppercase">
        در حال بازیابی خاطرات...
      </p>
    </div>
  );
}
