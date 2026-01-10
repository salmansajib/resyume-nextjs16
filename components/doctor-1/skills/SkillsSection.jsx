import React from "react";
import SectionTitleIcon from "../SectionTitleIcon";
import SkillCard from "./SkillCard";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section
      aria-labelledby="skills-heading"
      className="px-4 py-20"
      style={{
        background:
          "linear-gradient(to bottom right, #F3F3F1 0%, #E1E1E1 48%, #E6E6E6 100%)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title */}
        <div className="max-w-max mx-auto">
          <h2
            id="skills-heading"
            className="font-ebGaramond text-[clamp(2rem,4vw,2.5rem)] capitalize text-center px-4 leading-none"
          >
            {skills.title}
          </h2>
          {/* bottom line and icon */}
          <SectionTitleIcon />
        </div>

        {/* skills */}
        <div className="flex items-start justify-center flex-wrap gap-8 mt-10">
          {skills.items.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
