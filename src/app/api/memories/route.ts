import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const memories = await prisma.memory.findMany({
    orderBy: { date: 'desc' },
  });
  return NextResponse.json(memories);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const memory = await prisma.memory.create({
      data: {
        title: json.title,
        date: new Date(json.date),
        location: json.location,
        mood: json.mood,
        content: json.content,
        images: JSON.stringify(json.images || []),
      },
    });
    return NextResponse.json(memory, { status: 201 });
  } catch (error) {
    console.error('Error creating memory:', error);
    return NextResponse.json({ error: 'Error creating memory' }, { status: 500 });
  }
}
