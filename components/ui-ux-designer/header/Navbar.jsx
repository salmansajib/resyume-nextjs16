import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoHeader from "./LogoHeader";
import SocialLinksHeader from "./SocialLinksHeader";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-5 flex items-center justify-between w-full max-w-[1290px] mx-auto relative z-20">
      {/* Logo */}
      <LogoHeader />

      {/* social links and burger menu */}
      <div className="flex items-center gap-5">
        {/* social links */}
        <SocialLinksHeader />
        {/* horizontal line */}
        <div className="w-[155px] h-px bg-primary hidden sm:block" />
        {/* burger menu */}
        <div>
          <button
            aria-label="open menu"
            onClick={() => handleMenuClick()}
            className="border border-primary size-10 flex items-center justify-center rounded-full text-primary cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <svg
              aria-hidden="true"
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="1"
                x2="18"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="1"
                y1="7"
                x2="18"
                y2="7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="1"
                y1="13"
                x2="18"
                y2="13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
