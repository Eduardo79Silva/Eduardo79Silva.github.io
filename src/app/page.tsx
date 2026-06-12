"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Stack from "../components/Stack";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
