import React from "react";
import { motion } from "motion/react";

export default function Education({ item, fadeInUp }) {
  const { institution, result, degree } = item;

  return (
    <motion.article variants={fadeInUp} className="space-y-3 mt-5">
      <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-5">
        <h4 className="text-2xl font-medium text-primary">{institution}</h4>
        <p className="text-text-dimmed whitespace-nowrap">{result}</p>
      </div>
      <p className="text-lg font-medium">{degree}</p>
    </motion.article>
  );
}
