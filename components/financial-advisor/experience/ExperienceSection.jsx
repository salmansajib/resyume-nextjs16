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
      className="bg-background-secondary"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20 gap-4">
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center">
          <h2
            id="experience-heading"
            className="flex items-center gap-1 text-primary font-medium capitalize"
          >
            <Image
              src="/assets/financial-advisor/images/section-title-decorative-line.png"
              aria-hidden
              alt=""
              width={5}
              height={20}
              priority
              className="w-[3px] h-auto object-cover"
            />
            {experience.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-medium text-center capitalize leading-none">
            {experience.subtitle}
          </h3>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-30">
          {/* work experience */}
          <InViewAnimator variants={staggerContainer} className="relative">
            <div className="ml-10">
              <div className="flex items-center gap-5">
                <div
                  aria-hidden
                  className="size-[50px] bg-primary flex items-center justify-center"
                >
                  <Image
                    src="/assets/financial-advisor/icons/experience/work-experience-icon.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="w-[26px] h-auto"
                  />
                </div>
                <h3 className="text-2xl font-medium uppercase text-text-primary">
                  work experience
                </h3>
              </div>
              <div className="mt-7 relative">
                <div className="space-y-10">
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
              </div>
            </div>

            {/* left line */}
            <div className="w-px h-full bg-primary absolute left-0 top-6"></div>
            <div className="w-10 h-px bg-primary absolute left-0 top-6"></div>
          </InViewAnimator>

          {/* education */}
          <InViewAnimator variants={staggerContainer} className="relative">
            <div className="ml-10">
              <div className="flex items-center gap-5">
                <div
                  aria-hidden
                  className="size-[50px] bg-primary flex items-center justify-center"
                >
                  <Image
                    src="/assets/financial-advisor/icons/experience/education-icon.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="w-[26px] h-auto"
                  />
                </div>
                <h3 className="text-2xl font-medium uppercase text-text-primary">
                  education
                </h3>
              </div>
              <div className="mt-7 relative">
                <div className="space-y-10">
                  {educationData.map((item) => (
                    <Education key={item.id} item={item} fadeInUp={fadeInUp} />
                  ))}
                </div>
              </div>
            </div>

            {/* left line */}
            <div className="w-px h-full md:h-[60%] bg-primary absolute left-0 top-6"></div>
            <div className="w-10 h-px bg-primary absolute left-0 top-6"></div>
          </InViewAnimator>
        </div>
      </div>
    </section>
  );
}
