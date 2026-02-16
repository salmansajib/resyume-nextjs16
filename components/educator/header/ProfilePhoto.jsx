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
        width={600}
        height={900}
        priority
        className="w-full max-w-[495px] h-auto object-cover"
      />
    </div>
  );
}
