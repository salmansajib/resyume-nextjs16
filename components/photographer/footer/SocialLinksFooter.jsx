import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import BehanceIcon from "@/components/icons/BehanceIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialLinksFooter() {
  return (
    <div className="flex items-center gap-5">
      {/* dribble icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150"
        aria-label="Visit our Dribbble profile"
      >
        <DribbleIcon />
      </a>

      {/* behance icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <BehanceIcon />
      </a>

      {/* x icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <XIcon />
      </a>

      {/* instagram icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
