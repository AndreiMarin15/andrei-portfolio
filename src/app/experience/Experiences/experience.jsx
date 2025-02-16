
import { Reveal } from "../../framer/animate-on-view";
import "@fortawesome/fontawesome-svg-core/styles.css";

const experiences = [
  {
    exp: "xFusion",
    position: "Full Stack Developer",
    date: "February 2025 - Present"
  },
  {
    exp: "Control Flow Labs",
    position: "Full Stack Developer",
    date: "April 2024 - February 2025",
  },
  {
    exp: "DLSU HackerCup 2024",
    position: "3rd Place - Samsanne Tech: TikTuklas",
    date: "July 2024",
  },
  {
    exp: "Baytech BPO",
    position: "Web Development Intern",
    date: "September 2023 - December 2023",
  },
  {
    exp: "DLSU CSG",
    position: "Director for Student Services",
    date: "October 2021 - January 2024",
  },
  {
    exp: "DLSU User Experience Society",
    position: "Development Lead",
    date: "October 2023 - January 2024",
  },
  {
    exp: "DLSU USG - OSEC",
    position: "Executive for Web Development",
    date: "November 2021 - August 2022",
  },
  {
    exp: "La Salle Computer Society",
    position: "VP - Human Resource Development",
    date: "January 2023 - December 2024",
  },
  {
    exp: "Shopee",
    position: "Code League 2022 - Participant",
    date: "April 2022",
  },
];

export default function Experience() {
  return (
    <div className="w-full px-5">
      <ul
        type="list"
        className="h-[70dvh] sm:h-[70vh] divide-y divide-teal-300/20  animate-fade-in"
      >
        {experiences.map((experience) => (
          <li
            key={experience.position}
            className="flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-teal-300">
                  <Reveal>{experience.exp}</Reveal>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-zinc-100">
                  <Reveal color={"white"}>{experience.position}</Reveal>
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-zinc-100">
                <Reveal color={"white"}>{experience.date}</Reveal>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
