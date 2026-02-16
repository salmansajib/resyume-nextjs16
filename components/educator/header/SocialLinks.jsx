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
        className="size-10 rounded-full border border-primary flex items-center justify-center text-primary hover:text-text-primary hover:bg-primary transition-all duration-150"
      >
        <DribbleIcon width={17} height={17} />
      </Link>
      <Link
        href="/"
        className="size-10 rounded-full border border-primary flex items-center justify-center text-primary hover:text-text-primary hover:bg-primary transition-all duration-150"
      >
        <LinkedinIcon width={17} height={17} />
      </Link>
      <Link
        href="/"
        className="size-10 rounded-full border border-primary flex items-center justify-center text-primary hover:text-text-primary hover:bg-primary transition-all duration-150"
      >
        <XIcon width={17} height={17} />
      </Link>
      <Link
        href="/"
        className="size-10 rounded-full border border-primary flex items-center justify-center text-primary hover:text-text-primary hover:bg-primary transition-all duration-150"
      >
        <InstagramIcon width={17} height={17} />
      </Link>
    </div>
  );
}
