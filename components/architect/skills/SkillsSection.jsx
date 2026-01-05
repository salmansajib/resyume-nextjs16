import React from "react";
import SkillBar from "./SkillBar";
import Image from "next/image";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section
      aria-labelledby="skills-heading"
      className="bg-background-secondary px-4 py-20"
    >
      <div className="w-full max-w-[1580px] mx-auto grid gap-10 grid-cols-1 xl:grid-cols-2 items-center justify-items-center">
        {/* skills and skill bars */}
        <div>
          {/* title and subtitle */}
          <div className="space-y-5">
            <h2
              id="skills-heading"
              className="relative text-base font-medium text-primary capitalize max-w-max"
            >
              {skills.title}
              {/* bottom line */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[calc(100%+10px)] h-px bg-primary flex items-center justify-between">
                <div className="w-px h-2 bg-primary"></div>
                <div className="w-px h-2 bg-primary"></div>
              </div>
            </h2>
            <h3 className="font-lora font-semibold text-[clamp(2.5rem,5vw,3.8rem)] capitalize max-w-[20ch] leading-none">
              {skills.subtitle}
            </h3>
          </div>
          {/* skill bar */}
          <div className="mt-10">
            {skills.items.map((item, index) => (
              <SkillBar
                key={item.id}
                name={item.name}
                percentage={item.proficiency}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* skill icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 xl:mt-0">
          {skills.items.map((item, index) => (
            <article
              key={item.id}
              className={`size-[250px] md:size-[300px] border border-border-primary flex gap-4 flex-col items-center justify-center ${
                index % 2 === 1 ? "sm:-mt-8" : ""
              }`}
            >
              <div className="size-[137px] flex items-center justify-center border-2 border-border-primary border-dashed rounded-full">
                <Image
                  src={item.icon_url}
                  alt={`${item.name} icon`}
                  width={100}
                  height={100}
                  className="w-[70px] h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium font-lora capitalize text-center">
                {item.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
