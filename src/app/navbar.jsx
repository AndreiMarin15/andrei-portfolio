"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
const navigation = [
	{ name: "About me", href: "/" },
	{ name: "Experience", href: "/experience" },
	{ name: "Contact", href: "/contact" },
	//{ name: "Github", href: "https://github.com/AndreiMarin15" },
];

export default function Navbar() {
	const path = usePathname();

	return (
		<header className="absolute inset-x-0 top-0 z-50 bg-transparent">
			<nav className="flex items-center justify-center gap-x-6 lg:gap-x-12 p-6 lg:px-8" aria-label="Global">
				{navigation.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className={cn(
							"text-sm font-semibold leading-6 hover:animate-pulse",
							path === item.href ? "text-teal-500" : "text-zinc-300"
						)}
					>
						{item.name}
					</Link>
				))}
			</nav>
			{/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />

				<Dialog.Panel
					className={`fixed inset-y-0 right-0 z-50 w-full bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
						mobileMenuOpen ? "animate-slide-right-nav" : "animate-slide-out-to-left"
					}`}
				>
					<div className="flex items-center justify-between">
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-zinc-200"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-400 hover:bg-gray-50"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog> */}
		</header>
	);
}
