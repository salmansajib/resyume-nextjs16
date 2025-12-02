import React from "react";
import BehanceIcon from "@/components/icons/BehanceIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import XIcon from "@/components/icons/XIcon";

export default function SocialLinksFooter() {
  return (
    <div className="flex items-center gap-5">
      {/* dribble icon */}
      <a
        href="#"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
        aria-label="Visit our Dribbble profile"
      >
        <DribbleIcon />
      </a>

      {/* behance icon */}
      <a
        href="#"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
      >
        <BehanceIcon />
      </a>

      {/* x icon */}
      <a
        href="#"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
      >
        <XIcon />
      </a>

      {/* instagram icon */}
      <a
        href="#"
        className="text-text-dimmed hover:text-primary transition-all duration-150"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
