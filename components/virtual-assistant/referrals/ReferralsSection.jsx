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
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2
            id="referrals-heading"
            className="font-semibold text-primary capitalize relative leading-none"
          >
            <span className="relative z-10 ml-4">{referrals.title}</span>
            <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
            <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold capitalize leading-none text-center">
            {referrals.subtitle}
          </h3>
        </div>

        {/* referral card */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
          {referrals.items.map((item) => (
            <ReferralCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>
    </section>
  );
}
