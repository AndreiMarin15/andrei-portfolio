const experiences = [
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
		exp: "DLSU USG - OSEC",
		position: "Executive for Web Development",
		date: "November 2021 - August 2024",
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
	{
		exp: "DLSU User Experience Society",
		position: "Development Lead",
		date: "October 2023 - Present",
	},
];

export default function Experience() {
	return (
		<div className="w-2xl">
			<ul type="list" className="divide-y divide-gray-100">
				{experiences.map((experience) => (
					<li key={experience.position} className="flex justify-between gap-x-6 py-5">
						<div className="flex min-w-0 gap-x-4">
							<div className="min-w-0 flex-auto">
								<p className="text-sm font-semibold leading-6 text-white-900">{experience.exp}</p>
								<p className="mt-1 truncate text-xs leading-5 text-white-500">{experience.position}</p>
							</div>
						</div>
						<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
							<p className="text-sm leading-6 text-white-900">{experience.date}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
