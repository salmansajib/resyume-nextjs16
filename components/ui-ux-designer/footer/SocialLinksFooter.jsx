import React from "react";
import BehanceIcon from "@/components/icons/BehanceIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import XIcon from "@/components/icons/XIcon";
import Link from "next/link";

export default function SocialLinksFooter() {
  return (
    <div className="flex items-center gap-5">
      {/* dribble icon */}
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
        aria-label="Visit our Dribbble profile"
      >
        <DribbleIcon />
      </Link>

      {/* behance icon */}
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
      >
        <BehanceIcon />
      </Link>

      {/* x icon */}
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
      >
        <XIcon />
      </Link>

      {/* instagram icon */}
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
