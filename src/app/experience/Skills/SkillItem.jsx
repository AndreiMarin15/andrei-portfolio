"use client";
import React, { useEffect, useRef } from "react";

const SkillItem = (props) => {
	const { title, percentage } = props.skill;
	const barRef = useRef(null);
	useEffect(() => {
		const currentRef = barRef.current;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					currentRef.style.transition = "width 2s";
					currentRef.style.width = `${percentage}`;
				}
			},
			{ threshold: 1.0 }
		);

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [percentage]);

	return (
		<div className="w-full md:w-1/2 animate-fade-in">
			<div className="mb-4 sm:mb-5 md:mx-4">
				<div className="flex justify-between items-center mb-1">
					<h5 className="text-sm font-semibold leading-6 text-teal-300">{title}</h5>
					<span className="text-md text-zinc-100 font-bold">{percentage}</span>
				</div>
				<div className="w-full sm:mt-2 bg-teal-100 relative h-2 rounded">
					<div ref={barRef} className="absolute h-full left-0 top-0 bg-teal-700 rounded" style={{ width: "0%" }}></div>
				</div>
			</div>
		</div>
	);
};

export default SkillItem;
