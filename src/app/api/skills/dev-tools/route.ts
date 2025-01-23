import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "Docker",
    },
    {
      title: "Vercel",
    },
    {
      title: "Git",
    },
    {
      title: "Github",
    },
    {
      title: "Gitlab",
    },

    {
      title: "VSCode",
    },
    {
      title: "AndroidStudio",
    },
    {
      title: "Idea",
    },
    {
      title: "Discord",
    },

    {
      title: "Notion",
    },
  ]);
}
