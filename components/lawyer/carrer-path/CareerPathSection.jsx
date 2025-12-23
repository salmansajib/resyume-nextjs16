import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function CareerPathSection({ data }) {
  const { career_path } = data;
  const workData = career_path.work_experience;
  const educationData = career_path.education;

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
      aria-labelledby="carrer-path-heading"
      className="bg-background-secondary py-20 px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div>
          <div className="flex gap-5 flex-col items-center justify-center">
            <h2
              id="services-heading"
              className="relative max-w-max py-1 border-b border-primary"
            >
              <span className="text-lg font-bold uppercase text-primary">
                {career_path.title}
              </span>
              <span className="absolute -bottom-1 right-0 size-2 bg-primary rounded-full"></span>
            </h2>
            <h3 className="text-[clamp(2rem,6vw,2.5rem)] font-taviraj font-medium uppercase leading-none">
              {career_path.subtitle}
            </h3>
          </div>
        </div>

        {/* education and work-experience */}
        <div className="mt-15 grid grid-cols-1 lg:grid-cols-2 gap-25">
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
