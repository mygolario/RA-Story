import MemoryForm from '@/components/MemoryForm';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewMemoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/memories" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors font-medium">
            <ArrowRight size={20} />
            بازگشت به خاطرات
        </Link>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">ثبت خاطره جدید</h1>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <MemoryForm />
        </div>
      </div>
    </div>
  );
}
