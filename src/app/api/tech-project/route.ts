import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all technologies
export async function GET() {
  try {
    const technologies = await prisma.tech.findMany({
      include: {
        technologies: true,  // This includes the technologies associated with each project
      },
    });
    return NextResponse.json(technologies);
  } catch {
    return NextResponse.json({ error: "Error fetching tech projects"}, { status: 500 });
  }
}

