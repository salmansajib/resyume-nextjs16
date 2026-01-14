import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={heroData.photo}
        alt={`photo of ${heroData.name}`}
        width={700}
        height={700}
        priority
        className="w-[553px] h-auto"
      />
    </div>
  );
}
