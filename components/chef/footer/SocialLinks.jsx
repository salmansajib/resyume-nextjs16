import React from "react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5 text-text-secondary">
      <a
        href="#"
        className="hover:text-primary transition-colors duration-150 ease-in-out"
      >
        <DribbleIcon />
      </a>
      <a
        href="#"
        className="hover:text-primary transition-colors duration-150 ease-in-out"
      >
        <LinkedinIcon />
      </a>
      <a
        href="#"
        className="hover:text-primary transition-colors duration-150 ease-in-out"
      >
        <XIcon />
      </a>
      <a
        href="#"
        className="hover:text-primary transition-colors duration-150 ease-in-out"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
