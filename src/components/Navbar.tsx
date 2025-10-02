"use client";

import React, { useState } from "react";
//import { useTheme } from "@/contexts/ThemeProvider";
import { trackResumeDownload } from "@/lib/analytics";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-bg-primary text-text-primary p-4 fixed w-full top-0 shadow-lg z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold flex items-center gap-2">
          <span>Eduardo Silva</span>
        </a>
        <div className="flex items-center gap-4">
          {/*<button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-bg-card hover:bg-accent transition-colors"
            style={{ display: "hidden" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>*/}
          <button
            className="lg:hidden text-text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex md:items-center md:space-x-6 ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-bg-primary md:bg-transparent md:flex-row flex flex-col items-center md:space-y-0 space-y-4 p-4 md:p-0`}
        >
          <a href="#projects" className="hover:text-accent transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-accent transition-colors">
            Experience
          </a>
          <a href="#youtube" className="hover:text-accent transition-colors">
            YouTube
          </a>
          <a
            href="#certifications"
            className="hover:text-accent transition-colors"
          >
            Certifications
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
          <a
            href="/files/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackResumeDownload}
            className="px-5 py-2 bg-accent hover:bg-accent-secondary rounded-full font-semibold transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
