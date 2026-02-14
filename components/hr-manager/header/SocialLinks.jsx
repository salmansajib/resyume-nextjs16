import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Link
        href="/"
        className="size-[30px] rounded-full border border-border-primary/50 flex items-center justify-center  text-primary hover:text-primary transition-all duration-150 hover:border-transparent hover:bg-linear-to-b hover:from-gradient-primary-start hover:via-gradient-primary-middle hover:to-gradient-primary-end"
      >
        <DribbleIcon width={14} height={14} />
      </Link>
      <Link
        href="/"
        className="size-[30px] rounded-full border border-border-primary/50 flex items-center justify-center  text-primary hover:text-primary transition-all duration-150 hover:border-transparent hover:bg-linear-to-b hover:from-gradient-primary-start hover:via-gradient-primary-middle hover:to-gradient-primary-end"
      >
        <LinkedinIcon width={14} height={14} />
      </Link>
      <Link
        href="/"
        className="size-[30px] rounded-full border border-border-primary/50 flex items-center justify-center  text-primary hover:text-primary transition-all duration-150 hover:border-transparent hover:bg-linear-to-b hover:from-gradient-primary-start hover:via-gradient-primary-middle hover:to-gradient-primary-end"
      >
        <XIcon width={14} height={14} />
      </Link>
      <Link
        href="/"
        className="size-[30px] rounded-full border border-border-primary/50 flex items-center justify-center  text-primary hover:text-primary transition-all duration-150 hover:border-transparent hover:bg-linear-to-b hover:from-gradient-primary-start hover:via-gradient-primary-middle hover:to-gradient-primary-end"
      >
        <InstagramIcon width={14} height={14} />
      </Link>
    </div>
  );
}
