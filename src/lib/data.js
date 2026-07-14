import pfp from "@/app/assets/images/pfp.jpg";
import starpayapp from "@/app/assets/images/starpay-app.png";
import newSpWebsite from "@/app/assets/images/new-sp-website.png";
import starpay from "@/app/assets/images/starpay-website.png";
import onyou from "@/app/assets/images/onyou.png";
import endotracker from "@/app/assets/images/endotracker.png";
import diabetes from "@/app/assets/images/diabetes.png";
import demolay from "@/app/assets/images/demolay.png";
import studybud from "@/app/assets/images/studybud.png";
import uxsoc from "@/app/assets/images/uxsoc.png";
import inventorymanagement from "@/app/assets/images/inventory-management.png";
import dlsuorghub from "@/app/assets/images/dlsu-org-hub.png";
import planningPoker from "@/app/assets/images/planning-poker.png";
import step from "@/app/assets/images/step_copy.jpg";

export const personalInfo = {
  name: "Andrei Marin",
  title: "Fullstack Engineer",
  intro:
    "I hold a Bachelor of Science degree in Information Systems from De La Salle University. My passion lies in technology, with a strong focus on mobile and web development. I thrive on creating innovative solutions that drive impactful user experiences.",
  info: "I am currently taking up a Software Engineer II role at Starpay Corp. Feel free to explore my work or connect with me through my social media channels or email—I'd love to collaborate or discuss exciting opportunities!",
  email: "andreimarin1622@gmail.com",
  image: pfp,
  socials: [
    { url: "https://github.com/AndreiMarin15/", label: "GitHub" },
    { url: "https://www.linkedin.com/in/andrei-marin-6a338620a/", label: "LinkedIn" },
    { url: "https://www.instagram.com/andreimar.in/", label: "Instagram" },
    { url: "https://www.facebook.com/drei.marin/", label: "Facebook" },
  ],
};

export const experiences = [
  {
    company: "Starpay Corp",
    position: "Software Engineer II",
    date: "May 2025 - Present",
    type: "work",
  },
  {
    company: "Tolstoy",
    position: "Full Stack Developer",
    date: "February 2025 - May 2025",
    type: "work",
  },
  {
    company: "Control Flow Labs",
    position: "Full Stack Developer",
    date: "April 2024 - February 2025",
    type: "work",
  },
  {
    company: "Baytech BPO",
    position: "Web Development Intern",
    date: "September 2023 - December 2023",
    type: "work",
  },
  {
    company: "DLSU HackerCup 2024",
    position: "3rd Place - Samsanne Tech: TikTuklas",
    date: "July 2024",
    type: "achievement",
  },
  {
    company: "De La Salle University",
    position: "BS Information Systems",
    date: "2021 - 2025",
    type: "education",
  },
  {
    company: "DLSU User Experience Society",
    position: "Development Lead",
    date: "October 2023 - January 2024",
    type: "leadership",
  },
  {
    company: "DLSU CSG",
    position: "Director for Student Services",
    date: "October 2021 - January 2024",
    type: "leadership",
  },
  {
    company: "La Salle Computer Society",
    position: "VP - Human Resource Development",
    date: "January 2023 - December 2024",
    type: "leadership",
  },
  {
    company: "DLSU USG - OSEC",
    position: "Executive for Web Development",
    date: "November 2021 - August 2022",
    type: "leadership",
  },
  {
    company: "Shopee",
    position: "Code League 2022 - Participant",
    date: "April 2022",
    type: "achievement",
  },
];

export const projects = [
  {
    title: "Starpay Website (Revamp)",
    description:
      "Rebuilt the Starpay corporate website from scratch in Next.js, replacing the legacy WordPress site. The migration significantly reduced hosting and maintenance costs while improving performance and developer experience.",
    role: "Fullstack Engineer",
    image: newSpWebsite,
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: null,
    deployment: "https://www.starpay.com.ph",
    year: "2025",
    featured: true,
  },
  {
  title: "Planning Poker",
  description: "Real-time agile estimation tool for sprint planning — teams join a room, vote on story points simultaneously, and reveal results together with live sync across all participants.",
  role: "Lead Developer",
  image: planningPoker,
  technologies: ["Next.js", "React", "TypeScript", "Zustand", "Ably", "Upstash Redis", "Tailwind CSS"],
  github: "https://github.com/AndreiMarin15/planning-poker",
  deployment: "https://poker.storypoints.space/",
  year: "2026",
  featured: true,
  },
  {
    title: "Starpay App",
    description:
      "Mobile application for Starpay Corp, providing users with a comprehensive platform for financial transactions and account management.",
    role: "Fullstack Engineer",
    image: starpayapp,
    technologies: ["Swift", "Kotlin", "Java", "Instapay"],
    github: null,
    deployment: "https://www.starpay.com.ph/create-account/",
    year: "2025",
    featured: true,
  },
  {
    title: "OnYou (with Tolstoy)",
    description:
      "AI-driven personal recommendations and digital wardrobe management product. Contributed to frontend and backend development, API integration, and UX enhancements.",
    role: "Fullstack Engineer",
    image: onyou,
    technologies: ["React", "Node.js", "Cube Cloud", "AWS"],
    github: null,
    deployment: "https://www.onyou.ai/",
    year: "2025",
    featured: true,
  },
  {
  title: "STEP (Starpay Ticketing and Endorsement Platform)",
  description: "Internal approval workflow platform used as replacement for paper requests with multi-level approval chains, role-based access, and real-time notifications.",
  role: "Lead / Full-Stack Developer",
  image: step,
  technologies: ["Next.js", "Go", "Gin", "PostgreSQL", "TanStack Query", "Zustand", "shadcn/ui", "JWT Auth", "WebSockets"],
  github: null,
  deployment: null,
  year: "2026",
  featured: true,
  },
  {
    title: "Endotracker",
    description:
      "An EHR system designed for Endocrinologists in the Philippines. Features data sharing, health monitoring, doctor referrals, and FHIR interoperability.",
    role: "Fullstack Developer",
    image: endotracker,
    technologies: ["Next.js", "Supabase", "FHIR", "Vercel"],
    github: "https://github.com/AndreiMarin15/capstone",
    deployment: "https://capstone-cap2224.vercel.app/",
    year: "2024",
    featured: false,
  },
  {
    title: "Heart Disease Risk Prediction",
    description:
      "Predicts heart disease risk using Gemini API with the Framingham Heart Study prompt. Helps users become more aware of health risks.",
    role: "Fullstack Developer",
    image: diabetes,
    technologies: ["Next.js", "Gemini", "TypeScript"],
    github: "https://github.com/AndreiMarin15/heart-disease-risk-prediction",
    deployment: null,
    year: "2024",
    featured: false,
  },
  {
    title: "Starpay Website (WordPress)",
    description:
      "The original Starpay Corp corporate website built on WordPress, later replaced by the Next.js revamp.",
    role: "Fullstack Engineer",
    image: starpay,
    technologies: ["WordPress"],
    github: null,
    deployment: null,
    year: "2024",
    featured: false,
  },
  {
    title: "Demolay ManSys",
    description:
      "Management system for a client organization — handles members, events, and organizational operations.",
    role: "Fullstack Developer",
    image: demolay,
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/AndreiMarin15/Demolay-ManSys-ISANDE2",
    deployment: null,
    year: "2023",
    featured: false,
  },
  {
    title: "DLSU Study Bud",
    description:
      "Mobile app helping students manage their time and tasks, built with Kotlin and Firebase.",
    role: "Backend Developer",
    image: studybud,
    technologies: ["Kotlin", "Firebase Firestore", "Firebase Auth"],
    github: "https://github.com/AndreiMarin15/StudyBud",
    deployment: null,
    year: "2023",
    featured: false,
  },
  {
    title: "UXSOC-Taft Website",
    description:
      "Organization introduction website with application functionality for DLSU and CSB students.",
    role: "Fullstack Developer",
    image: uxsoc,
    technologies: ["Next.js", "Notion API"],
    github: null,
    deployment: "https://uxsocietytaft.org",
    year: "2023",
    featured: false,
  },
  {
    title: "Restaurant Inventory Management",
    description:
      "Full-stack inventory system for restaurant operations — manages inventory, sales, and tracking.",
    role: "Backend Developer",
    image: inventorymanagement,
    technologies: ["Handlebars", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/AndreiMarin15/ITISDEV-Inventory-Management",
    deployment: null,
    year: "2022",
    featured: false,
  },
  {
    title: "DLSU Organization Hub",
    description:
      "Social media platform for DLSU Organizations — connecting students with orgs, announcements, and events.",
    role: "Backend Developer",
    image: dlsuorghub,
    technologies: ["Handlebars", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/AndreiMarin15/dlsu-organization-hub",
    deployment: null,
    year: "2022",
    featured: false,
  },
];

export const skills = {
  languages: [
    "Javascript", "Typescript", "Dart", "Swift", "Java",
    "Kotlin", "PHP", "Python", "C", "Cpp",
  ],
  frameworks: [
    "NextJS", "React", "VueJS", "Flutter", "NodeJS",
    "ExpressJS", "Bun", "npm", "yarn",
  ],
  design: [
    "tailwind", "bootstrap", "Figma", "materialui",
    "styledcomponents", "ps", "Postman",
  ],
  databases: [
    "MongoDB", "Firebase", "Supabase", "Postgresql",
    "MySQL", "SQLite", "Notion", "Prisma",
  ],
  devTools: [
    "Docker", "Vercel", "Git", "Github", "Gitlab",
    "VSCode", "AndroidStudio", "Idea", "Discord", "Notion",
  ],
};
