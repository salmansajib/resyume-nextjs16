"use client";
import React from "react";
import Image from "next/image";
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
        {/* subtitle */}
        <div className="relative max-w-max mx-auto leading-none">
          <h3
            id="referrals-heading"
            className="relative z-10 font-teko text-[clamp(3rem,4vw,4.375rem)] capitalize"
          >
            {referrals.subtitle}
          </h3>
          <div aria-hidden className="absolute bottom-2 -right-8">
            <Image
              src="/assets/fitness-coach/images/decorative-dotted-grid-section-subtitle.png"
              alt=""
              width={100}
              height={50}
              className="w-[84px] h-8 object-cover"
            />
          </div>
        </div>

        {/* referrals */}
        <div>
          {/* referrals */}
          <div className="flex items-center justify-center gap-7 flex-wrap mt-10">
            {referrals.items.map((item) => (
              <ReferralCard key={item.id} item={item} fadeInUp={fadeInUp} />
            ))}
          </div>
        </div>
      </InViewAnimator>
    </section>
  );
}
