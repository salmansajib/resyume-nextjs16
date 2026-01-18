import React from "react";
import Image from "next/image";

export default function ProfilePhote({ hero }) {
  return (
    <div className="relative w-full max-w-[550px]">
      <Image
        src={hero.photo}
        alt="Profile Picture"
        width={700}
        height={700}
        priority
        className="w-full max-w-[550px] h-auto object-cover"
      />
    </div>
  );
}
