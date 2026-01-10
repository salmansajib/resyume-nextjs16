import React from "react";
import Image from "next/image";

export default function SectionTitleIcon() {
  return (
    <div className="flex items-center gap-2 justify-between mt-2">
      <div className="w-[45%] h-px bg-primary"></div>
      <Image
        src="/assets/doctor-1/icons/section-title-icon.svg"
        alt="section icon"
        width={30}
        height={30}
        className="w-6.5 h-auto object-cover"
      />
      <div className="w-[45%] h-px bg-primary"></div>
    </div>
  );
}
