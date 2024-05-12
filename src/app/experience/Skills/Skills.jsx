"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/app/framer/animate-on-view";

const skillIcon = "https://skillicons.dev/icons?i=";
const frontendSkills = [
	{
		id: 1,
		title: "HTML",
	},
	{
		id: 2,
		title: "CSS",
	},
	{
		id: 3,
		title: "Bootstrap",
	},
	{
		id: 4,
		title: "TailwindCSS",
	},
	{
		id: 5,
		title: "Javascript",
	},
	{
		id: 5,
		title: "ts",
	},
	{
		id: 6,
		title: "React",
	},
	{
		id: 7,
		title: "NextJS",
	},
	{
		id: 8,
		title: "VueJS",
	},
	{
		id: 9,
		title: "Flutter",
	},
	{
		id: 10,
		title: "Kotlin",
	},
	{
		id: 11,
		title: "PHP",
	},
];

const backendSkills = [
	{
		id: 1,
		title: "NodeJS",
	},
	{
		id: 2,
		title: "ExpressJS",
	},
	{
		id: 3,
		title: "MongoDB",
	},
	{
		id: 4,
		title: "Firebase",
	},
	{
		id: 5,
		title: "Supabase",
	},
	{
		id: 6,
		title: "Dart",
	},
	{
		id: 8,
		title: "bun",
	},

	{
		id: 9,
		title: "npm",
	},
	{
		id: 10,
		title: "yarn",
	},
	{
		id: 11,
		title: "postgresql",
	},
	{
		id: 12,
		title: "mysql",
	},
	{
		id: 12,
		title: "sqlite",
	},
	{
		id: 13,
		title: "java",
	},
];

const tools = [
	{
		id: 1,
		title: "Docker",
	},
	{
		id: 2,
		title: "Vercel",
	},

	{
		id: 4,
		title: "Git",
	},
	{
		id: 5,
		title: "Github",
	},
	{
		id: 6,
		title: "Gitlab",
	},
	{
		id: 7,
		title: "Figma",
	},

	{
		id: 8,
		title: "Postman",
	},

	{
		id: 10,
		title: "VSCode",
	},

	{
		id: 14,
		title: "AndroidStudio",
	},
	{
		id: 15,
		title: "idea",
	},
	{
		id: 18,
		title: "PowerShell",
	},
];

const languages = [
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
];

const frameworksAndTools = [
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
];

const designAndApi = [
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
];

const databases = [
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
];

const devTools = [
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
];

export default function Skills() {
	return (
		<div className="w-full p-4">
			<div className="flex-col items-center justify-center text-center">
				<div className="mt-5">
					<div className="flex items-center justify-center">
						<Reveal>Languages</Reveal>
					</div>
					{/* </motion.div> */}
					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{languages.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.1 * id } },
								}}
								key={id}
							>
								<Image
									src={`${skillIcon}${skill.title.toLowerCase()}`}
									alt={skill.title}
									key={id}
									width={50}
									height={50}
								/>
							</motion.div>
						))}
					</div>
				</div>
				<div className="mt-5">
					<div className="flex items-center justify-center">
						<Reveal>Frameworks & Tools</Reveal>
					</div>
					{/* </motion.div> */}
					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{frameworksAndTools.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.3 * id } },
								}}
								key={id}
							>
								<Image
									src={`${skillIcon}${skill.title.toLowerCase()}`}
									alt={skill.title}
									key={id}
									width={50}
									height={50}
								/>
							</motion.div>
						))}
					</div>
				</div>
				<div className="mt-5">
					<div className="flex items-center justify-center">
						<Reveal>Design & API Tools</Reveal>
					</div>
					{/* </motion.div> */}
					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{designAndApi.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.3 * id } },
								}}
								key={id}
							>
								<Image
									src={`${skillIcon}${skill.title.toLowerCase()}`}
									alt={skill.title}
									key={id}
									width={50}
									height={50}
								/>
							</motion.div>
						))}
					</div>
				</div>
				<div className="mt-5">
					<div className="flex items-center justify-center">
						<Reveal>Databases</Reveal>
					</div>

					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{databases.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.5 * id } },
								}}
								key={id}
							>
								<Image
									src={`${skillIcon}${skill.title.toLowerCase()}`}
									alt={skill.title}
									key={id}
									width={50}
									height={50}
								/>
							</motion.div>
						))}
					</div>
				</div>

				<div className="mt-5">
					<div className="flex items-center justify-center">
						<Reveal>Development & Other Tools</Reveal>
					</div>

					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{devTools.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.5 * id } },
								}}
								key={id}
							>
								<Image
									src={`${skillIcon}${skill.title.toLowerCase()}`}
									alt={skill.title}
									key={id}
									width={50}
									height={50}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
