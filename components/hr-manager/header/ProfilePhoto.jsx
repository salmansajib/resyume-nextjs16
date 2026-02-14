import Image from "next/image";
import React from "react";

export default function ProfilePhoto({ heroData }) {
  return (
    <div className="bg-linear-to-b from-[#EBEBEB]/10 to-[#858585]/10 px-6 py-10 rounded-4xl border border-border-primary/5 space-y-5 backdrop-blur-[9px] max-w-[660px]">
      <Image
        src={heroData.photo}
        alt="profile phot0"
        width={700}
        height={700}
        priority
        className="w-[543px] h-auto object-cover rounded-full overflow-hidden"
      />
      <h2 className="font-poppins text-[clamp(2.5rem,4vw,3.5rem)] font-medium text-center leading-none">
        {heroData.title}
      </h2>
    </div>
  );
}
