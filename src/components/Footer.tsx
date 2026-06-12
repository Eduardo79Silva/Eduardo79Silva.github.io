import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)" }}
      className="py-8 px-6 bg-bg"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <span className="font-mono text-xs text-muted">Eduardo Silva</span>
        <span className="font-mono text-xs text-muted">
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
