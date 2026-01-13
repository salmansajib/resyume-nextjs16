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
      className="bg-background-secondary px-4 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="referrals-heading"
            className="relative z-10 text-lg font-semibold text-primary uppercase px-3 py-1 rounded-xl max-w-max mx-auto before:absolute before:inset-0 before:bg-background-neutral before:rounded-xl before:z-0 after:absolute after:inset-0 after:w-5 after:-left-1 after:bg-accent after:rounded-sm after:-z-10"
          >
            <span className="relative z-10">{referrals.title}</span>
          </h2>
          <h3 className="text-center font-ebGaramond font-medium text-[clamp(2.5rem,6vw,3.75rem)] capitalize leading-none max-w-[20ch] mx-auto">
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
