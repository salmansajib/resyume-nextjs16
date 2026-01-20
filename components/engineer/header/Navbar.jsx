import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className, handleMenuClick }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-10 w-full max-w-[1620px] mx-auto absolute top-0 left-0 right-0 px-4",
        className,
      )}
    >
      {/* logo */}
      <Link href="/" className="py-5 relative">
        <div className="absolute top-0 w-[90px] h-full bg-primary"></div>
        <Image
          src="/assets/engineer/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover relative z-10 pl-5"
        />
      </Link>
      {/* menu icon */}
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/engineer/icons/menu-icon.svg"
          alt="menu icon"
          width={20}
          height={20}
          priority
          className="w-[17px] h-auto object-cover"
        />
      </button>
    </div>
  );
}
