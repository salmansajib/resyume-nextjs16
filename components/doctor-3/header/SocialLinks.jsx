import React from "react";
import Link from "next/link";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="bg-background-secondary text-text-primary size-11 rounded-full flex items-center justify-center hover:bg-primary hover:text-background-secondary transition-all duration-150"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="/"
        className="bg-background-secondary text-text-primary size-11 rounded-full flex items-center justify-center hover:bg-primary hover:text-background-secondary transition-all duration-150"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className="bg-background-secondary text-text-primary size-11 rounded-full flex items-center justify-center hover:bg-primary hover:text-background-secondary transition-all duration-150"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
