"use client";

import React, { useState } from "react";
import { trackProjectClick } from "@/lib/analytics";

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  links: { github?: string; website?: string };
}

const projects: Project[] = [
  {
    slug: "stm32-tinyml",
    title: "STM32 TinyML Sine",
    description:
      "Trained a neural network, quantized it, and deployed it via TensorFlow Lite for Microcontrollers on an STM32 Nucleo-L476RG. The model drives a PWM output to trace a sine wave on an LED — inference running on an ARM Cortex-M4 with no OS, no heap allocator, no abstractions.",
    tags: ["Embedded C", "TFLM", "STM32", "ARM Cortex-M4", "PWM"],
    links: { github: "https://github.com/Eduardo79Silva/stm32-edge-ai" },
  },
  {
    slug: "snn",
    title: "Spiking Neural Network",
    description:
      "LIF neuron model built from scratch in Python. Implements membrane dynamics, weighted synaptic input, spike reset, and population-level raster/firing-rate visualization. Modular architecture (layers, loaders, rules, synapses) targeting EEG motor imagery classification on the PhysioNet dataset. AdEx neurons and STDP in progress.",
    tags: ["Python", "NumPy", "LIF Model", "Computational Neuroscience", "EEG"],
    links: {
      github: "https://github.com/Eduardo79Silva/spiking-neural-network",
    },
  },
  {
    slug: "hikari",
    title: "Hikari Ray Tracer",
    description:
      "Vulkan-based path tracer with emissive materials and a denoiser. Physical device selection, descriptor sets, compute pipelines, SPIR-V shader compilation. Built as a research platform for further integration with the Majin engine.",
    tags: ["C++23", "Vulkan", "GLSL", "GPU Computing", "CMake"],
    links: { github: "https://github.com/Eduardo79Silva/Hikari-RayTracer" },
  },
  {
    slug: "majin",
    title: "Majin Engine",
    description:
      "3D game engine in C++23 with a full Vulkan backend. Covers physical device selection, swap chain management, double-buffered command recording, render passes, push constants, and a 2D physics simulation with gravitational vector field visualization.",
    tags: ["C++23", "Vulkan", "Physics", "CMake", "GLFW"],
    links: { github: "https://github.com/Eduardo79Silva/Majin" },
  },
  {
    slug: "chatbot",
    title: "FEP University Chatbot",
    description:
      "Production RAG chatbot for a Portuguese university. Azure OpenAI for inference, TypeScript + Python backend, custom deployment pipeline, on-premises delivery. Handles live student queries across the full knowledge base.",
    tags: ["Azure OpenAI", "RAG", "TypeScript", "Python", "Production ML"],
    links: { website: "https://youtu.be/Qx2BIe12lSY" },
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderLeft: "2px solid transparent",
        transition: "border-color 0.15s",
      }}
      className="group px-6 py-6 cursor-pointer hover:border-l-accent"
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderLeftColor = "var(--accent)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderLeftColor = "transparent")
      }
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-mono text-sm text-text mb-1">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="font-mono text-xs text-muted mt-0.5 flex-shrink-0">
          {expanded ? "−" : "+"}
        </span>
      </div>

      {expanded && (
        <div className="mt-4">
          <p className="text-sm text-muted leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  trackProjectClick(project.title, "github");
                }}
                className="font-mono text-xs text-accent hover:underline"
              >
                github ↗
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  trackProjectClick(project.title, "website");
                }}
                className="font-mono text-xs text-accent hover:underline"
              >
                demo ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-muted mb-12 tracking-widest uppercase">
          Projects
        </p>
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
