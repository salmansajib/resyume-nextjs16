"use client";
import React from "react";
import ReferralCard from "./ReferralCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ReferralsSection({ data }) {
  const { referrals } = data;

  return (
    <section
      aria-labelledby="referrals-heading"
      className="px-4 pt-20 pb-10 relative z-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2
            id="referrals-heading"
            className="bg-text-primary px-5 py-3 capitalize text-background-primary leading-none"
          >
            {referrals.title}
          </h2>
          <h3 className="leading-none font-medium capitalize text-[clamp(2.2rem,3vw,2.6rem)] text-center">
            {referrals.subtitle}
          </h3>
        </div>

        {/* referrals */}
        <InViewAnimator
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-8 mt-10"
        >
          {referrals.items.map((item) => (
            <ReferralCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </InViewAnimator>
      </div>
    </section>
  );
}
