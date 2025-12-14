import React from "react";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-5">
      {/* logo */}
      <div>
        <Image
          width={300}
          height={300}
          src="/assets/photographer/logos/logo-header.svg"
          alt="Rezyume Logo"
          className="w-40 h-auto object-cover"
        />
      </div>

      {/* menu icon */}
      <button className="cursor-pointer" onClick={() => handleMenuClick()}>
        <Image
          width={30}
          height={30}
          src="/assets/photographer/icons/menu-icon.svg"
          alt="Rezyume Logo"
          className="w-6 h-auto object-cover"
        />
      </button>
    </div>
  );
}
