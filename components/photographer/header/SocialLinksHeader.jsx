import React from "react";
import DribbleIcon from "@/components/icons/DribbleIcon";
import BehanceIcon from "@/components/icons/BehanceIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

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

      {/* behance icon */}
      <a
        href="#"
        className="text-text-secondary hover:text-primary transition-all duration-150 block"
      >
        <BehanceIcon width={22} height={22} />
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
