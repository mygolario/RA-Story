export default function MemoriesLoading() {
  return (
    <div className="min-h-screen bg-nostalgia-bg pb-20">
      {/* Header Skeleton */}
      <header className="fixed w-full top-0 z-50 bg-nostalgia-bg/90 backdrop-blur-md border-b border-nostalgia-wood/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-nostalgia-wood/10 rounded-full animate-pulse" />
            <div className="h-6 w-32 bg-nostalgia-wood/10 rounded animate-pulse" />
          </div>
          <div className="h-9 w-28 bg-nostalgia-wood/10 rounded animate-pulse" />
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 auto-rows-max px-4 sm:px-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white p-3 pb-8 shadow-md h-[400px] flex flex-col relative" style={{ borderRadius: '2px' }}>
               {/* Tape Skeleton */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-black/5 rotate-2 z-10" />

              {/* Image Skeleton */}
              <div className="aspect-4/3 bg-gray-200 animate-pulse w-full mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
              
              {/* Content Skeleton */}
              <div className="px-2 flex-1 flex flex-col items-center">
                <div className="w-3/4 h-6 bg-nostalgia-wood/10 rounded mb-3 animate-pulse" />
                <div className="w-1/2 h-3 bg-nostalgia-wood/10 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
