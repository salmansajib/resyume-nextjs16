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
      className="bg-background-primary px-4 py-20"
    >
      <div className="w-full max-w-[1580px] mx-auto">
        {/* title and subtitle */}
        <div className="space-y-5 text-center">
          <h2
            id="referrals-heading"
            className="relative text-base font-medium text-primary capitalize max-w-max mx-auto"
          >
            {referrals.title}
            {/* bottom line */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[calc(100%+10px)] h-px bg-primary flex items-center justify-between">
              <div className="w-px h-2 bg-primary"></div>
              <div className="w-px h-2 bg-primary"></div>
            </div>
          </h2>
          <h3 className="font-lora font-semibold text-[clamp(2.5rem,5vw,3.8rem)] capitalize max-w-[20ch] mx-auto leading-none">
            {referrals.subtitle}
          </h3>
        </div>

        {/* referrals */}
        <InViewAnimator
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-7 mt-10"
        >
          {referrals.items.map((item) => (
            <ReferralCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </InViewAnimator>
      </div>
    </section>
  );
}
