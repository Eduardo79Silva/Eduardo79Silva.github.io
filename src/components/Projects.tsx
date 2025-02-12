import React from 'react';

import Image from "next/image";

export default function Projects() {
	return (
		<section id="projects" className="py-20 bg-gray-900 text-white px-4 md:px-8">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
				<p className="text-gray-400 mt-2 text-sm md:text-base">Showcasing my latest work in AI and Game Development</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
					<ProjectCard
						title="Egg Retrieval Game"
						description="A WebGL-based game where a bird retrieves eggs, featuring shaders and smooth animations."
						image="/images/egg_game.png"
						link="https://github.com/Eduardo79Silva/bird-game/blob/main/project"
					/>
					<ProjectCard
						title="TurboThree Racing Game"
						description="A Three.js-powered racing game with particle effects and power-ups."
						image="/images/car_racing.png"
						link="https://github.com/Eduardo79Silva/racing-game/tree/main/tp3"
					/>
					<ProjectCard
						title="Turbo Soccer"
						description="A Unity-built physics-based multiplayer game featuring obstacles and car customization."
						image="/images/rocket_clone.png"
						link="https://afonsomm.itch.io/feup-turbo-soccer"
					/>
					<ProjectCard
						title="Raytracing Engine"
						description="A Vulkan-based raytracing engine supporting emissive materials and a denoiser."
						image="/images/raytracing.png"
						link="https://github.com/Eduardo79Silva/Hikari-RayTracer"
					/>
					<ProjectCard
						title="FEP Chatbot"
						description="A scalable AI-powered chatbot for a Portuguese university, built with TypeScript and Python."
						image="/images/chatbot.png"
						link="https://www.armisgroup.com/br/news/chatbot-na-fep/"
					/>
					<ProjectCard
						title="Graphics Engine"
						description="Implemented using Three.js, this engine features bump map textures (bullet holes) and video textures (tutorial). It supports a wireframe view, employs buffer geometry with color gradients, and includes custom cameras controllable via a GUI in a shooting range scene."
						image="/images/graphics_engine.png"
						link="https://github.com/Eduardo79Silva/racing-game/tree/main/tp2"
					/>
				</div>
			</div>
		</section>
	);
}

function ProjectCard({ title, description, image, link }: { title: string; description: string; image: string; link: string; }) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
				<Image
					src={image}
					alt={title}
					width={400}
					height={160}
					className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-lg mb-4"
				/>
				<h3 className="text-lg md:text-xl font-bold">{title}</h3>
				<p className="text-gray-400 mt-2 text-sm md:text-base">{description}</p>
			</div>
		</a>
	);
}

