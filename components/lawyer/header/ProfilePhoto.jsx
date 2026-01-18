import React from "react";
import Image from "next/image";

export default function ProfilePhoto({ heroData }) {
  return (
    <div className="relative max-w-max after:absolute after:content-[''] after:-inset-0.5 after:bg-linear-to-br after:from-primary/60 after:to-primary/10 after:rounded-xl">
      <Image
        src={heroData.photo}
        alt="profile image"
        priority
        width={500}
        height={500}
        className="w-full max-w-[393px] h-auto relative z-10 overflow-hidden rounded-xl aspect-3/4 object-cover"
      />
    </div>
  );
}
