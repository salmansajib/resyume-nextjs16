import React from "react";
import { motion } from "motion/react";

export default function Education({ item, fadeInUp }) {
  return (
    <motion.article variants={fadeInUp} className="flex items-start gap-7">
      <div className="size-[95px] bg-background-neutral border border-[#d3d3d3] flex items-center justify-center p-1.5 rounded-lg">
        <p className="font-medium text-text-primary size-[82px] bg-background-primary flex items-center justify-center rounded-md break-all px-5 text-center">
          {item.result}
        </p>
      </div>
      <div className="space-y-3">
        <h4 className="uppercase font-poppins text-text-primary font-medium">
          {item.institution}
        </h4>
        <p className="text-text-secondary mb-0">{item.degree}</p>
      </div>
    </motion.article>
  );
}
