import React from "react";
import { serviceIcons } from "./ServiceIcons";

export default function ServiceCard({ item }) {
  return (
    <article className="group bg-linear-to-b from-[#4F4F4F]/52 to-[#1C1C1C]/52 w-full xl:w-[300px] h-[300px] rounded-lg flex flex-col gap-6 items-center justify-center border border-[#6C6C6C]/50 hover:border-transparent hover:bg-primary">
      <div
        aria-hidden="true"
        className="text-text-secondary group-hover:text-text-primary transition-all duration-300 ease-in-out"
      >
        {serviceIcons[item.id]}
      </div>
      <h4 className="font-taviraj text-xl font-medium uppercase text-primary leading-none group-hover:text-text-primary transition-all duration-300 ease-in-out">
        {item.name}
      </h4>
      <p className="text-lg max-w-[25ch] text-center opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 ease-in-out">
        {item.description}
      </p>
    </article>
  );
}
