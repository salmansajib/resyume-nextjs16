import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div className={cn("flex items-center gap-7", className)}>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <DribbleIcon />
      </Link>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
