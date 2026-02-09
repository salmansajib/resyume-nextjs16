import React from "react";
import Image from "next/image";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import AnimatedArrow from "@/components/AnimatedArrow";

export default function SocialLinks({ className }) {
  /* ---------------- button variant  ---------------- */

  const buttonVariants = {
    initial: {},
    hover: {},
  };

  /* ------------------------------------------ */

  return (
    <div className={cn("space-y-10", className)}>
      {/* download cv */}
      <motion.a
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        href="#"
        className="w-[255px] h-[63px] bg-primary text-background-primary flex items-center justify-between px-5 uppercase"
      >
        Download CV
        <AnimatedArrow>
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66849 0V9.56315L9.34766 6.90598L11 8.54475L5.50004 14L0 8.54475L1.6525 6.90598L4.33159 9.56315V0H6.66849Z"
              fill="white"
            />
          </svg>
        </AnimatedArrow>
      </motion.a>

      {/* social links */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="size-[33px] bg-background-secondary flex items-center justify-center hover:bg-primary hover:text-background-primary transition-all duration-150"
        >
          <DribbleIcon />
        </Link>
        <Link
          href="/"
          className="size-[33px] bg-background-secondary flex items-center justify-center hover:bg-primary hover:text-background-primary transition-all duration-150"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="/"
          className="size-[33px] bg-background-secondary flex items-center justify-center hover:bg-primary hover:text-background-primary transition-all duration-150"
        >
          <XIcon />
        </Link>
        <Link
          href="/"
          className="size-[33px] bg-background-secondary flex items-center justify-center hover:bg-primary hover:text-background-primary transition-all duration-150"
        >
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
}
