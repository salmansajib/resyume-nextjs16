import React from "react";
import Skill from "./Skill";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section aria-labelledby="skills-heading">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="skills-heading"
            className="text-lg font-syne font-medium capitalize text-primary flex items-center justify-center gap-3"
          >
            <span aria-hidden className="w-[50px] h-px bg-primary"></span>
            {skills.title}
          </h2>
          <h3 className="text-center text-[clamp(2.5rem,4vw,3.125rem)] font-bold font-syne leading-none capitalize">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="mt-15 flex items-center justify-center flex-wrap gap-x-40 gap-y-10">
          {skills.items.map((item) => (
            <Skill key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
