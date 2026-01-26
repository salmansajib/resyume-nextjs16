"use client";
import React from "react";
import ReferralCard from "./ReferralCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ReferralsSection({ data }) {
  const { referrals } = data;

  return (
    <section aria-labelledby="referrals-heading">
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="referrals-heading"
            className="text-lg font-syne font-medium text-primary capitalize flex items-center justify-center gap-3"
          >
            <span aria-hidden className="w-[50px] h-px bg-primary"></span>
            {referrals.title}
          </h2>
          <h3 className="text-center text-[clamp(2.5rem,4vw,3.125rem)] font-bold font-syne leading-none capitalize">
            {referrals.subtitle}
          </h3>
        </div>

        {/* referrals */}
        <div className="flex items-center justify-center gap-7 flex-wrap mt-10">
          {referrals.items.map((item) => (
            <ReferralCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>
    </section>
  );
}
