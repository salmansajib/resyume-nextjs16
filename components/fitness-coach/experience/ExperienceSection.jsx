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
    <section aria-labelledby="experience-heading" className="relative">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        {/* subtitle */}
        <div className="relative max-w-max mx-auto leading-none">
          <h3 className="relative z-10 font-teko text-[clamp(3rem,4vw,4.375rem)]">
            {experience.subtitle}
          </h3>
          <div aria-hidden className="absolute bottom-2 -right-8">
            <Image
              src="/assets/fitness-coach/images/decorative-dotted-grid-section-subtitle.png"
              alt=""
              width={100}
              height={50}
              className="w-[84px] h-8 object-cover"
            />
          </div>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* work experience */}
          <InViewAnimator variants={staggerContainer} className="">
            <div className="max-w-max space-y-1">
              <h3 className="font-teko text-2xl font-medium capitalize">
                work experience
              </h3>
            </div>

            <div className="mt-10">
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
              <h3 className="font-teko text-2xl font-medium capitalize">
                education
              </h3>
            </div>

            <div className="mt-10">
              {educationData.map((item) => (
                <Education key={item.id} item={item} fadeInUp={fadeInUp} />
              ))}
            </div>
          </InViewAnimator>
        </div>
      </div>

      {/* background image */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/assets/fitness-coach/images/bg-image-experience-section.svg"
          alt=""
          width={1500}
          height={900}
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
