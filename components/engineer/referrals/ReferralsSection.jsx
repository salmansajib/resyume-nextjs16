import React from "react";
import ReferralCard from "./ReferralCard";

export default function ReferralsSection({ data }) {
  const { referrals } = data;

  return (
    <section
      aria-labelledby="referrals-heading"
      className="bg-background-secondary"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 py-20 flex flex-col xl:flex-row items-center xl:items-start gap-10">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="referrals-heading"
            className="relative font-semibold capitalize max-w-max mx-auto xl:ml-6"
          >
            <div className="relative z-10">{referrals.title}</div>
            <div
              aria-hidden="true"
              className="bg-primary w-[37px] h-[33px] absolute top-1/2 -translate-y-1/2 -left-6"
            ></div>
          </h2>
          <h3 className="font-chakraPetch text-[40px] font-semibold uppercase xl:max-w-[12ch] text-center xl:text-left">
            {referrals.subtitle}
          </h3>
        </div>

        {/* referrals */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {referrals.items.map((item) => (
            <ReferralCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
