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
    <section aria-labelledby="experience-heading">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2
            id="experience-heading"
            className="font-semibold text-primary capitalize relative leading-none"
          >
            <span className="relative z-10 ml-4">{experience.title}</span>
            <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
            <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold capitalize leading-none">
            {experience.subtitle}
          </h3>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-30">
          {/* work experience */}
          <InViewAnimator variants={staggerContainer} className="relative">
            <div className="max-w-max space-y-1">
              <h3 className="text-2xl font-medium uppercase text-text-primary">
                work experience
              </h3>
            </div>

            <div className="mt-7 relative">
              <div className="space-y-10 ml-7">
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
              <div className="w-0.5 h-full bg-background-neutral absolute left-0 top-3"></div>
            </div>
          </InViewAnimator>

          {/* education */}
          <InViewAnimator variants={staggerContainer} className="">
            <div className="max-w-max space-y-1">
              <h3 className="text-2xl font-medium uppercase text-text-primary">
                education
              </h3>
            </div>

            <div className="mt-7 relative">
              <div className="space-y-10 ml-7">
                {educationData.map((item) => (
                  <Education key={item.id} item={item} fadeInUp={fadeInUp} />
                ))}
              </div>

              {/* left line */}
              <div className="w-0.5 h-full bg-background-neutral absolute left-0 top-3"></div>
            </div>
          </InViewAnimator>
        </div>
      </div>
    </section>
  );
}
