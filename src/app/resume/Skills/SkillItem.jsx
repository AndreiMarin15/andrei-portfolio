"use client"
import React, { useEffect, useRef } from "react";

const SkillItem = (props) => {
  const { title, percentage } = props.skill;
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          barRef.current.style.transition = "width 2s";
          barRef.current.style.width = `${percentage}`;
        }
      },
      { threshold: 1.0 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className="w-full md:w-1/2 animate-fade-in">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-md text-gray-400 font-light">{title}</h5>
          <span className="text-md text-gray-300 font-bold">
            {percentage}
          </span>
        </div>
        <div className="w-full bg-zinc-200 relative h-2 rounded">
          <div
            ref={barRef}
            className="absolute h-full left-0 top-0 bg-teal-600 rounded"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;

