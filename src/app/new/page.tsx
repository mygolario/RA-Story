export default function NewMemoryPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">New Memory</h1>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Title" className="border p-2 rounded" />
        <textarea placeholder="Content" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
      </form>
    </div>
  );
}
