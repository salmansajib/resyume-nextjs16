"use client";
import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ExperienceSection({ data }) {
  const { experience } = data;
  const experienceData = experience.workExperience;
  const educationData = experience.education;

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
    <section
      aria-labelledby="experience-heading"
      className="bg-[url('/assets/interior-designer/images/bg-image-experience.png')] bg-no-repeat bg-bottom-right"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="experience-heading"
            className="capitalize font-medium flex items-center justify-center gap-2"
          >
            <span
              aria-hidden
              className="bg-primary w-0.5 h-5 flex flex-col items-center justify-between"
            >
              <span className="bg-primary w-1.5 h-0.5"></span>
              <span className="bg-primary w-1.5 h-0.5"></span>
            </span>
            {experience.title}
          </h2>
          <h3 className="text-center text-[40px] font-playfairDisplay leading-none capitalize">
            {experience.subtitle}
          </h3>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-30">
          {/* work experience */}
          <InViewAnimator variants={staggerContainer} className="relative">
            <div className="max-w-max space-y-1">
              <h3 className="font-playfairDisplay text-xl font-medium uppercase text-primary">
                work experience
              </h3>
            </div>

            <div className="mt-5 relative">
              <div className="space-y-10 ml-5">
                {experienceData.map((item) => (
                  <WorkExperience
                    key={item.id}
                    item={item}
                    formatPeriod={formatPeriod}
                    getDateTime={getDateTime}
                    fadeInUp={fadeInUp}
                  />
                ))}
              </div>

              {/* left line */}
              <div className="w-0.5 h-full bg-primary absolute left-0 top-3"></div>
            </div>
          </InViewAnimator>

          {/* education */}
          <InViewAnimator variants={staggerContainer} className="">
            <div className="max-w-max space-y-1">
              <h3 className="font-playfairDisplay text-xl font-medium uppercase text-primary">
                education
              </h3>
            </div>

            <div className="mt-5 relative">
              <div className="space-y-10 ml-5">
                {educationData.map((item) => (
                  <Education key={item.id} item={item} fadeInUp={fadeInUp} />
                ))}
              </div>

              {/* left line */}
              <div className="w-0.5 h-full bg-primary absolute left-0 top-3"></div>
            </div>
          </InViewAnimator>
        </div>
      </div>
    </section>
  );
}
