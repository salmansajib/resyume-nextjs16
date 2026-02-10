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
      className="bg-background-secondary"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* title and subtitle */}
        <div className="flex gap-3 flex-col items-center justify-center">
          <h2
            id="referrals-heading"
            className="flex items-center gap-1 text-primary font-medium capitalize"
          >
            <Image
              src="/assets/financial-advisor/images/section-title-decorative-line.png"
              aria-hidden
              alt=""
              width={5}
              height={20}
              priority
              className="w-[3px] h-auto object-cover"
            />
            {referrals.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-medium text-center capitalize leading-none">
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
