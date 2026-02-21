import React from "react";
import Image from "next/image";

export default function ServiceCard({ item }) {
  return (
    <div className="relative min-h-[400px] h-auto bg-background-secondary/15 group p-10 rounded-3xl border border-border-primary overflow-hidden backdrop-blur-sm">
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-8">
        <div aria-hidden className="">
          <Image
            src={item.icon}
            alt=""
            width={150}
            height={150}
            className="w-[108px] h-auto object-cover"
          />
        </div>
        <h3 className="font-rajdhani leading-none text-2xl font-bold">
          {item.name}
        </h3>
        <p className="text-text-secondary text-pretty text-center group-hover:text-text-primary transition-all duration-200">
          {item.description}
        </p>
      </div>

      {/* gradient circle */}
      <div className="absolute top-60 left-1/2 -translate-x-1/2 size-120 rounded-full bg-radial-[circle_at_center] from-[#E80567]/60 from-0% via-[#0E1724]/0 via-50% to-transparent to-70%"></div>
    </div>
  );
}
