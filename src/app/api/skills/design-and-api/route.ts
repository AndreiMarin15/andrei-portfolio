import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "tailwind",
    },
    {
      title: "bootstrap",
    },
    {
      title: "Figma",
    },
    {
      title: "materialui",
    },
    {
      title: "styledcomponents",
    },
    {
      title: "ps",
    },
    {
      title: "Postman",
    },
  ]);
}
