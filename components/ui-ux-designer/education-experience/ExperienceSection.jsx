import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection({ data }) {
  const { experience } = data;

  return (
    <section
      aria-labelledby="experience-heading"
      className="bg-background-secondary px-4 py-20 pb-32 text-text-dimmed"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 lg:gap-36">
        {/* title and subtitle */}
        <header className="space-y-3 text-center lg:text-left">
          <h2
            id="experience-heading"
            className="text-lg font-medium text-primary uppercase"
          >
            {experience.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11">
            {experience.subtitle}
          </h3>
        </header>

        {/* experience timeline */}
        <ExperienceTimeline experience={experience} />
      </div>
    </section>
  );
}
