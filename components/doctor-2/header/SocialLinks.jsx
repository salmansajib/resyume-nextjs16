"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { motion } from "motion/react";

export default function SocialLinks() {
  return (
    <div className="space-y-10 mt-10">
      {/* social links */}
      <div className="flex items-center gap-5">
        <Link href="/" className="text-text-dimmed hover:text-primary">
          <DribbleIcon width={22} height={22} />
        </Link>
        <Link href="/" className="text-text-dimmed hover:text-primary">
          <LinkedinIcon width={22} height={22} />
        </Link>
        <Link href="/" className="text-text-dimmed hover:text-primary">
          <XIcon width={22} height={22} />
        </Link>
        <Link href="/" className="text-text-dimmed hover:text-primary">
          <InstagramIcon width={22} height={22} />
        </Link>
      </div>

      {/* download cv and portfolio link */}
      <div className="flex flex-col md:flex-row items-start gap-7">
        <motion.a
          href="/assets/cv/resume.pdf"
          download="resume.pdf"
          className="bg-primary flex gap-3 items-center justify-center w-[237px] h-[54px] rounded-xl"
          whileHover={{
            scale: 1.05,
          }}
        >
          <span className="font-semibold uppercase text-background-primary">
            download cv
          </span>
          <span>
            <Image
              src="/assets/doctor-2/icons/download-cv-icon.svg"
              alt="download cv icon"
              width={30}
              height={30}
              className="w-6 h-auto"
            />
          </span>
        </motion.a>
        <motion.a
          href="#portfolio"
          className="w-[237px] h-[54px] rounded-xl flex items-center justify-center gap-3 border border-accent"
          whileHover={{
            scale: 1.05,
          }}
        >
          <span className="text-accent font-semibold uppercase">
            check portfolio
          </span>
          <span>
            <Image
              src="/assets/doctor-2/icons/check-portfolio-icon.svg"
              alt="download cv icon"
              width={30}
              height={30}
              className="w-6 h-auto"
            />
          </span>
        </motion.a>
      </div>
    </div>
  );
}
