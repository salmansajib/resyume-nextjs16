"use client";
import React from "react";
import Image from "next/image";
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
      <div className="flex flex-col items-center gap-0">
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
      className="bg-background-neutral"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h2
            id="experience-heading"
            className="text-primary font-medium capitalize flex items-center gap-3 leading-none"
          >
            <Image
              src="/assets/travel-agent/icons/title-decorative-icon.svg"
              alt=""
              aria-hidden
              width={25}
              height={25}
              priority
              className="w-[20] h-auto object-cover aria-hidden"
            />
            {experience.title}
          </h2>
          <h3 className="font-poppins font-semibold text-[clamp(2rem,4vw,2.82rem)] text-text-primary leading-none">
            {experience.subtitle}
          </h3>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-30">
          {/* work experience */}
          <InViewAnimator variants={staggerContainer} className="relative">
            <div className="max-w-max space-y-1">
              <h3 className="text-2xl font-poppins font-medium uppercase text-text-primary">
                work experience
              </h3>
            </div>

            <div className="mt-7 relative">
              <div className="space-y-10 relative z-10">
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
              <div className="w-0.5 h-[70%] bg-[#d3d3d3] absolute left-[46px] top-10"></div>
            </div>
          </InViewAnimator>

          {/* education */}
          <InViewAnimator variants={staggerContainer} className="">
            <div className="max-w-max space-y-1">
              <h3 className="text-2xl font-poppins font-medium uppercase text-text-primary">
                education
              </h3>
            </div>

            <div className="mt-7 relative">
              <div className="space-y-10 relative z-10">
                {educationData.map((item) => (
                  <Education key={item.id} item={item} fadeInUp={fadeInUp} />
                ))}
              </div>

              {/* left line */}
              <div className="w-0.5 h-[70%] bg-[#d3d3d3] absolute left-[46px] top-10"></div>
            </div>
          </InViewAnimator>
        </div>
      </div>
    </section>
  );
}
