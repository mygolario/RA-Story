'use client';

import Link from 'next/link';
import { format } from 'date-fns-jalali';
import { MapPin, Heart } from 'lucide-react';

interface MemoryCardProps {
  memory: {
    id: string;
    title: string;
    date: Date | string;
    location?: string | null;
    images?: any;
    mood?: string | null;
  };
}

export default function MemoryCard({ memory }: MemoryCardProps) {
  const date = new Date(memory.date);
  const images = typeof memory.images === 'string' 
    ? JSON.parse(memory.images) 
    : memory.images;
  
  const coverImage = images && images.length > 0 ? images[0].url : null;

  return (
    <Link 
      href={`/memory/${memory.id}`}
      className="group block relative bg-white p-3 pb-8 shadow-md hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 transform hover:-translate-y-1 hover:rotate-1"
      style={{ borderRadius: '2px' }}
    >
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm rotate-2 shadow-xs z-10 border-l border-r border-white/40" />

      {/* Image Frame */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100 mb-4 filter sepia-[0.3] group-hover:sepia-0 transition-all duration-700">
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={memory.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-nostalgia-gold/50 bg-nostalgia-bg">
            <Heart size={48} className="mb-2 opacity-50" />
            <span className="text-sm font-serif">بدون تصویر</span>
          </div>
        )}
        <div className="absolute inset-0 ring-1 ring-black/5 inset-shadow-sm pointer-events-none" />
      </div>
      
      {/* Handwritten-style Content */}
      <div className="px-2 text-center relative">
        <h3 className="text-xl font-serif font-bold text-nostalgia-wood mb-2 line-clamp-1 group-hover:text-nostalgia-wood/80 transition-colors">
          {memory.title}
        </h3>
        
        <div className="flex justify-center items-center gap-3 text-xs font-mono text-nostalgia-wood/60 uppercase tracking-widest">
            <span>{format(date, 'd MMMM yyyy')}</span>
            {memory.location && (
                <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <MapPin size={10} />
                        <span className="line-clamp-1 max-w-[80px]">{memory.location}</span>
                    </span>
                </>
            )}
        </div>
      </div>
    </Link>
  );
}
