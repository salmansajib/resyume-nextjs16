"use client";
import React from "react";
import SectionTitleIcon from "../SectionTitleIcon";
import ReferralCard from "./ReferralCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ReferralsSection({ data }) {
  const { referrals } = data;

  return (
    <section
      aria-labelledby="referrals-heading"
      className="px-4 py-20"
      style={{
        background:
          "linear-gradient(to bottom right, #DAD9D3 0%, #E8E6E5 23%, #D7D3CE 48%, #DBDAD4 73%, #DCD8D3 88%, #CDC9C3 100%)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title */}
        <div className="max-w-max mx-auto">
          <h2
            id="referrals-heading"
            className="font-ebGaramond text-[clamp(2rem,4vw,2.5rem)] capitalize text-center px-4 leading-none"
          >
            {referrals.title}
          </h2>
          {/* bottom line and icon */}
          <SectionTitleIcon />
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
