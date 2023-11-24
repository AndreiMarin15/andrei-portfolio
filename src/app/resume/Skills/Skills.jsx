import SkillItem from "./SkillItem";

const skillData = [
	{
		id: 1,
		title: "Html, Css, Scss",
		percentage: "80%",
	},
	{
		id: 2,
		title: "TailwindCSS",
		percentage: "70%",
	},
	{
		id: 3,
		title: "Javascript",
		percentage: "95%",
	},
	{
		id: 4,
		title: "ReactJS",
		percentage: "85%",
	},
	{
		id: 5,
		title: "ExpressJS",
		percentage: "90%",
	},
	{
		id: 6,
		title: "MongoDB",
		percentage: "95%",
	},
	{
		id: 7,
		title: "Kotlin",
		percentage: "80%",
	},
	{
		id: 8,
		title: "Flutter",
		percentage: "60%",
	},
	{
		id: 9,
		title: "NextJS",
		percentage: "60%",
	},
	{
		id: 10,
		title: "Firebase",
		percentage: "90%",
	},
	{
		id: 11,
		title: "Supabase",
		percentage: "40%",
	},
	{
		id: 12,
		title: "Python",
		percentage: "40%",
	},
	{
		id: 13,
		title: "VueJS",
		percentage: "55%",
	},
	{
		id: 14,
		title: "PHP",
		percentage: "40%",
	},
];

export default function Skills() {
	return (
		<div className="w-full sm:w-1/3 py-4">
			<div className="flex flex-wrap">
				
				{skillData.map((skill, id) => (
					<SkillItem skill={skill} key={id} />
				))}
			</div>
		</div>
	);
}
