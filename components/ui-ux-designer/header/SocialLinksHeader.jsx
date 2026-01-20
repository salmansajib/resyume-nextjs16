import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import BehanceIcon from "@/components/icons/BehanceIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Link from "next/link";

export default function SocialLinksHeader() {
  return (
    <div className="hidden sm:flex items-center gap-5">
      {/* dribble icon */}
      <Link
        href="/"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
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
