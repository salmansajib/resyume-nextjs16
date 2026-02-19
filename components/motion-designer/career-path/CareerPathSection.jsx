"use client";
import React from "react";
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
      aria-labelledby="carrer-path-heading"
      className="pt-20 pb-10 px-4 relative bg-[url(/assets/motion-designer/images/bg-img-career-path.png)] bg-cover bg-no-repeat"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="carrer-path-heading"
            className="font-exo2 font-bold capitalize text-text-primary text-[clamp(2.5rem,5vw,3.8rem)] leading-none"
          >
            {careerPath.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-exo2 font-bold capitalize text-[clamp(2.5rem,5vw,3.8rem)] text-center max-w-max bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
            {careerPath.subtitle}
          </h3>
        </div>

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

      {/* gradient background circles */}
      <div
        aria-hidden="true"
        className="absolute -top-100 left-0 size-[1500px] rounded-full bg-radial-[circle_at_center] from-[#826BE4]/40 from-0% via-[#07060D]/5 via-55% to-transparent to-70%"
      ></div>
    </section>
  );
}
