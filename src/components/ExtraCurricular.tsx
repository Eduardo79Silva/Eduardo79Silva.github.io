import React from 'react';
import Image from "next/image";

export default function ExtraCurricular() {
	return (
		<section id="extracurricular" className="py-20 bg-gray-900 text-white px-4 md:px-8">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold">Extra-Curricular Activities</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
					<ActivityCard
						title="Covilhã 2019 - Regional Debate Session"
						description="Organized by the European Youth Parliament (EYP), I participated as a delegate and was selected for the nationals in Porto 2020."
						image="/images/eyp.jpg"
					/>
					<ActivityCard
						title="Chapatim Roller Cup Volunteer"
						description="Volunteered for the Chapatim Roller Cup, gaining international and philanthropic experience."
						image="/images/chapatim.jpg"
					/>
					<ActivityCard
						title="Student Council President"
						description="Led the attending student council at Escola Básica e Secundária do Padrão da Légua, managing over 150 participants."
						image="/images/student_council.jpg"
					/>
				</div>
			</div>
		</section>
	);
}

function ActivityCard({ title, description, image }: { title: string; description: string; image: string; }) {
	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
			<img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
			<h3 className="text-lg md:text-xl font-bold">{title}</h3>
			<p className="text-gray-400 mt-2 text-sm md:text-base">{description}</p>
		</div>
	);
}
