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
            <h3 className="text-2xl font-bold mb-4 text-accent">
              The Engineer
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I built a path tracer that implements Monte Carlo light transport
              correctly — meaning every bug is a physics violation, and you
              can't hide behind approximations. Before that, a Vulkan engine in
              C++23 where I hand-wrote the swap chain, command buffer
              architecture, and RAII device lifetime. On the ML side, I've
              shipped production systems on real datasets with real users and
              real failure modes — not Kaggle competitions. I'm now deploying
              trained models onto STM32 microcontrollers. The through-line is
              building things where performance and correctness both matter.
            </p>
          </div>

          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">How I Work</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I follow existing patterns rather than introducing abstractions
              that nobody asked for. I prefer explicit failures over silent
              exits. I push back when something doesn't make sense. I don't use
              non-null assertions or type casts to make the compiler stop
              complaining.
            </p>
            <ul className="space-y-3 text-text-secondary text-lg">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">
                  →
                </span>
                <span>
                  <strong className="text-text-primary">Languages:</strong>{" "}
                  C++23 (primary), Python, TypeScript
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">
                  →
                </span>
                <span>
                  <strong className="text-text-primary">Graphics:</strong>{" "}
                  Vulkan, GPU pipelines, PBR, physically-based light transport
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">
                  →
                </span>
                <span>
                  <strong className="text-text-primary">ML:</strong> PyTorch,
                  scikit-learn, production deployment, inference optimization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">
                  →
                </span>
                <span>
                  <strong className="text-text-primary">Embedded ML:</strong>{" "}
                  STM32, TFLite Micro, X-CUBE-AI, int8 quantization, UART
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">
                  →
                </span>
                <span>
                  <strong className="text-text-primary">
                    Signal Processing:
                  </strong>{" "}
                  EEG preprocessing, DSP, spiking neural networks
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              What I'm Looking For
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              Remote EU roles in graphics engineering, ML systems, or C++
              systems development. Companies where the codebase has actual
              performance constraints — rendering, simulation, real-time
              inference, edge deployment. Not looking for the easiest job;
              looking for the one where the technical problems are genuinely
              hard and the bar for correctness is high.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
