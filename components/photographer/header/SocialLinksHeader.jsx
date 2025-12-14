import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function SocialLinksHeader() {
  return (
    <div className="space-y-6">
      {/* dribble icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <DribbleIcon width={22} height={22} />
      </a>

      {/* linkedin icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <LinkedinIcon width={22} height={22} />
      </a>

      {/* x icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <XIcon width={22} height={22} />
      </a>

      {/* instagram icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <InstagramIcon width={22} height={22} />
      </a>
    </div>
  );
}
