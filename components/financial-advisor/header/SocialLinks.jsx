import React from "react";
import Image from "next/image";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div className={cn("space-y-10", className)}>
      {/* download cv */}
      <a
        href="#"
        className="w-[255px] h-[63px] bg-primary text-background-primary flex items-center justify-between px-10"
      >
        Download CV
        <div
          aria-hidden
          className="size-[33px] bg-[#176F4E] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/assets/financial-advisor/icons/download-cv-icon.svg"
            alt=""
            width={20}
            height={20}
            priority
            className="w-[18px] h-auto object-cover"
          />
        </div>
      </a>
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
