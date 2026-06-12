import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "var(--bg)",
        "bg-1": "var(--bg-1)",
        "bg-2": "var(--bg-2)",
        accent: "var(--accent)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      borderColor: {
        edge: "var(--border)",
        accent: "var(--accent)",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      prose: {
        lg: {
          css: {
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              lineHeight: "1.75",
            },
            h1: { marginTop: "0", marginBottom: "2rem" },
            h2: { marginTop: "3rem", marginBottom: "1.5rem" },
            code: { fontSize: "0.875rem" },
            pre: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
              padding: "1.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
