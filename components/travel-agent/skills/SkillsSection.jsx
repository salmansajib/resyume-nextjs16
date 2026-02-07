import React from "react";
import Image from "next/image";
import Skill from "./Skill";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section aria-labelledby="skills-heading">
      <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col min-[1190px]:flex-row items-center min-[1190px]:items-start justify-center lg:justify-normal gap-10 min-[1190px]:gap-20">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="skills-heading"
            className="text-primary font-medium capitalize flex items-center gap-3 leading-none"
          >
            <Image
              src="/assets/travel-agent/icons/title-decorative-icon.svg"
              alt=""
              aria-hidden
              width={25}
              height={25}
              priority
              className="w-[20] h-auto object-cover"
            />
            {skills.title}
          </h2>
          <h3 className="font-poppins font-semibold text-[clamp(2rem,4vw,2.82rem)] text-text-primary max-w-[15ch] leading-13">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="flex flex-wrap items-center justify-center gap-7">
          {skills.items.map((item, index) => (
            <div key={item.id} className={`${index === 2 ? "lg:ml-25" : ""}`}>
              <Skill item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
