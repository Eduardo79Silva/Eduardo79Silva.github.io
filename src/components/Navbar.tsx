import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Eduardo Silva</a>
        <div className="flex items-center space-x-4">
          <a href="#projects" className="px-4">Projects</a>
          <a href="#experience" className="px-4">Experience</a>
          <a href="#extracurricular" className="px-4">Extra-Curricular</a>
	  <a href="#youtube" className="px-4">YouTube</a>
          <a href="#skills" className="px-4">Skills</a>
          <a href="#languages" className="px-4">Languages</a>
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

