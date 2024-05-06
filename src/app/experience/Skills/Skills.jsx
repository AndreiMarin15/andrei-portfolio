"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
	// {
	// 	id: 7,
	// 	title: "FHIR",
	// },
	// {
	// 	id: 8,
	// 	title: "Gemini",
	// },
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
];
const skillData = [
	{
		id: 1,
		title: "Html, Css, Scss",
		percentage: "90%",
	},
	{
		id: 2,
		title: "TailwindCSS",
		percentage: "80%",
	},
	{
		id: 3,
		title: "Javascript",
		percentage: "95%",
	},
	{
		id: 4,
		title: "ReactJS",
		percentage: "95%",
	},
	{
		id: 5,
		title: "ExpressJS",
		percentage: "90%",
	},
	{
		id: 6,
		title: "MongoDB",
		percentage: "95%",
	},
	{
		id: 7,
		title: "Kotlin",
		percentage: "80%",
	},
	{
		id: 8,
		title: "Flutter & Dart",
		percentage: "70%",
	},
	{
		id: 9,
		title: "NextJS",
		percentage: "95%",
	},
	{
		id: 10,
		title: "Firebase",
		percentage: "90%",
	},
	{
		id: 11,
		title: "Supabase",
		percentage: "90%",
	},
	{
		id: 12,
		title: "Python",
		percentage: "60%",
	},
	{
		id: 13,
		title: "VueJS",
		percentage: "60%",
	},
	{
		id: 14,
		title: "PHP",
		percentage: "70%",
	},
];

export default function Skills() {
	return (
		<div className="w-full p-4">
			<div className="flex-col items-center justify-center text-center">
				<div className="mt-5">
					<motion.div
						initial="initial"
						animate="animate"
						variants={{
							initial: { y: -100 },
							animate: {
								y: 0,
								transition: {
									duration: 0.5,
								},
							},
						}}
					>
						Frontend
					</motion.div>
					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{frontendSkills.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.75 } },
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
					<motion.div
						initial="initial"
						animate="animate"
						variants={{
							initial: { x: 200 },
							animate: {
								x: 0,
								transition: {
									duration: 0.5,
								},
							},
						}}
					>
						Backend
					</motion.div>
					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{backendSkills.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.75 } },
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
					<motion.div
						initial="initial"
						animate="animate"
						variants={{
							initial: { x: -200 },
							animate: {
								x: 0,
								transition: {
									duration: 0.5,
								},
							},
						}}
					>
						Tools
					</motion.div>
					<div className="flex gap-3 mt-2 flex-wrap justify-center">
						{tools.map((skill, id) => (
							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									initial: { scale: 0 },
									animate: { scale: 1, transition: { duration: 0.75 } },
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
