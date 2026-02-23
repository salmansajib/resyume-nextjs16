import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={heroData.photo}
        alt="profile photo"
        width={900}
        height={900}
        priority
        className="w-[582px] h-auto object-cover rounded-xl overflow-hidden"
      />
      <SocialLinks className="absolute left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 -bottom-10 sm:bottom-0 sm:right-0 bg-background-secondary p-3 rounded-xl" />
    </div>
  );
}
