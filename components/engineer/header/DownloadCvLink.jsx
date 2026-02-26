import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function DownloadCvLink({ className }) {
  return (
    <motion.a
      href="/assets/cv/resume.pdf"
      download="resume.pdf"
      whileHover={{
        scale: 1.05,
      }}
      className={cn(
        "w-[212px] h-[60px] font-chakraPetch font-semibold flex items-center justify-center gap-4 bg-linear-to-b from-[#D45B2D]/50 via-[#D45B2D]/0 to-[#D45B2D]/50",
        className,
      )}
      style={{
        clipPath:
          "polygon(0% 0%,calc(100% - 15px) 0%,100% 15px,100% 100%,15px 100%,0% calc(100% - 15px))",
      }}
    >
      <span>Download CV</span>
      <Image
        src="/assets/engineer/icons/download-cv-icon.svg"
        alt="download cv icon"
        width={20}
        height={20}
        priority
        className="w-[17px] h-auto object-cover"
      />
    </motion.a>
  );
}
