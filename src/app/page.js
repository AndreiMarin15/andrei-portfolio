"use client";

import Image from "next/image";

import andrei from "./assets/images/robot.jpg";

import { SocialIcon } from "react-social-icons";

export default function Home() {
	const content = {
		name: "Hi! I'm Andrei",
		intro:
			"I'm currently an undergraduate taking up Bachelor of Science in Information Systems at De La Salle University. I'm all about tech and love building cool stuff, especially when it comes to mobile and web development. When I'm not coding, you can find me playing sports, going out with friends, doing org and academic responsibilities, or chilling at home while binge-watching my favorite shows. It's all about balance, right?",
		image: andrei,
	};
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
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
					<div className="mb-8 flex justify-center">
						<div className="w-32 h-32 sm:w-52 sm:h-52 rounded-full overflow-hidden">
							<Image
								src={content.image}
								width={500}
								height={500}
								className="object-cover w-full h-full mb-10"
								alt="pfp"
							></Image>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
							{content.name}
							<br></br>{" "}
							<span className="text-2xl sm:text-3xl text-teal-600 animate-pulse hover:animate-none cursor-default">
								Web and Mobile Developer
							</span>
						</h1>
						<p className="mt-8 text-sm sm:text-lg leading-8 text-zinc-300 ">{content.intro}</p>
					</div>
					<div className="pt-8 flex justify-center">
						<div className=" m-3 rounded-full ">
							<SocialIcon url="https://www.facebook.com/Andrei.marinnnn/" bgColor="#008080" />
						</div>
						<div className=" m-3 rounded-full ">
							<SocialIcon url="https://github.com/AndreiMarin15/" bgColor="#008080" />
						</div>
						<div className=" m-3 rounded-full ">
							<SocialIcon url="https://www.linkedin.com/in/andrei-marin-6a338620a/" bgColor="#008080" />
						</div>
						<div className=" m-3 rounded-full ">
							<SocialIcon url="https://www.instagram.com/dreimarinn/" bgColor="#008080" />
						</div>
						<div className=" m-3 rounded-full ">
							<SocialIcon
								url={`https://gmail.com/mail/?view=cm&fs=1&to=andreimarin1622@gmail.com&su="Let's+Connect!"`}
								bgColor="#008080"
								network="mailto"
							/>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffffff] to-[#808080] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
