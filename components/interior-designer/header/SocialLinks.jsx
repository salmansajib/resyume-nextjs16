import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Link
        href="/"
        className="size-[35px] border border-primary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150 ease-in-out"
      >
        <DribbleIcon />
      </Link>
      <Link
        href="/"
        className="size-[35px] border border-primary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150 ease-in-out"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="/"
        className="size-[35px] border border-primary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150 ease-in-out"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className="size-[35px] border border-primary rounded-full flex items-center justify-center text-text-secondary hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150 ease-in-out"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
