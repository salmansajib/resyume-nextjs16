import React from "react";
import Image from "next/image";

export default function ProfilePhoto({ heroData }) {
  return (
    <div className="w-full max-w-[502px] aspect-square bg-[url('/assets/doctor-3/images/rounded-shape-profile-photo.png')] bg-no-repeat bg-center bg-contain flex items-center justify-center p-5">
      <Image
        src={heroData.photo}
        alt={`photo of ${heroData.name}`}
        width={460}
        height={460}
        priority
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}
