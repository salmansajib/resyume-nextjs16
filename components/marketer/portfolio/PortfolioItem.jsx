import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PortfolioItem({ item }) {
  return (
    <article>
      <Link href="/" className="space-y-3">
        <Image
          src={item.src}
          alt={item.alt}
          width={500}
          height={500}
          className="w-full h-full"
        />
        <div className="space-y-3">
          <h3 className="leading-none text-2xl font-normal text-primary">
            {item.title}
          </h3>
          <p className="font-rubik font-normal text-base text-text-secondary max-w-[28ch]">
            {item.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
