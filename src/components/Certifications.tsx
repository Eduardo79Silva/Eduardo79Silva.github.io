"use client";

import React from "react";

import { FaTrophy } from "react-icons/fa";

const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    earnedOn: "June 19, 2024",
    credentialId: "F9A01EFC7532F527",
    certificationNumber: "F7EE9D-AE45DG",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/eduardosilva-3593/F9A01EFC7532F527?sharingId=ECBBA15F329F0074",
    skills: [
      "Describe Artificial Intelligence workloads and considerations",
      "Describe fundamental principles of machine learning on Azure",
      "Describe features of computer vision workloads on Azure",
      "Describe features of Natural Language Processing (NLP) workloads on Azure",
      "Describe features of generative AI workloads on Azure",
    ],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-bg-secondary text-text-primary px-4 md:px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certifications
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Professional credentials and expertise
        </p>
        <div
          className={`grid ${certifications.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-6 max-w-4xl mx-auto`}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="bg-bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 gradient-accent rounded-full flex items-center justify-center text-3xl">
                <FaTrophy />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {cert.title}
              </h3>
              <div className="space-y-2 text-sm text-text-secondary mb-4">
                <p>
                  <strong className="text-text-primary">Earned:</strong>{" "}
                  {cert.earnedOn}
                </p>
                <p>
                  <strong className="text-text-primary">ID:</strong>{" "}
                  {cert.credentialId}
                </p>
                <p>
                  <strong className="text-text-primary">Number:</strong>{" "}
                  {cert.certificationNumber}
                </p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 bg-accent hover:bg-accent-secondary rounded-lg transition-all mb-4"
              >
                View Certification
              </a>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-bold mb-2 text-accent">
                  Skills Covered:
                </p>
                <ul className="space-y-1 text-sm text-text-secondary">
                  {cert.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
