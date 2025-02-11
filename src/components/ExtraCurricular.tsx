import React from 'react';
import Image from "next/image";

export default function ExtraCurricular() {
	return (
		<section id="extracurricular" className="py-20 bg-gray-900 text-white">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold">Extra-Curricular Activities</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
			<Image
				src={image}
				alt={title}
				width={400}
				height={160}
				className="object-cover rounded-lg mb-4"
			/>
			<h3 className="text-xl font-bold">{title}</h3>
			<p className="text-gray-400 mt-2">{description}</p>
		</div>
	);
}

