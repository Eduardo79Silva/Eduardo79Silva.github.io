"use client";

import React from "react";
import projectsData from "@/data/projects.json";
import ImageWithLoader from "@/components/ImageWithLoader";
import { trackProjectClick } from "@/lib/analytics";
import { SiGithub, SiItchdotio } from "react-icons/si";

interface ProjectLinks {
  github?: string;
  itch?: string;
  website?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  links: ProjectLinks;
  featured?: boolean;
}

export default function Projects() {
  const featuredProject = projectsData.find((p: Project) => p.featured);
  const otherProjects = projectsData.filter((p: Project) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-bg-secondary text-text-primary px-4 md:px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Work
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Showcasing cutting-edge projects in graphics, games, and AI
        </p>

        {featuredProject && (
          <div className="mb-16">
            <div className="bg-bg-card rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <ImageWithLoader
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-accent text-text-primary px-4 py-2 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-text-secondary text-lg mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="flex gap-3">
                    {renderProjectLinks(
                      featuredProject.links,
                      featuredProject.title,
                      true,
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <h3 className="text-3xl font-bold text-center mb-8">All Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-bg-card rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
      <div className="relative h-48">
        <ImageWithLoader
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4 min-h-[60px]">
          {project.description}
        </p>
        <div className="flex gap-3">
          {renderProjectLinks(project.links, project.title, false)}
        </div>
      </div>
    </div>
  );
}

function renderProjectLinks(
  links: ProjectLinks,
  projectTitle: string,
  large: boolean = false,
) {
  const iconSize = large ? "w-6 h-6" : "w-5 h-5";
  const buttonSize = large ? "px-5 py-3" : "px-4 py-2";

  const handleClick = (linkType: "github" | "itch" | "website") => {
    trackProjectClick(projectTitle, linkType);
  };

  return (
    <>
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("github")}
          className={`${buttonSize} bg-bg-primary hover:bg-accent rounded-lg transition-all flex items-center gap-2`}
          title="View on GitHub"
        >
          <SiGithub className={iconSize} />
          {large && <span>GitHub</span>}
        </a>
      )}
      {links.itch && (
        <a
          href={links.itch}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("itch")}
          className={`${buttonSize} bg-bg-primary hover:bg-accent rounded-lg transition-all flex items-center gap-2`}
          title="Play on Itch.io"
        >
          <SiItchdotio className={iconSize} />
          {large && <span>Itch.io</span>}
        </a>
      )}
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("website")}
          className={`${buttonSize} bg-bg-secondary hover:bg-accent rounded-lg transition-all flex items-center gap-2`}
          title="Visit Website"
        >
          <svg
            className={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          {large && <span>Website</span>}
        </a>
      )}
    </>
  );
}
