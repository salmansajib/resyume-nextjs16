import React from "react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="#"
        className="bg-background-secondary size-11 flex items-center justify-center rounded-full hover:bg-primary hover:text-background-secondary transition-colors duration-150 ease-in-out"
      >
        <LinkedinIcon />
      </a>
      <a
        href="#"
        className="bg-background-secondary size-11 flex items-center justify-center rounded-full hover:bg-primary hover:text-background-secondary transition-colors duration-150 ease-in-out"
      >
        <XIcon />
      </a>
      <a
        href="#"
        className="bg-background-secondary size-11 flex items-center justify-center rounded-full hover:bg-primary hover:text-background-secondary transition-colors duration-150 ease-in-out"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
