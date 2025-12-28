import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const memory = await prisma.memory.findUnique({
    where: { id },
  });

  if (!memory) {
    return NextResponse.json({ error: 'Memory not found' }, { status: 404 });
  }

  return NextResponse.json(memory);
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const json = await request.json();
    const memory = await prisma.memory.update({
      where: { id },
      data: {
        title: json.title,
        date: json.date ? new Date(json.date) : undefined,
        location: json.location,
        mood: json.mood,
        content: json.content,
        images: json.images ? JSON.stringify(json.images) : undefined,
      },
    });
    return NextResponse.json(memory);
  } catch (error) {
       console.error('Error updating memory:', error);
    return NextResponse.json({ error: 'Error updating memory' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.memory.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Memory deleted' });
  } catch (error) {
      console.error('Error deleting memory:', error);
    return NextResponse.json({ error: 'Error deleting memory' }, { status: 500 });
  }
}
