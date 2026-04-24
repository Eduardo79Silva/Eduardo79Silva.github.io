import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-bg-secondary text-text-primary px-4 md:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="space-y-8">
          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Who I Am</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm a software engineer with a strong focus on ML systems and
              performance-critical software. Over the past two years I've
              shipped production AI features — RAG pipelines, LLM-powered
              chatbots, time-series classifiers — while also building low-level
              systems from scratch, including a Vulkan rendering engine with
              full GPU memory management, shader compilation, and physics
              simulation. That combination of applied ML and systems depth is
              what I care about most and what I keep pushing on.
            </p>
          </div>

          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              What I Build
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              On the ML side, I've worked on production systems using Azure
              OpenAI, AWS Lambda pipelines, RAG architectures, and NLP
              classifiers — all deployed and monitored at scale. I care about
              making models actually work in production, not just in notebooks.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              On the systems side, my Vulkan engine covers physical device
              selection, command buffer synchronization, render passes, push
              constants, swap chain management, and a 2D physics simulation with
              gravitational field visualization. Writing this in C++23 gave me a
              genuine understanding of how software interacts with hardware — an
              understanding most ML engineers don't have.
            </p>
          </div>

          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Where I'm Heading
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              I'm deepening my systems knowledge in the direction of signal
              processing and embedded computing — areas where ML and hardware
              meet. I'm currently working through EPFL's DSP course and
              exploring how ML models run at the edge, on constrained hardware.
              The intersection of efficient inference and resource-limited
              systems is where I see the most interesting engineering challenges
              ahead.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              On the side, I have a growing interest in computational
              neuroscience and biomedical signal processing — not as my primary
              positioning, but as an area I find genuinely fascinating and where
              the same skills (real-time systems, signal processing, ML) apply
              in high-stakes contexts.
            </p>
          </div>

          <div className="gradient-accent rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-text-primary">
              Currently Open to Opportunities
            </h3>
            <p className="text-text-primary text-lg mb-6">
              Looking for ML engineering or software engineering roles where I
              can work on technically demanding problems — ideally involving
              applied AI, performance-critical systems, or both. Remote-first or
              Switzerland-based.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-bg-card text-accent rounded-full
                         font-bold hover:bg-bg-darker transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
