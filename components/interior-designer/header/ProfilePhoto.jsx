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
          className="w-[530px] h-auto object-cover rounded-lg overflow-hidden relative z-10"
        />

        <div className="absolute w-full h-[70%] -top-4 -left-4 border border-primary rounded-lg"></div>
        <button>
          <div>
            <Image
              src="/assets/interior-designer/icons/play-button-icon.svg"
              alt="check my work video play button   "
              width={30}
              height={30}
              priority
              className=""
            />
          </div>
        </button>
      </div>
    </div>
  );
}
