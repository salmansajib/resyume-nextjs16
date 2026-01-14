import React from "react";
import Image from "next/image";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function CareerPathSection({ data }) {
  const { careerPath } = data;
  const experienceData = careerPath.workExperience;
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
      <div className="flex items-center gap-2">
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
    <section aria-labelledby="career-path-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto bg-background-secondary/9 border border-background-secondary rounded-4xl p-7 sm:p-15">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="skills-heading"
            className="flex items-center justify-center gap-2 text-lg font-medium text-primary uppercase"
          >
            <Image
              src="/assets/doctor-3/icons/section-title-icon.svg"
              alt=""
              width={100}
              height={50}
              className="w-[94px] h-auto object-cover"
            />
            <span>{careerPath.title}</span>
          </h2>
          <h3 className="text-[clamp(2.2rem,4vw,2.5rem)] font-bold uppercase max-w-[20ch] mx-auto text-center leading-11">
            {careerPath.subtitle}
          </h3>
        </div>

        {/* work experience and education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-30 mt-10">
          {/* work experience */}
          <div>
            <h3 className="text-3xl font-medium uppercase">work experience</h3>
            <div className="space-y-6">
              {experienceData.map((item) => (
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
          <div>
            <h3 className="text-3xl font-medium uppercase">education</h3>
            <div>
              {educationData.map((item) => (
                <Education key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
