import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function DownloadCV({ className }) {
  return (
    <div className={cn("", className)}>
      <motion.a
        href="/assets/cv/resume.pdf"
        download="resume.pdf"
        whileHover={{
          scale: 1.05,
        }}
        className="block max-w-max text-background-primary font-medium bg-primary px-9 py-3"
      >
        DownloadCV
      </motion.a>
    </div>
  );
}
