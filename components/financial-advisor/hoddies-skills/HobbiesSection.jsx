import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function HobbiesSection({ hobbies, className }) {
  return (
    <section aria-labelledby="hobbies-heading" className={cn("", className)}>
      {/* title and subtitle */}
      <div className="flex flex-col gap-3 items-center lg:items-start justify-center">
        <h2
          id="hobbies-heading"
          className="flex items-center gap-1 text-primary font-medium capitalize"
        >
          <Image
            src="/assets/financial-advisor/images/section-title-decorative-line.png"
            aria-hidden
            alt=""
            width={5}
            height={20}
            priority
            className="w-[3px] h-auto object-cover"
          />
          {hobbies.title}
        </h2>

        <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-medium capitalize leading-none text-center lg:text-left">
          {hobbies.subtitle}
        </h3>
      </div>

      {/* hobbies */}
      <ul className="pt-10 flex flex-wrap justify-center lg:justify-normal gap-5 max-w-[400px]">
        {hobbies.items.map((item, index) => (
          <li
            key={item.id}
            className="size-[170px] bg-background-primary flex flex-col items-center justify-center gap-3 uppercase font-medium"
          >
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={100}
              height={100}
              className="w-[71px] h-auto object-cover"
            />
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
