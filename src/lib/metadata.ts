import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Eduardo Silva | ML Engineer & Systems Developer",
  description:
    "Portfolio of Eduardo Silva — ML Engineer specializing in production AI systems, LLM pipelines, and high-performance software. Experience with Vulkan, C++, Python, Azure, and AWS.",
  keywords: [
    "Eduardo Silva",
    "ML Engineer",
    "Machine Learning",
    "AI Systems",
    "LLM",
    "RAG",
    "Vulkan",
    "C++",
    "Python",
    "Software Engineer",
    "Signal Processing",
  ],
  authors: [{ name: "Eduardo Silva" }],
  creator: "Eduardo Silva",
  publisher: "Eduardo Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduardo79silva.github.io/",
    siteName: "Eduardo Silva Portfolio",
    title: "Eduardo Silva | ML Engineer & Systems Developer",
    description:
      "Portfolio showcasing production ML systems, AI engineering, and high-performance software projects.",
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
    title: "Eduardo Silva | ML Engineer & Systems Developer",
    description:
      "Portfolio showcasing production ML systems, AI engineering, and high-performance software projects.",
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
  jobTitle: "ML Engineer",
  description:
    "ML Engineer specializing in production AI systems and high-performance software",
  url: "https://eduardo79silva.github.io/",
  image: "/images/profile.jpg",
  sameAs: [
    "https://www.linkedin.com/in/eduardo79silva/",
    "https://github.com/eduardo79silva",
    "https://www.youtube.com/@eduardo-silva-79",
  ],
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "LLM Systems",
    "Vulkan",
    "C++",
    "Python",
    "Signal Processing",
    "Systems Programming",
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
