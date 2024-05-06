"use client";

import Image from "next/image";

import andrei from "./assets/images/robot.jpg";

import { SocialIcon } from "react-social-icons";
import { Reveal } from "./framer/animate-on-view";
import { motion } from "framer-motion";

export default function Home() {
	const content = {
		name: "Hi! I'm Andrei",
		temp: "I am currently pursuing a Bachelor of Science degree in Information Systems at De La Salle University. My passion lies in technology, with a particular interest in mobile and web development.I currently work as a Full-Stack Developer at a Venture Studio here in Manila. Feel free to explore my work or connect with me through my socials or email!",
		intro:
			"I am currently pursuing a Bachelor of Science degree in Information Systems at De La Salle University. My passion lies in technology, with a particular interest in mobile and web development.I currently work as a Full-Stack Developer at a Venture Studio here in Manila. Feel free to explore my work or connect with me through my socials or email!",
		// "I am currently pursuing a Bachelor of Science degree in Information Systems at De La Salle University. My passion lies in technology, with a particular interest in mobile and web development. I take pride in creating innovative and efficient solutions that align with user needs and business goals.",
		info: "In addition to my academic pursuits, I am currently working as a fulltime Full-Stack Developer at a Venture Studio here in Manila. I am always eager to learn new technologies and frameworks to enhance my skills and stay up-to-date with industry trends.",
		info2: "Feel free to explore my work or connect with me through my socials or email!",

		personalEmail: "andreimarin1622@gmail.com",
		personalNumber: "+63 999 995 1973",
		image: andrei,
	};

	const expandedContent = {
		intro:
			"I am a 21 year old undergraduate taking up Bachelor of Science in Information Systems at De La Salle University. I am a passionate and driven individual who is always eager to learn and grow. Aside from my studies, I'm also currently working as a Full-Stack Developer.",
		info: "In case you wanna know more, feel free to click me!",
	};
	return (
		<div className="h-[90vh]">
			<div className="max-w-screen">
				<div className=" relative isolate px-6 pt-14 lg:px-8 ">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#008080] to-[#20b2aa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
					<div className="mx-auto max-w-2xl py-8 sm:py-10 lg:py-14">
						<div className="content items-center mb-8 flex justify-center">
							{/* <Reveal> */}
							<motion.div
								initial={{
									// scale: 0,
									y: -150,
								}}
								animate={{
									// scale: 1,
									y: 0,
									transition: {
										duration: 0.25,
									},
								}}
								className="w-24 h-24 mx-3 sm:w-44 sm:h-44 rounded-full overflow-hidden "
							>
								<Image
									src={content.image}
									width={500}
									height={500}
									className="object-cover w-full h-full "
									alt="pfp"
									priority
								></Image>
							</motion.div>
							{/* </Reveal> */}
							<div className="mx-3 animate-fade-in">
								<h1 className=" text-2xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
									<Reveal>{content.name}</Reveal>

									<span className="text-base sm:text-3xl text-teal-600 animate-pulse hover:animate-none cursor-default">
										<Reveal>Web and Mobile Developer</Reveal>
									</span>
								</h1>
							</div>
						</div>
						<div className="content text-left sm:text-center">
							<Reveal>
								<p className="animate-fade-in text-justify sm:leading-loose sm:text-justify sm:justify-center mt-6 text-xs sm:text-base leading-8 text-zinc-300 ">
									{content.intro}
								</p>
							</Reveal>
							<p className="animate-fade-in text-justify sm:leading-loose sm:text-center mt-2 text-xs sm:text-base leading-8 text-zinc-300 ">
								{/* {content.info} */}
							</p>
							<p className="animate-fade-in text-justify sm:leading-loose sm:text-center mt-2 text-xs sm:text-base leading-8 text-zinc-300 ">
								{/* {content.info2} */}
							</p>
						</div>
						<div className="content items-center mb-8 flex justify-center">
							<div className="mx-4 max-w-xl flex justify-center">
								<motion.div
									initial={{
										scale: 0,
									}}
									animate={{
										scale: 1,
										transition: {
											duration: 0.25,
											delay: 0.55,
										},
									}}
									className="my-3 mr-1 rounded-full"
								>
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://github.com/AndreiMarin15/"
										bgColor="#008080"
									/>
								</motion.div>
								<motion.div
									initial={{
										scale: 0,
									}}
									animate={{
										scale: 1,
										transition: {
											duration: 0.25,
											delay: 0.35,
										},
									}}
									className="my-3 mx-1 rounded-full"
								>
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://www.facebook.com/drei.marin/"
										bgColor="#008080"
									/>
								</motion.div>

								<motion.div
									initial={{
										scale: 0,
									}}
									animate={{
										scale: 1,
										transition: {
											duration: 0.25,
											delay: 0.25,
										},
									}}
									className="my-3 mx-1 rounded-full "
								>
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://www.linkedin.com/in/andrei-marin-6a338620a/"
										bgColor="#008080"
									/>
								</motion.div>
								<motion.div
									initial={{
										scale: 0,
									}}
									animate={{
										scale: 1,
										transition: {
											duration: 0.25,
											delay: 0.35,
										},
									}}
									className="my-3 mx-1 rounded-full "
								>
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://www.instagram.com/andreimar.in/"
										bgColor="#008080"
									/>
								</motion.div>
								<motion.div
									initial={{
										scale: 0,
									}}
									animate={{
										scale: 1,
										transition: {
											duration: 0.25,
											delay: 0.55,
										},
									}}
									className="my-3 ml-1 rounded-full"
								>
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url={`https://mail.google.com/mail/?view=cm&fs=1&to=andreimarin1622@gmail.com&su="Let's+Connect!"`}
										bgColor="#008080"
										network="mailto"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-47rem)]"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-teal-200 to-teal-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
