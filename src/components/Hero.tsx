import React from 'react';

export default function Hero() {
	return (
		<section
			className="h-screen flex flex-col justify-center items-center text-white bg-cover bg-center relative"
			style={{ backgroundImage: "url('/images/hero_background.png')" }}
		>
			{/* Optional: Overlay for darker background */}
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 text-center px-4">
				<h1 className="text-5xl font-bold">Hi, I&apos;m Eduardo Silva</h1>
				<p className="mt-4 text-xl">AI Software Engineer | Game Developer</p>
				<a href="#projects" className="mt-6 px-6 py-3 bg-yellow-500 rounded-lg text-lg font-semibold inline-block">
					View My Work
				</a>
			</div>
		</section>
	);
}

