"use client";
import React from "react";
import BracketedHeading from "../BracketedHeading";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function CareerPathSection({ data }) {
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
      aria-labelledby="career-heading"
      className="bg-background-secondary py-20 px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* section title and subtitle */}
        <header className="space-y-3">
          <div className="relative">
            <h2 className="text-[40px] md:text-[80px] font-medium text-text-dimmed">
              ACHIEVEMENTS
            </h2>
            <div className="absolute top-5 md:top-13 left-2">
              <BracketedHeading>{careerPath.title}</BracketedHeading>
            </div>
          </div>
          <h3
            id="career-heading"
            className="text-[30px] md:text-[40px] font-medium text-text-primary"
          >
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
