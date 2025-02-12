"use client";

import React from "react";

const certifications = [
	{
		title: "Microsoft Certified: Azure AI Fundamentals",
		earnedOn: "June 19, 2024",
		credentialId: "F9A01EFC7532F527",
		certificationNumber: "F7EE9D-AE45DG",
		link: "https://learn.microsoft.com/api/credentials/share/en-us/eduardosilva-3593/F9A01EFC7532F527?sharingId=ECBBA15F329F0074",
		skills: [
			"Describe Artificial Intelligence workloads and considerations",
			"Describe fundamental principles of machine learning on Azure",
			"Describe features of computer vision workloads on Azure",
			"Describe features of Natural Language Processing (NLP) workloads on Azure",
			"Describe features of generative AI workloads on Azure"
		]
	},
];

export default function Certifications() {
	return (
		<section id="certifications" className="py-20 bg-gray-900 text-white text-center px-4 md:px-8">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
				<p className="text-gray-400 mt-2 text-sm md:text-base">My professional certifications</p>
				<div className={`grid ${certifications.length === 1 ? 'grid-cols-1 place-items-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6 mt-6`}>
					{certifications.map((cert, index) => (
						<div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-left max-w-3xl mx-auto">
							<h3 className="text-lg md:text-xl font-bold">{cert.title}</h3>
							<p className="text-gray-400 text-sm md:text-base">Earned on: {cert.earnedOn}</p>
							<p className="text-gray-400 text-sm md:text-base">Credential ID: {cert.credentialId}</p>
							<p className="text-gray-400 text-sm md:text-base">Certification Number: {cert.certificationNumber}</p>
							<a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline text-sm md:text-base">View Certification</a>
							<ul className="mt-4 text-gray-400 text-left text-sm md:text-base">
								{cert.skills.map((skill, i) => (
									<li key={i}>✔ {skill}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

