import React from "react";
import Image from "next/image";

export default function ServiceCard({ item, isActive, onHover, onLeave }) {
  return (
    <li>
      {/* shown in bigger screens */}
      <article
        onMouseEnter={onHover}
        onClick={onHover}
        onFocus={onHover}
        onMouseLeave={onLeave}
        className="hidden md:block"
      >
        <div
          className={`w-full h-full min-h-[500px] flex flex-col items-center gap-5 bg-background-secondary/10 border border-background-secondary rounded-3xl ${isActive ? "p-10 pl-15" : "p-5"} transition-all duration-300`}
        >
          <div className="size-[70px] rounded-full bg-background-secondary/10 border border-background-secondary flex items-center justify-center transition-all duration-300">
            <Image
              src={item.icon}
              alt={`${item.nam} icon`}
              width={50}
              height={50}
              className="w-[34px] h-auto object-cover"
            />
          </div>
          <h3
            className={`text-2xl font-medium text-primary uppercase max-w-[15ch] text-center transition-all ${
              isActive ? "rotate-0" : "rotate-180"
            } transition-all duration-300`}
            style={{
              writingMode: isActive ? "horizontal-tb" : "vertical-lr",
            }}
          >
            {item.name}
          </h3>
          <ul
            className={`${isActive ? "block opacity-100" : "hidden opacity-0"} list-disc marker:text-primary text-lg text-text-secondary space-y-2 max-w-[25ch] transition-all duration-300 mt-5`}
          >
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </article>

      {/* shown in smaller screen */}
      <article
        onMouseEnter={onHover}
        onClick={onHover}
        onFocus={onHover}
        onMouseLeave={onLeave}
        className="block md:hidden"
      >
        <div
          className={`w-full h-full min-h-[500px] flex flex-col items-center gap-5 bg-background-secondary/10 border border-background-secondary rounded-3xl p-10 pl-15 transition-all duration-300`}
        >
          <div className="size-[70px] rounded-full bg-background-secondary/10 border border-background-secondary flex items-center justify-center transition-all duration-300">
            <Image
              src={item.icon}
              alt={`${item.nam} icon`}
              width={50}
              height={50}
              className="w-[34px] h-auto object-cover"
            />
          </div>
          <h3
            className={`text-2xl font-medium text-primary uppercase max-w-[15ch] text-center`}
          >
            {item.name}
          </h3>
          <ul
            className={`list-disc marker:text-primary text-lg text-text-secondary space-y-2 max-w-[25ch] transition-all duration-300 mt-5`}
          >
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}
