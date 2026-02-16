"use client";
import React from "react";
import Image from "next/image";
import ReferralCard from "./ReferralCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ReferralsSection({ data }) {
  const { referrals } = data;

  return (
    <section
      aria-labelledby="referrals-section"
      className="bg-background-primary bg-[url(/assets/educator/images/bg-img-skills-wave.svg)] bg-cover bg-no-repeat"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2 id="referrals-heading" className="uppercase text-text-secondary">
            {referrals.title}
          </h2>
          <h3 className="leading-none text-[clamp(2rem,4vw,3rem)] font-leagueSpartan font-medium text-center max-w-[20ch]">
            {referrals.subtitle}
          </h3>
        </div>

        {/* referrals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
          {referrals.items.map((item) => (
            <ReferralCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>
    </section>
  );
}
