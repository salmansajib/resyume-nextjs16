import React from "react";
import EducationTimeline from "./EducationTimeline";

export default function EducationSection({ data }) {
  const { education } = data;

  return (
    <section
      aria-labelledby="education-heading"
      className="bg-background-secondary px-4 py-20 pt-32 text-text-dimmed"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 lg:gap-36">
        {/* title and subtitle */}
        <header className="space-y-3 text-center lg:text-left flex-1">
          <h2
            id="education-heading"
            className="text-lg font-medium text-primary uppercase"
          >
            {education.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11">
            {education.subtitle}
          </h3>
        </header>

        {/* education timeline */}
        <EducationTimeline education={education} />
      </div>
    </section>
  );
}
