import React from "react";
import { motion } from "motion/react";

export default function WorkExperience({
  item,
  formatPeriod,
  getDateTime,
  fadeInUp,
}) {
  return (
    <motion.article variants={fadeInUp} className="space-y-3">
      <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between">
        <h4 className="uppercase">{item.company}</h4>
        <time dateTime={getDateTime(item.period)} className="text-text-primary">
          {formatPeriod(item.period)}
        </time>
      </div>
      <p className="font-medium text-text-secondary">{item.location}</p>
      <p className="text-text-secondary mb-0">{item.description}</p>
    </motion.article>
  );
}
