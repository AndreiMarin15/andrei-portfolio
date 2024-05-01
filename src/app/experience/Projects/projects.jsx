"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";
import { InView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import { Badge } from "@/components/ui/badge";
export function Projects({ title, description, role, src, technologies, github, deployment, year, index }) {
	return (
		<InView as="div" triggerOnce>
			{({ inView, ref }) => (
				<div ref={ref}>
					<CSSTransition in={inView} timeout={500} classNames="fade-in" unmountOnExit>
						<Card>
							<CardHeader>
								<CardTitle className="text-teal-300">{title}</CardTitle>
							</CardHeader>
							{index % 2 !== 0 ? (
								<div className=" sm:flex">
									<div className="sm:w-3/5">
										<CardContent>
											<CardDescription className="text-justify">{description}</CardDescription>
										</CardContent>
										<CardContent>
											<CardDescription>Role: {role}</CardDescription>
										</CardContent>
										<CardContent>
											{Array.isArray(technologies) && technologies.length > 0 && (
												<CardDescription>
													{technologies.map((tech, index) => (
														<Badge key={index} className="m-1">
															{tech}
														</Badge>
													))}
												</CardDescription>
											)}
										</CardContent>
										<CardContent>
											<CardDescription>Year: {year}</CardDescription>
										</CardContent>
									</div>
									{src && (
										<div>
											<CardContent>{src && <Image src={src} alt={title} width={400} height={400} />}</CardContent>
										</div>
									)}
								</div>
							) : (
								<div className="sm:flex">
									{src && (
										<div>
											<CardContent>{src && <Image src={src} alt={title} width={400} height={400} />}</CardContent>
										</div>
									)}
									<div className="sm:w-3/5">
										<CardContent>
											<CardDescription className="text-justify">{description}</CardDescription>
										</CardContent>
										<CardContent>
											<CardDescription>Role: {role}</CardDescription>
										</CardContent>
										<CardContent>
											{Array.isArray(technologies) && technologies.length > 0 && (
												<CardDescription>
													{technologies.map((tech, index) => (
														<Badge key={index} className="m-1">
															{tech}
														</Badge>
													))}
												</CardDescription>
											)}
										</CardContent>
										<CardContent>
											<CardDescription>Year: {year}</CardDescription>
										</CardContent>
									</div>
								</div>
							)}

							<CardFooter className="border-t px-6 py-4">
								{github && (
									<div className="my-3 mr-1 rounded-full">
										<SocialIcon style={{ height: 40, width: 40 }} url={github} />
									</div>
								)}

								{deployment && (
									<Link className={buttonVariants({ variant: "outline" }) + " ml-1"} href={deployment} target="_blank">
										Visit the Site
									</Link>
								)}
							</CardFooter>
						</Card>
					</CSSTransition>
				</div>
			)}
		</InView>
	);
}
