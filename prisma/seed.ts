// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed Technologies
  console.log("Seeding Technologies...");
  const techList: string[] = [
    "React",
    "Next.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "Prisma",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "FastAPI",
    "Express",
  ];

  for (const name of techList) {
    try {
      await prisma.technology.create({
        data: { name },
      });
    } catch (error) {
      console.error(`Error seeing tech "${name}": ${error}`);
    }
  }
  console.log("Finished Seeding Technologies...");
}

//   const nodejs = await prisma.technology.create({
//     data: { name: 'Node.js' },
//   });

//   // Seed Tech Projects
//   await prisma.tech.create({
//     data: {
//       projectTitle: 'Portfolio Website',
//       headline: 'A modern portfolio built with Next.js and Prisma',
//       heroImageUrl: '/images/portfolio.jpg',
//       gifUrl: '/images/portfolio.gif',
//       description: 'A sleek and interactive portfolio site.',
//       date: new Date(),
//       githubUrl: 'https://github.com/your-username/portfolio',
//       deployedUrl: 'https://yourportfolio.com',
//       technologies: {
//         connect: [{ id: react.id }, { id: nodejs.id }],
//       },
//     },
//   });

//   // Seed Mediums
//   const oil = await prisma.medium.create({
//     data: { name: 'Oil on Canvas' },
//   });

//   const digital = await prisma.medium.create({
//     data: { name: 'Digital' },
//   });

//   // Seed Tags
//   const abstract = await prisma.tag.create({
//     data: { name: 'Abstract' },
//   });

//   const surreal = await prisma.tag.create({
//     data: { name: 'Surreal' },
//   });

//   // Seed Series
//   const modernArt = await prisma.series.create({
//     data: {
//       name: 'Modern Art Collection',
//     },
//   });

//   // Seed Artworks
//   await prisma.artwork.create({
//     data: {
//       title: 'Cosmic Waves',
//       size: '24x36 inches',
//       year: 2023,
//       description: 'An abstract painting of cosmic waves.',
//       etsyUrl: 'https://etsy.com/example',
//       imageUrl: '/images/cosmic-waves.jpg',
//       type: 'painting',
//       source: 'studio',
//       series: { connect: { id: modernArt.id } },
//       mediums: {
//         connect: [{ id: oil.id }],
//       },
//       tags: {
//         connect: [{ id: abstract.id }],
//       },
//     },
//   });

//   await prisma.artwork.create({
//     data: {
//       title: 'Dreamscape',
//       size: '30x40 inches',
//       year: 2022,
//       description: 'A surreal digital painting.',
//       imageUrl: '/images/dreamscape.jpg',
//       type: 'art',
//       source: 'instagram',
//       series: { connect: { id: modernArt.id } },
//       mediums: {
//         connect: [{ id: digital.id }],
//       },
//       tags: {
//         connect: [{ id: surreal.id }],
//       },
//     },
//   });

//   console.log('Database seeded successfully!');
// }

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
