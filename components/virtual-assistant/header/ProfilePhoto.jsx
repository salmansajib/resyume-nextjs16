import Image from "next/image";
import React from "react";

export default function ProfilePhoto({ heroData }) {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Image
          src={heroData.photo}
          alt="profile photo"
          width={700}
          height={700}
          priority
          className="w-[690px] h-auto object-cover"
        />
      </div>
      <div className="hidden lg:block size-[200px] rounded-full bg-background-neutral absolute top-7 right-7"></div>
      <div className="hidden lg:block size-[30px] rounded-full bg-primary absolute top-3 right-3"></div>
    </div>
  );
}
