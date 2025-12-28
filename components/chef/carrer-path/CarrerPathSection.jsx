import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function CarrerPathSection({ data }) {
  const { career_path } = data;

  // Helper function to format period
  const formatPeriod = (period) => {
    if (period.current) {
      return "Current";
    }
    if (period.start === period.end) {
      return period.start;
    }
    return (
      <div className="flex gap-1">
        <span>{period.start}</span>
        <span>-</span>
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
      className="bg-background-primary px-4 py-20"
    >
      <div className="w-full max-w-[1580px] mx-auto">
        {/* title and subtitle */}
        <div className="space-y-2 text-center">
          <h2
            id="carrer-path-heading"
            className="font-jost text-xl font-medium text-primary capitalize"
          >
            {career_path.title}
          </h2>
          <h3 className="text-[clamp(2rem,6vw,3rem)] font-semibold leading-tight capitalize">
            {career_path.subtitle}
          </h3>
        </div>

        {/* education and experience */}
        <div className="mt-15">
          {/* work experience */}
          <div className="space-y-10">
            <h3 className="font-semibold text-[34px] leading-none">
              Work Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {career_path.work_experience.map((item) => (
                <WorkExperience
                  key={item.id}
                  item={item}
                  formatPeriod={formatPeriod}
                  getDateTime={getDateTime}
                />
              ))}
            </div>
          </div>
          {/* education */}
          <div className="space-y-10">
            <h3 className="font-semibold text-[34px] leading-none">
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {career_path.education.map((item) => (
                <Education key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
