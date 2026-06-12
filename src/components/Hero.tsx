import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-4xl mx-auto w-full py-24">
        <p className="font-mono text-xs text-muted mb-6 tracking-widest uppercase">
          Systems Engineer
        </p>

        <h1 className="text-5xl md:text-7xl font-light text-text leading-none mb-8 tracking-tight">
          Eduardo
          <br />
          Silva
        </h1>

        <p className="text-lg md:text-xl text-muted font-light max-w-xl leading-relaxed mb-12">
          I build ML systems, GPU rendering pipelines, and run neural networks
          on bare metal. Based in Germany, working remotely.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            style={{ background: "var(--accent)" }}
            className="font-mono text-xs text-black px-5 py-3 hover:opacity-90 transition-opacity"
          >
            projects →
          </a>
          <a
            href="https://github.com/Eduardo79Silva"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: "1px solid var(--border)" }}
            className="font-mono text-xs text-muted px-5 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo79silva/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: "1px solid var(--border)" }}
            className="font-mono text-xs text-muted px-5 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            linkedin ↗
          </a>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-2">
          {[
            "C++23",
            "Python",
            "Vulkan",
            "TensorFlow Lite",
            "STM32",
            "PyTorch",
            "TypeScript",
            "AWS Lambda",
          ].map((t) => (
            <span key={t} className="font-mono text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
