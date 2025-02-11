import React from 'react';

export default function Languages() {
	return (
		<section id="languages" className="py-20 bg-gray-800 text-white">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold">Languages</h2>
				<div className="flex flex-wrap justify-center mt-6 gap-4">
					<LanguageBadge language="Portuguese" level="Native" />
					<LanguageBadge language="English" level="Fluent" />
					<LanguageBadge language="Spanish" level="Intermediate" />
					<LanguageBadge language="German" level="Basic" />
				</div>
			</div>
		</section>
	);
}

function LanguageBadge({ language, level }: { language: string; level: string; }) {
	return (
		<div className="px-4 py-2 bg-yellow-500 rounded-full">
			<strong>{language}:</strong> {level}
		</div>
	);
}

