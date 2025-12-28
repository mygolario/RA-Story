export default async function MemoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Memory Detail</h1>
      <p>Viewing memory ID: {id}</p>
    </div>
  );
}
