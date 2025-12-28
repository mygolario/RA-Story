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
      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-love-200/50 transition-all duration-500 transform hover:-translate-y-1 border border-love-100"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={memory.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-love-300 bg-love-50">
            <Heart size={48} className="mb-2 opacity-50" />
            <span className="text-sm font-medium">بدون تصویر</span>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {memory.mood && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-love-600 shadow-sm border border-love-100 flex items-center gap-1">
            <Heart size={12} fill="currentColor" />
            {memory.mood}
          </div>
        )}
      </div>
      
      <div className="p-5 relative">
        <div className="absolute -top-6 left-4 bg-white p-3 rounded-2xl shadow-md border border-love-50 text-center min-w-[60px]">
            <div className="text-xl font-bold text-love-600 leading-none mb-1">{format(date, 'd')}</div>
            <div className="text-[10px] text-gray-500 font-medium uppercase">{format(date, 'MMMM')}</div>
        </div>

        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3 line-clamp-1 pt-2 group-hover:text-love-600 transition-colors">
          {memory.title}
        </h3>
        
        {memory.location && (
          <div className="flex items-center gap-1.5 text-sm text-gray-500 group-hover:text-love-500 transition-colors">
            <MapPin size={16} />
            <span className="line-clamp-1">{memory.location}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
