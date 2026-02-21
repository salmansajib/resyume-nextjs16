import React from "react";
import Image from "next/image";

export default function ServiceCard({ item }) {
  return (
    <div className="min-h-[450px] flex flex-col justify-center flex-1 gap-7 bg-background-secondary group p-10 rounded-3xl border border-primary/20">
      <div
        aria-hidden
        className="size-23 bg-[#2A2541] flex items-center justify-center rounded-2xl ring-1 ring-primary/20"
      >
        <Image
          src={item.icon}
          alt=""
          width={100}
          height={100}
          className="w-[50px] h-auto object-cover"
        />
      </div>
      <h3 className="font-exo2 leading-none text-3xl font-medium group-hover:text-primary max-w-[12ch]">
        {item.name}
      </h3>
      <p>{item.description}</p>
    </div>
  );
}
