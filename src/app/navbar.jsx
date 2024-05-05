"use client";
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimateProvider } from "./framer/wrapper";

const navigation = [
	{ name: "About me", href: "/" },
	{ name: "Experience", href: "/experience" },
	{ name: "Contact", href: "/contact" },
	//{ name: "Github", href: "https://github.com/AndreiMarin15" },
];

export default function Navbar({ children }) {
	const router = useRouter();
	const path = usePathname();
	const [selected, setSelected] = React.useState("/");

	return (
		<>
			<header className="absolute inset-x-0 top-0 z-50 bg-transparent">
				<nav
					className="flex items-center justify-center gap-x-6 cursor-pointer lg:gap-x-12 p-6 lg:px-8"
					aria-label="Global"
				>
					{navigation.map((item) => (
						<div
							key={item.name}
							onClick={() => {
								setSelected(item.href);
								router.push(item.href);
							}}
							className={cn(
								"text-sm font-semibold leading-6 hover:animate-pulse",
								path === item.href ? "text-teal-500" : "text-zinc-300"
							)}
						>
							{item.name}
						</div>
					))}
				</nav>
			</header>
			<AnimateProvider isVisible={path === selected ? true : false}>{children}</AnimateProvider>
		</>
	);
}
