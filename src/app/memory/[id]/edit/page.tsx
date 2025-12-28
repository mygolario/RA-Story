import MemoryForm from '@/components/MemoryForm';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function EditMemoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const memory = await prisma.memory.findUnique({
    where: { id },
  });

  if (!memory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href={`/memory/${id}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors font-medium">
            <ArrowRight size={20} />
            بازگشت به خاطره
        </Link>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">ویرایش خاطره</h1>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <MemoryForm initialData={memory} isEditing />
        </div>
      </div>
    </div>
  );
}
