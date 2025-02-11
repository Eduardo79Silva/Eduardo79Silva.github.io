"use client";

import { useState, useEffect } from "react";

const videos = [
	{ title: "Game Dev Vlog #1", url: "https://www.youtube.com/embed/xVrdA7g6D5Q" },
	{ title: "Game Dev Vlog #2", url: "https://www.youtube.com/embed/wdEkG6sFP7g" },
	{ title: "Cybersecurity Tips", url: "https://www.youtube.com/embed/LB_cSQIcrzo" },
];

export default function YouTubeSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const prevVideo = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
	};

	const nextVideo = () => {
		setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
	};

	if (!isClient) {
		return <div className="text-white text-center py-20">Loading videos...</div>;
	}

	return (
		<section id="youtube" className="py-20 bg-gray-800 text-white text-center">
			<div className="container mx-auto">
				<h2 className="text-4xl font-bold"><a href="https://www.youtube.com/@eduardo-silva-79" target="_blank">YouTube Channel</a></h2>
				<p className="text-gray-400 mt-2">Check out my latest videos on game development and cybersecurity</p>
				<div className="relative mt-6 flex justify-center items-center">
					<button className="absolute left-0 p-2 bg-gray-900 rounded-full" onClick={prevVideo}>&larr;</button>
					{isClient && (
						<iframe
							key={videos[currentIndex].url} // Forces re-render to prevent caching issues
							width="560"
							height="315"
							src={videos[currentIndex].url}
							title={videos[currentIndex].title}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="rounded-lg"
						></iframe>
					)}
					<button className="absolute right-0 p-2 bg-gray-900 rounded-full" onClick={nextVideo}>&rarr;</button>
				</div>
			</div>
		</section>
	);
}

