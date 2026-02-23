"use client";

import React from "react";
import learningData from "@/data/learning.json";
import { BookOpen, Brain, Signal, Eye, Network } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  brain: <Brain className="w-6 h-6" />,
  signal: <Signal className="w-6 h-6" />,
  eye: <Eye className="w-6 h-6" />,
  network: <Network className="w-6 h-6" />,
};

export default function LearningJourney() {
  const { courses, researchInterests, papers } = learningData;

  return (
    <section
      id="learning"
      className="py-20 bg-bg-primary text-text-primary px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Learning Journey
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Systematically preparing for a transition into neurotechnology and brain-computer interfaces
        </p>

        {/* Courses Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-accent" />
            Courses & Certifications
          </h3>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Research Interests</h3>
          <p className="text-text-secondary mb-8">
            Focus areas guiding my transition into neurotechnology and BCI research
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchInterests.map((interest, index) => (
              <InterestCard key={index} interest={interest} />
            ))}
          </div>
        </div>

        {/* Reading List */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Current Reading</h3>
          <p className="text-text-secondary mb-8">
            Foundational papers and recent research in BCI and computational neuroscience
          </p>
          <div className="grid gap-4">
            {papers.map((paper, index) => (
              <PaperCard key={index} paper={paper} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: any }) {
  const statusColors = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    planned: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
  };

  return (
    <div className="bg-bg-card rounded-2xl p-6 border-l-4 border-accent">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-2">{course.title}</h4>
          <p className="text-text-secondary text-sm">
            {course.provider} • {course.platform}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[course.status as keyof typeof statusColors]}`}
        >
          {statusLabels[course.status as keyof typeof statusLabels]}
        </span>
      </div>
      
      <p className="text-text-secondary mb-4">{course.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {course.skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="px-2 py-1 bg-bg-primary text-text-muted rounded text-xs"
          >
            {skill}
          </span>
        ))}
      </div>

      {course.status === "completed" && course.certificateUrl && (
        <a
          href={course.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-secondary text-sm"
        >
          View Certificate →
        </a>
      )}
      
      {course.status !== "completed" && (
        <p className="text-text-muted text-sm">
          Expected completion: {course.expectedCompletion}
        </p>
      )}
    </div>
  );
}

function InterestCard({ interest }: { interest: any }) {
  return (
    <div className="bg-bg-card rounded-2xl p-6 hover:bg-accent transition-all group">
      <div className="w-12 h-12 bg-accent group-hover:bg-bg-card rounded-full flex items-center justify-center text-text-primary group-hover:text-accent mb-4 transition-all">
        {iconMap[interest.icon] || <Brain className="w-6 h-6" />}
      </div>
      <h4 className="text-xl font-bold mb-3 group-hover:text-text-primary">
        {interest.title}
      </h4>
      <p className="text-text-secondary mb-4 group-hover:text-text-primary">
        {interest.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {interest.keywords.map((keyword: string, i: number) => (
          <span
            key={i}
            className="px-2 py-1 bg-bg-primary group-hover:bg-bg-card text-text-muted text-xs rounded"
          >
            #{keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

function PaperCard({ paper }: { paper: any }) {
  const statusColors = {
    completed: "bg-green-500/20 text-green-400",
    reading: "bg-blue-500/20 text-blue-400",
    planned: "bg-gray-500/20 text-gray-400",
  };

  return (
    <div className="bg-bg-card rounded-xl p-5 hover:bg-accent transition-all group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h4 className="font-bold mb-1 group-hover:text-text-primary">
            {paper.title}
          </h4>
          <p className="text-text-secondary text-sm group-hover:text-text-primary">
            {paper.authors} ({paper.year})
          </p>
          <p className="text-text-muted text-xs mt-1">{paper.journal}</p>
        </div>
        <span
          className={`px-2 py-1 rounded text-xs font-semibold flex-shrink-0 ${statusColors[paper.status as keyof typeof statusColors]}`}
        >
          {paper.status}
        </span>
      </div>
      
      {paper.notes && (
        <p className="text-text-secondary text-sm mb-3 group-hover:text-text-primary italic">
          "{paper.notes}"
        </p>
      )}
      
      <div className="flex flex-wrap gap-2">
        {paper.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="px-2 py-1 bg-bg-primary group-hover:bg-bg-card text-accent text-xs rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
