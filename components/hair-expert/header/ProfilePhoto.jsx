import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ data, className }) {
  return (
    <div className={cn("", className)}>
      <div className="relative">
        <Image
          src={data.hero.photo}
          alt="hair expert photo"
          width={1000}
          height={1000}
          priority
          className="w-full h-auto object-cover relative z-10"
        />
        {/* background circle */}
        <div className="absolute -top-10 -left-10 size-[350px] sm:size-[700px] lg:size-[890px] bg-linear-to-br from-[#E3D3D2]/70 to-[#ECDAD8]/84 rounded-full"></div>
        {/* decorative images */}
        <div className="absolute top-0 left-10">
          <Image
            src="/assets/hair-expert/images/hero-decorative-element-1.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-100 -right-40">
          <Image
            src="/assets/hair-expert/images/hero-decorative-element-2.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
