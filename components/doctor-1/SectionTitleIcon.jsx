import React from "react";
import Image from "next/image";

export default function SectionTitleIcon() {
  return (
    <div>
      <Image
        src="/assets/doctor-1/icons/section-title-icon.svg"
        alt="section icon"
        width={30}
        height={30}
        className="w-6.5 h-auto object-cover"
      />
    </div>
  );
}
