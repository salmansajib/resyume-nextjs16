import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function CarrerPathSection({ data }) {
  const { careerPath } = data;
  const workData = careerPath.workExperience;
  const educationData = careerPath.education;

  // Helper function to format period
  const formatPeriod = (period) => {
    if (period.current) {
      return "Current";
    }
    if (period.start === period.end) {
      return period.start;
    }
    return (
      <div className="flex flex-col">
        <span>{period.start}</span>
        <span>{period.end}</span>
      </div>
    );
  };

  // Helper function to get datetime attribute
  const getDateTime = (period) => {
    if (period.current) {
      return new Date().getFullYear().toString();
    }
    // For a range, use start/end format
    return `${period.start}/${period.end}`;
  };

  return (
    <section
      aria-labelledby="carrer-heading"
      className="bg-background-primary py-20 px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* section title and subtitle */}
        <header className="space-y-4">
          <h2
            id="services-heading"
            className="text-2xl font-normal text-primary leading-none"
          >
            {careerPath.title}
          </h2>
          <h3 className="text-[clamp(3rem,6vw,4rem)] font-medium leading-none">
            {careerPath.subtitle}
          </h3>
        </header>

        {/* work and education */}
        <div className="mt-15 grid md:grid-cols-2 gap-10 lg:gap-32">
          <WorkExperience
            workData={workData}
            formatPeriod={formatPeriod}
            getDateTime={getDateTime}
          />
          <Education
            educationData={educationData}
            formatPeriod={formatPeriod}
            getDateTime={getDateTime}
          />
        </div>
      </div>
    </section>
  );
}
