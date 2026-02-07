import React from "react";
import { motion } from "motion/react";

export default function WorkExperience({
  item,
  formatPeriod,
  getDateTime,
  fadeInUp,
}) {
  return (
    <motion.article variants={fadeInUp} className="flex items-start gap-7">
      <div className="size-[95px] bg-background-neutral border border-[#d3d3d3] flex items-center justify-center p-1.5 rounded-lg">
        <time
          dateTime={getDateTime(item.period)}
          className="text-text-primary font-medium size-[82px] bg-background-primary flex items-center justify-center rounded-md"
        >
          {formatPeriod(item.period)}
        </time>
      </div>
      <div className="space-y-3">
        <h4 className="uppercase font-poppins font-medium">{item.company}</h4>
        <p className="font-medium text-text-secondary">{item.location}</p>
        <p className="text-text-secondary mb-0">{item.description}</p>
      </div>
    </motion.article>
  );
}
