'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from './RichTextEditor';
import { Plus, X, Image as ImageIcon, Sparkles } from 'lucide-react';

interface MemoryFormProps {
  initialData?: any;
  isEditing?: boolean;
}

export default function MemoryForm({ initialData, isEditing = false }: MemoryFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    date: initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    location: initialData?.location || '',
    mood: initialData?.mood || '',
    content: initialData?.content || '',
    images: initialData?.images ? (typeof initialData.images === 'string' ? JSON.parse(initialData.images) : initialData.images) : [],
  });
  const [newImageUrl, setNewImageUrl] = useState('');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEditing ? `/api/memories/${initialData.id}` : '/api/memories';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/memories');
        router.refresh();
      } else {
        alert('خطا در ذخیره سازی');
      }
    } catch (error) {
      console.error(error);
      alert('خطایی رخ داد');
    } finally {
      setLoading(false);
    }
  };

  const addImage = () => {
    if (newImageUrl.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, { url: newImageUrl, caption: '' }]
      });
      setNewImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData({ ...formData, images: newImages });
  };

  return (
    <form onSubmit={handleCreate} className="space-y-8 animate-fade-in text-right" dir="rtl">
        
      <div className="space-y-6">
        <div>
            <label className="block text-sm font-bold text-love-900 mb-2">عنوان خاطره</label>
            <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-4 bg-love-50/50 border-2 border-transparent focus:border-love-300 rounded-2xl focus:bg-white outline-none font-serif text-xl transition-all placeholder:text-love-300"
            placeholder="مثال: روز آشنایی..."
            />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
            <label className="block text-sm font-bold text-love-900 mb-2">تاریخ</label>
            <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-love-400 outline-none text-right"
            />
            </div>
            <div>
            <label className="block text-sm font-bold text-love-900 mb-2">مکان</label>
            <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-love-400 outline-none"
                placeholder="کجا بودیم؟"
            />
            </div>
        </div>
        
        <div>
            <label className="flex items-center gap-2 text-sm font-bold text-love-900 mb-2">
                <Sparkles size={16} className="text-yellow-500" />
                حس و حال
            </label>
            <input
            type="text"
            value={formData.mood}
            onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-love-400 outline-none"
            placeholder="چه حسی داشتیم؟ (عاشقانه، شاد...)"
            />
        </div>

        <div>
            <label className="block text-sm font-bold text-love-900 mb-2">شرح خاطره</label>
            <div className="prose-editor-wrapper rounded-2xl overflow-hidden border-2 border-gray-100 focus-within:border-love-300 transition-colors shadow-sm">
                <RichTextEditor
                content={formData.content}
                onChange={(html) => setFormData({ ...formData, content: html })}
                />
            </div>
        </div>

        <div className="bg-love-50 p-6 rounded-3xl border border-love-100">
            <label className="flex items-center gap-2 text-sm font-bold text-love-900 mb-4">
                <ImageIcon size={18} />
                تصاویر
            </label>
            <div className="flex gap-2 mb-4">
                <input
                type="url"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="لینک تصویر را اینجا وارد کنید..."
                className="flex-1 p-3 rounded-xl border-none shadow-sm outline-none text-sm text-left focus:ring-2 focus:ring-love-400"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addImage())}
                style={{ direction: 'ltr' }}
                />
                <button
                type="button"
                onClick={addImage}
                className="bg-white text-love-500 hover:bg-love-500 hover:text-white px-4 py-2 rounded-xl flex items-center shadow-sm transition-all border border-love-200"
                >
                <Plus size={20} />
                </button>
            </div>
            
            {formData.images.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {formData.images.map((img: any, idx: number) => (
                    <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-md aspect-square bg-white">
                    <img src={img.url} alt="preview" className="w-full h-full object-cover" />
                    <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg transform hover:scale-110"
                    >
                        <X size={14} />
                    </button>
                    </div>
                ))}
                </div>
            ) : (
                <div className="text-center text-love-300 py-4 text-sm italic">
                    هنوز تصویری اضافه نشده است
                </div>
            )}
        </div>
      </div>

      <div className="pt-6 border-t border-love-100 flex justify-end gap-4">
        <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 text-love-700 hover:bg-love-50 rounded-xl transition-colors font-medium hover:shadow-sm"
        >
            انصراف
        </button>
        <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-linear-to-r from-love-500 to-rose-600 text-white rounded-xl hover:shadow-lg hover:shadow-rose-300/50 transition-all transform hover:-translate-y-0.5 shadow-md disabled:opacity-70 disabled:transform-none font-bold"
        >
            {loading ? 'در حال ثبت...' : isEditing ? 'ذخیره تغییرات' : 'ثبت خاطره ❤'}
        </button>
      </div>
    </form>
  );
}
