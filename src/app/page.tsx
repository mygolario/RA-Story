import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-linear-to-br from-love-50 via-white to-love-100 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-love-200 animate-pulse">
        <Heart size={48} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-love-200 animate-pulse delay-700">
        <Heart size={64} fill="currentColor" />
      </div>

      <main className="relative z-10 max-w-2xl bg-white/60 backdrop-blur-md p-12 rounded-4xl shadow-xl border border-white/50">
        <div className="inline-block p-3 bg-love-100/50 rounded-full mb-6">
            <Heart className="text-love-500 w-8 h-8 animate-bounce" fill="currentColor" />
        </div>
        
        <h1 className="text-6xl font-serif font-bold mb-6 text-love-900 drop-shadow-sm">
          داستان عاشقانه ما
        </h1>
        
        <p className="text-2xl text-love-800/80 mb-10 leading-relaxed font-light">
          هر لحظه با تو، ورقی زرین از کتاب زندگی من است.
          <br />
          اینجا خاطرات شیرینمان را جاودانه می‌کنیم.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/memories" 
            className="px-8 py-4 bg-linear-to-r from-love-500 to-rose-500 text-white rounded-full hover:shadow-lg hover:shadow-love-300/50 transition-all transform hover:-translate-y-1 font-bold text-lg shadow-md"
          >
            مرور خاطرات
          </Link>
          <Link 
            href="/new" 
            className="px-8 py-4 bg-white text-love-600 border-2 border-love-200 rounded-full hover:bg-love-50 hover:border-love-300 transition-all font-bold text-lg"
          >
            ثبت لحظه جدید
          </Link>
        </div>
      </main>
    </div>
  );
}
