import React from "react";
import Image from "next/image";
import SkillBar from "./SkillBar";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section
      aria-labelledby="skills-heading"
      className="bg-background-secondary"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        <div aria-hidden className="">
          <Image
            src="/assets/interior-designer/images/image-skills-section.png"
            alt=""
            width={900}
            height={900}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* skills */}
        <div>
          {/* title and subtitle */}
          <div className="space-y-3">
            <h2
              id="skills-heading"
              className="capitalize font-medium flex items-center gap-2"
            >
              <span
                aria-hidden
                className="bg-primary w-0.5 h-5 flex flex-col items-center justify-between"
              >
                <span className="bg-primary w-1.5 h-0.5"></span>
                <span className="bg-primary w-1.5 h-0.5"></span>
              </span>
              {skills.title}
            </h2>
            <h3 className="text-[40px] font-playfairDisplay leading-none capitalize">
              {skills.subtitle}
            </h3>
          </div>

          {/* skill bar */}
          <div className="mt-10">
            {skills.items.map((item, index) => (
              <SkillBar
                key={item.id}
                name={item.name}
                percentage={item.proficiency}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
