import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div className={cn("", className)}>
      <Image
        src={heroData.photo}
        alt="profile photo"
        width={700}
        height={700}
        priority
        className="w-[536px] h-auto object-cover"
      />
    </div>
  );
}
