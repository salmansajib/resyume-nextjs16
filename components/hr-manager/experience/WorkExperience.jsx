import React from "react";
import { motion } from "motion/react";

export default function WorkExperience({
  item,
  formatPeriod,
  getDateTime,
  fadeInUp,
}) {
  return (
    <motion.article variants={fadeInUp} className="relative space-y-3">
      <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between relative">
        <h4 className="uppercase font-medium relative">
          {item.company}
          <span className="absolute top-1/2 -translate-y-1/2 -left-[47px] size-3.5 rounded-full bg-linear-to-b from-gradient-primary-start to-gradient-primary-end"></span>
        </h4>
        <time
          dateTime={getDateTime(item.period)}
          className="text-text-dimmed font-medium font-poppins"
        >
          {formatPeriod(item.period)}
        </time>
      </div>
      <p className="text-text-secondary">{item.location}</p>
      <p className="text-text-dimmed mb-0">{item.description}</p>
    </motion.article>
  );
}
