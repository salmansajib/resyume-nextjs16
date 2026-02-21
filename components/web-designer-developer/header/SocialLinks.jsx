import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="size-[57px] flex items-center justify-center rounded-xl ring-1 ring-border-primary text-text-secondary hover:bg-linear-to-r hover:from-gradient-primary-start hover:to-gradient-primary-end hover:text-text-primary transition-all duration-150"
        >
          <DribbleIcon width={25} height={25} />
        </Link>
        <Link
          href="/"
          className="size-[57px] flex items-center justify-center rounded-xl ring-1 ring-border-primary text-text-secondary hover:bg-linear-to-r hover:from-gradient-primary-start hover:to-gradient-primary-end hover:text-text-primary transition-all duration-150"
        >
          <LinkedinIcon width={25} height={25} />
        </Link>
        <Link
          href="/"
          className="size-[57px] flex items-center justify-center rounded-xl ring-1 ring-border-primary text-text-secondary hover:bg-linear-to-r hover:from-gradient-primary-start hover:to-gradient-primary-end hover:text-text-primary transition-all duration-150"
        >
          <XIcon width={25} height={25} />
        </Link>
        <Link
          href="/"
          className="size-[57px] flex items-center justify-center rounded-xl ring-1 ring-border-primary text-text-secondary hover:bg-linear-to-r hover:from-gradient-primary-start hover:to-gradient-primary-end hover:text-text-primary transition-all duration-150"
        >
          <InstagramIcon width={25} height={25} />
        </Link>
      </div>
    </div>
  );
}
