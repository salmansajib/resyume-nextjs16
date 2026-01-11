import React from "react";
import SectionTitleIcon from "../SectionTitleIcon";
import AchievementGallery from "./AchievementGallery";

export default function AchievementsSection({ data }) {
  const { achievements } = data;

  return (
    <section
      aria-labelledby="achievements-heading"
      className="px-4 py-20"
      style={{
        background:
          "linear-gradient(to bottom right, #DAD9D3 0%, #E8E6E5 23%, #D7D3CE 48%, #DBDAD4 73%, #DCD8D3 88%, #CDC9C3 100%)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title */}
        <div className="max-w-max mx-auto">
          <h2
            id="achievements-heading"
            className="font-ebGaramond text-[clamp(2rem,4vw,2.5rem)] capitalize text-center px-4 leading-none"
          >
            {achievements.title}
          </h2>
          {/* bottom line and icon */}
          <SectionTitleIcon />
        </div>

        {/* achievements */}
        <AchievementGallery achievementsData={achievements} />
      </div>
    </section>
  );
}
