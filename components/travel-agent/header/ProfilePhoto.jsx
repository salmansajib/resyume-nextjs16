import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div
      className={cn(
        "border-2 border-background-neutral p-3 mb-0 max-w-max rounded-2xl",
        className,
      )}
    >
      <Image
        src={heroData.photo}
        alt="profile photo"
        width={700}
        height={700}
        priority
        className="w-[517px] h-auto object-cover rounded-xl overflow-hidden"
      />
    </div>
  );
}
