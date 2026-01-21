import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <DribbleIcon width={17} height={17} />
      </Link>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <LinkedinIcon width={17} height={17} />
      </Link>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <XIcon width={17} height={17} />
      </Link>
      <Link
        href="/"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <InstagramIcon width={17} height={17} />
      </Link>
    </div>
  );
}
