import React from "react";
import SkillsSection from "./SkillsSection";
import ReferralsSection from "./ReferralsSection";

export default function SkillsAndReferralsSection({ data }) {
  return (
    <div className="bg-background-primary px-4 py-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-30">
        <SkillsSection data={data} />
        <ReferralsSection data={data} />
      </div>
    </div>
  );
}
