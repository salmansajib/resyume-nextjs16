"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function InViewAnimator({
  children,
  variants,
  amount = 0.2,
  once = true,
  className = "",
  as = "div", // allows to change the wrapper tag
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });

  const tags = {
    div: motion.div,
    section: motion.section,
    ul: motion.ul,
    li: motion.li,
    article: motion.article,
    header: motion.header,
    footer: motion.footer,
    main: motion.main,
    nav: motion.nav,
  };

  const MotionTag = tags[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}
