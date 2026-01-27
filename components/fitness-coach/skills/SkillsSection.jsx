import React from "react";
import Image from "next/image";
import SkillCard from "./SkillCard";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section aria-labelledby="skills-heading" className="relative">
      <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 py-20">
        {/* subtitle */}
        <div className="relative max-w-max mx-auto leading-none">
          <h3
            id="skills-heading"
            className="relative z-10 font-teko text-[clamp(3rem,4vw,4.375rem)]"
          >
            {skills.subtitle}
          </h3>
          <div aria-hidden className="absolute bottom-2 -right-8">
            <Image
              src="/assets/fitness-coach/images/decorative-dotted-grid-section-subtitle.png"
              alt=""
              width={100}
              height={50}
              className="w-[84px] h-8 object-cover"
            />
          </div>
        </div>

        {/* skills */}
        <div className="flex flex-wrap items-center justify-center gap-7 mt-10">
          {skills.items.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* background image */}
      <div aria-hidden className="absolute inset-0 opacity-25">
        <Image
          src="/assets/fitness-coach/images/bg-image-skills-section.svg"
          alt=""
          width={1500}
          height={900}
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
