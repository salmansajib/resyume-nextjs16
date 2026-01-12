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
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="career-path-heading"
            className="relative z-10 text-lg font-semibold text-primary uppercase px-3 py-1 rounded-xl max-w-max mx-auto before:absolute before:inset-0 before:bg-background-neutral before:rounded-xl before:z-0 after:absolute after:inset-0 after:w-5 after:-left-1 after:bg-accent after:rounded-sm after:-z-10"
          >
            <span className="relative z-10">{careerPath.title}</span>
          </h2>
          <h3 className="text-center font-ebGaramond font-medium text-[clamp(2.5rem,6vw,3.75rem)] capitalize leading-none">
            {careerPath.subtitle}
          </h3>
        </div>

        {/* experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* work experience */}
          <div className="relative max-h-max">
            <div className="relative z-10 flex items-center gap-5">
              <div className="size-12.5 bg-primary flex items-center justify-center rounded-tr-2xl">
                <Image
                  src="/assets/doctor-1/icons/carrer-path/work-experience-icon.svg"
                  alt="experience icon"
                  width={50}
                  height={50}
                  className="w-6.5 h-auto object-cover"
                />
              </div>
              <h3 className="font-ebGaramond text-[clamp(1.9rem,4vw,2.13rem)] font-medium capitalize">
                work experience
              </h3>
            </div>
            <div className="space-y-10 mt-10 ml-6">
              {experienceData.map((item) => (
                <WorkExperience
                  key={item.id}
                  item={item}
                  formatPeriod={formatPeriod}
                  getDateTime={getDateTime}
                />
              ))}
            </div>
            {/* left line */}
            <div className="absolute top-0 left-6 w-px h-full bg-primary"></div>
          </div>

          {/* education */}
          <div className="relative max-h-max">
            <div className="relative z-10 flex items-center gap-5">
              <div className="size-12.5 bg-primary flex items-center justify-center rounded-tr-2xl">
                <Image
                  src="/assets/doctor-1/icons/carrer-path/education-icon.svg"
                  alt="experience icon"
                  width={50}
                  height={50}
                  className="w-6.5 h-auto object-cover"
                />
              </div>
              <h3 className="font-ebGaramond text-[clamp(1.9rem,4vw,2.13rem)] font-medium capitalize">
                education
              </h3>
            </div>
            <div className="space-y-10 mt-10 ml-6">
              {educationData.map((item) => (
                <Education key={item.id} item={item} />
              ))}
            </div>
            {/* left line */}
            <div className="absolute top-0 left-6 w-px h-full bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
