import React from "react";
import { motion } from "motion/react";

export default function WorkExperience({
  item,
  formatPeriod,
  getDateTime,
  fadeInUp,
}) {
  const { company, period, location, description } = item;

  return (
    <motion.article variants={fadeInUp} className="space-y-3 mt-5">
      <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-5">
        <h4 className="text-2xl font-medium text-primary">{company}</h4>
        <time dateTime={getDateTime(period)} className="text-text-dimmed">
          {formatPeriod(period)}
        </time>
      </div>
      <p className="text-lg font-medium">{location}</p>
      <p className="text-lg text-text-dimmed">{description}</p>
    </motion.article>
  );
}
