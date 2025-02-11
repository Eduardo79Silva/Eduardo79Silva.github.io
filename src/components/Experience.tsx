import React from "react";

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-gray-800 text-white">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold">Experience</h2>
				<div className="mt-8 space-y-6">
					<ExperienceCard
						role="AI Software Engineer"
						company="ARMIS GROUP"
						duration="July 2023 - Present"
						description="Developing AI chatbots using TypeScript and Python, enhancing user engagement with LLMs."
					/>
					<ExperienceCard
						role="Internship Student"
						company="ARMIS GROUP"
						duration="Feb 2023 - July 2023"
						description="Worked on AI-powered web forms, gained training in UML documentation, and refined agile methodologies."
					/>
				</div>
			</div>
		</section>
	);
}

function ExperienceCard({ role, company, duration, description }: { role: string; company: string; duration: string; description: string; }) {
	return (
		<div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left">
			<h3 className="text-xl font-bold">{role} - {company}</h3>
			<p className="text-gray-400 mt-1">{duration}</p>
			<p className="mt-2">{description}</p>
		</div>
	);
}

