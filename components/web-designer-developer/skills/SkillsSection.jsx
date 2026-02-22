"use cilent";
import React from "react";
import Skill from "./Skill";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section aria-labelledby="skills-heading">
      <div className="w-full max-w-7xl mx-auto px-4 pl-16 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="skills-heading"
            className="font-rajdhani font-bold text-lg capitalize text-text-primary leading-none"
          >
            {skills.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-rajdhani font-bold capitalize text-[clamp(2.4rem,4vw,3rem)] text-center">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="mt-15 flex flex-wrap gap-y-10 items-center justify-center">
          {skills.items.map((item) => (
            <Skill key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
