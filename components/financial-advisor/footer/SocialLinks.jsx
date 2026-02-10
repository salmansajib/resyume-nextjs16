import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialLinks() {
  return (
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
  );
}
