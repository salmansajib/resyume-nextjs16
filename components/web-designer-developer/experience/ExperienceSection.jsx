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
      className="relative bg-[url(/assets/web-designer-developer/images/bg-img-experience.png)] bg-no-repeat bg-cover"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="experience-heading"
            className="font-rajdhani font-bold text-lg capitalize text-text-primary leading-none"
          >
            {experience.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-rajdhani font-bold capitalize text-[clamp(2.4rem,4vw,3rem)] text-center">
            {experience.subtitle}
          </h3>
        </div>

        {/* work experience and education */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* work experience */}
          <InViewAnimator variants={staggerContainer} className="">
            <div className="max-w-max space-y-1">
              <h3 className="font-rajdhani text-2xl font-bold capitalize">
                work experience
              </h3>
            </div>

            <div className="mt-10 space-y-10">
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
              <h3 className="font-rajdhani text-2xl font-bold capitalize">
                education
              </h3>
            </div>

            <div className="mt-10 space-y-10">
              {educationData.map((item) => (
                <Education key={item.id} item={item} fadeInUp={fadeInUp} />
              ))}
            </div>
          </InViewAnimator>
        </div>
      </div>

      {/* background gradient */}
      <div className="absolute -top-100 size-[1000px] rounded-full bg-radial-[circle_at_center] from-[#9E1586]/30 from-0% via-[#0E1724]/0 via-50% to-transparent to-70%"></div>
    </section>
  );
}
