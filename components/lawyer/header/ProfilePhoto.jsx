import React from "react";
import Image from "next/image";

export default function ProfilePhoto({ heroData }) {
  return (
    <div className="relative max-w-max after:absolute after:content-[''] after:-top-3 after:-left-3 after:w-full after:h-full after:border-2 after:border-primary after:rounded-xl">
      <Image
        src={heroData.photo}
        alt="profile image"
        loading="eager"
        width={500}
        height={500}
        className="w-[393px] h-auto relative z-10 overflow-hidden rounded-xl"
      />
    </div>
  );
}
