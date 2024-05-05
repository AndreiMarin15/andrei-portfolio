"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
export function AnimateProvider({ children }) {
	const path = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={path}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				mode="wait"
				variants={{
					initialState: {
						opacity: 0,
						y: -40,
					},
					animateState: {
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.75,
						},
					},
					// exitState: {
					// 	y: 100,
					// 	opacity: 0,
					// 	// transition: {
					// 	// 	duration: 0.75,
					// 	// },
					// },
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
