"use client";
import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

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
      className="bg-[url(/assets/hair-expert/images/experience-decorative-img-1.png)] bg-no-repeat bg-bottom-right"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="experience-heading"
            className="text-lg font-syne font-medium text-primary capitalize flex items-center justify-center gap-3"
          >
            <span aria-hidden className="w-[50px] h-px bg-primary"></span>
            {experience.title}
          </h2>
          <h3 className="text-center text-[clamp(2.5rem,4vw,3.125rem)] font-bold font-syne leading-none">
            {experience.subtitle}
          </h3>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* work experience */}
          <InViewAnimator variants={staggerContainer} className="">
            <div className="max-w-max space-y-1">
              <h3 className="font-syne text-2xl font-bold capitalize">
                work experience
              </h3>
              <div className="w-full bg-primary h-px"></div>
            </div>

            <div className="mt-5">
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
          </InViewAnimator>

          {/* education */}
          <InViewAnimator variants={staggerContainer} className="">
            <div className="max-w-max space-y-1">
              <h3 className="font-syne text-2xl font-bold capitalize">
                education
              </h3>
              <div className="w-full bg-primary h-px"></div>
            </div>

            <div className="mt-5">
              {educationData.map((item) => (
                <Education key={item.id} item={item} fadeInUp={fadeInUp} />
              ))}
            </div>
          </InViewAnimator>
        </div>
      </div>
    </section>
  );
}
