import React from "react";
import SkillBar from "./SkillBar";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section
      aria-labelledby="skills-heading"
      className="bg-background-secondary px-4 py-20"
    >
      <div className="w-full max-w-[1580px] mx-auto">
        {/* left part */}
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
            {skills.items.map((item) => (
              <SkillBar
                key={item.id}
                name={item.name}
                percentage={item.proficiency}
              />
            ))}
          </div>
        </div>

        {/* right part */}
        <div></div>
      </div>
    </section>
  );
}
