import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 text-center bg-nostalgia-bg overflow-hidden">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nostalgia-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-nostalgia-green/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <main className="relative z-10 max-w-4xl w-full">
        {/* Title Card */}
        <div className="mb-12 animate-fade-in space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif text-nostalgia-gold tracking-[0.2em] uppercase opacity-90">
                داستانی از جنس نور و زمان
            </h2>
            <h1 className="text-7xl sm:text-9xl font-serif font-bold text-nostalgia-wood drop-shadow-md leading-tight">
                روایتِ ما
            </h1>
        </div>
        
        {/* Story Text */}
        <div className="relative max-w-2xl mx-auto mb-16 space-y-6">
            <div className="absolute -top-6 -left-6 text-6xl text-nostalgia-gold/20 font-serif">"</div>
            <p className="text-2xl sm:text-3xl text-nostalgia-wood/80 font-serif leading-relaxed text-center">
              هر لحظه با تو، قابی‌ست ابدی. <br/>
              خاطراتی که بوی چوب نم‌خورده و نور غروب می‌دهند.
            </p>
            <div className="absolute -bottom-12 -right-6 text-6xl text-nostalgia-gold/20 font-serif transform rotate-180">"</div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link 
            href="/memories" 
            className="group relative px-10 py-5 bg-nostalgia-wood text-nostalgia-bg rounded-lg shadow-lg hover:shadow-nostalgia-wood/40 transition-all transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative font-bold text-xl font-serif tracking-wide flex items-center gap-3">
               مرور آلبوم
               <span className="w-1.5 h-1.5 bg-nostalgia-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </Link>
          
          <Link 
            href="/new" 
            className="group px-10 py-5 bg-transparent border-2 border-nostalgia-wood/30 text-nostalgia-wood rounded-lg hover:border-nostalgia-wood hover:bg-nostalgia-wood/5 transition-all text-xl font-serif font-bold tracking-wide"
          >
             ثبت قاب جدید
          </Link>
        </div>
      </main>

      {/* Footer / Date */}
      <footer className="absolute bottom-6 text-nostalgia-wood/40 font-mono text-sm tracking-widest uppercase">
         EST. 2023 // TEHRAN
      </footer>
    </div>
  );
}
