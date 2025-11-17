import React from "react";
import uiuxdesignerData from "@/data/ui-ux-designer.json";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection() {
  const { experience } = uiuxdesignerData;

  return (
    <div className="bg-background-secondary px-4 py-20 pb-32 text-text-dimmed">
      <div className="w-full max-w-[1290px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 lg:gap-[150px]">
        {/* title and subtitle */}
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-lg font-medium text-primary uppercase">
            {experience.title}
          </p>
          <h2 className="text-3xl font-medium text-text-primary leading-11 lg:max-w-[15ch]">
            {experience.subtitle}
          </h2>
        </div>

        {/* experience timeline */}
        <ExperienceTimeline experience={experience} />
      </div>
    </div>
  );
}
