"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
				transition={{ duration: 0.75 }}
				variants={{
					initialState: {
						opacity: 0,
						// y: -40,
						scale: 0.8,
						// transition: {
						// 	duration: 0.75,
						// },
					},
					animateState: {
						opacity: 1,
						// y: 0,
						scale: 1,
						// transition: {
						// 	duration: 0.75,
						// },
					},
					// exitState: {
					// 	// y: 100,
					// 	opacity: 0,
					// 	scale: 0.8,
					// },
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
