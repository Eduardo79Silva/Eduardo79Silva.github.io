import React from "react";

const stack: Record<string, string[]> = {
  "Systems / Embedded": ["C++23", "C", "ARM Cortex-M", "STM32", "CMake", "Vulkan", "GLSL"],
  "ML / AI": ["Python", "PyTorch", "TensorFlow Lite", "scikit-learn", "NumPy", "SciPy"],
  "Cloud / Backend": ["AWS Lambda", "Azure OpenAI", "TypeScript", "Node.js", "TypeORM", "GraphQL"],
  "Tools": ["Git", "Linux", "Docker", "GDB", "CircleCI"],
};

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-muted mb-12 tracking-widest uppercase">
          Stack
        </p>
        <div className="grid md:grid-cols-2 gap-0">
          {Object.entries(stack).map(([category, items], i) => (
            <div
              key={category}
              style={{
                borderTop: "1px solid var(--border)",
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
              }}
              className="py-6 pr-6 md:pr-8"
            >
              <p className="font-mono text-xs text-muted mb-4">{category}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {items.map((item) => (
                  <span key={item} className="font-mono text-xs text-text">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
