import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "Javascript",
    },
    {
      title: "Typescript",
    },
    {
      title: "Dart",
    },
    {
      title: "Swift",
    },
    {
      title: "Java",
    },
    {
      title: "Kotlin",
    },
    {
      title: "PHP",
    },
    {
      title: "Python",
    },
    {
      title: "C",
    },
    {
      title: "Cpp",
    },
  ]);
}
