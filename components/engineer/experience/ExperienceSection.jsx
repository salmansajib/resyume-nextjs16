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
      className="py-20 bg-[url('/assets/engineer/images/experience-bg.png')] bg-background-primary bg-no-repeat bg-bottom-right overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4">
        {/* title and subtitle */}
        <div>
          <div className="space-y-4">
            <h2
              id="experience-heading"
              className="relative font-semibold capitalize max-w-max mx-auto"
            >
              <div className="relative z-10">{experience.title}</div>
              <div
                aria-hidden="true"
                className="bg-primary w-[37px] h-[33px] absolute top-1/2 -translate-y-1/2 -left-6"
              ></div>
            </h2>
            <h3 className="font-chakraPetch text-[40px] font-semibold uppercase max-w-max mx-auto text-center">
              {experience.subtitle}
            </h3>
          </div>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* work experience */}
          <InViewAnimator
            variants={staggerContainer}
            className="relative max-h-max"
          >
            <div className="relative z-10 flex items-center gap-5">
              <div
                className="size-12.5 bg-background-secondary flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(0% 0%,calc(100% - 8px) 0%,100% 8px,100% 100%,8px 100%,0% calc(100% - 8px))",
                }}
              >
                <Image
                  src="/assets/engineer/icons/experience/work-experience-icon.svg"
                  alt="experience icon"
                  width={50}
                  height={50}
                  className="w-6.5 h-auto object-cover"
                />
              </div>
              <h3 className="font-chakraPetch text-[clamp(1.9rem,4vw,2.13rem)] font-medium capitalize">
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
                  fadeInUp={fadeInUp}
                />
              ))}
            </div>
            {/* left line */}
            <div className="absolute top-1 left-6 w-px h-full bg-text-secondary"></div>
          </InViewAnimator>

          {/* education */}
          <InViewAnimator
            variants={staggerContainer}
            className="relative max-h-max"
          >
            <div className="relative z-10 flex items-center gap-5">
              <div
                className="size-12.5 bg-background-secondary flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(0% 0%,calc(100% - 8px) 0%,100% 8px,100% 100%,8px 100%,0% calc(100% - 8px))",
                }}
              >
                <Image
                  src="/assets/engineer/icons/experience/education-icon.svg"
                  alt="experience icon"
                  width={50}
                  height={50}
                  className="w-6.5 h-auto object-cover"
                />
              </div>
              <h3 className="font-chakraPetch text-[clamp(1.9rem,4vw,2.13rem)] font-medium capitalize">
                education
              </h3>
            </div>
            <div className="space-y-10 mt-10 ml-6">
              {educationData.map((item) => (
                <Education key={item.id} item={item} fadeInUp={fadeInUp} />
              ))}
            </div>
            {/* left line */}
            <div className="absolute top-1 left-6 w-px h-full bg-text-secondary"></div>
          </InViewAnimator>
        </div>
      </div>
    </section>
  );
}
