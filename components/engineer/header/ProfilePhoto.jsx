import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function ProfilePhoto({ heroData, className }) {
  const { photo } = heroData;

  return (
    <div className={cn("", className)}>
      <Image
        src={photo}
        alt="profile photo"
        width={900}
        height={900}
        priority
        className="w-full max-w-[560px] h-auto lg:h-[766px] object-cover"
      />
    </div>
  );
}
