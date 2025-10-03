import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-bg-secondary text-text-primary px-4 md:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My Quest
        </h2>

        <div className="space-y-8">
          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">The Mission</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I&apos;m on a quest to bridge the gap between artificial
              intelligence and immersive experiences. My journey combines
              cutting-edge AI development with real-time graphics and game
              technology to create experiences that push the boundaries of
              what&apos;s possible.
            </p>
          </div>

          <div className="bg-bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Why Graphics & Games
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              It all started when I was 13 years old and wanted to play a game
              that did not exist at the time, so I thought: &quot;What if I
              could make it myself?.&quot; Of course I did not know what I was
              getting myself into but I started tinkering with some tools.
              Started by making a tutorial game in GameMaker but soon
              transitioned to Unity where I saw that I really had to learn how
              write code. There I went, with no idea how to do things but I was
              willing to do whatever it took to see that game I wanted come to
              life. Years later, here I am programming everything that I can
              imagine and being only limited by my free time.
            </p>
          </div>

          <div className="gradient-accent rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-text-primary">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="text-text-primary text-lg mb-6">
              I&apos;m actively seeking junior game developer, graphics
              engineer, or AI collaboration opportunities. Whether it&apos;s
              real-time rendering, game mechanics, or AI-powered experiences,
              I&apos;m ready to contribute.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-bg-card text-accent rounded-full font-bold hover:bg-bg-card transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
