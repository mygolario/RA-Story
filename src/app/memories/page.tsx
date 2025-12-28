import MemoryCard from '@/components/MemoryCard';
import Link from 'next/link';
import { Plus, Heart } from 'lucide-react';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function MemoriesPage() {
  const memories = await prisma.memory.findMany({
    orderBy: { date: 'desc' },
  });

  return (
    <div className="min-h-screen bg-nostalgia-bg pb-20 overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-nostalgia-bg/90 backdrop-blur-md border-b border-nostalgia-wood/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-nostalgia-wood text-nostalgia-bg p-2 rounded-full group-hover:bg-nostalgia-wood/80 transition-colors">
                <Heart className="w-5 h-5" fill="currentColor" />
            </div>
            <h1 className="text-xl font-serif font-bold text-nostalgia-wood tracking-wide uppercase">آلبوم خاطرات</h1>
          </Link>
          <Link 
            href="/new" 
            className="px-6 py-2 border border-nostalgia-wood text-nostalgia-wood rounded hover:bg-nostalgia-wood hover:text-nostalgia-bg transition-all font-serif font-bold text-sm uppercase tracking-wider"
          >
            ثبت خاطره
          </Link>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        {/* Cinematic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 auto-rows-max px-4 sm:px-0">
          {memories.map((memory, index) => (
            <div 
                key={memory.id} 
                className={`${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-500 origin-center`}
            >
                <MemoryCard memory={memory} />
            </div>
          ))}
          
          {memories.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-32 text-nostalgia-wood/40 space-y-4">
              <div className="w-24 h-24 border-2 border-dashed border-nostalgia-wood/30 rounded-full flex items-center justify-center">
                  <Heart size={48} strokeWidth={1} />
              </div>
              <p className="text-2xl font-serif">هنوز خاطره‌ای ثبت نشده است</p>
              <Link href="/new" className="text-nostalgia-gold hover:text-nostalgia-wood underline underline-offset-4 decoration-1 transition-colors">
                شروع داستان
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
