"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import ExtraCurricular from "../components/ExtraCurricular";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Certifications from "../components/Certifications";
import YouTubeSection from "../components/YoutubeSection";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Eduardo Silva | Portfolio</title>
        <meta name="description" content="Eduardo Silva's portfolio showcasing game development, AI, and cybersecurity projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <ExtraCurricular />
        <YouTubeSection />
        <Skills />
        <Languages />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
