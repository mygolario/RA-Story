const { PrismaClient } = require('@prisma/client');
// require('dotenv').config();
process.env.DATABASE_URL="postgres://1a7a349b45b9e9a71f1790b8202d49954bd89873f54c496bcfed683782c24975:sk_5ptks6EPtL4cchbfMg_Fe@db.prisma.io:5432/postgres?sslmode=require";

const prisma = new PrismaClient();

async function main() {
  const memories = [
    {
      title: 'First Date',
      date: new Date('2023-01-15'),
      location: 'Cafe Terrace',
      mood: 'Excited',
      content: 'We met for coffee and talked for hours. It was magical.',
      images: [
        { url: 'https://placehold.co/600x400/png?text=Coffee+Date', caption: 'Our coffee cups' }
      ]
    },
    {
      title: 'Beach Trip',
      date: new Date('2023-06-20'),
      location: 'Sunny Beach',
      mood: 'Happy',
      content: 'A wonderful day at the beach. Specifically, playing in the waves.',
      images: [
        { url: 'https://placehold.co/600x400/png?text=Beach+Sunset', caption: 'Sunset view' },
        { url: 'https://placehold.co/600x400/png?text=Sand+Castle', caption: 'The castle we built' }
      ]
    },
    {
      title: 'Hiking Adventure',
      date: new Date('2023-09-10'),
      location: 'Mountain Trail',
      mood: 'Tired but fulfilled',
      content: 'We conquered the peak! The view was worth the climb.',
      images: [
        { url: 'https://placehold.co/600x400/png?text=Mountain+Peak', caption: 'At the top' }
      ]
    },
    {
      title: 'Anniversary Dinner',
      date: new Date('2024-01-15'),
      location: 'Fancy Restaurant',
      mood: 'Romantic',
      content: 'Celebrating one year together. The food was amazing.',
      images: [
        { url: 'https://placehold.co/600x400/png?text=Dinner', caption: 'Cheers!' }
      ]
    },
    {
      title: 'Lazy Sunday',
      date: new Date('2024-03-05'),
      location: 'Home',
      mood: 'Relaxed',
      content: 'Just watching movies and eating popcorn all day.',
      images: [
        { url: 'https://placehold.co/600x400/png?text=Movies', caption: 'Movie marathon' }
      ]
    },
    {
      title: 'Road Trip to North',
      date: new Date('2024-05-20'),
      location: 'The North Road',
      mood: 'Adventurous',
      content: 'Driving through the winding roads with loud music.',
      images: [
        { url: 'https://placehold.co/600x400/png?text=Road+Trip', caption: 'On the road' }
      ]
    }
  ];

  console.log('Seeding memories...');
  // Clear existing to avoid dupes if re-running
  await prisma.memory.deleteMany({});
  
  for (const memory of memories) {
    await prisma.memory.create({
      data: {
        ...memory,
        images: JSON.stringify(memory.images),
      },
    });
  }
  console.log('Seeded 6 memories successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
