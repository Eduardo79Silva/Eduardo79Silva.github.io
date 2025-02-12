import React, { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-50">
			<div className="container mx-auto flex justify-between items-center">
				<a href="#" className="text-xl font-bold">Eduardo Silva</a>
				<button
					className="lg:hidden text-white focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					☰
				</button>
				<div className={`lg:flex md:items-center md:space-x-4 ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex-row flex flex-col items-center md:space-y-0 space-y-4 p-4 md:p-0`}>
					<a href="#projects" className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Projects</a>
					<a href="#experience" className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Experience</a>
					<a href="#extracurricular" className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Extra-Curricular</a>
					<a href="#youtube" className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">YouTube</a>
					<a href="#skills" className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Skills</a>
					<a href="#languages" className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Languages</a>
					<a href="#certifications" className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Certifications</a>
					<a
						href="/files/CV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 bg-yellow-500 rounded-full text-white font-semibold"
					>
						Resume
					</a>
				</div>
			</div>
		</nav>
	);
}

