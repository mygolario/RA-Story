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
  const coverImage = images.length > 0 ? images[0].url : null;

  return (
    <div className="min-h-screen bg-nostalgia-bg pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-4 transition-all duration-300 bg-nostalgia-bg/80 backdrop-blur-md border-b border-nostalgia-wood/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link 
            href="/memories" 
            className="flex items-center gap-2 text-nostalgia-wood/70 hover:text-nostalgia-wood transition-colors font-serif font-bold px-4 py-2 rounded-full hover:bg-nostalgia-wood/5"
          >
            <ArrowRight size={20} />
            <span className="hidden sm:inline pt-1">بازگشت به آلبوم</span>
          </Link>
          <Link 
            href={`/memory/${id}/edit`} 
            className="flex items-center gap-2 text-nostalgia-wood hover:text-nostalgia-bg border border-nostalgia-wood hover:bg-nostalgia-wood font-medium px-5 py-2 rounded-full transition-all"
          >
            <Edit2 size={16} />
            <span className="font-serif pt-1">ویرایش خاطره</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
        {coverImage ? (
            <>
                <div className="absolute inset-0 bg-nostalgia-wood/20 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-linear-to-t from-nostalgia-bg via-transparent to-transparent z-20" />
                <img 
                    src={coverImage} 
                    alt={memory.title} 
                    className="w-full h-full object-cover filter sepia-[0.3] contrast-[0.9]"
                />
            </>
        ) : (
             <div className="w-full h-full bg-nostalgia-wood/5 flex items-center justify-center">
                <Heart size={64} className="text-nostalgia-wood/20" />
             </div>
        )}
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-8 sm:p-16 text-center">
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-nostalgia-wood drop-shadow-lg mb-6 leading-tight">
                {memory.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium font-mono uppercase tracking-widest text-nostalgia-wood/80">
                <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {format(new Date(memory.date), 'd MMMM yyyy')}
                </div>
                {memory.location && (
                    <>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {memory.location}
                        </div>
                    </>
                )}
                {memory.mood && (
                    <div className="px-3 py-1 bg-nostalgia-wood/10 rounded-full border border-nostalgia-wood/20 flex items-center gap-2">
                        <Heart size={12} fill="currentColor" />
                        {memory.mood}
                    </div>
                )}
            </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-10 relative z-40">
        <article className="bg-[#FAF9F6] p-8 sm:p-16 shadow-2xl shadow-nostalgia-wood/10 border border-nostalgia-wood/5 relative">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
            
            {/* Content */}
            <div className="relative">
                <div className="flex justify-center mb-12 text-nostalgia-gold">
                    <Heart size={24} fill="currentColor" className="opacity-80" />
                </div>
                
                <div 
                    className="prose prose-xl prose-stone max-w-none font-serif text-nostalgia-wood leading-loose text-justify first-letter:text-5xl first-letter:font-bold first-letter:text-nostalgia-gold first-letter:float-right first-letter:ml-3"
                    dangerouslySetInnerHTML={{ __html: memory.content }}
                />

                {/* Additional Images Grid */}
                {images.length > 1 && (
                    <div className="mt-16 pt-12 border-t border-nostalgia-wood/10">
                        <h3 className="text-center font-serif text-xl text-nostalgia-wood/60 mb-8 tracking-widest uppercase">Other Moments</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {images.slice(1).map((img, idx) => (
                                <div key={idx} className="relative group aspect-square bg-gray-100 overflow-hidden shadow-md rotate-1 hover:rotate-0 transition-transform duration-500 p-2 pb-8 bg-white" style={{borderRadius: '2px'}}>
                                    <div className="w-full h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-nostalgia-wood/10 mix-blend-multiply z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                                        <img 
                                            src={img.url} 
                                            alt={img.caption || ''} 
                                            className="w-full h-full object-cover filter sepia-[0.4] contrast-[0.9] group-hover:sepia-0 group-hover:contrast-100 transition-all duration-700"
                                        />
                                    </div>
                                    {img.caption && (
                                        <p className="absolute bottom-2 left-0 right-0 text-center font-serif text-xs text-gray-500">{img.caption}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <div className="mt-16 text-center font-mono text-xs text-nostalgia-wood/30 tracking-widest uppercase">
                ثبت شده در {format(new Date(memory.createdAt), 'yyyy/MM/dd')}
            </div>
        </article>
      </main>
    </div>
  );
}
