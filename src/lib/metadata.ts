import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Eduardo Silva | C++ Systems & ML Engineer",
  description:
    "Portfolio of Eduardo Silva — C++ systems engineer specializing in real-time rendering, Vulkan GPU pipelines, and production ML systems. Currently extending into embedded ML and edge AI.",
  keywords: [
    "Eduardo Silva",
    "C++ Engineer",
    "Systems Engineer",
    "Vulkan",
    "Graphics Engineer",
    "ML Engineer",
    "Edge AI",
    "Embedded ML",
    "Ray Tracing",
    "GPU Programming",
  ],
  authors: [{ name: "Eduardo Silva" }],
  creator: "Eduardo Silva",
  publisher: "Eduardo Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduardo79silva.github.io/",
    siteName: "Eduardo Silva Portfolio",
    title: "Eduardo Silva | C++ Systems & ML Engineer",
    description:
      "Portfolio showcasing real-time rendering, Vulkan GPU pipelines, and production ML systems.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eduardo Silva Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Silva | C++ Systems & ML Engineer",
    description:
      "Portfolio showcasing real-time rendering, Vulkan GPU pipelines, and production ML systems.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Silva",
  jobTitle: "C++ Systems & ML Engineer",
  description:
    "C++ systems engineer specializing in real-time rendering, Vulkan GPU pipelines, and production ML systems",
  url: "https://eduardo79silva.github.io/",
  image: "/images/profile.jpg",
  sameAs: [
    "https://www.linkedin.com/in/eduardo79silva/",
    "https://github.com/eduardo79silva",
    "https://www.youtube.com/@eduardo-silva-79",
  ],
  knowsAbout: [
    "C++",
    "Vulkan",
    "GPU Programming",
    "Real-time Rendering",
    "Machine Learning",
    "Edge AI",
    "Embedded ML",
    "Signal Processing",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "FEUP",
  },
  worksFor: {
    "@type": "Organization",
    name: "MieterEngel",
  },
};
