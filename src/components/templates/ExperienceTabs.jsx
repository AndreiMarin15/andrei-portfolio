"use client";
import Experience from "@/app/experience/Experiences/experience";

import { Projects } from "@/app/experience/Projects/projects";
import Skills from "@/app/experience/Skills/Skills";

import { Card } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import demolay from "../../app/assets/images/demolay.png";
import dlsuorghub from "../../app/assets/images/dlsu-org-hub.png";
import endotracker from "../../app/assets/images/endotracker.png";
import inventorymanagement from "../../app/assets/images/inventory-management.png";
import studybud from "../../app/assets/images/studybud.png";
import uxsoc from "../../app/assets/images/uxsoc.png";
import diabetes from "../../app/assets/images/diabetes.png";
import { motion, AnimatePresence } from "framer-motion";
export function ExperienceTabs() {
  const projectsWithImages = [
    {
      title: "Endotracker",
      description:
        "EndoTracker is an EHR made in consideration of Endocrinologists working in either small clinics or big hospitals, as well as their patients in the Philippines. It's one part of a big capstone project focused on Interoperability. It features different functionalities such as data sharing, health monitoring, doctor referrals, and many more.",
      role: "Fullstack Developer",

      src: endotracker,
      technologies: ["NextJS", "Supabase", "FHIR", "Vercel"],
      github: "https://github.com/AndreiMarin15/capstone",
      deployment: "https://capstone-cap2224.vercel.app/",
      year: "2024",
    },

    {
      title: "Heart Disease Risk Prediction",
      description:
        "A side project that aims to predict the risk of heart disease based on the data provided by the user. It's a full-stack project that uses NextJS and Gemini API. The prompt used for Gemini API is the Framingham Heart Study. It's a project that aims to help users be more aware of their health and the risks they might have.",
      role: "Fullstack Developer",
      src: diabetes,
      technologies: ["NextJS", "Gemini", "TypeScript"],
      github: "https://github.com/AndreiMarin15/heart-disease-risk-prediction",
      deployment: null,
      year: "2024",
    },

    {
      title: "Demolay ManSys",
      description:
        "A course project for a client organization. It's a management system that helps the organization manage their members, events, and many more. It's a full-stack project that uses React.js for the frontend and Node.js for the backend. It also uses MongoDB as its database.",
      role: "Fullstack Developer",

      src: demolay,
      technologies: ["ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/AndreiMarin15/Demolay-ManSys-ISANDE2",
      deployment: null,
      year: "2023",
    },
    {
      title: "DLSU Study Bud",
      description:
        "A course project for a Mobile Application Development Course. It's a mobile application that helps students manage their time and tasks. It's a mobile application that uses Kotlin as well as Firebase Firestore as its database. ",
      role: "Backend Developer",

      src: studybud,
      technologies: ["Kotlin", "Firebase Firestore", "Firebase Authentication"],
      github: "https://github.com/AndreiMarin15/StudyBud",
      deployment: null,
      year: "2023",
    },
    {
      title: "UXSOC-Taft Website",
      description:
        "A website that is meant to introduce the organization to students of DLSU and CSB. It also has the functionality of accepting applications. It makes use of NextJS as well as Notion for its database. \n\n Main Contribution: About Page, Database, and Application Form",
      role: "Fullstack Developer",

      src: uxsoc,
      technologies: ["NextJS", "Notion"],
      github: null,
      deployment: "https://uxsocietytaft.org",
      year: "2023",
    },
    {
      title: "Restaurant Inventory Management System",
      description:
        "It's an Inventory Management System for a restaurant. It makes use of handlebars.js as its templating engine, Node.js as its backend, and Mongodb as its database. It's a full-stack project that helps the restaurant manage its inventory, sales, tracking, and many more.",
      role: "Backend Developer",

      src: inventorymanagement,
      technologies: ["Handlebars", "MongoDB", "NodeJS", "ExpressJS"],
      github: "https://github.com/AndreiMarin15/ITISDEV-Inventory-Management",
      deployment: null,
      year: "2022",
    },
    {
      title: "DLSU Organization Hub",
      description:
        "It's a social media platform for DLSU Organizations. It makes use of handlebars.js as its templating engine, Node.js as its backend, and Mongodb as its database. It's a full-stack project that aims to make connecting with organizations, disseminating announcements, initiating events, and many more easier for the students of DLSU.",
      role: "Backend Developer",

      src: dlsuorghub,
      technologies: ["Handlebars", "MongoDB", "NodeJS", "ExpressJS"],
      github: "https://github.com/AndreiMarin15/dlsu-organization-hub",
      deployment: null,
      year: "2022",
    },
    {
      title: "Endotracker Middleware",
      description:
        "The middleware for the EndoTracker project. It's the bridge between the project and the other systems that wish to connect to the project. It's responsible for handling the data from one system to endotracker and vice versa. It also handles the data from the backend and sends it to the frontend. It's a Node.js server that uses Express.js as its framework.",
      role: "Fullstack Developer",

      technologies: ["ExpressJS", "NodeJS", "FHIR", "Render", "Supabase"],
      github: "https://github.com/AndreiMarin15/cap-middleware",
      deployment: null,
      year: "2024",
    },
    {
      title: "AI Pro",
      description:
        "A suite of different AI Tools such as a chatbot, pdf reader, travel assistant, and many more.",
      role: "Frontend Developer (Intern)",

      technologies: ["PHP", "ReactJS", "VueJS", "NodeJS", "CSS"],
      github: null,
      deployment: null,
      year: "2023",
    },
    {
      title: "Chat-Me",
      description:
        "A solo side project. Aims to be a cross-platform chat application that uses end-to-end encryption.",
      role: "Fullstack Developer",

      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/AndreiMarin15/Chat-Me",
      deployment: null,
      year: "2023",
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0, y: -150 }}
      animate={{ scale: 1, y: 0, transition: { duration: 0.5 } }}
      className="w-full sm:w-3/4"
    >
      <Tabs defaultValue="skills">
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experiences">Roles</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <Card className="bg-background/20 border-none">
            <ScrollArea className="h-[70dvh] sm:h-[65vh] w-full rounded-md border-none">
              <Skills />
            </ScrollArea>
          </Card>
        </TabsContent>
        <TabsContent value="experiences">
          <Card className="bg-background/20 border-none">
            <ScrollArea className="h-auto sm:h-[65vh] w-full rounded-md border-none">
              <Experience />
            </ScrollArea>
          </Card>
        </TabsContent>
        <TabsContent value="projects">
          <ScrollArea className="h-[70dvh] sm:h-[65vh] w-full rounded-md border-none">
            {projectsWithImages.map((project, index) => (
              <>
                {index % 2 === 0 ? (
                  <Projects key={index} {...project} index={index} />
                ) : (
                  <Projects key={index} {...project} index={index} />
                )}
              </>
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
