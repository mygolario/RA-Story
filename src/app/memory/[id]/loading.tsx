export default function MemoryLoading() {
  return (
    <div className="min-h-screen bg-love-50/30">
      {/* Navigation Skeleton */}
      <nav className="fixed top-0 w-full z-30 p-4 bg-white/80 backdrop-blur-md border-b border-white/50 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="w-32 h-9 bg-love-100 rounded-full animate-pulse" />
          <div className="w-24 h-9 bg-love-100 rounded-full animate-pulse" />
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-love-100/50 overflow-hidden border border-white">
            
            {/* Header Content Skeleton */}
            <div className="p-8 sm:p-12 text-center border-b border-love-50 bg-linear-to-b from-love-50/50 to-transparent">
                <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                    <div className="w-32 h-8 bg-white rounded-full animate-pulse border border-love-100" />
                    <div className="w-24 h-8 bg-white rounded-full animate-pulse border border-love-100" />
                    <div className="w-20 h-8 bg-rose-100/50 rounded-full animate-pulse" />
                </div>

                <div className="h-12 sm:h-16 w-3/4 mx-auto bg-gray-200 rounded-xl animate-pulse mb-4" />
            </div>

            {/* Gallery Skeleton */}
            <div className="p-6 md:p-8 -mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
                    <div className="md:col-span-2 md:row-span-2 md:h-[616px] bg-gray-100 rounded-3xl animate-pulse relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="px-8 sm:px-16 py-10 max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="w-8 h-8 bg-love-200 rounded-full animate-pulse" />
                </div>
                <div className="space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded w-4/5 animate-pulse" />
                </div>
            </div>
            
            <div className="bg-love-50/50 py-6 text-center flex justify-center">
                <div className="w-40 h-5 bg-love-100/50 rounded animate-pulse" />
            </div>
        </div>
      </main>
    </div>
  );
}
