import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "MongoDB",
    },
    {
      title: "Firebase",
    },
    {
      title: "Supabase",
    },
    {
      title: "Postgresql",
    },
    {
      title: "MySQL",
    },
    {
      title: "SQLite",
    },
    {
      title: "Notion",
    },
    {
      title: "Prisma",
    },
  ]);
}
