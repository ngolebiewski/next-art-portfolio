import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all tech projects
export async function GET() {
  try {
    const technologies = await prisma.tech.findMany();
    return NextResponse.json(technologies);
  } catch (error) {
    return NextResponse.json({ error: `Error fetching technologies, error: ${error}` }, { status: 500 });
  }
}

