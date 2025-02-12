import React from "react";

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-900 text-white px-4 md:px-8">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
				<div className="flex flex-wrap justify-center mt-6 gap-4">
					{['C++', 'Vulkan', 'Cybersecurity', 'AI', 'Unity', 'Bash', 'Python', 'TypeScript'].map(skill => (
						<span key={skill} className="px-4 py-2 bg-yellow-500 rounded-full text-sm md:text-base">{skill}</span>
					))}
				</div>
			</div>
		</section>
	);
}

