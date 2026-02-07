import React from "react";
import Image from "next/image";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section
      aria-labelledby="hobbies-heading"
      className="bg-background-neutral"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-10">
        {/* title and subtitle */}
        <div className="flex flex-col gap-3 items-center lg:items-start justify-center">
          <h2
            id="hobbies-heading"
            className="text-primary font-medium capitalize flex items-center gap-3 leading-none"
          >
            <Image
              src="/assets/travel-agent/icons/title-decorative-icon.svg"
              alt=""
              aria-hidden
              width={25}
              height={25}
              priority
              className="w-[20] h-auto object-cover aria-hidden"
            />
            {hobbies.title}
          </h2>
          <h3 className="font-poppins font-semibold text-[clamp(2rem,4vw,2.82rem)] text-text-primary leading-13 capitalize">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <ul className="flex flex-wrap justify-center lg:justify-normal lg:flex-nowrap gap-7">
          {hobbies.items.map((item, index) => (
            <li
              key={item.id}
              className={`size-42 bg-background-primary rounded-2xl flex flex-col gap-4 items-center justify-center ${index % 2 === 1 ? "lg:mt-6" : ""}`}
            >
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={100}
                height={100}
                className="w-[72px] h-auto object-cover"
              />
              <h3 className="font-medium uppercase">{item.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
