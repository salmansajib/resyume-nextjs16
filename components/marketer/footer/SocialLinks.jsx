import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6 text-text-secondary">
      <Link href="/" className="hover:text-primary">
        <DribbleIcon />
      </Link>
      <Link href="/" className="hover:text-primary">
        <LinkedinIcon />
      </Link>
      <Link href="/" className="hover:text-primary">
        <XIcon />
      </Link>
      <Link href="/" className="hover:text-primary">
        <InstagramIcon />
      </Link>
    </div>
  );
}
