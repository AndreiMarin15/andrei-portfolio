import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "NextJS",
    },
    {
      title: "React",
    },
    {
      title: "VueJS",
    },
    {
      title: "Flutter",
    },
    {
      title: "NodeJS",
    },
    {
      title: "ExpressJS",
    },

    {
      title: "Bun",
    },
    {
      title: "npm",
    },
    {
      title: "yarn",
    },
  ]);
}
