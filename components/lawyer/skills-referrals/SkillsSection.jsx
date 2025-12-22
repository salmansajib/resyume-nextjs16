import React from "react";
import Skill from "./Skill";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section aria-labelledby="skills-heading" className="">
      {/* title and subtle */}
      <div className="flex gap-5 flex-col items-center xl:items-start justify-center text-center xl:text-left">
        <h2
          id="services-heading"
          className="relative max-w-max py-1 border-b border-primary"
        >
          <span className="text-lg font-bold uppercase text-primary">
            {skills.title}
          </span>
          <span className="absolute -bottom-1 right-0 size-2 bg-primary rounded-full"></span>
        </h2>
        <h3 className="text-[clamp(2rem,6vw,2.5rem)] font-taviraj font-medium uppercase leading-10 md:leading-13 max-w-[20ch]">
          {skills.subtitle}
        </h3>
      </div>

      {/* skills */}
      <div className="mt-15 grid grid-cols-2 md:grid-cols-3 gap-10">
        {skills.items.map((item) => (
          <Skill key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
