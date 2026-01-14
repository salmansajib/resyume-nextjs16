"use client";
import React, { useState } from "react";
import Image from "next/image";
import DribbleIcon from "@/components/icons/DribbleIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import XIcon from "@/components/icons/XIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Link from "next/link";

export default function ProfilePhoto({ heroData }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-900/70 backdrop-blur-lg rounded-xl"></div>
      )}
      {/* profile image */}
      <Image
        src={heroData.photo}
        alt="profile image"
        priority
        width={800}
        height={800}
        className="w-[519px] h-auto overflow-hidden rounded-xl"
        onLoad={handleLoadingComplete}
      />

      {/* social links */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:-left-6 border border-primary/25 bg-[#33610F]/59 shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.15)] px-7 py-4 md:px-4 md:py-7 rounded-md flex flex-row md:flex-col gap-7">
        <Link href="/" className="hover:text-primary cursor-pointer">
          <DribbleIcon width={22} height={22} />
        </Link>
        <Link href="/" className="hover:text-primary cursor-pointer">
          <LinkedinIcon width={22} height={22} />
        </Link>
        <Link href="/" className="hover:text-primary cursor-pointer">
          <InstagramIcon width={22} height={22} />
        </Link>
        <Link href="/" className="hover:text-primary cursor-pointer">
          <XIcon width={22} height={22} />
        </Link>
      </div>
    </div>
  );
}
