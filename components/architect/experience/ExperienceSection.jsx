"use client";
import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ExperienceSection({ data }) {
  const { experience } = data;

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
    <section aria-labelledby="experience-heading" className="px-4 py-20">
      <div className="w-full max-w-[1580px] mx-auto">
        {/* title and subtitle */}
        <div className="space-y-5 text-center">
          <h2
            id="experience-heading"
            className="relative text-base font-medium text-primary capitalize max-w-max mx-auto"
          >
            {experience.title}
            {/* bottom line */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[calc(100%+10px)] h-px bg-primary flex items-center justify-between">
              <div className="w-px h-2 bg-primary"></div>
              <div className="w-px h-2 bg-primary"></div>
            </div>
          </h2>
          <h3 className="font-lora font-semibold text-[clamp(2.5rem,5vw,3.8rem)] capitalize max-w-[20ch] mx-auto leading-none">
            {experience.subtitle}
          </h3>
        </div>

        {/* work-experience and education */}
        <div className="mt-10 space-y-5">
          {/* work-experience */}
          <InViewAnimator variants={staggerContainer}>
            <h4 className="text-3xl font-medium font-lora capitalize text-center md:text-left text-primary">
              work experience
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center md:justify-items-start gap-5 mt-7">
              {experience.work_experience.map((item) => (
                <WorkExperience
                  key={item.id}
                  item={item}
                  formatPeriod={formatPeriod}
                  getDateTime={getDateTime}
                  fadeInUp={fadeInUp}
                />
              ))}
            </div>
          </InViewAnimator>
          {/* education */}
          <InViewAnimator variants={staggerContainer}>
            <h4 className="text-3xl font-medium font-lora capitalize text-center md:text-left text-primary">
              education
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center md:justify-items-start gap-5 mt-7">
              {experience.education.map((item) => (
                <Education key={item.id} item={item} fadeInUp={fadeInUp} />
              ))}
            </div>
          </InViewAnimator>
        </div>
      </div>
    </section>
  );
}
