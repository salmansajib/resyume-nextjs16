import React from "react";
import BracketedHeading from "../BracketedHeading";
import Skills from "./Skills";

export default function SkillsSection({ data }) {
  const { skills } = data;
  const skillsData = skills.entries;

  return (
    <section
      aria-labelledby="skills-heading"
      className="bg-background-secondary px-4 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <header className="space-y-3 flex flex-col items-center justify-center">
          <div className="relative">
            <h2
              id="skills-heading"
              className="font-medium text-[50px] md:text-[80px] text-text-dimmed"
            >
              SKILLS
            </h2>
            <div className="absolute top-7 md:top-13 left-1/2 -translate-x-1/2">
              <BracketedHeading className="uppercase">
                {skills.title}
              </BracketedHeading>
            </div>
          </div>
          <h3 className="text-[30px] md:text-[40px] font-medium text-text-primary">
            {skills.subtitle}
          </h3>
        </header>

        {/* skills */}
        <Skills skillsData={skillsData} />
      </div>
    </section>
  );
}
