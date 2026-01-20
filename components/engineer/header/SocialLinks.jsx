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
        className="size-[35px] border border-background-secondary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
      >
        <DribbleIcon width={15} height={15} />
      </Link>
      <Link
        href="/"
        className="size-[35px] border border-background-secondary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
      >
        <LinkedinIcon width={15} height={15} />
      </Link>
      <Link
        href="/"
        className="size-[35px] border border-background-secondary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
      >
        <XIcon width={15} height={15} />
      </Link>
      <Link
        href="/"
        className="size-[35px] border border-background-secondary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-text-primary transition-all duration-150"
      >
        <InstagramIcon width={15} height={15} />
      </Link>
    </div>
  );
}
