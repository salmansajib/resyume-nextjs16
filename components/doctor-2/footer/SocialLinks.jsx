import React from "react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div
      className={cn("flex items-center gap-5 text-text-secondary", className)}
    >
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary flex items-center justify-center transition-all duration-150 ease-in-out"
      >
        <DribbleIcon />
      </Link>
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary flex items-center justify-center transition-all duration-150 ease-in-out"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary flex items-center justify-center transition-all duration-150 ease-in-out"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary flex items-center justify-center transition-all duration-150 ease-in-out"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
