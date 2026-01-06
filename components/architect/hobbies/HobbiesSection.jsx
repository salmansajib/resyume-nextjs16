import Image from "next/image";
import React from "react";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section className="w-full bg-background-primary px-4 py-20">
      <div className="w-full max-w-[1580px] mx-auto flex max-[1450px]:flex-col items-center justify-center gap-10">
        {/* title and subtitle */}
        <div className="space-y-5 text-center md:text-left">
          <h2
            id="skills-heading"
            className="relative text-base font-medium text-primary capitalize max-w-max mx-auto md:mx-0"
          >
            {hobbies.title}
            {/* bottom line */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[calc(100%+10px)] h-px bg-primary flex items-center justify-between">
              <div className="w-px h-2 bg-primary"></div>
              <div className="w-px h-2 bg-primary"></div>
            </div>
          </h2>
          <h3 className="font-lora font-semibold text-[clamp(2.5rem,5vw,3.8rem)] capitalize max-w-[15ch] leading-none">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10">
          {hobbies.items.map((item) => (
            <article
              key={item.id}
              className="size-56 rounded-full border-2 border-border-primary border-dashed flex items-center justify-center"
            >
              <div>
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={200}
                  height={200}
                  className="w-[130px] h-auto object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
