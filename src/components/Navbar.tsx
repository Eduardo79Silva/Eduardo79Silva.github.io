"use client";

import React, { useState } from "react";
import { trackResumeDownload } from "@/lib/analytics";

const links = [
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "stack", href: "#stack" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ borderBottom: "1px solid var(--border)" }}
      className="fixed w-full top-0 z-50 bg-bg"
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-text tracking-tight">
          eduardo silva
        </a>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-xs text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/files/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackResumeDownload}
            style={{ border: "1px solid var(--accent)" }}
            className="font-mono text-xs text-accent px-3 py-1.5 hover:bg-accent hover:text-black transition-colors"
          >
            cv.pdf
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden font-mono text-xs text-muted"
          onClick={() => setOpen(!open)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          style={{ borderBottom: "1px solid var(--border)" }}
          className="md:hidden bg-bg px-6 pb-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/files/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackResumeDownload}
            className="font-mono text-xs text-accent"
          >
            cv.pdf ↗
          </a>
        </div>
      )}
    </nav>
  );
}
