import React from "react";

import { RiRobot2Fill } from "react-icons/ri";
import {
  SiUnity,
  SiCplusplus,
  SiVulkan,
  SiWebgl,
  SiJavascript,
  SiPython,
  SiTypescript,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('/images/hero_background.png')" }}
      className="min-h-screen flex flex-col justify-center items-center text-text-primary bg-bg-primary relative px-4 md:px-8 pt-20"
    >
      <div className="relative z-10 text-center max-w-3xl">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full gradient-accent flex items-center justify-center text-5xl font-bold">
            ES
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Eduardo Silva</h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-2">
          Software Engineer | Graphics & Game Developer
        </p>
        <p className="text-lg text-text-muted mb-8">
          Crafting immersive experiences with cutting-edge technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-accent hover:bg-accent-secondary rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/files/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-bg-card hover:bg-accent border-2 border-accent rounded-full text-lg font-semibold transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <h3 className="text-center text-text-secondary text-sm uppercase tracking-wider mb-6">
          Technologies & Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Unity", icon: <SiUnity /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Vulkan", icon: <SiVulkan /> },
            { name: "WebGL", icon: <SiWebgl /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Python", icon: <SiPython /> },
            { name: "AI/ML", icon: <RiRobot2Fill /> },
            { name: "TypeScript", icon: <SiTypescript /> },
          ].map((skill) => (
            <div key={skill.name} className="group">
              <div className="w-20 h-20 bg-bg-card rounded-2xl flex flex-col items-center justify-center hover:bg-accent transition-all transform hover:scale-110 cursor-pointer">
                <span className="text-3xl mb-1">{skill.icon}</span>
                <span className="text-xs text-text-secondary group-hover:text-text-primary">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
