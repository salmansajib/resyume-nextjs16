import React from "react";

export default function AboutMe({ heroData }) {
  return (
    <div className="bg-background-secondary xl:max-w-max p-10 xl:pb-[200px] mt-6 xl:mt-0">
      <h2 className="font-semibold text-[32px] text-primary">
        {heroData.about.title}
      </h2>
      <p className="font-jost text-xl text-text-secondary max-w-[30ch]">
        {heroData.about.description}
      </p>
    </div>
  );
}
