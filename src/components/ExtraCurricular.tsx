import React from "react";
import ImageWithLoader from "./ImageWithLoader";

export default function ExtraCurricular() {
  return (
    <section
      id="extracurricular"
      className="py-20 bg-bg-secondary text-white px-4 md:px-8"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Extra-Curricular Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ActivityCard
            title="Covilhã 2019 - Regional Debate Session"
            description="Organized by the European Youth Parliament (EYP), I participated as a delegate and was selected for the nationals in Porto 2020."
            image="/images/eyp.jpg"
          />
          <ActivityCard
            title="Chapatim Roller Cup Volunteer"
            description="Volunteered for the Chapatim Roller Cup, gaining international and philanthropic experience."
            image="/images/chapatim.jpg"
          />
          <ActivityCard
            title="Student Council President"
            description="Led the attending student council at Escola Básica e Secundária do Padrão da Légua, managing over 150 participants."
            image="/images/student_council.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function ActivityCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-bg-card rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
      <div className="relative h-60">
        <ImageWithLoader
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 min-h-[60px]">
          {description}
        </p>
      </div>
    </div>
  );
}
