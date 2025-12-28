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
    <div className="min-h-screen bg-love-50/50 pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-love-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-love-100 p-2 rounded-full group-hover:bg-love-200 transition-colors">
                <Heart className="text-love-500 w-5 h-5" fill="currentColor" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-love-900">آلبوم خاطرات</h1>
          </Link>
          <Link 
            href="/new" 
            className="bg-linear-to-r from-love-500 to-rose-500 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-love-300/40 transition-all transform hover:-translate-y-0.5 text-sm font-bold"
          >
            <Plus size={20} />
            <span>ثبت خاطره جدید</span>
          </Link>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
          
          {memories.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-32 text-love-400">
              <Heart size={64} className="mb-4 opacity-30" />
              <p className="text-xl font-medium text-love-800/60">هنوز برگی از دفتر خاطراتمان نوشته نشده...</p>
              <Link href="/new" className="text-love-600 hover:text-love-800 mt-4 border-b-2 border-love-200 hover:border-love-400 transition-colors pb-1">
                اولین خاطره را شما ثبت کنید
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
