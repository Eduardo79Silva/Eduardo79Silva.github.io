import React from "react";

const credentials = [
  {
    title: "Embedded Software and Hardware Architecture",
    issuer: "University of Colorado Boulder",
    platform: "Coursera",
    date: "Jun 2026",
    grade: "95.32%",
    url: "https://coursera.org/verify/27XMXM91K1AD",
  },
  {
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    platform: "Microsoft Learn",
    date: "Jun 2024",
    grade: null,
    url: "https://learn.microsoft.com/api/credentials/share/en-us/eduardosilva-3593/F9A01EFC7532F527?sharingId=ECBBA15F329F0074",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 px-6 bg-bg-1">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-muted mb-12 tracking-widest uppercase">
          Credentials
        </p>
        <div>
          {credentials.map((c, i) => (
            <div
              key={i}
              style={{ borderTop: "1px solid var(--border)" }}
              className="py-5 grid md:grid-cols-3 gap-4 items-center"
            >
              <div className="md:col-span-2">
                <p className="font-mono text-sm text-text mb-0.5">{c.title}</p>
                <p className="font-mono text-xs text-muted">
                  {c.issuer} · {c.platform}
                </p>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-6">
                <div className="text-right">
                  <p className="font-mono text-xs text-muted">{c.date}</p>
                  {c.grade && (
                    <p className="font-mono text-xs text-accent">{c.grade}</p>
                  )}
                </div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-accent transition-colors"
                >
                  verify ↗
                </a>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
