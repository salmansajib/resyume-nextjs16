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
      aria-labelledby="referrals-heading"
      className="bg-background-secondary bg-[url(/assets/travel-agent/images/bg-image-referrals.png)] bg-no-repeat bg-cover"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h2
            id="referrals-heading"
            className="text-primary font-medium capitalize flex items-center gap-3 leading-none"
          >
            <Image
              src="/assets/travel-agent/icons/title-decorative-icon.svg"
              alt=""
              aria-hidden
              width={25}
              height={25}
              priority
              className="w-[20] h-auto object-cover aria-hidden"
            />
            {referrals.title}
          </h2>
          <h3 className="font-poppins font-semibold text-[clamp(2rem,4vw,2.82rem)] text-background-primary leading-none">
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
