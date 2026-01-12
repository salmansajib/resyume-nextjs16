import React from "react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className }) {
  return (
    <div
      className={cn("flex items-center gap-3 text-text-secondary", className)}
    >
      <Link
        href="/"
        className="text-primary hover:text-background-primary size-8 border border-border-primary rounded-full flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-primary hover:border-primary"
      >
        <DribbleIcon />
      </Link>
      <Link
        href="/"
        className="text-primary hover:text-background-primary size-8 border border-border-primary rounded-full flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-primary hover:border-primary"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="/"
        className="text-primary hover:text-background-primary size-8 border border-border-primary rounded-full flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-primary hover:border-primary"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className="text-primary hover:text-background-primary size-8 border border-border-primary rounded-full flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-primary hover:border-primary"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
