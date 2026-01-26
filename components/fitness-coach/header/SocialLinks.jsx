"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function SocialLinks({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between gap-10 lg:gap-5",
        className,
      )}
    >
      {/* social links */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="size-[35px] border border-primary text-text-secondary rounded-full flex items-center justify-center hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
        >
          <DribbleIcon />
        </Link>
        <Link
          href="/"
          className="size-[35px] border border-primary text-text-secondary rounded-full flex items-center justify-center hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="/"
          className="size-[35px] border border-primary text-text-secondary rounded-full flex items-center justify-center hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
        >
          <XIcon />
        </Link>
        <Link
          href="/"
          className="size-[35px] border border-primary text-text-secondary rounded-full flex items-center justify-center hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
        >
          <InstagramIcon />
        </Link>
      </div>
      {/* cv download link */}
      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        href="#"
        className="flex items-center gap-5 border border-primary max-w-max px-10 py-4 font-teko text-xl"
      >
        Download CV
        <div>
          <Image
            src="/assets/fitness-coach/icons/download-cv-icon.svg"
            alt=""
            width={20}
            height={20}
            priority
            className="w-[18px] h-auto object-cover"
          />
        </div>
      </motion.a>
    </div>
  );
}
