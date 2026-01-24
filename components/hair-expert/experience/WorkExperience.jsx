import React from "react";
import { motion } from "motion/react";

export default function WorkExperience({
  item,
  formatPeriod,
  getDateTime,
  fadeInUp,
}) {
  return (
    <motion.article
      variants={fadeInUp}
      className="relative border-b border-border-primary/15 last:border-0 py-7 first:pt-0 space-y-3"
    >
      <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between relative">
        <h4 className="uppercase">{item.company}</h4>
        <time dateTime={getDateTime(item.period)} className="text-text-dimmed">
          {formatPeriod(item.period)}
        </time>
      </div>
      <p className="font-medium text-primary">{item.location}</p>
      <p className="text-text-dimmed mb-0">{item.description}</p>
    </motion.article>
  );
}
