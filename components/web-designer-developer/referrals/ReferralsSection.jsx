"use client";
import React from "react";
import ReferralCard from "./ReferralCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ReferralsSection({ data }) {
  const { referrals } = data;

  return (
    <section aria-labelledby="referrals-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="referrals-heading"
            className="font-rajdhani font-bold text-lg capitalize text-text-primary leading-none"
          >
            {referrals.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-rajdhani font-bold capitalize text-[clamp(2.4rem,4vw,3rem)] text-center">
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
