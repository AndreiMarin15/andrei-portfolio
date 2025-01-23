import {  NextResponse } from "next/server";
import andrei from "@/app/assets/images/pfp.jpg";

export async function GET() {
  return NextResponse.json({
    name: "Hi! I'm Andrei",

    intro:
      "I hold a Bachelor of Science degree in Information Systems from De La Salle University. My passion lies in technology, with a strong focus on mobile and web development. I thrive on creating innovative solutions that drive impactful user experiences. ",

    info: "I am currently a Full-Stack Engineer at a Startup based in Manila. Feel free to explore my work or connect with me through my social media channels or email—I’d love to collaborate or discuss exciting opportunities!",

    personalEmail: "andreimarin1622@gmail.com",
    personalNumber: "+63 999 995 1973",
    image: andrei,
  });
}
