import React from "react";
import { motion } from "motion/react";

export default function Education({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="space-y-3 relative py-7 first:pt-0 border-b border-border-primary/15 last:border-0"
    >
      <div className="flex flex-col lg:flex-row gap-3 items-left lg:items-center justify-between relative">
        <h4 className="uppercase text-primary">{item.institution}</h4>
        <p className="font-medium text-text-dimmed">{item.result}</p>
      </div>
      <p className="text-text-dimmed mb-0 whitespace-nowrap">{item.degree}</p>
    </motion.article>
  );
}
