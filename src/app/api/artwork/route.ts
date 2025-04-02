import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all artwork
export async function GET() {
  try {
    const artworks = await prisma.artwork.findMany();
    return NextResponse.json(artworks);
  } catch {
    return NextResponse.json({ error: "Error fetching artwork" }, { status: 500 });
  }
}

// POST new artwork
// export async function POST(req: Request) {
//   try {
//     const { title, description, imageUrl } = await req.json();
    
//     const newArtwork = await prisma.artwork.create({
//       data: { title, description, imageUrl },
//     });

//     return NextResponse.json(newArtwork, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Error adding artwork" }, { status: 500 });
//   }
// }
