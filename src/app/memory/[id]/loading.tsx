export default function MemoryLoading() {
  return (
    <div className="min-h-screen bg-nostalgia-bg pb-20">
      {/* Navigation Skeleton */}
      <nav className="fixed top-0 w-full z-50 p-4 bg-nostalgia-bg/80 backdrop-blur-md border-b border-nostalgia-wood/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="w-32 h-9 bg-nostalgia-wood/10 rounded-full animate-pulse" />
          <div className="w-24 h-9 bg-nostalgia-wood/10 rounded-full animate-pulse" />
        </div>
      </nav>

      {/* Hero Skeleton */}
      <div className="relative h-[60vh] sm:h-[70vh] w-full bg-nostalgia-wood/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-nostalgia-wood/5 animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 z-30 p-16 text-center flex flex-col items-center gap-4">
            <div className="h-16 w-3/4 bg-nostalgia-wood/10 rounded animate-pulse" />
            <div className="h-6 w-1/2 bg-nostalgia-wood/10 rounded animate-pulse" />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 -mt-10 relative z-40">
        <div className="bg-[#FAF9F6] p-16 shadow-2xl border border-nostalgia-wood/5 min-h-[500px]">
            <div className="flex justify-center mb-12">
                <div className="w-6 h-6 bg-nostalgia-wood/10 rounded-full animate-pulse" />
            </div>
            
            <div className="space-y-6">
                <div className="h-4 bg-nostalgia-wood/5 rounded w-full animate-pulse" />
                <div className="h-4 bg-nostalgia-wood/5 rounded w-full animate-pulse" />
                <div className="h-4 bg-nostalgia-wood/5 rounded w-5/6 animate-pulse" />
                <div className="h-4 bg-nostalgia-wood/5 rounded w-full animate-pulse" />
                <div className="h-4 bg-nostalgia-wood/5 rounded w-4/5 animate-pulse" />
                <div className="h-32 bg-nostalgia-wood/5 rounded w-full animate-pulse mt-8" />
            </div>
        </div>
      </main>
    </div>
  );
}
