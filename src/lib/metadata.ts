import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Eduardo Silva — Systems Engineer",
  description:
    "ML systems, GPU rendering pipelines, and neural networks on bare metal. C++, Python, Vulkan, STM32, TensorFlow Lite.",
  keywords: [
    "Eduardo Silva",
    "Systems Engineer",
    "ML Engineer",
    "Embedded Systems",
    "C++",
    "Vulkan",
    "STM32",
    "TensorFlow Lite",
    "TinyML",
    "Python",
  ],
  authors: [{ name: "Eduardo Silva" }],
  creator: "Eduardo Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduardo79silva.github.io/",
    siteName: "Eduardo Silva",
    title: "Eduardo Silva — Systems Engineer",
    description:
      "ML systems, GPU pipelines, and neural networks on bare metal.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Silva — Systems Engineer",
    description:
      "ML systems, GPU pipelines, and neural networks on bare metal.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Silva",
  jobTitle: "Systems Engineer",
  url: "https://eduardo79silva.github.io/",
  sameAs: [
    "https://www.linkedin.com/in/eduardo79silva/",
    "https://github.com/eduardo79silva",
  ],
  knowsAbout: [
    "C++",
    "Vulkan",
    "Machine Learning",
    "Embedded Systems",
    "STM32",
    "TinyML",
  ],
  worksFor: { "@type": "Organization", name: "MieterEngel" },
};
