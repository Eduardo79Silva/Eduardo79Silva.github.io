"use client";

import { useState, useEffect } from "react";

const videos = [
	{ title: "Throwing Daggers Mechanic", url: "https://www.youtube.com/embed/xVrdA7g6D5Q" },
	{ title: "Making The Perfect Jumping System", url: "https://www.youtube.com/embed/wdEkG6sFP7g" },
	{ title: "Creating an Epic Melee Combat", url: "https://www.youtube.com/embed/LB_cSQIcrzo" },
	{ title: "Turbo Soccer", url: "https://www.youtube.com/embed/t93QKHkg9UU" },
	{ title: "How to Master Game Programming", url: "https://www.youtube.com/embed/MVieMUXM7yM" },
];

export default function YouTubeSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isClient, setIsClient] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsClient(true);
		// Function to check viewport width
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
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
		<section id="youtube" className="py-20 bg-gray-800 text-white text-center px-4 md:px-8">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold">
					<a href="https://www.youtube.com/@eduardo-silva-79" target="_blank" rel="noopener noreferrer">
						YouTube Channel
					</a>
				</h2>
				<p className="text-gray-400 mt-2 text-sm md:text-base">
					Check out my latest videos on game development and cybersecurity
				</p>
				{isMobile ? (
					// Mobile: Horizontally scrollable carousel
					<div className="mt-6 flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
						{videos.map((video, index) => (
							<div key={index} className="flex-shrink-0 w-11/12 max-w-xs snap-center">
								<div className="relative w-full aspect-video">
									<iframe
										src={video.url}
										title={video.title}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="absolute inset-0 w-full h-full rounded-lg"
									></iframe>
								</div>
								<p className="mt-2 text-sm font-bold">{video.title}</p>
							</div>
						))}
					</div>
				) : (
					// Desktop: Arrow navigation with single video display
					<div className="relative mt-6 flex justify-center items-center">
						<button
							className="absolute left-[-1rem] top-1/2 transform -translate-y-1/2 z-20 p-3 bg-gray-800 hover:bg-yellow-500 text-white rounded-full shadow-lg"
							onClick={prevVideo}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>
						<div className="relative w-full max-w-xl mx-auto aspect-video">
							<iframe
								key={videos[currentIndex].url} // Forces re-render on video change
								src={videos[currentIndex].url}
								title={videos[currentIndex].title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="absolute inset-0 w-full h-full rounded-lg"
							></iframe>
						</div>
						<button
							className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 z-20 p-3 bg-gray-800 hover:bg-yellow-500 text-white rounded-full shadow-lg"
							onClick={nextVideo}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

