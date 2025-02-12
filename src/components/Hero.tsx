import React from 'react';

export default function Hero() {
	return (
		<section
			className="h-screen flex flex-col justify-center items-center text-white bg-cover bg-center relative px-4 md:px-8"
			style={{ backgroundImage: "url('/images/hero_background.png')" }}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 text-center max-w-2xl">
				<h1 className="text-4xl md:text-5xl font-bold">Hi, I&apos;m Eduardo Silva</h1>
				<p className="mt-4 text-lg md:text-xl">AI Software Engineer | Game Developer</p>
				<a href="#projects" className="mt-6 px-6 py-3 bg-yellow-500 rounded-lg text-lg font-semibold inline-block md:text-xl md:px-8 md:py-4">
					View My Work
				</a>
			</div>
		</section>
	);
}

