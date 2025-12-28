import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns-jalali';
import { MapPin, Calendar, ArrowRight, Edit2, Heart } from 'lucide-react';
import prisma from '@/lib/prisma';

export default async function MemoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const memory = await prisma.memory.findUnique({
    where: { id },
  });

  if (!memory) {
    notFound();
  }

  const images = (memory.images ? (typeof memory.images === 'string' ? JSON.parse(memory.images) : memory.images) : []) as any[];

  return (
    <div className="min-h-screen bg-love-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-30 p-4 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-white/50 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link 
            href="/memories" 
            className="flex items-center gap-2 text-love-800/70 hover:text-love-900 transition-colors font-medium px-3 py-1.5 rounded-full hover:bg-love-50"
          >
            <ArrowRight size={20} />
            <span className="hidden sm:inline">بازگشت به آلبوم</span>
          </Link>
          <Link 
            href={`/memory/${id}/edit`} 
            className="flex items-center gap-2 text-love-600 hover:text-white border border-love-200 hover:bg-love-500 font-medium px-4 py-1.5 rounded-full transition-all"
          >
            <Edit2 size={16} />
            <span>ویرایش</span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 max-w-5xl mx-auto animate-fade-in">
        <article className="bg-white rounded-[2.5rem] shadow-xl shadow-love-100/50 overflow-hidden border border-white">
            
            {/* Header Content */}
            <div className="p-8 sm:p-12 text-center border-b border-love-50 bg-linear-to-b from-love-50/50 to-transparent">
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium mb-6">
                    <div className="px-4 py-1.5 bg-white rounded-full text-love-700 shadow-sm border border-love-100 flex items-center gap-2">
                        <Calendar size={16} />
                        {format(new Date(memory.date), 'd MMMM yyyy')}
                    </div>
                    {memory.location && (
                        <div className="px-4 py-1.5 bg-white rounded-full text-gray-600 shadow-sm border border-gray-100 flex items-center gap-2">
                            <MapPin size={16} />
                            {memory.location}
                        </div>
                    )}
                    {memory.mood && (
                        <div className="px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full shadow-sm flex items-center gap-1.5">
                            <Heart size={14} fill="currentColor" />
                            {memory.mood}
                        </div>
                    )}
                </div>

                <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gray-900 leading-tight mb-4">
                    {memory.title}
                </h1>
            </div>

            {/* Gallery */}
            {images.length > 0 && (
                <div className="p-6 md:p-8 -mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
                        {images.map((img, idx) => (
                            <div 
                                key={idx} 
                                className={`relative group rounded-3xl overflow-hidden shadow-md ${
                                    idx === 0 ? 'md:col-span-2 md:row-span-2 md:h-[616px]' : ''
                                }`}
                            >
                                <img 
                                    src={img.url} 
                                    alt={img.caption || memory.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                />
                                {img.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-6 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="font-medium text-lg leading-relaxed">{img.caption}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="px-8 sm:px-16 py-10 max-w-4xl mx-auto">
                <div className="flex justify-center mb-8 text-love-200">
                    <Heart size={32} />
                </div>
                <div 
                    className="prose prose-lg prose-rose max-w-none font-serif text-gray-700 leading-loose text-justify"
                    dangerouslySetInnerHTML={{ __html: memory.content }}
                />
            </div>
            
            <div className="bg-love-50/50 py-6 text-center text-sm text-love-400/80">
                تاریخ ثبت: {format(new Date(memory.createdAt), 'yyyy/MM/dd')}
            </div>
        </article>
      </main>
    </div>
  );
}
