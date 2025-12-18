import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 text-text-secondary">
      <a href="#" className="hover:text-primary">
        <DribbleIcon />
      </a>
      <a href="#" className="hover:text-primary">
        <LinkedinIcon />
      </a>
      <a href="#" className="hover:text-primary">
        <XIcon />
      </a>
      <a href="#" className="hover:text-primary">
        <InstagramIcon />
      </a>
    </div>
  );
}
