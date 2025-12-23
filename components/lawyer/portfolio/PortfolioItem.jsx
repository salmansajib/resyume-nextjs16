import Image from "next/image";
import React from "react";

export default function PortfolioItem({ item }) {
  return (
    <article>
      <a href="#" className="space-y-3">
        <Image
          src={item.src}
          alt={item.alt}
          width={500}
          height={500}
          className="w-full h-full"
        />
        <div className="space-y-3">
          <h3 className="leading-none text-xl font-bold text-primary">
            {item.title}
          </h3>
          <p className="font-normal text-base text-text-secondary max-w-[28ch]">
            {item.description}
          </p>
        </div>
      </a>
    </article>
  );
}
