export default function MemoriesLoading() {
  return (
    <div className="min-h-screen bg-love-50/50 pb-20">
      {/* Header Skeleton */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-love-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-love-100 rounded-full animate-pulse" />
            <div className="h-8 w-32 bg-love-100 rounded-lg animate-pulse" />
          </div>
          <div className="h-10 w-40 bg-love-200 rounded-full animate-pulse" />
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-love-100 h-[400px] flex flex-col">
              {/* Image Skeleton */}
              <div className="h-56 bg-love-100 animate-pulse w-full relative">
                <div className="absolute top-4 right-4 w-20 h-6 bg-white/50 rounded-full" />
              </div>
              
              {/* Content Skeleton */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-24 h-4 bg-love-50 rounded animate-pulse" />
                  <div className="w-16 h-4 bg-love-50 rounded animate-pulse" />
                </div>
                <div className="w-3/4 h-6 bg-love-100 rounded mb-3 animate-pulse" />
                <div className="space-y-2 mb-6">
                  <div className="w-full h-3 bg-love-50 rounded animate-pulse" />
                  <div className="w-full h-3 bg-love-50 rounded animate-pulse" />
                  <div className="w-2/3 h-3 bg-love-50 rounded animate-pulse" />
                </div>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-love-50">
                  <div className="w-8 h-8 bg-love-100 rounded-full animate-pulse" />
                  <div className="w-24 h-8 bg-love-100 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
