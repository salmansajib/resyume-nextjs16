import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-10 flex gap-5 items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/architect/logos/logo-header.svg"
          alt="rezyume logo"
          width={300}
          height={300}
          className="w-[165px] h-auto object-cover"
        />
      </Link>
      <button className="cursor-pointer" onClick={() => handleMenuClick()}>
        <div className="size-9 border border-primary rounded-full flex items-center justify-center">
          <Image
            src="/assets/architect/icons/menu-icon.svg"
            alt="menu icon"
            width={50}
            height={50}
            className="w-[18px] h-auto object-cover"
          />
        </div>
      </button>
    </div>
  );
}
