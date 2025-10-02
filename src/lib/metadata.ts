import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Eduardo Silva | AI Software Engineer & Graphics Developer",
  description:
    "Portfolio of Eduardo Silva - AI Software Engineer specializing in graphics programming, game development, and real-time rendering with Unity, Vulkan, and WebGL.",
  keywords: [
    "Eduardo Silva",
    "AI Engineer",
    "Game Developer",
    "Graphics Programming",
    "Vulkan",
    "Unity",
    "WebGL",
    "Ray Tracing",
    "Software Engineer",
  ],
  authors: [{ name: "Eduardo Silva" }],
  creator: "Eduardo Silva",
  publisher: "Eduardo Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduardo79silva.github.io/",
    siteName: "Eduardo Silva Portfolio",
    title: "Eduardo Silva | AI Software Engineer & Graphics Developer",
    description:
      "Portfolio showcasing AI, graphics programming, and game development projects.",
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
    title: "Eduardo Silva | AI Software Engineer & Graphics Developer",
    description:
      "Portfolio showcasing AI, graphics programming, and game development projects.",
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
  jobTitle: "AI Software Engineer",
  description:
    "AI Software Engineer specializing in graphics programming and game development",
  url: "https://eduardo79silva.github.io/",
  image: "/images/profile.jpg",
  sameAs: [
    "https://www.linkedin.com/in/eduardo79silva/",
    "https://github.com/eduardo79silva",
    "https://www.youtube.com/@eduardo-silva-79",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Graphics Programming",
    "Game Development",
    "Vulkan",
    "Unity",
    "Ray Tracing",
    "WebGL",
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
