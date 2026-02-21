import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div
      className={cn(
        "ring-1 ring-border-primary p-5 rounded-2xl max-w-max mx-auto",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-7">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={heroData.photo}
            alt="profile photo"
            width={800}
            height={800}
            priority
            className="w-full h-auto md:h-[621px] object-cover"
          />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}
