import React from "react";

import { FaUserGraduate } from "react-icons/fa";
import { RiStackFill, RiRobot2Fill } from "react-icons/ri";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-bg-secondary text-white px-4 md:px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Professional journey and growth
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          <ExperienceCard
            role="Fullstack Developer"
            company="MieterEngel"
            duration="May 2025 - Present"
            description="Develop and maintain core features of MieterEngel’s digital tenant-protection platform used by 30,000+ members
across Germany."
            current={true}
            icon={<RiStackFill />}
          />
          <ExperienceCard
            role="AI Software Engineer"
            company="ARMIS GROUP"
            duration="July 2023 - May 2025"
            description="Developing AI chatbots using TypeScript and Python, enhancing user engagement with LLMs."
            current={false}
            icon={<RiRobot2Fill />}
          />
          <ExperienceCard
            role="Internship Student"
            company="ARMIS GROUP"
            duration="Feb 2023 - July 2023"
            description="Worked on AI-powered web forms, gained training in UML documentation, and refined agile methodologies."
            current={false}
            icon={<FaUserGraduate />}
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  role,
  company,
  duration,
  description,
  current,
  icon,
}: {
  role: string;
  company: string;
  duration: string;
  description: string;
  current: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-bg-card p-8 rounded-2xl shadow-lg relative overflow-hidden">
      {current && (
        <div className="absolute top-4 right-4 bg-accent text-text-primary px-4 py-1 rounded-full text-xs font-bold">
          CURRENT
        </div>
      )}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-1">{role}</h3>
          <p className="text-accent font-semibold mb-2">{company}</p>
          <p className="text-text-secondary text-sm mb-3">{duration}</p>
          <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
