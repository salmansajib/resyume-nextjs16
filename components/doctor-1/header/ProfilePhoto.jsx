import Image from "next/image";
import React from "react";

export default function ProfilePhoto({ heroData }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <Image
        src={heroData.photo}
        alt="Doctor profile photo"
        width={800}
        height={800}
        priority
        className="w-171 h-auto object-cover"
      />

      {/* overlay */}
      <div className="hidden sm:block absolute inset-0 bg-linear-to-b from-[#C4C4C4]/0 from-43% to-[#151515]/72 to-100%"></div>

      {/* about */}
      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-20 w-[80%] max-w-[520px] bg-linear-to-br from-[#E8E6E5]/30 to-[#DAD9D3]/10 backdrop-blur-[6px] rounded-2xl leading-6.5 p-8 text-background-primary inset-shadow-[0_0_2px_rgba(225,225,225,0.58)]">
        <p>{heroData.description}</p>
      </div>
    </div>
  );
}
