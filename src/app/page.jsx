"use client";

import Image from "next/image";

import andrei from "./assets/images/robot.jpg";

import { SocialIcon } from "react-social-icons";

export default function Home() {
	const content = {
		name: "Hi! I'm Andrei",
		intro:
			"I'm currently an undergraduate taking up Bachelor of Science in Information Systems at De La Salle University. I'm all about tech and love building cool stuff, especially when it comes to mobile and web development. When I'm not coding, you can find me going out with friends, doing org and academic responsibilities, or chilling at home while watching my favorite shows. It's all about balance, right?",
		info: "Well, that's pretty much it from me! Since you're here, why not explore my work on GitHub, connect with me on social media, or take a look at my resume? I appreciate your interest and look forward to connecting with you. Thank you!",
		image: andrei,
	};
	return (
		<div className="bg-black" style={{ height: "100VH" }}>
			<div className="max-w-screen">
				<div className=" relative isolate px-6 pt-14 lg:px-8 " style={{ height: "100VH" }}>
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
							<div className="w-24 h-24 mx-3 sm:w-44 sm:h-44 rounded-full overflow-hidden animate-slide-left">
								<Image
									src={content.image}
									width={500}
									height={500}
									className="object-cover w-full h-full "
									alt="pfp"
									priority
								></Image>
							</div>
							<div className="mx-3 animate-slide-right">
								<h1 className=" text-2xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
									{content.name}
									<br></br>{" "}
									<span className="text-base sm:text-3xl text-teal-600 animate-pulse hover:animate-none cursor-default">
										Web and Mobile Developer
									</span>
								</h1>
							</div>
						</div>
						<div className="content text-left sm:text-center">
							<p className="animate-fade-in text-justify sm:leading-loose sm:text-center mt-6 text-xs sm:text-base leading-8 text-zinc-300 ">
								{content.intro}
							</p>
							<p className="animate-fade-in text-justify sm:leading-loose sm:text-center mt-2 text-xs sm:text-base leading-8 text-zinc-300 ">
								{content.info}
							</p>
						</div>
						<div className="content items-center mb-8 flex justify-center">
							<div className="mx-4 max-w-xl flex justify-center">
								<div className="my-3 mr-1 rounded-full animate-slide-bottom3">
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://github.com/AndreiMarin15/"
										bgColor="#008080"
									/>
								</div>
								<div className="my-3 mx-1 rounded-full animate-slide-bottom2">
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://www.facebook.com/drei.marin/"
										bgColor="#008080"
									/>
								</div>

								<div className="my-3 mx-1 rounded-full animate-slide-bottom1">
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://www.linkedin.com/in/andrei-marin-6a338620a/"
										bgColor="#008080"
									/>
								</div>
								<div className="my-3 mx-1 rounded-full animate-slide-bottom2">
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url="https://www.instagram.com/andreimar.in/"
										bgColor="#008080"
									/>
								</div>
								<div className="my-3 ml-1 rounded-full animate-slide-bottom3">
									<SocialIcon
										style={{ height: 40, width: 40 }}
										url={`https://mail.google.com/mail/?view=cm&fs=1&to=andreimarin1622@gmail.com&su="Let's+Connect!"`}
										bgColor="#008080"
										network="mailto"
									/>
								</div>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-zinc-200 to-zinc-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
