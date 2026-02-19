import React from "react";
import { motion } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export default function WorkExperience({
  workData,
  formatPeriod,
  getDateTime,
}) {
  return (
    <InViewAnimator variants={staggerContainer} as="article" className="">
      <h3 className="text-3xl font-exo2 font-medium text-primary mb-8 uppercase">
        WORK EXPERIENCE
      </h3>

      <div className="space-y-10 relative">
        {workData.map((work) => (
          <motion.div
            variants={fadeInUp}
            key={work.id}
            className="flex flex-row gap-15"
          >
            {/* date */}
            <div>
              <div className="bg-background-neutral/23 backdrop-blur-sm border border-primary/25 shadow-[inset_1px_1px_10px_0px_rgba(169,241,113,0.2)] w-[100px] h-[120px] flex items-center justify-center rounded-md">
                <time
                  dateTime={getDateTime(work.period)}
                  className="font-medium text-text-primary"
                >
                  {formatPeriod(work.period)}
                </time>
              </div>
            </div>

            {/* content */}
            <div className="relative mt-3">
              <div className="space-y-3">
                <p className="text-2xl font-medium text-primary">
                  {work.company}
                </p>
                <h4 className="text-xl font-medium font-rubik text-text-primary">
                  {work.title}
                </h4>
                <p className="text-base font-normal font-rubik text-text-secondary md:max-w-[50ch]">
                  {work.description}
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute top-1.5 -left-20 text-primary/50"
              >
                <Image
                  src="/assets/marketer/icons/big-right-arrow.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[65px] h-auto"
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* decorative line */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-30 w-px h-full bg-primary/18"
        ></div>
      </div>
    </InViewAnimator>
  );
}
