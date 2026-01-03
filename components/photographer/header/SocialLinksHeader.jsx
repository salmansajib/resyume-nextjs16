import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SocialLinksHeader({ className }) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* dribble icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <DribbleIcon width={22} height={22} />
      </Link>

      {/* linkedin icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <LinkedinIcon width={22} height={22} />
      </Link>

      {/* x icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <XIcon width={22} height={22} />
      </Link>

      {/* instagram icon */}
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <InstagramIcon width={22} height={22} />
      </Link>
    </div>
  );
}
