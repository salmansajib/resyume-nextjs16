import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative z-10">
        <Image
          src={heroData.photo}
          alt="profile photo"
          width={900}
          height={900}
          priority
          className="w-[560px] h-auto object-cover"
        />
      </div>
      <div aria-hidden className="absolute -bottom-9 -right-9">
        <Image
          src="/assets/fitness-coach/images/decorative-dotted-grid-hero.png"
          alt=""
          width={300}
          height={100}
          priority
          className="w-[245px] h-20 object-cover"
        />
      </div>
    </div>
  );
}
