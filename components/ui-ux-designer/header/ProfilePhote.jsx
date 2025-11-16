import React from "react";
import Image from "next/image";

export default function ProfilePhote({ hero }) {
  return (
    <div>
      <Image
        src={hero.photo}
        alt="Profile Picture"
        width={700}
        height={700}
        loading="eager"
        className="w-full max-w-[550px] h-auto object-cover"
      />
    </div>
  );
}
