import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "motion/react";

export default function Skills({ item, isInView }) {
  return (
    <div>
      <p className="text-text-primary capitalize font-poppins text-[clamp(1.2rem,3vw,1.5rem)] font-medium mb-5">
        {item.name}
      </p>
      <div
        role="progressbar"
        aria-valuenow={item.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${item.name} proficiency`}
        key={item.id}
        className="w-full h-5 bg-[#ECEEEE] flex items-center px-[5px] rounded-[3px]"
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{
            width: isInView ? `${item.proficiency}%` : "0%",
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-2.5 bg-primary px-2 relative rounded-xs"
          style={{
            width: `${item.proficiency}%`,
          }}
        >
          <p className="text-background-primary font-medium capitalize bg-primary size-[50px] rounded-full border-2 border-background-primary max-w-max flex items-center justify-center px-3 absolute right-0 top-1/2 -translate-y-1/2">
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
