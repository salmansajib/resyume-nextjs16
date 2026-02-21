import React from "react";
import { motion } from "motion/react";

export default function Education({ item, fadeInUp }) {
  return (
    <motion.article variants={fadeInUp} className="space-y-3">
      <div className="flex flex-col lg:flex-row gap-3 items-left lg:items-center justify-between">
        <h4 className="uppercase text-text-primary">{item.institution}</h4>
        <p className="font-medium text-text-secondary">{item.result}</p>
      </div>
      <p className="text-text-secondary mb-0 whitespace-nowrap">
        {item.degree}
      </p>
    </motion.article>
  );
}
