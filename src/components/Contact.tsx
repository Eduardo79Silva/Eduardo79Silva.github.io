import React from "react";
import { trackSocialClick } from "@/lib/analytics";

const links = [
  {
    label: "email",
    href: "mailto:eduardo4silva@gmail.com",
    display: "eduardo4silva@gmail.com",
  },
  {
    label: "github",
    href: "https://github.com/eduardo79silva",
    display: "github.com/eduardo79silva",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/eduardo79silva/",
    display: "linkedin.com/in/eduardo79silva",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-muted mb-12 tracking-widest uppercase">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-text mb-4 leading-tight">
          Open to ML, embedded,
          <br />
          and systems roles.
        </h2>
        <p className="text-sm text-muted mb-12 max-w-md leading-relaxed">
          Remote-first or Portugal-based. Reach out if you're working on
          something technically interesting.
        </p>
        <div>
          {links.map((l, i) => (
            <div
              key={l.label}
              style={{ borderTop: "1px solid var(--border)" }}
              className="py-4 flex items-center justify-between"
            >
              <span className="font-mono text-xs text-muted w-20">
                {l.label}
              </span>
              <a
                href={l.href}
                target={l.label !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={() => trackSocialClick(l.label)}
                className="font-mono text-xs text-text hover:text-accent transition-colors"
              >
                {l.display} ↗
              </a>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
