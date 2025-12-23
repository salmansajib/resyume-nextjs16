import React from "react";
import Hobbies from "./Hobbies";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section
      aria-labelledby="hobbies-heading"
      className="bg-background-primary px-4 pt-10 pb-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtle */}
        <div className="flex gap-5 flex-col items-center justify-center">
          <h2
            id="hobbies-heading"
            className="relative max-w-max py-1 border-b border-primary"
          >
            <span className="text-lg font-bold uppercase text-primary">
              {hobbies.title}
            </span>
            <span className="absolute -bottom-1 right-0 size-2 bg-primary rounded-full"></span>
          </h2>
          <h3 className="text-[clamp(2rem,6vw,2.5rem)] font-taviraj font-medium uppercase leading-none text-center">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <div className="flex flex-wrap items-center justify-center mt-15 gap-10">
          {hobbies.items.map((item) => (
            <Hobbies key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
