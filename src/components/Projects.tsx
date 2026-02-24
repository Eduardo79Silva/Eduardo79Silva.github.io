"use client";

import React from "react";
import projectsData from "@/data/projects.json";
import ImageWithLoader from "@/components/ImageWithLoader";
import { trackProjectClick } from "@/lib/analytics";
import { SiGithub, SiItchdotio } from "react-icons/si";
import { Brain, Clock, Wrench } from "lucide-react";

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
  category?: "neurotechnology" | "foundation";
  tags?: string[];
}

// Cast the imported JSON to Project array
const projects = projectsData as Project[];

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const neurotechProjects = projects.filter((p) => p.category === "neurotechnology");
  const foundationProjects = projects.filter((p) => p.category === "foundation" && !p.featured);

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
          Building the future of brain-computer interfaces
        </p>

        {/* Featured Project */}
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

        {/* Neurotechnology Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Neurotechnology & Brain-Computer Interfaces</h3>
          </div>
          <p className="text-text-secondary mb-8 max-w-3xl">
            Building end-to-end BCI systems as I transition into neurotechnology. 
            Projects added as I complete my learning roadmap—each demonstrating practical 
            application of computational neuroscience, signal processing, and machine learning 
            for neural data.
          </p>
          
          {neurotechProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {neurotechProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ComingSoonCard
                icon={<Brain />}
                title="Motor Imagery BCI Classifier"
                description="EEG-based brain-computer interface using Common Spatial Patterns and machine learning for motor imagery classification. Real-time signal processing pipeline with artifact rejection."
                status="Planning - March 2026"
              />
              <ComingSoonCard
                icon={<Clock />}
                title="P300 Speller System"
                description="Event-related potential detection for assistive communication. Implements row-column paradigm with ensemble classification for robust character selection."
                status="Planning - April 2026"
              />
              <ComingSoonCard
                icon={<Wrench />}
                title="Signal Quality Assessment"
                description="Automated EEG quality checker with SNR estimation, artifact detection, and channel quality scoring. Generates detailed reports for preprocessing guidance."
                status="Planning - May 2026"
              />
            </div>
          )}
        </div>

        {/* Technical Foundation Section */}
        <div>
          <h3 className="text-3xl font-bold mb-6">Technical Foundation</h3>
          <p className="text-text-secondary mb-8 max-w-3xl">
            Real-time systems, machine learning, and performance optimization projects demonstrating 
            the computational skills I'm applying to neurotechnology. Each project builds expertise 
            in areas critical for robust, clinical-grade BCI systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundationProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-bg-card rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <div className="relative h-48">
        <ImageWithLoader
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow">
          {project.description}
        </p>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-bg-primary text-text-muted rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-3 mt-auto">
          {renderProjectLinks(project.links, project.title, false)}
        </div>
      </div>
    </div>
  );
}

function ComingSoonCard({
  icon,
  title,
  description,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="bg-bg-card rounded-2xl p-6 border-2 border-dashed border-accent/30 flex flex-col h-full">
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-text-secondary text-sm mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
          {status}
        </span>
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
