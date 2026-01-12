import React from "react";
import Skill from "./Skill";

export default function SkillsSection({ data }) {
  const { skills } = data;
  return (
    <section
      aria-labelledby="skills-heading"
      className="relative px-4 py-20 bg-background-secondary bg-[url('/assets/doctor-2/images/skill-bg-image.png')] bg-no-repeat bg-size-[923px_auto] bg-bottom-left"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="skills-heading"
            className="relative z-10 text-lg font-semibold text-primary uppercase px-3 py-1 rounded-xl max-w-max mx-auto before:absolute before:inset-0 before:bg-background-neutral before:rounded-xl before:z-0 after:absolute after:inset-0 after:w-5 after:-left-1 after:bg-accent after:rounded-sm after:-z-10"
          >
            <span className="relative z-10">{skills.title}</span>
          </h2>
          <h3 className="text-center font-ebGaramond font-medium text-[clamp(2.5rem,6vw,3.75rem)] capitalize leading-none max-w-[20ch] mx-auto">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="mt-15 flex items-center justify-center flex-wrap gap-x-30 gap-y-10">
          {skills.items.map((item) => (
            <Skill key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* background gradient circle */}
      <div className="absolute -top-200 -right-200 size-[1500px] bg-radial-[circle_at_center] from-[#409B61]/20 from-0% via-[#D9D9D9]/5 via-55% to-transparent to-70%"></div>
    </section>
  );
}
