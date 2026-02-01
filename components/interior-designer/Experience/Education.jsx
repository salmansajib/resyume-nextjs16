import React from "react";
import { motion } from "motion/react";

export default function Education({ item, fadeInUp }) {
  return (
    <motion.article variants={fadeInUp} className="space-y-3 relative">
      <div className="flex flex-col lg:flex-row gap-3 items-left lg:items-center justify-between relative">
        <h4 className="uppercase text-text-primary font-medium relative">
          {item.institution}
          <span className="absolute top-1/2 -translate-y-1/2 -left-[25px] w-3 h-0.5 bg-primary"></span>
        </h4>
        <p className="font-medium text-text-primary">{item.result}</p>
      </div>
      <p className="text-text-secondary mb-0 whitespace-nowrap">
        {item.degree}
      </p>
    </motion.article>
  );
}
