import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "motion/react";

export default function Skills({ item, isInView }) {
  return (
    <div>
      <p className="text-text-primary capitalize font-poppins text-2xl font-medium mb-5">
        {item.name}
      </p>
      <div
        role="progressbar"
        aria-valuenow={item.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${item.name} proficiency`}
        key={item.id}
        className="w-full h-5 bg-linear-to-r from-black/20 to-[#989494]/52 flex items-center px-[5px] rounded-[3px]"
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{
            width: isInView ? `${item.proficiency}%` : "0%",
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-2.5 bg-linear-to-r from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end px-2 relative rounded-xs"
          style={{
            width: `${item.proficiency}%`,
          }}
        >
          <p className="text-primary font-medium capitalize bg-linear-to-br from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end size-[50px] rounded-full border border-primary max-w-max flex items-center justify-center px-3 absolute right-0 top-1/2 -translate-y-1/2">
            <AnimatedCounter
              value={item.proficiency}
              isInView={isInView}
              duration={2}
              from={10}
            />
            %
          </p>
        </motion.div>
      </div>
    </div>
  );
}
