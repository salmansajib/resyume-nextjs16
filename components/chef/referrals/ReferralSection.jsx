import React from "react";
import ReferralCard from "./ReferralCard";

export default function ReferralSection({ data }) {
  const { referrals } = data;

  return (
    <section aria-labelledby="referrals-heading" className="w-full px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-2 text-center">
          <h2
            id="referrals-heading"
            className="font-jost text-xl font-medium text-primary capitalize"
          >
            {referrals.title}
          </h2>
          <h3 className="text-[clamp(2rem,6vw,3rem)] font-semibold leading-tight capitalize max-w-[20ch] mx-auto">
            {referrals.subtitle}
          </h3>
        </div>

        {/* referrals */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {referrals.items.map((item) => (
            <ReferralCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
