import React from "react";
import Skill from "./Skill";

export default function SkillsSection({ data }) {
  const { skills } = data;
  return (
    <section
      aria-labelledby="skills-heading"
      className="w-full px-4 py-20 bg-[url(/assets/chef/images/skills/skill-section-bg.jpg)] bg-cover bg-center"
    >
      <div className="w-full max-w-[1580px] mx-auto">
        {/* title and subtitle */}
        <div className="space-y-2">
          <h2
            id="skills-heading"
            className="font-jost text-xl font-medium text-primary"
          >
            {skills.title}
          </h2>
          <h3 className="text-[clamp(2rem,6vw,3rem)] text-background-secondary font-semibold leading-tight max-w-[20ch]">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="mt-15 grid grid-cols-2 md:grid-cols-3 gap-10 max-w-[800px]">
          {skills.items.map((item) => (
            <Skill key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
