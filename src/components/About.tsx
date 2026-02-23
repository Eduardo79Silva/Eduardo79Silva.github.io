import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-bg-secondary text-text-primary px-4 md:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My Journey to Neurotechnology
        </h2>

        <div className="space-y-8">
          
          {/* Section 1: The Transition */}
          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">The Transition</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              After years building real-time AI systems and high-performance graphics engines, 
              I reached a turning point: I wanted to use my abilities to create lasting impact 
              rather than just pursuing commercial success. While researching fields where 
              engineering could directly improve lives, I discovered the groundbreaking work at 
              Science Corp—restoring vision to the blind through cortical implants. Combined with 
              my fascination for the human brain and its computational mechanisms, I realized 
              that neurotechnology was the perfect convergence of my technical skills and desire 
              to help others. Brain-computer interfaces represent the pinnacle of engineering 
              challenges: real-time signal processing, noise-robust machine learning, and 
              millisecond-latency systems—all in service of giving locked-in patients 
              communication, treating depression, and restoring lost senses. Since early 2026, 
              I've been systematically preparing for this transition, building BCI systems from 
              scratch and studying computational neuroscience.
            </p>
          </div>

          {/* Section 2: Why Neurotechnology */}
          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Why Neurotechnology Matters to Me
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Neurotechnology sits at the intersection of the most meaningful challenges in 
              medicine and the most fascinating problems in engineering. The opportunity to work 
              on technologies that could restore independence to locked-in patients, provide 
              new treatment options for treatment-resistant depression, or give vision back to 
              the blind represents the kind of lasting impact I want my career to have.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Beyond the immediate clinical applications, I'm deeply interested in understanding 
              cognition itself—how the brain encodes information, makes decisions, and interfaces 
              with the world. Brain-computer interfaces are not just therapeutic tools; they're 
              windows into the fundamental mechanisms of human consciousness and neural computation. 
              The technical challenges—decoding neural signals in real-time, adapting to neural 
              plasticity, ensuring biocompatibility—are exactly the kind of complex, interdisciplinary 
              problems that drive me as an engineer.
            </p>
          </div>

          {/* Section 3: The Technical Journey */}
          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              The Technical Journey
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              My background in real-time graphics and AI systems provides a strong foundation 
              for neurotechnology. Building Vulkan rendering engines taught me about GPU-accelerated 
              computation and millisecond-latency constraints—directly applicable to real-time 
              neural decoding. Deploying production ML systems at scale gave me experience with 
              robust model deployment and monitoring, essential for clinical BCI applications.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              To formalize my transition, I'm systematically building expertise through:
            </p>
            <ul className="space-y-3 text-text-secondary text-lg">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">→</span>
                <span><strong className="text-text-primary">Coursework:</strong> Computational Neuroscience (University of Washington), 
                Brain-Computer Interfaces (KAIST), Medical Neuroscience (Duke), and Digital Signal 
                Processing (EPFL)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">→</span>
                <span><strong className="text-text-primary">Hands-on Projects:</strong> Building end-to-end BCI systems including 
                motor imagery classifiers, P300 spellers, real-time neural decoders, and signal 
                quality assessment tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">→</span>
                <span><strong className="text-text-primary">Research:</strong> Studying foundational papers in neural encoding, 
                BCI paradigms, and clinical applications to understand both the engineering and 
                neuroscience perspectives</span>
              </li>
            </ul>
          </div>

          {/* Section 4: What's Next */}
          <div className="gradient-accent rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-text-primary">
              Next Steps: ETH Zürich & Beyond
            </h3>
            <p className="text-text-primary text-lg mb-4">
              I'm applying to ETH Zürich's Biomedical Engineering Master's program to formalize 
              my transition into neurotechnology and gain the neuroscience foundation needed for 
              cutting-edge BCI research. I'm particularly interested in closed-loop neural 
              implants for treatment-resistant depression, communication systems for locked-in 
              patients, cortical visual prosthetics, and the computational neuroscience of cognition.
            </p>
            <p className="text-text-primary text-lg mb-6">
              My goal is to contribute to the development of clinical-grade brain-computer 
              interfaces that make a real difference in patients' lives—combining rigorous 
              engineering with deep neuroscience understanding to push the boundaries of what's 
              possible at the brain-machine interface.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-bg-card text-accent rounded-full 
                         font-bold hover:bg-bg-darker transition-all"
            >
              Let's Connect
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
