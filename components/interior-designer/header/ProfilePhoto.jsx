import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ data, className }) {
  return (
    <div className={cn("", className)}>
      <div className="relative">
        <Image
          src={data.hero.photo}
          alt="profile-photo"
          width={700}
          height={700}
          priority
          className="w-[530px] h-[650px] object-cover rounded-2xl overflow-hidden relative z-10"
        />
        {/* decorative rounded rectangle */}
        <div className="absolute w-full h-[70%] -top-2 -left-2 md:-top-4 md:-left-4 border border-primary rounded-2xl"></div>
        {/* video play button */}
        <button className="absolute -bottom-5 -left-5 z-20 size-[170px] bg-background-primary rounded-full flex items-center justify-center cursor-pointer">
          <div className="size-[130px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <div className="size-[88px] bg-[#E5E5E5] rounded-full flex items-center justify-center">
              <Image
                src="/assets/interior-designer/icons/play-button-icon.svg"
                alt="check my work video play button"
                width={30}
                height={30}
                priority
                className="w-[26px] h-auto object-cover "
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
