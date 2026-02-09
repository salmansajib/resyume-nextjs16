import React from "react";
import Image from "next/image";
import HobbiesSection from "./HobbiesSection";
import SkillsSection from "./SkillsSection";

export default function HobbiesSkills({ data }) {
  const { hobbies, skills } = data;

  return (
    <div className="bg-background-secondary">
      <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-20">
        {/* hobbies section */}
        <HobbiesSection hobbies={hobbies} />
        {/* skills section */}
        <SkillsSection skills={skills} className="w-full lg:flex-1" />
      </div>
    </div>
  );
}
