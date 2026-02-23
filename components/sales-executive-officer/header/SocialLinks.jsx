import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div
      className={cn("flex flex-row sm:flex-col items-center gap-3", className)}
    >
      <Link
        href="/"
        className="size-12 sm:size-[57px] flex items-center justify-center rounded-xl border border-text-dimmed text-text-dimmed hover:text-background-primary hover:bg-primary transition-all duration-150"
      >
        <DribbleIcon width={25} height={25} />
      </Link>
      <Link
        href="/"
        className="size-12 sm:size-[57px] flex items-center justify-center rounded-xl border border-text-dimmed text-text-dimmed hover:text-background-primary hover:bg-primary transition-all duration-150"
      >
        <LinkedinIcon width={25} height={25} />
      </Link>
      <Link
        href="/"
        className="size-12 sm:size-[57px] flex items-center justify-center rounded-xl border border-text-dimmed text-text-dimmed hover:text-background-primary hover:bg-primary transition-all duration-150"
      >
        <XIcon width={25} height={25} />
      </Link>
      <Link
        href="/"
        className="size-12 sm:size-[57px] flex items-center justify-center rounded-xl border border-text-dimmed text-text-dimmed hover:text-background-primary hover:bg-primary transition-all duration-150"
      >
        <InstagramIcon width={25} height={25} />
      </Link>
    </div>
  );
}
