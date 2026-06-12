import React from "react";

const roles = [
  {
    role: "Fullstack Developer",
    company: "MieterEngel",
    period: "May 2025 – Present",
    detail:
      "Core features of Germany's largest digital tenant-protection platform. AWS Lambda pipelines, TypeORM, GraphQL, SSO integrations, async event architecture.",
  },
  {
    role: "AI Software Engineer",
    company: "ARMIS GROUP",
    period: "Jul 2023 – May 2025",
    detail:
      "Production AI systems: RAG pipelines, LLM-powered chatbots, NLP classifiers. Azure OpenAI, TypeScript, Python. University chatbot deployed on-premises.",
  },
  {
    role: "Software Engineer Intern",
    company: "ARMIS GROUP",
    period: "Feb 2023 – Jul 2023",
    detail: "AI-powered web forms, UML documentation, agile workflows.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bg-1">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-muted mb-12 tracking-widest uppercase">
          Experience
        </p>
        <div className="space-y-0">
          {roles.map((r, i) => (
            <div
              key={i}
              style={{ borderTop: "1px solid var(--border)" }}
              className="py-6 grid md:grid-cols-3 gap-4"
            >
              <div>
                <p className="font-mono text-xs text-muted">{r.period}</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-mono text-sm text-text mb-0.5">{r.role}</p>
                <p className="font-mono text-xs text-accent mb-3">
                  {r.company}
                </p>
                <p className="text-sm text-muted leading-relaxed">{r.detail}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
