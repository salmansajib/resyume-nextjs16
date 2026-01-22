import React from "react";
import { motion } from "motion/react";

export default function WorkExperience({
  item,
  formatPeriod,
  getDateTime,
  fadeInUp,
}) {
  return (
    <motion.article variants={fadeInUp} className="space-y-4 px-6 relative">
      <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between relative">
        <h4 className="font-medium uppercase">{item.company}</h4>
        <p className="font-medium text-text-secondary">{item.location}</p>
        <time dateTime={getDateTime(item.period)} className="text-text-primary">
          {formatPeriod(item.period)}
        </time>
      </div>
      <p className="text-text-secondary mb-0">{item.description}</p>

      {/* left dot */}
      <div className="size-2 rounded-full bg-text-secondary absolute -left-1 top-2"></div>
    </motion.article>
  );
}
