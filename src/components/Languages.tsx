import React from "react";

export default function Languages() {
  return (
    <section
      id="languages"
      className="py-20 bg-bg-secondary text-white px-4 md:px-8"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Languages</h2>
        <p className="text-gray-400 mb-12">Multilingual communication skills</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {[
            { language: "Portuguese", level: "Native" },
            { language: "English", level: "Fluent" },
            { language: "Spanish", level: "Intermediate" },
            { language: "German", level: "Basic" },
          ].map(({ language, level }) => (
            <div
              key={language}
              className="px-6 py-3 bg-[#2a2f3f] hover:bg-[#ff6b4a] rounded-full text-sm md:text-base transition-all transform hover:scale-105"
            >
              <strong>{language}:</strong> {level}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
