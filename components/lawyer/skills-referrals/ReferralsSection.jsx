import React from "react";
import Referral from "./Referral";

export default function ReferralsSection({ data }) {
  const { referrals } = data;

  return (
    <section aria-labelledby="referrals-heading">
      {/* title and subtle */}
      <div className="flex gap-5 flex-col items-center xl:items-start justify-center text-center xl:text-left">
        <h2
          id="services-heading"
          className="relative max-w-max py-1 border-b border-primary"
        >
          <span className="text-lg font-bold uppercase text-primary">
            {referrals.title}
          </span>
          <span className="absolute -bottom-1 right-0 size-2 bg-primary rounded-full"></span>
        </h2>
        <h3 className="text-[clamp(2rem,6vw,2.5rem)] font-taviraj font-medium uppercase leading-10 md:leading-13 max-w-[20ch]">
          {referrals.subtitle}
        </h3>
      </div>

      {/* referral */}
      <div className="mt-15 grid md:grid-cols-2 xl:grid-cols-1 gap-10">
        {referrals.items.map((item) => (
          <Referral key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
