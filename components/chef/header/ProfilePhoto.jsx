import React from "react";
import Image from "next/image";

export default function ProfilePhoto({ heroData }) {
  return (
    <div>
      <Image
        src={heroData.photo}
        alt="profile photo"
        width={700}
        height={700}
        priority
        className="w-[550px] h-auto"
      />
    </div>
  );
}
