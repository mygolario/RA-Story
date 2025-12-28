import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Memory App</h1>
      <div className="flex gap-4">
        <Link
          href="/memories"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View Memories
        </Link>
        <Link
          href="/new"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add New Memory
        </Link>
      </div>
    </div>
  );
}
