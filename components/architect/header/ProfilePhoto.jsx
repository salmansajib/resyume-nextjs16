import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProfilePhoto({ heroData, className }) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      {/* social links: use "a" tags for extarnal links */}
      <div
        className="font-medium text-base rotate-180 flex items-center gap-10"
        style={{
          writingMode: "vertical-lr",
        }}
      >
        <Link
          className="text-text-secondary hover:text-primary transition-colors duration-150 capitalize block"
          href="/"
        >
          facebook
        </Link>
        <Link
          className="text-text-secondary hover:text-primary transition-colors duration-150 capitalize block"
          href="/"
        >
          linkedin
        </Link>
        <Link
          className="text-text-secondary hover:text-primary transition-colors duration-150 capitalize block"
          href="/"
        >
          instagram
        </Link>
      </div>

      {/* profile image */}
      <div>
        <Image
          src={heroData.photo}
          alt="architect profile image"
          width={800}
          height={800}
          quality={100}
          loading="eager"
          className="w-[640px] h-auto object-cover"
        />
      </div>
    </div>
  );
}
