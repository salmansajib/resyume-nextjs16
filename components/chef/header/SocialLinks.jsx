import React from "react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="bg-background-secondary size-11 flex items-center justify-center rounded-full hover:bg-primary hover:text-background-secondary transition-colors duration-150 ease-in-out"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="/"
        className="bg-background-secondary size-11 flex items-center justify-center rounded-full hover:bg-primary hover:text-background-secondary transition-colors duration-150 ease-in-out"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className="bg-background-secondary size-11 flex items-center justify-center rounded-full hover:bg-primary hover:text-background-secondary transition-colors duration-150 ease-in-out"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
