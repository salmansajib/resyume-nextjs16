import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LogoHeader() {
  return (
    <div>
      <Link href="\">
        <Image
          src="/assets/uiuxdesigner/logos/rezyume-logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[169] h-auto"
        />
      </Link>
    </div>
  );
}
