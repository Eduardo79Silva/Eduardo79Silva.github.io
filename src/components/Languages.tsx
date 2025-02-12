import React from 'react';

export default function Languages() {
	return (
		<section id="languages" className="py-20 bg-gray-800 text-white px-4 md:px-8">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold">Languages</h2>
				<div className="flex flex-wrap justify-center mt-6 gap-4">
					{[{ language: 'Portuguese', level: 'Native' }, { language: 'English', level: 'Fluent' }, { language: 'Spanish', level: 'Intermediate' }, { language: 'German', level: 'Basic' }].map(({ language, level }) => (
						<div key={language} className="px-4 py-2 bg-yellow-500 rounded-full text-sm md:text-base">
							<strong>{language}:</strong> {level}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
