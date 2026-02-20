"use client";
import React from "react";
import ReferralCard from "./ReferralCard";
import Skill from "./Skill";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ReferralsSkillsSection({ data }) {
  const { referrals, skills } = data;

  return (
    <div className="relative bg-[url(/assets/motion-designer/images/bg-img-referrals-skills.png)] bg-no-repeat bg-cover bg-center">
      <div className="relative z-10 w-full max-w-[1642px] mx-auto px-4 py-20 grid grid-cols-1 min-[1120px]:grid-cols-2 gap-20">
        {/* referrals section */}
        <section>
          {/* title and subtitle */}
          <div className="flex flex-col gap-2 items-center min-[1120px]:items-start justify-center">
            <h2
              id="referrals-heading"
              className="font-exo2 font-bold capitalize text-text-primary text-[clamp(2.5rem,5vw,3.8rem)] leading-none"
            >
              {referrals.title}
            </h2>
            <h3 className="leading-12 lg:leading-20 font-exo2 font-bold capitalize text-[clamp(2.5rem,5vw,3.8rem)] text-center max-w-max bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
              {referrals.subtitle}
            </h3>
          </div>

          {/* referrals */}
          <InViewAnimator
            variants={staggerContainer}
            className="flex flex-col items-center min-[1120px]:items-start justify-center gap-5 mt-10"
          >
            {referrals.items.map((item) => (
              <ReferralCard key={item.id} item={item} fadeInUp={fadeInUp} />
            ))}
          </InViewAnimator>
        </section>

        {/* skills section */}
        <section>
          {/* title and subtitle */}
          <div className="flex flex-col gap-2 items-center min-[1120px]:items-start justify-center">
            <h2
              id="skills-heading"
              className="font-exo2 font-bold capitalize text-text-primary text-[clamp(2.5rem,5vw,3.8rem)] leading-none"
            >
              {skills.title}
            </h2>
            <h3 className="leading-12 lg:leading-20 font-exo2 font-bold capitalize text-[clamp(2.5rem,5vw,3.8rem)] text-center max-w-max bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
              {skills.subtitle}
            </h3>
          </div>

          {/* skills */}
          {/* skills */}
          <div className="mt-15 grid grid-cols-2 md:grid-cols-3 gap-10">
            {skills.items.map((item) => (
              <Skill key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>

      {/* gradient background circles */}
      <div
        aria-hidden="true"
        className="absolute -top-100 left-0 size-[1500px] rounded-full bg-radial-[circle_at_center] from-[#826BE4]/40 from-0% via-[#07060D]/5 via-55% to-transparent to-70%"
      ></div>
    </div>
  );
}
