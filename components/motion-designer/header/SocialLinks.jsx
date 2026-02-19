import React from "react";
import Link from "next/link";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";

export default function SocialLinks({ heroData, className }) {
  const { title } = heroData;

  return (
    <div className={cn("flex flex-col items-end gap-10", className)}>
      <h2 className="leading-none text-[clamp(2.5rem,4vw,3.9rem)] font-semibold">
        {title}
      </h2>
      <div className="flex flex-col items-end gap-10">
        <h3 className="leading-none font-exo2 text-4xl text-text-secondary font-semibold">
          Follow Me
        </h3>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="size-[57px] bg-background-secondary flex items-center justify-center rounded-xl ring-1 ring-primary/30 text-text-secondary hover:bg-primary hover:ring-primary hover:text-text-primary transition-all duration-150"
          >
            <DribbleIcon width={25} height={25} />
          </Link>
          <Link
            href="/"
            className="size-[57px] bg-background-secondary flex items-center justify-center rounded-xl ring-1 ring-primary/30 text-text-secondary hover:bg-primary hover:ring-primary hover:text-text-primary transition-all duration-150"
          >
            <LinkedinIcon width={25} height={25} />
          </Link>
          <Link
            href="/"
            className="size-[57px] bg-background-secondary flex items-center justify-center rounded-xl ring-1 ring-primary/30 text-text-secondary hover:bg-primary hover:ring-primary hover:text-text-primary transition-all duration-150"
          >
            <XIcon width={25} height={25} />
          </Link>
          <Link
            href="/"
            className="size-[57px] bg-background-secondary flex items-center justify-center rounded-xl ring-1 ring-primary/30 text-text-secondary hover:bg-primary hover:ring-primary hover:text-text-primary transition-all duration-150"
          >
            <InstagramIcon width={25} height={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
