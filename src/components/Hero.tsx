import React from "react";
import { Brain, Activity, Code2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Main Hero */}
      <section
        style={{ backgroundImage: "url('/images/hero_background.png')" }}
        className="min-h-screen flex flex-col justify-center items-center text-text-primary bg-bg-primary relative px-4 md:px-8 pt-20"
      >
        <div className="relative z-10 text-center max-w-4xl">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full gradient-accent flex items-center justify-center text-5xl font-bold shadow-2xl">
              ES
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Eduardo Silva</h1>
          <p className="text-2xl md:text-3xl text-text-secondary mb-3 font-light">
            Neurotechnology & Brain-Computer Interfaces
          </p>
          
          {/* Transition Badge */}
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-accent/20 border-2 border-accent text-accent rounded-full text-sm font-semibold">
              Transitioning from Software Engineering
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems for neural signal processing and human augmentation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent hover:bg-accent-secondary rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="/blog"
              className="px-8 py-4 bg-transparent hover:bg-accent/10 border-2 border-accent text-accent hover:text-text-primary rounded-full text-lg font-semibold transition-all"
            >
              Read Blog
            </a>
            <a
              href="/files/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent hover:bg-accent/10 border-2 border-accent text-accent hover:text-text-primary rounded-full text-lg font-semibold transition-all"
            >
              Download CV
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-text-muted"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Tech Stack Mini-Section - Separate, clean */}
      <section className="py-16 bg-bg-secondary">
        <div className="container mx-auto max-w-5xl px-4">
          <h3 className="text-center text-text-muted text-xs uppercase tracking-wider mb-8">
            Technical Focus
          </h3>
          
          {/* Primary Skills - Clean grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="group text-center">
              <div className="w-20 h-20 bg-accent/10 border-2 border-accent rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:scale-110 transition-all cursor-pointer">
                <Code2 className="w-10 h-10 text-accent group-hover:text-text-primary" />
              </div>
              <p className="text-sm font-semibold text-text-primary">Neural Computing</p>
              <p className="text-xs text-text-muted">Python • NumPy • MNE</p>
            </div>

            <div className="group text-center">
              <div className="w-20 h-20 bg-accent/10 border-2 border-accent rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:scale-110 transition-all cursor-pointer">
                <Activity className="w-10 h-10 text-accent group-hover:text-text-primary" />
              </div>
              <p className="text-sm font-semibold text-text-primary">Signal Processing</p>
              <p className="text-xs text-text-muted">DSP • Filtering • FFT</p>
            </div>

            <div className="group text-center">
              <div className="w-20 h-20 bg-accent/10 border-2 border-accent rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:scale-110 transition-all cursor-pointer">
                <Brain className="w-10 h-10 text-accent group-hover:text-text-primary" />
              </div>
              <p className="text-sm font-semibold text-text-primary">BCI Systems</p>
              <p className="text-xs text-text-muted">P300 • Motor Imagery</p>
            </div>

            <div className="group text-center">
              <div className="w-20 h-20 bg-accent/10 border-2 border-accent rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:scale-110 transition-all cursor-pointer">
                <Zap className="w-10 h-10 text-accent group-hover:text-text-primary" />
              </div>
              <p className="text-sm font-semibold text-text-primary">Real-time Systems</p>
              <p className="text-xs text-text-muted">C++ • Low-latency</p>
            </div>
          </div>

          {/* Foundation note */}
          <p className="text-center text-text-muted text-sm">
            Foundation: Real-time Graphics • AI/ML Systems • Performance Optimization
          </p>
        </div>
      </section>
    </>
  );
}
