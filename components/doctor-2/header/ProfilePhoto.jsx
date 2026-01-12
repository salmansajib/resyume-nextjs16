import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div className={cn("", className)}>
      <Image
        src={heroData.photo}
        alt={`photo of ${heroData.name}`}
        width={700}
        height={700}
        className="w-[553px] h-auto"
      />
    </div>
  );
}
