import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialLinks({ className }) {
  return (
    <div className={cn("space-y-3", className)}>
      <Link
        href="/"
        className="flex items-center justify-center rounded-md text-text-primary size-[37px] border border-[#E3DDE0] hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150"
      >
        <DribbleIcon />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center rounded-md text-text-primary size-[37px] border border-[#E3DDE0] hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center rounded-md text-text-primary size-[37px] border border-[#E3DDE0] hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center rounded-md text-text-primary size-[37px] border border-[#E3DDE0] hover:border-transparent hover:bg-primary hover:text-background-primary transition-all duration-150"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
