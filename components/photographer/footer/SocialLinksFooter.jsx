import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Link from "next/link";

export default function SocialLinksFooter() {
  return (
    <div className="flex items-center gap-5">
      {/* dribble icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
        aria-label="Visit our Dribbble profile"
      >
        <DribbleIcon width={22} height={22} />
      </Link>

      {/* linkedin icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <LinkedinIcon width={22} height={22} />
      </Link>

      {/* x icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <XIcon width={22} height={22} />
      </Link>

      {/* instagram icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <InstagramIcon width={22} height={22} />
      </Link>
    </div>
  );
}
