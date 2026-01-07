import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

export default function Education({ item, fadeInUp }) {
  return (
    <motion.article variants={fadeInUp} className="relative p-10 pl-15">
      <div className="space-y-3">
        <h4 className="text-[34px] font-medium text-primary capitalize leading-none">
          {item.institution}
        </h4>
        <p className="font-jost font-medium text-xl uppercase leading-none mt-5">
          {item.degree}
        </p>
      </div>

      {/* grade on the left */}
      <p
        className="font-jost text-xl text-text-secondary absolute top-23 -left-1 rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        {item.grade}
      </p>

      {/* decretive element */}
      {/* dot */}
      <div className="border border-primary size-[22px] rounded-full absolute top-0 left-0 flex items-center justify-center">
        <div className="size-3 bg-primary rounded-full"></div>
      </div>
      {/* top line */}
      <div className="w-[95%] h-px bg-primary absolute top-2.5 left-8"></div>
      {/* left line */}
      <div className=" absolute left-2.5 top-8 w-px h-[45px] bg-primary"></div>
    </motion.article>
  );
}
