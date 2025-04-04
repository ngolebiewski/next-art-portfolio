// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Delete old content, useful when first creating the seed file function by function.
async function deleteContent() {
  const content = ["tech", "technology", "series"]; // Add the tables here to essentially 'DELETE FROM <tablename>;'

  for (const tableName of content) {
    console.log(`Deleting existing ${tableName.toUpperCase()} data from DB...`);
    try {
      await prisma[tableName].deleteMany(); // Deletes all records in the Technology table
      console.log(`Deleted existing ${tableName.toUpperCase()} data...`);
    } catch (error) {
      console.error(
        `Error deleting ${tableName.toUpperCase()} projects: ${error}`
      );
    }
  }
}

async function seedMediums() {
  const mediums = [
    "watercolor",
    "oil paint",
    "canvas",
    "paper",
    "pencil",
    "gouache",
    "super 8 film",
    "posca marker",
    "pen & ink",
    "graphite",
    "carbon paper",
    "ink",
    "egg tempera",
  ];

  for (const mediumName of mediums) {
    try {
      await prisma.medium.create({
        data: { name: mediumName },
      });
      console.info(`Added medium: ${mediumName}`);
    } catch (error) {
      if ((error as any).code === "P2002") {
        // Unique constraint violation
        console.warn(`Medium '${mediumName}' already exists.`);
      } else {
        console.error(
          `An unexpected error occurred while adding medium '${mediumName}':`,
          error
        );
      }
    }
  }
}

async function seedSeries() {
  const series = [
    "Chinatown",
    "Coney Island",
    "Street Vendors",
    "Adirondacks",
    "Art as Exchange",
    "Storefront",
    "NYC",
    "Paris",
    "Drawing-a-Day",
    "Collaboration",
    "Russ & Daughters",
    "Arthur Ave",
  ];

  for (const seriesName of series) {
    try {
      await prisma.series.create({
        data: { name: seriesName },
      });
      console.info(`Added medium: ${seriesName}`);
    } catch (error) {
      if ((error as any).code === "P2002") {
        // Unique constraint violation
        console.warn(`Medium '${seriesName}' already exists.`);
      } else {
        console.error(
          `An unexpected error occurred while adding medium '${seriesName}':`,
          error
        );
      }
    }
  }
}

async function seed() {
  const series = [
    "Chinatown",
    "Coney Island",
    "Street Vendors",
    "Adirondacks",
    "Art as Exchange",
    "Storefront",
    "NYC",
    "Paris",
    "Drawing-a-Day",
    "Collaboration",
    "Russ & Daughters",
    "Arthur Ave",
  ];

  for (const seriesName of series) {
    try {
      await prisma.series.create({
        data: { name: seriesName },
      });
      console.info(`Added medium: ${seriesName}`);
    } catch (error) {
      if ((error as any).code === "P2002") {
        // Unique constraint violation
        console.warn(`Medium '${seriesName}' already exists.`);
      } else {
        console.error(
          `An unexpected error occurred while adding medium '${seriesName}':`,
          error
        );
      }
    }
  }
}

async function seedTechnologies() {
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
    "Redux",
    "REST API",
    "Node.js",
    "Express.js",
    "Socket.io",
    "Howler.js",
    "p5.js",
    "CSS",
    "HTML",
    "WordPress",
    "Plotly",
    "JWT (JSON Web Tokens)",
    "GitHub",
    "Netlify",
    "Render",
    "AWS",
    "Tailwind CSS",
    "Jest",
    "PyTest",
    "Phaser3",
    "Flask",
    "PHP",
    "Pillow",
    "OpenCV",
    "Numpy",
    "Photoshop",
  ];

  for (const name of techList) {
    try {
      await prisma.technology.create({
        data: { name },
      });
    } catch (error) {
      console.error(`Error seeding tech "${name}": ${error}`);
    }
  }
  console.log("Finished Seeding Technologies...");
}

async function seedTechPortfolio() {
  const turtleEncoder = await prisma.tech.create({
    data: {
      projectTitle: "Turtle Encoder",
      headline:
        "Conceptual art project encoding secret messages with student-painted turtles.",
      imageUrl: "/images/tech-projects/turtle_encoder.jpg",
      gifUrl: null,
      role: "Artist, Project Lead, Software Engineer",
      description:
        "Led a 5th-grade class in a conceptual art project that encoded secret messages within an array of student-painted turtle images. The project explored representing information, converting letters to binary code, with turtles and their orientations representing 0s and 1s. Developed both a React/JavaScript web demo and a Python CLI script.",
      date: new Date("2025-03-17"),
      githubUrl: "https://github.com/ngolebiewski/turtle_code_python",
      deployedUrl: "https://turtle-encoder.onrender.com/",
      technologies: {
        connect: [
          { name: "Python" },
          { name: "Pillow" },
          { name: "React" },
          { name: "JavaScript" },
          { name: "Photoshop" },
        ],
      },
    },
  });
  /*
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
 ______               __          ____               __       ___       ___                  
/\__  _\             /\ \        /\  _`\            /\ \__  /'___\     /\_ \    __           
\/_/\ \/    __    ___\ \ \___    \ \ \L\ \___   _ __\ \ ,_\/\ \__/  ___\//\ \  /\_\    ___   
   \ \ \  /'__`\ /'___\ \  _ `\   \ \ ,__/ __`\/\`'__\ \ \/\ \ ,__\/ __`\\ \ \ \/\ \  / __`\ 
    \ \ \/\  __//\ \__/\ \ \ \ \   \ \ \/\ \L\ \ \ \/ \ \ \_\ \ \_/\ \L\ \\_\ \_\ \ \/\ \L\ \
     \ \_\ \____\ \____\\ \_\ \_\   \ \_\ \____/\ \_\  \ \__\\ \_\\ \____//\____\\ \_\ \____/
      \/_/\/____/\/____/ \/_/\/_/    \/_/\/___/  \/_/   \/__/ \/_/ \/___/ \/____/ \/_/\/___/ 

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
*/
  /*
  const towerOfZurpalen = await prisma.tech.create({
    data: {
      projectTitle: "The Tower of Zurpalen",
      headline:
        "Team project to build an 8-bit-like game using a 2D game framework and connecting to a database.",
      imageUrl:
        "https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/tower-of-zarpulen_titlescene.jpg",
      gifUrl: null,
      role: "Full-stack Developer, Game Designer, Pixel Artist, Animator",
      description: `Learned Phaser3 (JS 2-D game engine), used Node, Express, React, Redux, PostgreSQL, Prisma, CSS, and JS.\n
  Implemented Redux to manage state, wrote Redux thunks to handle API calls within the Phaser framework.\n
  Wrote the REST API endpoints, and middleware to authenticate JSON Web Tokens\n
  Thought up the "Zurpalen" plot twist and coded the reveal animation\n
  Designed the database schema, and implemented in PostgreSQL via Prisma ORM.`,
      date: new Date("2024-02-01"),
      githubUrl: "https://github.com/Team-7-7/newTOZ",
      deployedUrl: "https://tower-of-zurpalen.onrender.com/",
      technologies: {
        connect: [
          { name: "Phaser3" },
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "React" },
          { name: "Redux" },
          { name: "REST API" },
          { name: "PostgreSQL" },
          { name: "Prisma" },
          { name: "CSS" },
          { name: "JavaScript" },
        ],
      },
    },
  });

 

  const metSuperGuesser = await prisma.tech.create({
    data: {
      projectTitle: "Met Super Guesser",
      headline:
        "A multiple choice guessing game that utilizes The Metropolitan Museum of Art API.",
      imageUrl:
        "https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/met-super-guesser-pissaro.jpg",
      gifUrl: null,
      role: "Software Engineer",
      description: `A multiple choice guessing game that utilizes the The Metropolitan Museum of Art API to pull random artworks from the Drawings and Prints, European Paintings, and Photography departments. Which artist made that artwork?
    \n\n
  Fetched data from the Met’s public API using Javascript Async/Await and randomly selected artworks.\n
  Used Javascript to randomly sort the randomly selected artworks choices using the Fisher Yates Algorithm.`,
      date: new Date("2023-11-01"),
      githubUrl: "https://github.com/ngolebiewski/Met-Super-Guesser",
      deployedUrl: "https://met-super-guesser-beta.netlify.app/",
      technologies: {
        connect: [
          { name: "JavaScript" },
          { name: "React" },
          { name: "Netlify" },
          { name: "REST API" },
        ],
      },
    },
  });

  const sonicSoundscaper = await prisma.tech.create({
    data: {
      projectTitle: "Sonic Soundscaper",
      headline:
        "A collaborative soundscape and art generation app. When you play a sound, it activates that sound for all users online at that moment in time.",
      imageUrl:
        "https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/soundscaper-web.gif",
      gifUrl: null,
      role: "Software Engineer, Creative Coder",
      description:
        "A collaborative soundscape and art generation app. When you play a sound, it activates that sound for all users online at that moment in time.",
      date: new Date("2024-07-01"),
      githubUrl: "https://github.com/ngolebiewski/socket-sound-sharer",
      deployedUrl: "https://socket-sound-sharer.onrender.com/",
      technologies: {
        connect: [
          { name: "Socket.io" },
          { name: "p5.js" },
          { name: "Howler.js" },
          { name: "React" },
        ],
      },
    },
  });

  const nycKnights = await prisma.tech.create({
    data: {
      projectTitle: "NYC Knights Website",
      headline:
        'Redesigned and redeveloped the WordPress website for the PS 41 "The Greenwich Village School" chess club and team.',
      imageUrl:
        "https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/NYC-Knights-screenshot.jpg",
      gifUrl: null,
      role: "Web Developer",
      description: `Created a new child theme and design to replace the outdated PHP 7.4 theme, ensuring compatibility with PHP 8.x while maintaining the existing content.\n\n
  Set up a test server to develop the new theme without disrupting the live site.\n
  Authored a detailed README for the child theme on GitHub, facilitating future development and maintenance.`,
      date: new Date("2024-06-01"),
      githubUrl: "https://github.com/ngolebiewski/nyc-knights",
      deployedUrl: "https://nycknights.com",
      technologies: {
        connect: [{ name: "WordPress" }, { name: "PHP" }, { name: "CSS" }],
      },
    },
  });

  const keywordify = await prisma.tech.create({
    data: {
      projectTitle: "Keywordify",
      headline:
        "An app that compares tech keywords in a job description and a resume.",
      imageUrl:
        "https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/keywordify-animation.gif",
      gifUrl:
        "https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/keywordify-animation.gif",
      role: "Software Engineer",
      description: `I wanted to do a project with Python and learn Flask. Keywordify is an app for a software engineer's job search that compares the tech keywords in a job description and their resume. Just save a resume and a job description as .txt files and upload. With the results, green for IN and red for OUT, you can get a sense of how well suited you are and your resume is. Also, I wanted to try Plotly, the sunburst graph provides a graphic represenation of keywords in and out of the resume. Perhaps this will help you get through the ATS and onto a hirer's desk.
    \n\n
  The Python code 'sanitizes' the txt files to prevent injection attacks.\n
  For privacy, I wrote Python code to delete the email address and phone number from uploaded resumes using a Regular Expression.`,
      date: new Date("2024-08-01"),
      githubUrl: "https://github.com/ngolebiewski/keywordify",
      deployedUrl: "https://keywordify.onrender.com/",
      technologies: {
        connect: [{ name: "Python" }, { name: "Flask" }, { name: "Plotly" }],
      },
    },
  });

  const skyCamFlicker = await prisma.tech.create({
    data: {
      projectTitle: "SkyCam: Flicker",
      headline: "Creative Technologist",
      imageUrl:
        "https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/sol_296.jpg",
      gifUrl: null,
      role: "Creative Technologist",
      description:
        "A Python script that animates images from NASA's Perseverance Rover's SkyCam.",
      date: new Date("2024-11-01"),
      githubUrl: "https://github.com/ngolebiewski/",
      deployedUrl: "https://youtu.be/uLlSjLck_xE?si=j3ODsNumPi0T2cP2",
      technologies: {
        connect: [
          { name: "Python" },
          { name: "Pillow" },
          { name: "OpenCV" },
          { name: "Numpy" },
        ],
      },
    },
  });
*/
  console.log("Tech Portfolio Items seeded successfully!");
}

async function main(deleteExistingData = false) {
  deleteExistingData
    ? deleteContent()
    : console.log("delete all content: false");
  // seedTechnologies();
  seedTechPortfolio();
  // seedSeries();
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

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
  // seedMediums()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// SEED: `pnpm prisma db seed`
