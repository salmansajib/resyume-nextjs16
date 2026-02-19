import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ heroData, className }) {
  const { photo } = heroData;

  return (
    <div className={cn("", className)}>
      <Image
        src={photo}
        alt="profile photo"
        width={1000}
        height={1000}
        priority
        className="w-[600px] sm:w-[930px] h-[550px] sm:h-auto object-cover"
      />
    </div>
  );
}
