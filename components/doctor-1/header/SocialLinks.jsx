"use client";
import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function SocialLinks() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-15 lg:gap-20">
      {/* social links */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="size-10 border border-border-primary rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-primary transition-colors duration-150"
        >
          <DribbleIcon />
        </Link>
        <Link
          href="/"
          className="size-10 border border-border-primary rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-primary transition-colors duration-150"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="/"
          className="size-10 border border-border-primary rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-primary transition-colors duration-150"
        >
          <XIcon />
        </Link>
        <Link
          href="/"
          className="size-10 border border-border-primary rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-primary transition-colors duration-150"
        >
          <InstagramIcon />
        </Link>
      </div>

      {/* download cv */}
      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        href="/assets/cv/resume.pdf"
        download="resume.pdf"
        className="flex items-center gap-3"
      >
        <span className="font-semibold">Download CV</span>
        <span className="size-11 rounded-full flex items-center justify-center bg-primary">
          <Image
            src="/assets/doctor-1/icons/download-cv-icon.svg"
            alt="download cv icon"
            width={30}
            height={30}
            className="w-4.5 h-auto object-cover"
          />
        </span>
      </motion.a>
    </div>
  );
}
